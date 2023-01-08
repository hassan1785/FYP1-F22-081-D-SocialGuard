import pytesseract
from PIL import Image, ImageEnhance, ImageFilter
import pickle

# open image
im = Image.open('./image.jpg')

# preprocessing
im = im.convert('L')                             # grayscale
# im = im.filter(ImageFilter.MedianFilter())       # a little blur
# im = im.point(lambda x: 0 if x < 140 else 255)   # threshold (binarize)


custom_config = r'-c tessedit_char_whitelist=$@3abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\'\ . --psm 6 '
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
extracted_text = pytesseract.image_to_string(im, config=custom_config)


# extracted_text = ' '.join([line.strip() for line in extracted_text.split('\n') if line.strip() != ''])

map_dict = {'$':'s', '@':'a', '3':'e'}

lines = []
for line in extracted_text.split('\n'):
    if line.strip() != '':
        strip_line = list(line.strip())
        for i in range(len(strip_line)):
            if strip_line[i] in map_dict.keys():
                strip_line[i] = map_dict[strip_line[i]]
        lines.append(''.join(strip_line))

extracted_text = ' '.join(lines)

if 'Accept message request' in extracted_text:
    extracted_text = extracted_text[extracted_text.find('View Profile') + 12 :]
    extracted_text = extracted_text[:extracted_text.find('Accept message request')]

print(extracted_text)

vect = pickle.load(open('vect.sk', 'rb')) 
model = pickle.load(open('svc.sk', 'rb')) 
labels = pickle.load(open('labels.lst', 'rb'))


print('Input image has harassment level:', labels[model.predict(vect.transform([extracted_text]))[0]])