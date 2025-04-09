import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ScaleTransition } from "@/components/ui/page-transition";
import { Perspective3DTransition } from "@/components/ui/animated-page-transitions";
import { StaggeredScrollAnimation, StaggerItem } from "@/components/ui/scroll-animation";

export default function NotFound() {
  const [location] = useLocation();

  return (
    <Perspective3DTransition location={location} duration={0.8}>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background">
        <StaggeredScrollAnimation 
          direction="scale" 
          delayChildren={0.1} 
          staggerChildren={0.1} 
          threshold={0}
          once={false}
          className="w-full max-w-md mx-4"
        >
          <StaggerItem direction="scale">
            <Card className="w-full border-primary/10 shadow-lg">
              <CardContent className="pt-6 pb-4">
                <div className="flex flex-col items-center mb-6 text-center">
                  <StaggerItem direction="rotate">
                    <AlertCircle className="h-16 w-16 text-primary mb-4" />
                  </StaggerItem>
                  
                  <StaggerItem direction="up">
                    <h1 className="text-3xl font-bold mb-2">404</h1>
                  </StaggerItem>
                  
                  <StaggerItem direction="up">
                    <p className="text-xl font-medium text-muted-foreground">Page Not Found</p>
                  </StaggerItem>
                </div>

                <StaggerItem direction="fadeIn">
                  <p className="mt-4 text-center text-muted-foreground mb-6">
                    The page you are looking for doesn't exist or has been moved.
                  </p>
                </StaggerItem>
                
                <StaggerItem direction="up">
                  <div className="flex justify-center">
                    <Link href="/">
                      <Button className="group">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                </StaggerItem>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggeredScrollAnimation>
      </div>
    </Perspective3DTransition>
  );
}
