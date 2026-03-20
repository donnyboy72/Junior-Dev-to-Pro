---
layout: default
title: Manual vs. Automated Testing
---

# Manual vs. Automated Testing

Every developer does testing, but not all of it is automated. Understanding when to use each is vital for efficiency.

## Manual Testing

This is the process of a human sitting down and using the application as a user would.

### Pros:
- **Visual/UX Feedback:** Only a human can tell if a layout looks "weird" or if a button is hard to find.
- **Exploratory Testing:** Humans are good at trying random things that a script might not think of.
- **Low Setup:** No code to write—just open the app and start clicking.

### Cons:
- **Not Repeatable:** Humans get tired and skip steps.
- **Slow:** Running a full manual test suite can take hours or days.
- **Expensive:** You have to pay someone to do it every single time you change code.

## Automated Testing

This is using software to test software.

### Pros:
- **Repeatable:** The computer never gets tired or skips a line of code.
- **Fast:** Can run thousands of tests in seconds.
- **CI/CD Integration:** Tests can run automatically every time you push code to GitHub.

### Cons:
- **High Initial Cost:** It takes time to write the tests.
- **Brittle:** If the UI changes slightly, the tests might break even if the functionality is fine.
- **Blind:** An automated test might pass even if the screen is completely blank, as long as the HTML elements are there.

---

## The Hybrid Approach

In the real world, we use both:

1.  **Automate the "Boring" stuff:** Business logic, data processing, and repetitive regression checks.
2.  **Manual for the "Human" stuff:** User experience (UX), accessibility, and final "look and feel" before a major release.

## Junior Dev Tip: The "Manual-to-Auto" Workflow

When you find a bug manually:
1.  **Step 1:** Reproduce the bug manually.
2.  **Step 2:** Write an automated test that fails because of that bug.
3.  **Step 3:** Fix the code until the test passes.
4.  **Step 4:** Now the bug can never come back without you knowing instantly!

## Summary

Automated testing is about scaling your quality control. Manual testing is about ensuring a great experience for the human at the other end.
