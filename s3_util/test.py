import base64
from s3 import upload_base_64_image_to_s3

def image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        # Read the binary data of the image file
        image_binary = image_file.read()

        # Encode the binary data to base64
        base64_encoded = base64.b64encode(image_binary).decode('utf-8')
        return base64_encoded

if __name__ == '__main__':
    image_path = "image.png"

    try:
        base64_image = image_to_base64(image_path)

        aws_access_key_id = 'AKIAT7YHQXWSQ2Q6FCN2'
        aws_secret_access_key='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'
        bucket_name = 'sentinelai'
        object_key = 'new.png'

        upload_base_64_image_to_s3(base64_image, bucket_name, object_key, aws_access_key_id, aws_secret_access_key)
        
    except Exception as e:
        print(f"Error: {e}")
