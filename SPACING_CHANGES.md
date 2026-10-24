# Spacing changes: old → new

1 unit = 4px. Tokens: `section` = 48px (<768px) / 64px (≥768px); `gutter` = 16 / 24 / 32px.

## Curated summary

| Where | Old | New | Why |
|---|---|---|---|
| Section vertical padding (About, Skills, Experience, Projects, Services, Contact) | `py-24 sm:py-32` = 96 / 128px per side | `py-section` = 48 / 64px | Gap between sections was 192–256px; now 96–128px |
| Hero | `pt-40 pb-24 sm:pt-48 sm:pb-32` | `pt-28 pb-12 md:pt-32 md:pb-16` (112/48, 128/64) | Clears the 68px fixed nav with 44–60px to spare, no more |
| Hero text stack | `mb-8`, `mt-8`, `mt-10` | `gap-6` (24px) | One rhythm instead of three values |
| Hero grid | `gap-16` | `gap-8 lg:gap-16` | Tighter on mobile |
| Hero "Scroll" cue | `mt-24` + infinite bobbing animation | removed | Wasted 96px; constant motion |
| Container | max 1400px, `px-6 sm:px-10 lg:px-16` | max 1200px, `px-gutter` (16/24/32) | Better line length |
| Two-column grids | `gap-16` (64) | `gap-8 lg:gap-12` (32/48) | Header and content read as one block |
| Section header | title `mt-3`, description `mt-5` | `gap-3` (12px) both | Consistent 12px |
| Section header → content (Experience, Projects) | `mt-16`, `mt-12`, `mt-10` | `gap-8` (32px) | Single value |
| About body / facts | `mt-8`, `mt-16 pt-10`, `gap-y-10` | `gap-6`, `pt-6`, `gap-y-6` | Compact, aligned to 24 |
| Skills groups | `space-y-12`, `pt-6`, `gap-10`, chips `gap-2.5 px-3.5 py-1.5` | `divide-y` + `py-5`, `gap-6`, chips `gap-2 h-8 px-3` | Even rows, 8px chip gap |
| Experience rows | `py-8 sm:py-10`, `-mx-4/-8 px-4/8` hover bleed | `py-6`, no bleed | Removed false hover affordance |
| Experience → Education | `mt-20` | `gap-10` (40px) | |
| Education cards | `p-7`, `pl-[3.375rem]` ×2 hack | `p-5`, flex `gap-4` | Removed arbitrary value |
| Project cards | `p-8 sm:p-12` (32/48), inner `gap-6` | `p-4 sm:p-5` (16/20), `md:gap-8`, inner `gap-3` | Card was mostly padding |
| Project list / filters | `gap-6`, `mt-10`, `mt-12` | `gap-4`, section `gap-8` | |
| Project dialog | `p-8 sm:p-12`, `space-y-8`, `my-8` | `p-5 sm:p-8`, `gap-5/6`, `pt-6` | Fits small screens |
| Services | rows `py-8` | cards `p-5`, grid `gap-4` | |
| Contact form | `space-y-8` (32), error `mt-2` | `gap-5` (20), `gap-1.5` field groups | |
| Contact left column | `mb-8`, `mt-6`, `mt-8`, `mt-8` | `gap-6` (24) | |
| Inputs | `py-3`, bottom border only | `h-11 px-4`, boxed | 44px target, clearer affordance |
| Footer | `py-14 sm:py-16`, `gap-12`, bottom `py-6` | `py-10`, `gap-8`, `py-4` | |
| Navbar | `pt-4`, `h-16`, `px-6` | `pt-3`, `h-14`, `px-3 sm:px-4` | Lighter bar |
| Nav links | `px-4 py-2` (~36px) | `h-10 px-4` | 40px target |
| Theme toggle / menu button | `h-9 w-9` (36) | `size-10` (40) | Touch target |
| Mobile menu | `p-8`, `mt-16`, `py-4` links | `p-6`, `mt-8`, `min-h-12` links; close button 20px → `size-11` | |
| Button default / sm | `px-6 py-3` / `px-4 py-2` (~44/36) | `h-11 px-6` / `h-10 px-4` | Guaranteed ≥40px |
| Badge | `px-3.5 py-1.5` | `px-2.5 py-1` | Proportional to 12px text |
| Scroll-to-top | `bottom-6 right-6` | `bottom-4 right-4 sm:bottom-6 sm:right-6` | Less intrusive on mobile |

