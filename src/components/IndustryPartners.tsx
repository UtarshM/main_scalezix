import AnimatedSection from "./AnimatedSection";

const IndustryPartners = () => {
  const partners = [
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      description: "GPT-4 & ChatGPT Integration",
    },
    {
      name: "Anthropic Claude",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
      description: "Claude AI Integration",
    },
    {
      name: "Google AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      description: "Gemini & Vertex AI",
    },
    {
      name: "AWS AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "SageMaker & Bedrock",
    },
    {
      name: "Microsoft Azure AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      description: "Azure OpenAI & ML",
    },
    {
      name: "Hugging Face",
      logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      description: "Open Source AI Models",
    },
    {
      name: "TensorFlow",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      description: "Deep Learning Framework",
    },
    {
      name: "PyTorch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
      description: "AI Research & Development",
    },
    {
      name: "LangChain",
      logo: "https://python.langchain.com/img/brand/wordmark.png",
      description: "LLM Application Framework",
    },
    {
      name: "NVIDIA AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      description: "GPU Computing & AI",
    },
    {
      name: "Cohere",
      logo: "https://cohere.com/favicon-32x32.png",
      description: "Enterprise AI Platform",
    },
    {
      name: "Stability AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Stability_AI_logo.svg",
      description: "Stable Diffusion & Gen AI",
    },
    {
      name: "Meta AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      description: "Llama & AI Research",
    },
    {
      name: "Mistral AI",
      logo: "https://mistral.ai/images/logo_hubc88c4ece131b91c7cb753f40e9e1cc5_2589_256x0_resize_q97_h2_lanczos_3.webp",
      description: "Open Source LLMs",
    },
    {
      name: "Pinecone",
      logo: "https://www.pinecone.io/images/pinecone-logo.svg",
      description: "Vector Database for AI",
    },
    {
      name: "Weights & Biases",
      logo: "https://wandb.ai/logo.svg",
      description: "MLOps & Experiment Tracking",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            AI Technologies We Work With
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge AI platforms and frameworks to build intelligent solutions
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="flex animate-scroll-fast space-x-8 sm:space-x-12 lg:space-x-16">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] transform hover:-translate-y-2 hover:scale-105 group border border-gray-100"
              >
                <div className="text-center">
                  <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center mb-3 sm:mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-8 sm:max-h-10 lg:max-h-12 max-w-24 sm:max-w-28 lg:max-w-32 object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-fast {
          animation: scroll-fast 25s linear infinite;
        }

        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll-fast {
            animation: scroll-fast 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustryPartners;
