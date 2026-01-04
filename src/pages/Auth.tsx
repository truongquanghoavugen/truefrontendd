import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import bgImage from "@/assets/bg.jpg";

const Auth = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email login:", { email, password });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20" />

      {/* Login Card */}
      <div className="relative z-10 flex bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full mx-4">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-2xl font-bold text-primary text-center mb-8 tracking-wide">
            FUSION
          </h1>

          {/* Campus Selector */}
          <div className="mb-6">
            <Label className="text-sm text-foreground mb-2 block">Campus</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a campus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="campus-a">Campus A</SelectItem>
                <SelectItem value="campus-b">Campus B</SelectItem>
                <SelectItem value="campus-c">Campus C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Google Login Button */}
          <Button
            onClick={handleGoogleLogin}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4"
          >
            Login with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-border" />
            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="text-sm text-muted-foreground flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Or continue with more
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showEmailForm ? "rotate-180" : ""
                }`}
              />
            </button>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Email/Password Form */}
          {showEmailForm ? (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-sm mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          ) : (
            <Button
              variant="outline"
              onClick={() => setShowEmailForm(true)}
              className="w-full border-primary text-primary hover:bg-primary/5"
            >
              Sign in with email & password
            </Button>
          )}

          {/* Terms and Privacy */}
          <p className="text-xs text-muted-foreground mt-8 text-center">
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={bgImage}
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
