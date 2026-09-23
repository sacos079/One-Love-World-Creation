export type PlacementArea =
  | "front"
  | "back"
  | "left-chest"
  | "right-chest"
  | "left-sleeve"
  | "right-sleeve";

export interface DesignAsset {
  id: string;
  name: string;
  source: "customer-upload" | "one-luv-library" | "originals";
  kind: "graphic" | "text" | "patch" | "dtf";
  status: "draft" | "review" | "approved";
  licensingNotes?: string;
}

export interface Placement {
  area: PlacementArea;
  scale?: number;
  rotation?: number;
  notes?: string;
  assets: DesignAsset[];
}

export interface GarmentVariant {
  id: string;
  color: string;
  sizeRange: string[];
  garmentSource: "customer-supplied" | "one-luv-supplied";
}

export interface Garment {
  id: string;
  name: string;
  category: "shirt" | "workwear" | "vest" | "outerwear" | "other";
  variants: GarmentVariant[];
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  garments: Garment[];
}

export interface Customization {
  garmentId: string;
  variantId: string;
  placements: Placement[];
  customText?: string;
  textColor?: string;
  fontFamily?: string;
  notes?: string;
}

export interface CustomerUpload {
  id: string;
  fileName: string;
  mimeType: string;
  rightsAcknowledged: boolean;
}

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  customization: Customization;
}

export interface Quote {
  id: string;
  status: "draft" | "submitted" | "review" | "approved" | "paid" | "production";
  items: OrderItem[];
  notes?: string;
}

export interface GroupOrder {
  id: string;
  name: string;
  organizationType:
    "workplace" | "event" | "community" | "family" | "sports" | "other";
  estimatedQuantity: number;
  sharedArtwork: DesignAsset[];
  rosterUploadRequired?: boolean;
}
