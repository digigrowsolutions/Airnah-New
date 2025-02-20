CREATE TYPE "public"."status" AS ENUM('pending', 'paid', 'shipped', 'delivered', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."source" AS ENUM('natural', 'labgrown');--> statement-breakpoint
CREATE TYPE "public"."product_category" AS ENUM('ring', 'necklace', 'pendant', 'diamond');--> statement-breakpoint
CREATE TYPE "public"."product_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TYPE "public"."payment_method" AS ENUM('creditCard', 'upi');--> statement-breakpoint
CREATE TYPE "public"."payment_status" AS ENUM('pending', 'success', 'failed');--> statement-breakpoint
CREATE TYPE "public"."user_roles" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "cart" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"product_id" serial NOT NULL,
	"quantity" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "coupons" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"discount_percentage" integer NOT NULL,
	"expiry_date" date NOT NULL,
	"max_uses" integer DEFAULT 1,
	CONSTRAINT "coupons_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "favorites" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"product_id" serial NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "order_items" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"order_id" serial NOT NULL,
	"product_id" serial NOT NULL,
	"quantity" integer NOT NULL,
	"price" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"total_amount" integer NOT NULL,
	"status" "status" DEFAULT 'pending',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" "product_category" DEFAULT 'ring',
	"description" text,
	"image_URL" text,
	"status" "product_status" DEFAULT 'active',
	"source" "source" DEFAULT 'natural',
	"shape" text,
	"cut" text,
	"color" text,
	"clarity" text,
	"carat" numeric,
	"diamond_price_INR" numeric,
	"diamond_price_GBP" numeric,
	"diamond_price_USD" numeric,
	"head_style" text,
	"head_style_price_INR" numeric,
	"head_style_price_GBP" numeric,
	"head_style_price_USD" numeric,
	"head_metal" text,
	"head_metal_price_INR" numeric,
	"head_metal_price_GBP" numeric,
	"head_metal_price_USD" numeric,
	"shank_style" text,
	"shank_style_price_INR" numeric,
	"shank_style_price_GBP" numeric,
	"shank_style_price_USD" numeric,
	"shank_metal" text,
	"shank_metal_price_INR" numeric,
	"shank_metal_price_GBP" numeric,
	"shank_metal_price_USD" numeric,
	"total_cost_INR" numeric,
	"total_cost_GBP" numeric,
	"total_cost_USD" numeric,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"product_id" serial NOT NULL,
	"rating" integer NOT NULL,
	"comment" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"order_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"payment_method" "payment_method" NOT NULL,
	"payment_status" "payment_status" DEFAULT 'pending',
	"payment_date" timestamp with time zone DEFAULT now() NOT NULL,
	"transaction_amount" integer NOT NULL,
	"transaction_reference" text,
	"refunded_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"clerk_user_id" text,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"role" "user_roles" DEFAULT 'user',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_clerk_user_id_unique" UNIQUE("clerk_user_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_id_products_favourite_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("favourite_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_product_id_products_favourite_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("favourite_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_orders_favourite_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("favourite_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_products_favourite_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("favourite_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_products_favourite_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("favourite_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_order_id_orders_favourite_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("favourite_id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE restrict ON UPDATE no action;