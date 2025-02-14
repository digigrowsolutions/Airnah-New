ALTER TABLE "products" RENAME COLUMN "total_cost" TO "total_cost_INR";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "total_cost_GBP" numeric;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "total_cost_USD" numeric;