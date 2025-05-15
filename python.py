def respond(message):
    message = message.lower()
    if "hello" in message:
        return "Hi there!"
    elif "bye" in message:
        return "Goodbye!"
    else:
        return "I don't understand that."

def chat():
    print("Bot: Hello! Type something...")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("Bot: Bye!")
            break
        print("Bot:", respond(user_input))

if __name__ == "__main__":
    chat()
