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
            setState({
                uri: state.uri,
                name: state?.name,
                x: state.absoluteX,
                y: state.absoluteY,
                absoluteX: state.absoluteX,
                absoluteY: state.absoluteY,
                enabled: false,
                zIndex: false
            })
        } else {
            setState({
                uri: state.uri,
                name: state?.name,
                x: absoluteX,
                y: absoluteY,
                absoluteX: state.absoluteX,
                absoluteY: state.absoluteY,
                enabled: true,
                zIndex: true
            })
        }
    }




    return (
        <>
            {
                state &&
                <PanGestureHandler
                    onGestureEvent={(event) => startHandleGesture(event)}
                    enabled={state.enabled}
                >
                    < Image
                        style={{
                            width: (width * 0.95) / length,
                            height: (width * 0.95) / length,
                            position: 'absolute',
                            zIndex: state.zIndex ? 2 : 1,
                            transform: state.x && state.y && [
                                { translateX: state.x - (((width * 0.95) / length) / 2) },
                                { translateY: state.y - (((width * 0.95) / length) * 1.5) }
                            ],
                            resizeMode: 'cover',
                        }}
                        source={{ uri: state?.uri }}
                    />
                </PanGestureHandler>
            }
        </>

    )
}

export default Pan
