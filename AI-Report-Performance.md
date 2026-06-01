# Performance Report

## Page: Gallery
- Issue: Images are not optimized; large file sizes slow loading
- Severity: Medium
- Suggestion: Compress images or implement lazy loading

## Component: PortfolioProjects
- Issue: Re-renders unnecessarily on state updates
- Severity: High
- Suggestion: Use React.memo or optimize state handling

## Page: Blog
- Issue: Multiple scripts load sequentially, slowing page render
- Severity: Medium
- Suggestion: Consider code splitting or async loading scripts

## Page: Home
- Issue: Hero background image is large, affecting initial load
- Severity: Medium
- Suggestion: Compress image or use smaller variant for mobile
