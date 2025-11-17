import { Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import aiAvatar from "../assets/AiAssistant.png";

const ENCOURAGING_MESSAGES = [
  "Hi! Need help? 👋",
  "Got questions? Ask me!",
  "I'm here to help! 💬",
  "Tap me for assistance!",
  "Let's chat! 😊",
  "Questions? I've got answers!",
  "Looking around? I can guide you!",
  "Want to explore my projects?",
  "Need suggestions? Ask away!",
  "I'm your friendly AI assistant 🤖",
  "Curious about anything here?",
  "Stuck? I can help you out!",
  "Let's make things easier! ✨",
  "Want to know more about my work?",
  "Feel free to talk to me anytime!",
  "Hello! I can assist you with anything!",
  "Need a quick tour? Just ask!",
  "I'm right here if you need help! 🙂",
  "Checking out my portfolio? Ask me anything!",
  "Ready when you are! 🚀",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const showInterval = setInterval(() => {
        const randomMessage =
          ENCOURAGING_MESSAGES[
            Math.floor(Math.random() * ENCOURAGING_MESSAGES.length)
          ];
        setCurrentMessage(randomMessage);
        setShowBubble(true);

        setTimeout(() => {
          setShowBubble(false);
        }, 4000);
      }, 15000);

      const initialTimeout = setTimeout(() => {
        const randomMessage =
          ENCOURAGING_MESSAGES[
            Math.floor(Math.random() * ENCOURAGING_MESSAGES.length)
          ];
        setCurrentMessage(randomMessage);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4000);
      }, 3000);

      return () => {
        clearInterval(showInterval);
        clearTimeout(initialTimeout);
      };
    } else {
      setShowBubble(false);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://n8n.cloudmateria.com/webhook/mvp-chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.output || "No response received." },
      ]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered a network issue.",
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {showBubble && !isOpen && (
          <div className="absolute bottom-24 right-0 mb-2 animate-bounce">
            <div
              className="bg-white rounded-2xl shadow-lg px-4 py-3 relative
                  inline-block min-w-40 max-w-[250px]"
            >
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
              <p className="text-sm text-gray-800 font-medium leading-snug whitespace-normal wrap-break-words">
                {currentMessage}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          aria-label="AI Assistant"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl border-4 border-white">
            <img
              src={aiAvatar}
              alt="AI Assistant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-32 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-slideUp">
          <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={aiAvatar}
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={aiAvatar}
                    alt="AI Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Hi! I'm your AI assistant.
                </p>
                <p className="text-gray-500 text-xs mt-1">Ask me anything!</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`w-auto max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap wrap-break-word">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
