#!/bin/bash

# Toggle script for město Krupka content visibility
# Usage: ./toggle-city-content.sh [on|off|status]

ENV_FILE=".env.local"
ENV_KEY="NEXT_PUBLIC_SHOW_CITY_CONTENT"

# Function to get current status
get_status() {
  if [ -f "$ENV_FILE" ]; then
    value=$(grep "^${ENV_KEY}=" "$ENV_FILE" | cut -d '=' -f2)
    if [ "$value" = "true" ]; then
      echo "ON"
    elif [ "$value" = "false" ]; then
      echo "OFF"
    else
      echo "UNKNOWN (defaulting to ON)"
    fi
  else
    echo "UNKNOWN (no .env.local file, defaulting to ON)"
  fi
}

# Function to set value
set_value() {
  new_value=$1

  if [ ! -f "$ENV_FILE" ]; then
    echo "Creating .env.local file..."
    cat > "$ENV_FILE" << EOF
# Supabase (not used currently)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Toggle město Krupka content visibility
# Set to "true" to show all content including město Krupka activities
# Set to "false" to hide město Krupka, SPORT Krupka, and related actors
${ENV_KEY}=${new_value}
EOF
  else
    # Check if the key exists
    if grep -q "^${ENV_KEY}=" "$ENV_FILE"; then
      # Replace existing value
      if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/^${ENV_KEY}=.*/${ENV_KEY}=${new_value}/" "$ENV_FILE"
      else
        # Linux
        sed -i "s/^${ENV_KEY}=.*/${ENV_KEY}=${new_value}/" "$ENV_FILE"
      fi
    else
      # Add new key
      echo "${ENV_KEY}=${new_value}" >> "$ENV_FILE"
    fi
  fi
}

# Main logic
case "${1:-status}" in
  on)
    echo "🔄 Enabling město Krupka content..."
    set_value "true"
    echo "✅ Město Krupka content is now ENABLED"
    echo ""
    echo "📦 Rebuilding site..."
    npm run build
    echo ""
    echo "✨ Done! The site now includes all město Krupka related content."
    ;;

  off)
    echo "🔄 Disabling město Krupka content..."
    set_value "false"
    echo "✅ Město Krupka content is now DISABLED"
    echo ""
    echo "📦 Rebuilding site..."
    npm run build
    echo ""
    echo "✨ Done! The site now excludes město Krupka related content."
    ;;

  status)
    current_status=$(get_status)
    echo "📊 Current město Krupka content status: $current_status"
    echo ""
    echo "Usage:"
    echo "  ./toggle-city-content.sh on      # Enable město Krupka content"
    echo "  ./toggle-city-content.sh off     # Disable město Krupka content"
    echo "  ./toggle-city-content.sh status  # Show current status"
    ;;

  *)
    echo "❌ Invalid option: $1"
    echo ""
    echo "Usage:"
    echo "  ./toggle-city-content.sh on      # Enable město Krupka content"
    echo "  ./toggle-city-content.sh off     # Disable město Krupka content"
    echo "  ./toggle-city-content.sh status  # Show current status"
    exit 1
    ;;
esac
