import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import idliSambar from "@/assets/idli-sambar.jpg";
import masalaDosa from "@/assets/masala-dosa.jpg";
import upma from "@/assets/upma.jpg";

const Menu = () => {
  const menuItems = {
    breakfast: [
      {
        name: "Idli Sambar",
        teluguName: "ఇడ్లీ సాంబార్",
        price: "₹120",
        description: "Fluffy steamed rice cakes with traditional sambar and chutneys",
        image: idliSambar
      },
      {
        name: "Masala Dosa",
        teluguName: "మసాలా దోస",
        price: "₹150",
        description: "Crispy crepe with spiced potato filling",
        image: masalaDosa
      },
      {
        name: "Upma",
        teluguName: "ఉప్మా",
        price: "₹90",
        description: "Traditional semolina breakfast with vegetables",
        image: upma
      }
    ]
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">మా మెనూ (Our Menu)</h2>
          <p className="text-xl text-muted-foreground">Discover authentic flavors from Telugu cuisine</p>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="breakfast" className="text-sm">
              🌅<br />Breakfast<br />టిఫిన్
            </TabsTrigger>
            <TabsTrigger value="main" className="text-sm">
              🍛<br />Main Course<br />ప్రధాన వంటకం
            </TabsTrigger>
            <TabsTrigger value="desserts" className="text-sm">
              🍮<br />Desserts<br />తీపి వంటకాలు
            </TabsTrigger>
          </TabsList>

          <TabsContent value="breakfast">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.breakfast.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-lg text-accent mb-2">{item.teluguName}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="default" className="w-full">
                      Order Now / ఆర్డర్ చేయండి
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="main">
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">Main course items coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">Dessert items coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;