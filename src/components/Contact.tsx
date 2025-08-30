import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">📞 Phone / ఫోన్</h3>
              <div className="space-y-2">
                <p className="text-lg">+91 9876543210</p>
                <p className="text-lg">+91 9876543211</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">🕐 Hours / సమయం</h3>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Monday - Friday:</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday - Sunday:</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center md:col-span-2 lg:col-span-1">
            <CardContent className="pt-8 pb-8">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-4">Reserve a Table / టేబుల్ బుక్ చేయండి</h3>
              <Button variant="default" size="lg" className="w-full">
                Book Now / ఇప్పుడే బుక్ చేయండి
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;