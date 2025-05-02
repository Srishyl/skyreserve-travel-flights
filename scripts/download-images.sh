#!/bin/bash

# Create destinations directory if it doesn't exist
mkdir -p public/destinations

# Download images from Unsplash (high-quality, free-to-use images)
# Goa - beach and Portuguese architecture
curl "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80" -o public/destinations/goa.jpg

# Kerala - backwaters and houseboats
curl "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80" -o public/destinations/kerala.jpg

# Rajasthan - palace and desert
curl "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80" -o public/destinations/rajasthan.jpg

# Ladakh - mountains and monastery
curl "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=800&q=80" -o public/destinations/ladakh.jpg

# Andaman - beach and clear water
curl "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80" -o public/destinations/andaman.jpg

# Varanasi - ghats and temples
curl "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80" -o public/destinations/varanasi.jpg

echo "Images downloaded successfully!" 