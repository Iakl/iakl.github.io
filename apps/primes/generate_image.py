from PIL import Image
import random

# Generate a random image
image = Image.new('RGB', (200, 200), color=(random.randint(
    0, 255), random.randint(0, 255), random.randint(0, 255)))

# Save the image to a file
image.save('./image.png')
