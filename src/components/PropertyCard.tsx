import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/data/mockData";

const PropertyCard = ({ property }: { property: Property }) => {
  const formatPrice = (p: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(p);

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border/50 card-hover">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-ui font-medium bg-primary text-primary-foreground">
            {property.type}
          </span>
          {property.status !== "Active" && (
            <span className="px-3 py-1 rounded-full text-xs font-ui font-medium bg-foreground/80 text-background">
              {property.status}
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <p className="text-2xl font-heading font-bold text-primary">{formatPrice(property.price)}</p>
        <h3 className="font-ui font-semibold text-foreground mt-1 text-lg leading-tight">{property.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
          <MapPin className="w-3.5 h-3.5" />{property.location}
        </p>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50 text-sm text-muted-foreground">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{property.bedrooms} Beds</span>
          )}
          <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{property.bathrooms} Baths</span>
          <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{property.area} sqft</span>
        </div>

        <Link to={`/property/${property.id}`} className="mt-4 block">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
