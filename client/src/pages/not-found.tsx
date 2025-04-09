import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ScaleTransition } from "@/components/ui/page-transition";

export default function NotFound() {
  return (
    <ScaleTransition>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Card className="w-full max-w-md mx-4 border-primary/10 shadow-lg">
            <CardContent className="pt-6 pb-4">
              <div className="flex flex-col items-center mb-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <AlertCircle className="h-16 w-16 text-primary mb-4" />
                </motion.div>
                <h1 className="text-3xl font-bold mb-2">404</h1>
                <p className="text-xl font-medium text-muted-foreground">Page Not Found</p>
              </div>

              <motion.p 
                className="mt-4 text-center text-muted-foreground mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                The page you are looking for doesn't exist or has been moved.
              </motion.p>
              
              <motion.div
                className="flex justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link href="/">
                  <Button className="group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ScaleTransition>
  );
}
