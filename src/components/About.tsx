import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">మా గురించి (About Us)</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to our authentic Telugu restaurant, where we bring the rich culinary heritage of 
              Andhra Pradesh and Telangana to your table. For over two decades, our family has been 
              passionate about preserving and sharing the traditional flavors that define our culture.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Every dish is prepared with love, using time-honored recipes passed down through generations. 
              From the aromatic spices of our biryanis to the comforting warmth of our traditional 
              breakfast items, we ensure each meal tells a story of our heritage.
            </p>
            <p className="text-lg leading-relaxed">
              Our commitment to authenticity means sourcing the finest ingredients and maintaining 
              traditional cooking methods that have made Telugu cuisine beloved worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-semibold mb-2">Live Kitchen</h3>
                <p className="text-sm text-muted-foreground">లైవ్ కిచెన్</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="font-semibold mb-2">Traditional Music</h3>
                <p className="text-sm text-muted-foreground">సాంప్రదాయ సంగీతం</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🍃</div>
                <h3 className="font-semibold mb-2">Organic Ingredients</h3>
                <p className="text-sm text-muted-foreground">సేంద్రీయ పదార్థాలు</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="font-semibold mb-2">25+ Years</h3>
                <p className="text-sm text-muted-foreground">Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;