Measured effect: desktop page 6,942px → ~4,980px; mobile 10,030px → ~8,130px.

## Auto-extracted per-file diff

Every spacing utility present in the old class strings but not the new (and vice versa). Includes mechanical `h-N w-N` → `size-N` renames.


## components/About.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-16` `gap-x-8` `gap-y-10` `mt-16` `mt-2` `mt-8` `pt-10` `py-24` `sm:py-32` | `gap-1` `gap-6` `gap-8` `gap-x-6` `gap-y-6` `lg:gap-12` `lg:top-24` `pt-6` |

## components/Contact.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-16` `gap-2` `h-1.5` `h-10` `h-4` `h-5` `mb-8` `mt-2` `mt-6` `mt-8` `py-1.5` `py-24` `sm:py-32` `space-y-8` `w-1.5` `w-10` `w-4` `w-5` | `gap-1.5` `gap-3` `gap-5` `gap-6` `gap-8` `h-8` `lg:gap-12` `min-h-11` `p-5` `size-1.5` `size-10` `size-4` `size-5` `sm:p-6` |

## components/Experience.tsx

| Removed (old) | Added (new) |
|---|---|
| `-mx-4` `gap-1.5` `gap-2.5` `gap-3.5` `gap-x-6` `gap-y-2.5` `gap-y-5` `h-1` `h-10` `h-4` `h-5` `mt-0.5` `mt-1` `mt-16` `mt-20` `mt-3` `mt-4` `mt-6` `mt-[0.55rem]` `p-7` `pl-[3.375rem]` `px-2.5` `px-4` `py-0.5` `py-24` `py-8` `sm:-mx-8` `sm:px-8` `sm:py-10` `sm:py-32` `w-1` `w-10` `w-4` `w-5` | `gap-1` `gap-10` `gap-2` `gap-3` `gap-4` `gap-8` `gap-y-2` `mt-2` `p-5` `py-6` `size-1` `size-10` `size-4` `size-5` `sm:gap-x-6` |

## components/Footer.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-12` `gap-2` `gap-px` `gap-x-12` `gap-y-3` `h-4` `mt-4` `py-14` `py-6` `sm:gap-x-6` `sm:py-16` `w-10` `w-4` | `gap-1` `gap-3` `gap-4` `gap-8` `gap-x-1` `gap-y-1` `h-10` `px-3` `py-10` `py-4` `size-10` `size-4` |

## components/Hero.tsx

| Removed (old) | Added (new) |
|---|---|
| `bottom-0` `bottom-4` `gap-16` `gap-2` `gap-4` `gap-x-4` `h-1.5` `h-2` `h-4` `h-9` `h-[18px]` `h-[320px]` `h-[420px]` `left-4` `left-[-10%]` `mb-8` `mt-10` `mt-24` `mt-8` `p-1.5` `pb-24` `pt-40` `px-3` `py-1.5` `right-[-8%]` `sm:h-[360px]` `sm:pb-32` `sm:pt-48` `sm:w-[290px]` `w-1.5` `w-2` `w-4` `w-9` `w-[18px]` `w-[260px]` `w-[320px]` `w-[420px]` | `gap-8` `gap-x-3` `h-8` `lg:gap-16` `lg:w-72` `md:pb-16` `md:pt-32` `ml-1` `pb-12` `pt-28` `right-0` `size-10` `size-2` `size-4` `size-[18px]` `size-[28rem]` `sm:w-64` `w-56` |

