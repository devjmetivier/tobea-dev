# Styling Definitions
Because this project uses a light/dark mode feature, we need to have some clear definitions of when to use, and when not to use component-level rendered styles (styled-components). All of these issues could be avoided by simply writing JUST CSS for everything, but where's the fun in that? Below are the two scenarios where styled-components should/should not be used.

## Use styled-components When:
Style definitions specifically do not relate to the light/dark mode theme. Safe styles include:

* Display
* Margin & Padding
* Borders (but not border color)
* Positioning
* Width
* Height
* Etc

## **Don't** Use styled-components When:
Style definitions specifically relate to the light/dark mode theme. Safe to assume:

* Text Color
* Background Color
* Button Color
* Actionable Elements
* Etc.

> Exception: Colored elements that stay the same color between themes.
