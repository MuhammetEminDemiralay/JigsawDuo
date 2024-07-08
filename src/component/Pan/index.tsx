import React, { useState } from 'react'
import { Dimensions, Image } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { setCompletedDatas } from '../../redux/fileSlice'

const { width } = Dimensions.get("window")

const Pan = ({ state, setState }: any) => {

    const { length, completedDatas } = useSelector((state: any) => state.file)
    let puzzleDistance = 2
    const dispatch: any = useDispatch();


    const startHandleGesture = (event: PanGestureHandlerGestureEvent) => {

        const { absoluteX, absoluteY } = event.nativeEvent
        puzzleDistance = 2;


        if ((state.absoluteX - 10) < absoluteX && absoluteX < (state.absoluteX + 10) && (state.absoluteY - 10) < absoluteY && absoluteY < (state.absoluteY + 10)) {
            setState({
                uri: state.uri,
                name: state?.name,
                x: state.absoluteX,
                y: state.absoluteY,
                absoluteX: state.absoluteX,
                absoluteY: state.absoluteY,
                enabled: false,
                zIndex: false,
                whichPerson: state.whichPerson
            })
            const checkData = completedDatas.find((item: any) => item == state.name)
            if (checkData == null) {
                dispatch(setCompletedDatas(state.name))
            }

        } else {
            setState({
                uri: state.uri,
                name: state?.name,
                x: absoluteX,
                y: absoluteY,
                absoluteX: state.absoluteX,
                absoluteY: state.absoluteY,
                enabled: true,
                zIndex: true,
                whichPerson: state.whichPerson
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
                            transform: state.x && state.y && puzzleDistance && [
                                { translateX: state.x - (((width * 0.95) / length) / 2) },
                                { translateY: state?.whichPerson == 'one' ? state.y - (((width * 0.95) / length) * puzzleDistance) : state.y + (((width * 0.95) / length) * puzzleDistance) }
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
