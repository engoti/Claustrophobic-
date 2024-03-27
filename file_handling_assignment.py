try:
    file = open("my_file.txt", "w")

    file.write("Hello, My name is Engel,\n")
    file.write("I am 22 Years Old\n")
    file.write("I Live in Kisumu\n")

    file.close()

    file = open("my_file.txt", "r")

    content = file.read()

    print(content)

    file.close()

    file = open("my_file.txt", "a")
    file.write("My Hobby is Swimming\n")
    file.write("I have a keen interest in Technology too\n")
    file.write("As a relentless seeker of knowledge, I am always seeking to improve my consciousness on a day-to-day basis\n")

    file.close()

except FileNotFoundError:
    print("Error: The specified file was not found.")
except PermissionError:
    print("Error: Permission denied. You don't have permission to access the file.")
finally:
    print("File operations completed.")
