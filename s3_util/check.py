# import serial
# import time

# serial_port = r'/dev/tty.usbserial-0001'  # Adjust this based on your system
# baud_rate = 115200

# try:
#     ser = serial.Serial(serial_port, baud_rate, timeout=1)
#     time.sleep(2)

#     # Test AT command
#     command = "AT\r\n"
#     ser.write(command.encode())
#     response = ser.readline().decode().strip()
#     print("Response from NodeMCU:", response)

#     # Check firmware version
#     command = "AT+GMR\r\n"
#     ser.write(command.encode())
#     response = ser.readline().decode().strip()
#     print("Firmware Version:", response)
#     ser.close()

#     # Add more commands as needed...

# except Exception as e:
#     print(f"Error: {e}")








import serial
import time

def check_nodemcu_response(serial_port, baud_rate=115200, timeout=2):
    try:
        with serial.Serial(serial_port, baud_rate, timeout=timeout) as ser:
            time.sleep(2)
            
            # Send a command to NodeMCU
            command = "AT\r\n"
            ser.write(command.encode("utf-8"))
            
            # Wait for a moment before reading
            time.sleep(1)
            
            # Read and return the response
            response = ser.read(ser.in_waiting).decode("utf-8")
            
            return response
    except serial.SerialException as e:
        return f"Serial Error: {str(e)}"
    except Exception as e:
        return f"Error: {str(e)}"

# Example usage:
nodeMCU_serial_port = "/dev/tty.usbserial-0001"  # Replace with the actual serial port of your NodeMCU

response = check_nodemcu_response(nodeMCU_serial_port)

print("NodeMCU Response:")
print(response)