## components/Navbar.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-4` `gap-px` `h-1.5` `h-16` `h-5` `h-9` `h-[2px]` `inset-y-1` `mt-16` `pt-4` `px-4` `px-6` `py-2` `py-4` `sm:px-6` `w-1.5` `w-5` `w-9` | `h-0.5` `h-10` `h-14` `inset-y-0` `left-0` `min-h-12` `mt-8` `pt-3` `px-3` `size-1.5` `size-10` `size-5` `sm:px-4` |

## components/ProjectCard.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-4` `gap-6` `h-1` `h-12` `h-4` `h-5` `h-64` `ml-2` `mt-4` `p-8` `sm:p-12` `w-1` `w-12` `w-5` `w-64` `w-px` | `gap-1` `gap-3` `gap-5` `gap-x-2` `gap-y-1` `md:gap-8` `md:py-1` `p-4` `pt-2` `size-1` `size-4` `sm:p-5` |

## components/ProjectDialog.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-1.5` `gap-2.5` `gap-6` `h-1` `h-3.5` `h-4` `mb-3` `mt-1.5` `mt-2.5` `mt-3` `mt-6` `mt-8` `my-8` `py-6` `space-y-8` `w-1` `w-3.5` `w-4` | `gap-1` `gap-2` `gap-3` `gap-4` `gap-5` `pt-6` `py-4` `size-3.5` `size-4` `sm:gap-x-8` |

## components/ProjectPreview.tsx  _(new file)_

## components/Projects.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-10` `gap-6` `mt-10` `mt-12` `py-16` `py-2` `py-24` `sm:py-32` | `gap-4` `gap-8` `h-10` |

## components/ScrollToTop.tsx

| Removed (old) | Added (new) |
|---|---|
| `bottom-6` `h-11` `h-4` `right-6` `w-11` `w-4` | `bottom-4` `right-4` `size-11` `size-4` `sm:bottom-6` `sm:right-6` |

## components/SectionHeader.tsx

| Removed (old) | Added (new) |
|---|---|
| `mt-5` | `gap-3` |

## components/Services.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-16` `h-10` `h-5` `py-24` `py-8` `sm:gap-6` `sm:pt-1` `sm:px-4` `sm:py-32` `w-10` `w-5` | `gap-4` `gap-8` `lg:gap-12` `lg:top-24` `p-5` `size-10` `size-5` |

## components/Skills.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-16` `gap-2.5` `gap-4` `h-1.5` `pt-6` `px-3.5` `py-1.5` `py-24` `sm:gap-10` `sm:py-32` `space-y-12` `w-1.5` `w-32` | `first:pt-0` `gap-2` `gap-3` `gap-8` `h-8` `last:pb-0` `lg:gap-12` `lg:top-24` `px-3` `py-5` `size-1.5` `sm:gap-6` |

## components/ThemeToggle.tsx

| Removed (old) | Added (new) |
|---|---|
| `h-9` `h-[18px]` `w-9` `w-[18px]` | `size-10` `size-[18px]` |

## components/ui/badge.tsx

| Removed (old) | Added (new) |
|---|---|
| `px-3.5` `py-1.5` | `px-2.5` `py-1` |

## components/ui/button.tsx

| Removed (old) | Added (new) |
|---|---|
| `—` | `h-10` `h-11` `px-4` `px-6` |

## components/ui/dialog.tsx

| Removed (old) | Added (new) |
|---|---|
| `gap-1.5` `h-4` `h-9` `mb-6` `p-8` `right-5` `sm:p-12` `top-5` `w-4` `w-9` | `gap-3` `p-5` `pr-10` `right-3` `size-10` `size-4` `sm:p-8` `sm:right-4` `sm:top-4` `top-3` |

## components/ui/input.tsx

| Removed (old) | Added (new) |
|---|---|
| `py-3` | `h-11` `px-4` |

## components/ui/sheet.tsx

| Removed (old) | Added (new) |
|---|---|
| `h-5` `p-8` `right-6` `sm:w-[420px]` `top-6` `w-5` | `p-6` `right-4` `size-11` `size-5` `sm:w-[24rem]` `top-4` |

## components/ui/textarea.tsx

| Removed (old) | Added (new) |
|---|---|
| `—` | `min-h-32` `px-4` |
