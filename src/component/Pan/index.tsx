import React, { useState } from 'react'
import { Dimensions, Image } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const { width } = Dimensions.get("window")

const Pan = ({ state, setState }: any) => {

    const { length, startPosition, gameOption } = useSelector((state: any) => state.file)

    const startHandleGesture = (event: PanGestureHandlerGestureEvent) => {
        const { absoluteX, absoluteY } = event.nativeEvent


        if ((state.absoluteX - 10) < absoluteX && absoluteX < (state.absoluteX + 10) && (state.absoluteY - 10) < absoluteY && absoluteY < (state.absoluteY + 10)) {
            setState({ uri: state.uri, name: state?.name, x: state.absoluteX, y: state.absoluteY, absoluteX: state.absoluteX, absoluteY: state.absoluteY, enabled: false })
        } else {
            setState({ uri: state.uri, name: state?.name, x: absoluteX, y: absoluteY, absoluteX: state.absoluteX, absoluteY: state.absoluteY, enabled: true })
        }
        // console.log("PAN X", absoluteX);
        // console.log("PAN Y", absoluteY);
        // console.log(state);
    }

    const [active, setActive] = useState<any>(false)

    const activeted = () => {
        setActive(true)
    }

    const ended = () => {
        setActive(false)
    }

    return (
        <>
            {
                state &&
                <PanGestureHandler
                    onGestureEvent={(event) => startHandleGesture(event)}
                    enabled={state.enabled}
                    onActivated={() => activeted()}
                    onEnded={() => ended()}
                >
                    < Image
                        style={{
                            width: (width * 0.95) / length,
                            height: (width * 0.95) / length,
                            position: 'absolute',
                            zIndex: 10,
                            transform: state.x && state.y && [
                                { translateX: state.x },
                                { translateY: state.y }
                            ],
                            resizeMode: 'cover',
                            backgroundColor: 'red'
                        }}
                        source={{ uri: state?.uri }}
                    />
                </PanGestureHandler>
            }
        </>

    )
}

export default Pan
