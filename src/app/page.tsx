
import { Image } from "@heroui/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-white py-20 w-0.4 h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Speed <span style={{ 'color': '#fd3c62' }}>dating app</span> for working professionals
                </h1>
                <p className="text-xl mb-6">
                  Forget swiping—meet like-minded, career-driven singles who value real conversations, genuine connections, and no wasted time.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/crowd.webp"
                  alt="People enjoying a speed dating event"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        {/* <section id="how-it-works" className="py-20 bg-gray-50 w-0.4 h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Join a dating room", description: "Browse or get invited to a dating room." },
                { title: "Show Up & Match", description: "Get paired for timed conversations with potential matches." },
                {
                  title: "Show yourself",
                  description: "If the chemistry is right, show your photos to your match.",
                },
                {
                  title: "Make It Official",
                  description: "If the chemistry is right, connect after the event through Wyrd.",
                },
              ].map((step, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <div className="text-4xl font-bold text-black mb-4">{index + 1}</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Why Wyrd? (Benefits Section) */}
        {/* <section id="benefits" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Wyrd?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "No More Swiping",
                  description: "Meet real people instantly, no algorithms deciding for you.",
                },
                {
                  icon: Clock,
                  title: "Time-Efficient",
                  description: "Get multiple matches in one event, no wasted time.",
                },
                {
                  icon: Users,
                  title: "Pressure-Free",
                  description: "Short, engaging conversations help you decide quickly.",
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardBody className="p-6">
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-2xl font-semibold">Dating should be fun, not frustrating. Try Wyrd today!</p>
            </div>
          </div>
        </section> */}

        {/* Who's It For */}
        {/* <section id="who-its-for" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Who's It For</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Singles who want real connections without endless texting.",
                "Professionals looking for a quick, efficient way to meet people.",
                "Anyone tired of the usual dating apps.",
              ].map((text, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-lg">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Get Started (Call-to-Action Section) */}
        {/* <section id="get-started" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Match?</h2>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#sign-up">Sign Up for an Event</Link>
            </Button>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">What Our Users Say</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Sarah K.", quote: "Wyrd made dating fun again! I met my partner at one of their events." },
                  {
                    name: "Mike T.",
                    quote: "As a busy professional, Wyrd's efficiency is unmatched. Highly recommend!",
                  },
                  {
                    name: "Emily R.",
                    quote: "Finally, a dating platform that values real connections. Thank you, Wyrd!",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-white text-gray-800">
                    <CardContent className="p-6">
                      <p className="italic mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </main>


    </div>
  )
}
