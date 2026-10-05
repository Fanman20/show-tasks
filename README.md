# Show Tasks

A free iPhone app (a web page added to the Home Screen) for backstage task lists in a theatre show.

**Open it:** https://fanman20.github.io/show-tasks/
**Install it on an iPhone:** open the link in **Safari**, tap the Share button, then **Add to Home Screen**.
**Install it on Android (Samsung, Pixel and others):** open the link in **Chrome**, tap the three dots at the top right, then **Add to Home screen** (or **Install app**). In **Samsung Internet**: three lines at the bottom right → **Add page to** → **Home screen**.

Everything you type stays on your own phone. Nothing is uploaded, and nobody else can see your tasks.
After the first open it works with no signal.

## The tabs

| Tab | What it's for |
|---|---|
| **Home** | Run Act 1 / Run Act 2, the call countdown, and the Pre-show, Before Act 1, Before Act 2 and After show checklists. |
| **Add** | Pick a section, then dictate a task (tap the microphone on the keyboard). The button says where it's going. |
| **Order** | Pick a section along the top, then drag tasks into order. Tap a task to edit, move or delete it. Tap its time to change it. |
| **Print** | Text size, which sections, preview. Tap Print, wait for "Tap to print or share the PDF", tap again, then choose **Print** in the share menu. |
| **Settings** | Show name, tasks are for, curtain-up times, interval length, call times, Red wings mode, backup and share, new show. |

## During the show (Run Act 1 / Run Act 2)

- The clock starts by itself at the curtain-up time set in Settings, or tap **Start now**.
- The next cue is always under the pinned box; gone cues tuck up behind it (drag down to see them).
- **Hold** freezes the clock and every cue countdown (show stop, injury). **Resume** carries on from the same second.
- Running early or late? When a cue happens, **press and hold it** to set the clock to that cue.
- **End Act 1** starts the interval countdown; Act 2 then starts by itself.
- **Lock** stops stray taps. Press and hold the button to unlock.
- **Restart** and **Stop** need two taps, so they can't go off by accident.

## Good to know

- **Ticks reset each day.** Checklist ticks clear the first time the app is opened on a new day. For a second show the same day, use **Untick all** on each checklist.
- **Back up your list:** Settings → Save a backup file → Save to Files. Load it on a new phone with Settings → Load a backup file.
- **Giving the app to someone:** send them the link. They start with an empty app. To give them your tasks too, send them a backup file.
- **Deleting the Home Screen icon deletes your tasks** (as does clearing Safari's website data). Keep a backup.
- **Updates** arrive by themselves the next time the app is opened with signal.

## If something goes wrong

- **The app looks old or broken:** close it fully (swipe it away) and reopen it with signal.
- **The printer won't print from the share menu:** in the share menu choose **Save to Files** instead, then open the PDF in the Files app and print it from there.
- **Print says "Connect to the internet once":** open the Print tab once while you have signal, then try again.
- **Go back to Version 1:** the first version is saved on GitHub as the tag `v1-final`.

## For whoever maintains it

The whole app is `index.html` (screens, styles and code) plus `sw.js` (offline copy), `manifest.webmanifest` and the icons.
It is hosted free by GitHub Pages from the `main` branch. After changing `index.html`, change the `CACHE` name in `sw.js`
(e.g. `showtasks-v17` → `showtasks-v18`) so phones fetch the new version.
