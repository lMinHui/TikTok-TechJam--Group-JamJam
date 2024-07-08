import os
import cv2

current_directory = os.path.dirname(os.path.realpath(__file__))

REFERENCE_IMAGES_FOLDER = os.path.join(current_directory, 'product-images')

MATCHING_THRESHOLD = 18

def load_and_extract_features(folder):
    reference_images = {}
    orb = cv2.ORB_create()
    
    for filename in os.listdir(folder):
        path = os.path.join(folder, filename)
        image = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
        kp, des = orb.detectAndCompute(image, None)
        reference_images[filename] = (kp, des)
    
    return reference_images

# To match features between a frame and reference images
def match_features(frame, reference_images, orb):
    frame_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    kp_frame, des_frame = orb.detectAndCompute(frame_gray, None)
    
    matches = {}
    for name, (kp_ref, des_ref) in reference_images.items():
        if des_ref is None or des_frame is None:
            continue
        
        matcher = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
        raw_matches = matcher.match(des_ref, des_frame)
        
        good_matches = []
        for m in raw_matches:
            if m.distance < MATCHING_THRESHOLD:
                good_matches.append(m)
        
        matches[name] = len(good_matches)
    
    return matches

reference_images = load_and_extract_features(REFERENCE_IMAGES_FOLDER)

video = os.path.join(current_directory, '10.mp4')

cap = cv2.VideoCapture(video)

# Initialize ORB detector
orb = cv2.ORB_create()

detected_images = set()

#correct_detections = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    matches = match_features(frame, reference_images, orb)
    
    matching_images = [name for name, count in matches.items() if count > 0]
    
    detected_images.update(matching_images)

    #for img in matching_images:
    #    if img in GROUND_TRUTH_IMAGES:
    #        correct_detections += 1
    
    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release video capture and cleanup
cap.release()
cv2.destroyAllWindows()

# Print unique detected images
print("Unique Detected Images:")
for img in detected_images:
    print(img)

# Output number of correct detections
#print(f"Number of Correct Detections: {correct_detections} out of {len(GROUND_TRUTH_IMAGES)}")

