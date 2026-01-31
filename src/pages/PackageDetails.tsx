import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  Users,
  IndianRupee,
  Download,
  ChevronLeft,
  Check,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPackageById } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = getPackageById(id || "");

  const [selectedImage, setSelectedImage] = useState(0);

  if (!pkg) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 text-center">
          <h1 className="text-3xl font-bold">Package Not Found</h1>
          <Link to="/packages">
            <Button className="mt-4">Back to Packages</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 20;

    const addNewPageIfNeeded = (space = 10) => {
      if (y + space > pageHeight - 20) {
        doc.addPage();
        y = 20;
      }
    };

    // ===== HEADER (Premium) =====
    doc.setFillColor(32, 64, 110); // royal blue
    doc.rect(0, 0, pageWidth, 36, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("TriSea Adventures", 20, 22);

    doc.setFontSize(10);
    doc.text("Discover Incredible India", 20, 29);

    doc.setFontSize(9);
    doc.text(
      "Carefully curated journeys • Trusted travel partner",
      pageWidth - 20,
      29,
      { align: "right" }
    );

    // ===== TITLE =====
    y = 50;
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(18);
    doc.text(pkg.name, 20, y);

    // underline (handwritten feel)
    y += 2;
    doc.setDrawColor(200, 120, 40);
    doc.line(20, y, pageWidth - 20, y);

    // ===== BASIC INFO =====
    y += 8;
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(`Route: ${pkg.destination}`, 20, y);
    y += 6;
    doc.text(
      `Duration: ${pkg.duration.days} Days / ${pkg.duration.nights} Nights`,
      20,
      y
    );
    y += 6;
    doc.text(`Price: ₹${pkg.price.standard} per person`, 20, y);

    // ===== OVERVIEW (Notebook Style) =====
    y += 12;
    addNewPageIfNeeded(20);

    doc.setFontSize(14);
    doc.setTextColor(32, 64, 110);
    doc.text("Overview", 20, y);
    y += 6;

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);

    const overviewLines = doc.splitTextToSize(
      pkg.description,
      pageWidth - 40
    );
    overviewLines.forEach((line: string) => {
      doc.text(line, 22, y);
      y += 5;
    });

    // ===== ITINERARY (HANDWRITTEN FLOW) =====
    y += 8;
    addNewPageIfNeeded(20);

    doc.setFontSize(14);
    doc.setTextColor(32, 64, 110);
    doc.text("Day-wise Itinerary", 20, y);
    y += 8;

    pkg.itinerary.forEach((day: any) => {
      addNewPageIfNeeded(30);

      // Day title
      doc.setFontSize(12);
      doc.setTextColor(210, 120, 40); // saffron ink
      doc.text(`Day ${day.day}: ${day.title}`, 20, y);
      y += 6;

      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);

      if (day.points) {
        day.points.forEach((point: string) => {
          addNewPageIfNeeded(10);
          const lines = doc.splitTextToSize(point, pageWidth - 50);
          doc.text(`• ${lines[0]}`, 25, y);
          y += 5;

          for (let i = 1; i < lines.length; i++) {
            doc.text(lines[i], 28, y);
            y += 4;
          }
        });
      } else if (day.description) {
        const lines = doc.splitTextToSize(
          day.description,
          pageWidth - 45
        );
        lines.forEach((l: string) => {
          doc.text(l, 25, y);
          y += 4;
        });
      }

      // Meal / Stay (handwritten note style)
      if (day.meal || day.stay) {
        y += 2;
        doc.setFontSize(9);
        doc.setTextColor(90, 90, 90);

        if (day.meal) {
          doc.text(`Meal: ${day.meal}`, 25, y);
          y += 4;
        }
        if (day.stay) {
          doc.text(`Stay: ${day.stay}`, 25, y);
          y += 4;
        }
      }

      y += 4;
    });

    // ===== INCLUSIONS =====
    addNewPageIfNeeded(30);
    doc.setFontSize(14);
    doc.setTextColor(32, 64, 110);
    doc.text("Inclusions", 20, y);
    y += 6;

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    pkg.inclusions.forEach((item: string) => {
      doc.text(`✓ ${item}`, 25, y);
      y += 5;
    });

    // ===== EXCLUSIONS =====
    y += 6;
    addNewPageIfNeeded(30);
    doc.setFontSize(14);
    doc.setTextColor(32, 64, 110);
    doc.text("Exclusions", 20, y);
    y += 6;

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    pkg.exclusions.forEach((item: string) => {
      doc.text(`✗ ${item}`, 25, y);
      y += 5;
    });

    // ===== FOOTER =====
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      "TriSea Adventures • Trusted Travel Partner • +91 98765 43210 • info@triseaadventures.com",
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );

    doc.save(`${pkg.name.replace(/\s+/g, "-")}-Itinerary.pdf`);
  };



  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back */}
      <div className="container-custom pt-28">
        <Link
          to="/packages"
          className="flex items-center gap-2 text-muted-foreground"
        >
          <ChevronLeft size={16} /> Back to Packages
        </Link>
      </div>

      {/* Hero */}
      <section className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <img
              src={pkg.gallery?.[selectedImage] || pkg.image}
              className="rounded-xl w-full h-[350px] object-cover"
            />
            <div className="flex gap-3 mt-4">
              {pkg.gallery.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(i)}
                  className={`h-20 w-28 rounded-lg cursor-pointer object-cover border ${selectedImage === i
                    ? "border-accent"
                    : "border-transparent"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">
                <MapPin size={14} /> {pkg.region} India
              </Badge>
              <h1 className="text-3xl font-bold">{pkg.name}</h1>
              <p className="text-muted-foreground">{pkg.destination}</p>
            </div>

            <div className="flex gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {pkg.duration.days}D / {pkg.duration.nights}N
              </span>
              <span className="flex items-center gap-1">
                <Users size={16} />
                {pkg.availableSeats} Seats Left
              </span>
            </div>

            <div className="bg-card p-5 rounded-xl">
              <p className="text-sm text-muted-foreground">
                Price per person
              </p>
              <div className="flex items-center gap-2 text-3xl font-bold">
                <IndianRupee />
                {pkg.price.standard}
              </div>

              <div className="flex gap-3 mt-4">
                <Button onClick={generatePDF} variant="outline">
                  <Download size={16} className="mr-2" />
                  Download Itinerary
                </Button>
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-custom py-10">
        <Tabs defaultValue="itinerary">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <p className="text-muted-foreground">{pkg.description}</p>
          </TabsContent>

          <TabsContent value="itinerary" className="mt-6 space-y-4">
            {pkg.itinerary.map((day: any) => (
              <motion.div
                key={day.day}
                className="bg-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-semibold text-lg mb-2">
                  Day {day.day}: {day.title}
                </h3>

                {day.points ? (
                  <ul className="list-disc ml-5 text-muted-foreground">
                    {day.points.map((p: string, i: number) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    {day.description}
                  </p>
                )}

                {(day.meal || day.stay) && (
                  <p className="mt-3 text-sm">
                    {day.meal && <><b>Meal:</b> {day.meal} </>}
                    {day.stay && <> | <b>Stay:</b> {day.stay}</>}
                  </p>
                )}
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent
            value="inclusions"
            className="mt-6 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-card p-6 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Check className="text-green-500" /> Inclusions
              </h3>
              <ul className="space-y-2">
                {pkg.inclusions.map((i: string, idx: number) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <X className="text-red-500" /> Exclusions
              </h3>
              <ul className="space-y-2">
                {pkg.exclusions.map((i: string, idx: number) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetails;
