#!/usr/bin/env python3

fonts = [
"Calibre-Black",
"Calibre-BlackItalic",
"Calibre-Bold",
"Calibre-BoldItalic",
"Calibre-Light",
"Calibre-LightItalic",
"Calibre-Medium",
"Calibre-MediumItalic",
"Calibre-Regular",
"Calibre-SemiboldItalic",
"Calibre-Thin",
"Calibre-ThinItalic",
"SwiftNeueLTPro-Italic",
"SwiftNeueLTPro-Regular",
]

for font in fonts:
    print('''
          @font-face {
            font-family: "%s";
            src:
                url(../assets/fonts/%s.woff2) format("woff2"),
                url(../assets/fonts/%s.woff) format("woff");
          }   
          ''' % (font, font, font))