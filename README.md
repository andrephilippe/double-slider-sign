# Double Slider Sign

Component in React Web to create the double slider effect on your Sign in / Sign Up screen.

## Getting Started

Follow these instructions to use the component.

### Import

```
import DoubleSliderSign from 'double_slider_sign';
```

### Example

![](https://i.imgur.com/JeNgTKo.gif)

```
    <DoubleSliderSign>
        <DoubleSliderSign.SignIn>
            <SignIn /> // Your Sign In Component
        </DoubleSliderSign.SignIn>
        <DoubleSliderSign.SignUp>
            <SignUp /> // Your Sign Up Component
        </DoubleSliderSign.SignUp>
        <DoubleSliderSign.Overlay>
            <DoubleSliderSign.Overlay.Left>
                <WelcomeToSignIn /> // Your Welcome Sign In Component
            </DoubleSliderSign.Overlay.Left>
            <DoubleSliderSign.Overlay.Right>
                <WelcomeToSignUp /> // Your Welcome Sign Up Component
            </DoubleSliderSign.Overlay.Right>
        </DoubleSliderSign.Overlay>
    </DoubleSliderSign>
```
