# wildhacks-2016
       __      __.__.__  .__      __  .__    .__          ____  __.__.__  .__       _____       _________ 
      /  \    /  \__|  | |  |   _/  |_|  |__ |__| ______ |    |/ _|__|  | |  |     /     \   ___\_____   \
      \   \/\/   /  |  | |  |   \   __\  |  \|  |/  ___/ |      < |  |  | |  |    /  \ /  \_/ __ \ /   __/
       \        /|  |  |_|  |__  |  | |   Y  \  |\___ \  |    |  \|  |  |_|  |__ /    Y    \  ___/|   |   
        \__/\  / |__|____/____/  |__| |___|  /__/____  > |____|__ \__|____/____/ \____|__  /\___  >___|   
             \/                            \/        \/          \/                      \/     \/<___>   
       
This application is intended to help individuals with known allergies identify possible allergens in the food they're consuming.
It works by taking a photo of the food item, using the Clarifai API to label the possible ingredients, then feeding these labels
to another API (Edamam) which generates possible recipes for those ingredients, as well as their dietary cautions/restrictions.

The app was developed using the supersonic interface. To test the app, you must first launch and connect steroids to host the
application. Next, scan the QR code provided using the AppGyver Scanner app (available on the app store/Google play store) to immediately
launch the app. From there, simply press the button to take a picture of your food, then select the reasonable food items present in the
food. The app will then provide you with four of the top recipes containing those ingredients.

Created at Wildhacks 2016 by Vyas Alwar, Trent Cwiok, and Joon Park.

Special thanks to Daniel J. Farris for inspiration and years of wisdom. This app would not be possible without him "losing his stuff."
