CREATE TABLE "master" (
	"favourite_id" serial PRIMARY KEY NOT NULL,
	"GBP_rate" numeric,
	"INR_rate" numeric,
	"gold_rate" numeric,
	"diamond_rate" numeric,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
