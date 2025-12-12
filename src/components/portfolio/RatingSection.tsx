import { RatingInteraction } from "@/components/ui/emoji-rating"

export function RatingSection() {
  const handleRatingChange = (rating: number) => {
    console.log("User rated:", rating)
  }

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-background">
      <div className="flex flex-col items-center gap-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          How was your experience?
        </p>

        <RatingInteraction onChange={handleRatingChange} />
        
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}