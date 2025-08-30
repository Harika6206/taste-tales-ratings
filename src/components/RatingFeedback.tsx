import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RatingFeedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: "Your feedback has been submitted successfully.",
    });

    // Reset form
    setRating(0);
    setFeedback("");
    setName("");
    setEmail("");
  };

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Absolutely delicious! The idli sambar reminded me of my grandmother's cooking. Authentic Telugu flavors!",
      date: "2 days ago"
    },
    {
      name: "Rajesh Kumar", 
      rating: 5,
      comment: "Best masala dosa in the city! The chutneys are perfect and the service is excellent.",
      date: "1 week ago"
    },
    {
      name: "Meera Reddy",
      rating: 4,
      comment: "Great ambiance and traditional music. Food quality is consistently good. Will definitely visit again!",
      date: "2 weeks ago"
    }
  ];

  const averageRating = 4.8;

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            రేటింగ్ & ఫీడ్‌బ్యాక్ (Rating & Feedback)
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.floor(averageRating) 
                      ? 'fill-primary text-primary' 
                      : star <= averageRating 
                        ? 'fill-primary/50 text-primary' 
                        : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-semibold">{averageRating}</span>
            <span className="text-muted-foreground">(124 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Submit Rating Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Share Your Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-base mb-3 block">Rate Your Experience</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground hover:text-primary/50'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us about your dining experience..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Review / రివ్యూ సబ్మిట్ చేయండి
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? 'fill-primary text-primary'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingFeedback;