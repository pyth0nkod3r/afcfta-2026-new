import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { PageHero } from "~/components/ui/page-hero";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Users,
  UserCheck,
  Building,
  ArrowRight,
  CalendarCheck,
  Globe2,
  Radio,
  Upload,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { useToast } from "~/hooks/use-toast";

const registrationTypes = [
  {
    id: "participant",
    icon: Users,
    title: "Team Participant",
    description: "Join as a team member (3-4 people per team)",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "individual",
    icon: User,
    title: "Individual Participant",
    description: "Register individually and get matched with a team",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "mentor",
    icon: UserCheck,
    title: "Mentor",
    description: "Guide and support hackathon teams",
    color: "bg-purple-100 text-purple-600",
  },
];

const registrationDetails = [
  {
    title: "Teams of 3–4 innovators",
    description:
      "Form teams with diverse skills in technology, business, and policy.",
    icon: Users,
  },
  {
    title: "Pan-African participation",
    description: "Open to innovators from all African countries.",
    icon: Globe2,
  },
  {
    title: "Hybrid format",
    description: "Participate in-person in Abuja or join virtually.",
    icon: Radio,
  },
  {
    title: "Deadline: March 15, 2026",
    description: "Registration closes March 15, 2026. Register early!",
    icon: CalendarCheck,
  },
];

export default function Register() {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    organization: "",
    role: "",
    experience: "",
    skills: "",
    motivation: "",
    teamName: "",
    teamMembers: "",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) {
      toast({
        title: "Please select a registration type",
        description:
          "Choose whether you want to register as a participant or mentor.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Submitted!",
      description:
        "Your application has been received. We'll contact you within 2-3 business days.",
    });
  };

  return (
    <>
      <PageHero
        title="Register for AfCFTA Hackathon 2026"
        subtitle="Join Africa's premier digital trade innovation event"
        description="Be part of building technology-driven solutions that accelerate Africa's digital transformation under the AfCFTA framework."
      />

      {/* Registration Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Registration Information
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about joining the hackathon
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {registrationDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 p-6 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600">{detail.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Registration Type
              </h2>
              <p className="text-lg text-gray-600">
                Select how you'd like to participate in the hackathon
              </p>
            </motion.div>

            {/* Registration Type Selection */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {registrationTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedType === type.id
                          ? "ring-2 ring-primary border-primary"
                          : "hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <CardHeader className="text-center">
                        <div
                          className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${type.color}`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-center">
                          {type.description}
                        </p>
                        {selectedType === type.id && (
                          <div className="mt-4 flex items-center justify-center text-primary">
                            <CheckCircle className="w-5 h-5" />
                            <span className="ml-2 font-medium">Selected</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Registration Form */}
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedType === "participant" &&
                          "Team Participant Registration"}
                        {selectedType === "individual" &&
                          "Individual Participant Registration"}
                        {selectedType === "mentor" && "Mentor Registration"}
                      </h3>
                      <p className="text-gray-600">
                        Fill out the form below to complete your registration
                      </p>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Personal Information
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+234 xxx xxx xxxx"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Select
                            required
                            onValueChange={(value) =>
                              handleInputChange("country", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ng">Nigeria</SelectItem>
                              <SelectItem value="za">South Africa</SelectItem>
                              <SelectItem value="ke">Kenya</SelectItem>
                              <SelectItem value="gh">Ghana</SelectItem>
                              <SelectItem value="et">Ethiopia</SelectItem>
                              <SelectItem value="eg">Egypt</SelectItem>
                              <SelectItem value="ma">Morocco</SelectItem>
                              <SelectItem value="tn">Tunisia</SelectItem>
                              <SelectItem value="other">
                                Other African Country
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) =>
                              handleInputChange("city", e.target.value)
                            }
                            placeholder="Enter your city"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Professional Information
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="organization">
                            Organization/Company
                          </Label>
                          <Input
                            id="organization"
                            value={formData.organization}
                            onChange={(e) =>
                              handleInputChange("organization", e.target.value)
                            }
                            placeholder="Your organization or company"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role">Current Role/Position *</Label>
                          <Input
                            id="role"
                            required
                            value={formData.role}
                            onChange={(e) =>
                              handleInputChange("role", e.target.value)
                            }
                            placeholder="e.g., Software Developer, Entrepreneur"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="experience">
                          Years of Experience *
                        </Label>
                        <Select
                          required
                          onValueChange={(value) =>
                            handleInputChange("experience", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-3">2-3 years</SelectItem>
                            <SelectItem value="4-5">4-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="skills">
                          Technical Skills & Expertise *
                        </Label>
                        <Textarea
                          id="skills"
                          required
                          value={formData.skills}
                          onChange={(e) =>
                            handleInputChange("skills", e.target.value)
                          }
                          placeholder="List your technical skills, programming languages, frameworks, etc."
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Team Information (for team participants) */}
                    {selectedType === "participant" && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          Team Information
                        </h4>

                        <div>
                          <Label htmlFor="teamName">
                            Team Name (if you have one)
                          </Label>
                          <Input
                            id="teamName"
                            value={formData.teamName}
                            onChange={(e) =>
                              handleInputChange("teamName", e.target.value)
                            }
                            placeholder="Enter your team name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="teamMembers">
                            Team Members (if you have them)
                          </Label>
                          <Textarea
                            id="teamMembers"
                            value={formData.teamMembers}
                            onChange={(e) =>
                              handleInputChange("teamMembers", e.target.value)
                            }
                            placeholder="List your team members' names and roles (if you already have a team)"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Motivation */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Motivation & Goals
                      </h4>

                      <div>
                        <Label htmlFor="motivation">
                          Why do you want to participate in the AfCFTA
                          Hackathon? *
                        </Label>
                        <Textarea
                          id="motivation"
                          required
                          value={formData.motivation}
                          onChange={(e) =>
                            handleInputChange("motivation", e.target.value)
                          }
                          placeholder="Tell us about your motivation and what you hope to achieve"
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) =>
                            handleInputChange("agreeTerms", checked as boolean)
                          }
                          required
                        />
                        <Label htmlFor="agreeTerms" className="text-sm">
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-primary hover:underline"
                          >
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </Link>{" "}
                          *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeMarketing"
                          checked={formData.agreeMarketing}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "agreeMarketing",
                              checked as boolean,
                            )
                          }
                        />
                        <Label htmlFor="agreeMarketing" className="text-sm">
                          I agree to receive updates and marketing
                          communications about the AfCFTA Hackathon
                        </Label>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button type="submit" size="lg" className="w-full">
                        Submit Registration
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Card>
              </motion.div>
            )}

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-6">
                Need more information before registering?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link to="/faq">View FAQs</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/timeline-format">Event Timeline</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/challenge-tracks">Challenge Tracks</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
