# Toggle město Krupka Content

This project supports two versions of the website:

## Version 1: Full Case (Default)
Shows all information including město Krupka and SPORT Krupka activities:
- Jan Kuzma (starosta + jednatel SPORT Krupka)
- Jan Bokoč (místostarosta)
- Tomáš Syryčanský (sportovní manažer)
- All related events and violations

## Version 2: Case Without City Information
Shows the case but excludes město Krupka related content:
- Only shows TJ Krupka internal issues (Vaniš, Vlach, Kulík, Pivoňka)
- Hides city representatives from actor lists
- Filters out city-related content from homepage

## How to Toggle

Use the provided script:

```bash
# Show current status
./toggle-city-content.sh status

# Enable město Krupka content (full version)
./toggle-city-content.sh on

# Disable město Krupka content (filtered version)
./toggle-city-content.sh off
```

The script will:
1. Update the `.env.local` file
2. Automatically rebuild the site with the new configuration
3. Confirm the change

## Manual Toggle

If you prefer to toggle manually:

1. Edit `.env.local`
2. Set `NEXT_PUBLIC_SHOW_CITY_CONTENT=true` or `false`
3. Run `npm run build` to rebuild the site

## Technical Details

The toggle works at build time:
- Environment variable: `NEXT_PUBLIC_SHOW_CITY_CONTENT`
- Default value: `true` (show everything)
- Implementation: Conditional rendering in components
- Affected files:
  - `/app/page.tsx` - Homepage actors section
  - `/app/akteri/page.tsx` - Actors list
  - `/lib/config.ts` - Configuration utilities

## What Gets Hidden

When `NEXT_PUBLIC_SHOW_CITY_CONTENT=false`:

### Homepage (`/`)
- Jan Kuzma actor card
- Jan Bokoč actor card
- Tomáš Syryčanský actor card
- Grid adjusts to show only Miroslav Brožek

### Actors Page (`/akteri`)
- Jan Kuzma entry
- Jan Bokoč entry
- Tomáš Syryčanský entry
- "Zástupci města" category (if empty after filtering)
- Statistics line for city representatives

### What Stays
- All internal TJ Krupka actors (Vaniš, Vlach, Kulík, Pivoňka, Brožek, Illéšová)
- Financial data and violations related to internal actors
- Timeline events not specifically about city coordination
- Legal analysis and documentation

## Use Cases

**Full Version (ON)**:
- Complete case documentation
- Shows all actors and their roles
- Full transparency

**Filtered Version (OFF)**:
- Focus on internal TJ Krupka issues
- Exclude political/municipal aspects
- Useful for presentations focused solely on association management
