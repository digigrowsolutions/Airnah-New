ALTER TABLE "products" ADD COLUMN "diamond_price" numeric;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "head_style_price" numeric;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "head_metal_price" numeric;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "shank_style_price" numeric;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "shank_metal_price" numeric;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "total_cost" numeric;--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "diamond_price_INR";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "diamond_price_GBP";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "diamond_price_USD";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "head_style_price_INR";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "head_style_price_GBP";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "head_style_price_USD";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "head_metal_price_INR";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "head_metal_price_GBP";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "head_metal_price_USD";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "shank_style_price_INR";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "shank_style_price_GBP";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "shank_style_price_USD";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "shank_metal_price_INR";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "shank_metal_price_GBP";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "shank_metal_price_USD";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "total_cost_INR";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "total_cost_GBP";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "total_cost_USD";