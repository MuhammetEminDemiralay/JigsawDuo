import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, LayoutChangeEvent, Pressable, Text, View, Platform } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getGamePuzzlePieces, nullGamePuzzlePieces, removePuzzlePiece, setArenaStartPosition, setGameMode, setLength, setPuzzleComplete, } from '../../redux/fileSlice';
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome6, Entypo } from '@expo/vector-icons';
import Pan from '../../component/Pan';
import { LinearGradient } from 'expo-linear-gradient';
import { BannerAd, BannerAdSize, useForeground, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
import { useNavigation } from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';


const { width } = Dimensions.get("window")

const adUnitId = 'ca-app-pub-6544614784049955/7126972822';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

const GameScreen = () => {

    const dispatch: any = useDispatch();
    const navigation: any = useNavigation();
    const { gamePuzzlePieces, puzzleİsComplete, image, gameOption, gamePerson, length, startPosition, loadingGame } = useSelector((state: any) => state.file)

    useEffect(() => {
        dispatch(getGamePuzzlePieces(null))
        const pieceCount = gameOption.split("/").pop();
        dispatch(setLength(Math.sqrt(pieceCount)));
    }, [])

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });
        interstitial.load();
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (loaded) {
            interstitial.show();
        }
    }, [loaded]);

    useEffect(() => {
        if (puzzleİsComplete) {
            navigation.navigate("finish");
        }
    }, [puzzleİsComplete])


    // Banner 1

    const oneBannerRef = useRef<BannerAd>(null);
    const adOneUnitId = 'ca-app-pub-6544614784049955/3207274652';
    useForeground(() => {
        Platform.OS === 'android' && oneBannerRef.current?.load();
    })

    // Banner 2
    const twoBannerRef = useRef<BannerAd>(null);
    const adTwoUnitId = 'ca-app-pub-6544614784049955/3712409798';
    useForeground(() => {
        Platform.OS === 'android' && twoBannerRef.current?.load();
    })


    const [oneHandTranslateX, setOneHandTranslateX] = useState<any>(5);
    const [twoHandTranslateX, setTwoHandTranslateX] = useState<any>(5);

    const oneFlatListRef = useRef<FlatList>(null);
    const twoFlatListRef = useRef<FlatList>(null);

    const [oneFlatlistWidth, setOneFlatlistWidth] = useState<any>();
    const [twoFlatlistWidth, setTwoFlatlistWidth] = useState<any>();

    const [screenWidth, setScreenWidth] = useState<any>();
    const [handWidth, setHandWidth] = useState<any>();
    const [handHeight, setHandHeight] = useState<any>();

    const oneHandGestureEvent = (event: PanGestureHandlerGestureEvent) => {
        const { absoluteX } = event.nativeEvent;
        if (absoluteX > 0 && absoluteX + handWidth < screenWidth) {
            setOneHandTranslateX(absoluteX);

            const value = oneFlatlistWidth / screenWidth
            const handLocation = absoluteX * value

            if (oneFlatListRef.current) {
                oneFlatListRef.current.scrollToOffset({ offset: handLocation, animated: true });
            }
        }
    }

    const twoHandGestureEvent = (event: PanGestureHandlerGestureEvent) => {
        const { absoluteX } = event.nativeEvent;
        if (absoluteX > 0 && absoluteX + handWidth < screenWidth) {
            setTwoHandTranslateX(absoluteX);

            const value = twoFlatlistWidth / screenWidth
            const handLocation = absoluteX * value

            if (twoFlatListRef.current) {
                twoFlatListRef.current.scrollToOffset({ offset: handLocation, animated: true });
            }
        }
    }


    const screenLayout = (event: LayoutChangeEvent) => {
        setScreenWidth(event.nativeEvent.layout.width)
    }

    const handSize = (event: LayoutChangeEvent) => {
        setHandWidth(event.nativeEvent.layout.width)
        setHandHeight(event.nativeEvent.layout.height)
    }


    const [toggle, setToggle] = useState<any>(false);
    const setToggleVisibilty = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    const closeGame = () => {
        dispatch(setGameMode(false))
        dispatch(nullGamePuzzlePieces(null))
    }


    const setFinish = () => {
        dispatch(nullGamePuzzlePieces(null))
        dispatch(setPuzzleComplete())
        dispatch(setGameMode(false))
    }


    const [state1, setState1] = useState<any>();
    const [state2, setState2] = useState<any>();
    const [state3, setState3] = useState<any>();
    const [state4, setState4] = useState<any>();
    const [state5, setState5] = useState<any>();
    const [state6, setState6] = useState<any>();
    const [state7, setState7] = useState<any>();
    const [state8, setState8] = useState<any>();
    const [state9, setState9] = useState<any>();
    const [state10, setState10] = useState<any>();
    const [state11, setState11] = useState<any>();
    const [state12, setState12] = useState<any>();
    const [state13, setState13] = useState<any>();
    const [state14, setState14] = useState<any>();
    const [state15, setState15] = useState<any>();
    const [state16, setState16] = useState<any>();
    const [state17, setState17] = useState<any>();
    const [state18, setState18] = useState<any>();
    const [state19, setState19] = useState<any>();
    const [state20, setState20] = useState<any>();
    const [state21, setState21] = useState<any>();
    const [state22, setState22] = useState<any>();
    const [state23, setState23] = useState<any>();
    const [state24, setState24] = useState<any>();
    const [state25, setState25] = useState<any>();
    const [state26, setState26] = useState<any>();
    const [state27, setState27] = useState<any>();
    const [state28, setState28] = useState<any>();
    const [state29, setState29] = useState<any>();
    const [state30, setState30] = useState<any>();
    const [state31, setState31] = useState<any>();
    const [state32, setState32] = useState<any>();
    const [state33, setState33] = useState<any>();
    const [state34, setState34] = useState<any>();
    const [state35, setState35] = useState<any>();
    const [state36, setState36] = useState<any>();
    const [state37, setState37] = useState<any>();
    const [state38, setState38] = useState<any>();
    const [state39, setState39] = useState<any>();
    const [state40, setState40] = useState<any>();
    const [state41, setState41] = useState<any>();
    const [state42, setState42] = useState<any>();
    const [state43, setState43] = useState<any>();
    const [state44, setState44] = useState<any>();
    const [state45, setState45] = useState<any>();
    const [state46, setState46] = useState<any>();
    const [state47, setState47] = useState<any>();
    const [state48, setState48] = useState<any>();
    const [state49, setState49] = useState<any>();
    const [state50, setState50] = useState<any>();
    const [state51, setState51] = useState<any>();
    const [state52, setState52] = useState<any>();
    const [state53, setState53] = useState<any>();
    const [state54, setState54] = useState<any>();
    const [state55, setState55] = useState<any>();
    const [state56, setState56] = useState<any>();
    const [state57, setState57] = useState<any>();
    const [state58, setState58] = useState<any>();
    const [state59, setState59] = useState<any>();
    const [state60, setState60] = useState<any>();
    const [state61, setState61] = useState<any>();
    const [state62, setState62] = useState<any>();
    const [state63, setState63] = useState<any>();
    const [state64, setState64] = useState<any>();
    const [state65, setState65] = useState<any>();
    const [state66, setState66] = useState<any>();
    const [state67, setState67] = useState<any>();
    const [state68, setState68] = useState<any>();
    const [state69, setState69] = useState<any>();
    const [state70, setState70] = useState<any>();
    const [state71, setState71] = useState<any>();
    const [state72, setState72] = useState<any>();
    const [state73, setState73] = useState<any>();
    const [state74, setState74] = useState<any>();
    const [state75, setState75] = useState<any>();
    const [state76, setState76] = useState<any>();
    const [state77, setState77] = useState<any>();
    const [state78, setState78] = useState<any>();
    const [state79, setState79] = useState<any>();
    const [state80, setState80] = useState<any>();
    const [state81, setState81] = useState<any>();
    const [state82, setState82] = useState<any>();
    const [state83, setState83] = useState<any>();
    const [state84, setState84] = useState<any>();
    const [state85, setState85] = useState<any>();
    const [state86, setState86] = useState<any>();
    const [state87, setState87] = useState<any>();
    const [state88, setState88] = useState<any>();
    const [state89, setState89] = useState<any>();
    const [state90, setState90] = useState<any>();
    const [state91, setState91] = useState<any>();
    const [state92, setState92] = useState<any>();
    const [state93, setState93] = useState<any>();
    const [state94, setState94] = useState<any>();
    const [state95, setState95] = useState<any>();
    const [state96, setState96] = useState<any>();
    const [state97, setState97] = useState<any>();
    const [state98, setState98] = useState<any>();
    const [state99, setState99] = useState<any>();
    const [state100, setState100] = useState<any>();
    const [state101, setState101] = useState<any>();
    const [state102, setState102] = useState<any>();
    const [state103, setState103] = useState<any>();
    const [state104, setState104] = useState<any>();
    const [state105, setState105] = useState<any>();
    const [state106, setState106] = useState<any>();
    const [state107, setState107] = useState<any>();
    const [state108, setState108] = useState<any>();
    const [state109, setState109] = useState<any>();
    const [state110, setState110] = useState<any>();
    const [state111, setState111] = useState<any>();
    const [state112, setState112] = useState<any>();
    const [state113, setState113] = useState<any>();
    const [state114, setState114] = useState<any>();
    const [state115, setState115] = useState<any>();
    const [state116, setState116] = useState<any>();
    const [state117, setState117] = useState<any>();
    const [state118, setState118] = useState<any>();
    const [state119, setState119] = useState<any>();
    const [state120, setState120] = useState<any>();
    const [state121, setState121] = useState<any>();
    const [state122, setState122] = useState<any>();
    const [state123, setState123] = useState<any>();
    const [state124, setState124] = useState<any>();
    const [state125, setState125] = useState<any>();
    const [state126, setState126] = useState<any>();
    const [state127, setState127] = useState<any>();
    const [state128, setState128] = useState<any>();
    const [state129, setState129] = useState<any>();
    const [state130, setState130] = useState<any>();
    const [state131, setState131] = useState<any>();
    const [state132, setState132] = useState<any>();
    const [state133, setState133] = useState<any>();
    const [state134, setState134] = useState<any>();
    const [state135, setState135] = useState<any>();
    const [state136, setState136] = useState<any>();
    const [state137, setState137] = useState<any>();
    const [state138, setState138] = useState<any>();
    const [state139, setState139] = useState<any>();
    const [state140, setState140] = useState<any>();
    const [state141, setState141] = useState<any>();
    const [state142, setState142] = useState<any>();
    const [state143, setState143] = useState<any>();
    const [state144, setState144] = useState<any>();
    const [state145, setState145] = useState<any>();
    const [state146, setState146] = useState<any>();
    const [state147, setState147] = useState<any>();
    const [state148, setState148] = useState<any>();
    const [state149, setState149] = useState<any>();
    const [state150, setState150] = useState<any>();
    const [state151, setState151] = useState<any>();
    const [state152, setState152] = useState<any>();
    const [state153, setState153] = useState<any>();
    const [state154, setState154] = useState<any>();
    const [state155, setState155] = useState<any>();
    const [state156, setState156] = useState<any>();
    const [state157, setState157] = useState<any>();
    const [state158, setState158] = useState<any>();
    const [state159, setState159] = useState<any>();
    const [state160, setState160] = useState<any>();
    const [state161, setState161] = useState<any>();
    const [state162, setState162] = useState<any>();
    const [state163, setState163] = useState<any>();
    const [state164, setState164] = useState<any>();
    const [state165, setState165] = useState<any>();
    const [state166, setState166] = useState<any>();
    const [state167, setState167] = useState<any>();
    const [state168, setState168] = useState<any>();
    const [state169, setState169] = useState<any>();
    const [state170, setState170] = useState<any>();
    const [state171, setState171] = useState<any>();
    const [state172, setState172] = useState<any>();
    const [state173, setState173] = useState<any>();
    const [state174, setState174] = useState<any>();
    const [state175, setState175] = useState<any>();
    const [state176, setState176] = useState<any>();
    const [state177, setState177] = useState<any>();
    const [state178, setState178] = useState<any>();
    const [state179, setState179] = useState<any>();
    const [state180, setState180] = useState<any>();
    const [state181, setState181] = useState<any>();
    const [state182, setState182] = useState<any>();
    const [state183, setState183] = useState<any>();
    const [state184, setState184] = useState<any>();
    const [state185, setState185] = useState<any>();
    const [state186, setState186] = useState<any>();
    const [state187, setState187] = useState<any>();
    const [state188, setState188] = useState<any>();
    const [state189, setState189] = useState<any>();
    const [state190, setState190] = useState<any>();
    const [state191, setState191] = useState<any>();
    const [state192, setState192] = useState<any>();
    const [state193, setState193] = useState<any>();
    const [state194, setState194] = useState<any>();
    const [state195, setState195] = useState<any>();
    const [state196, setState196] = useState<any>();
    const [state197, setState197] = useState<any>();
    const [state198, setState198] = useState<any>();
    const [state199, setState199] = useState<any>();
    const [state200, setState200] = useState<any>();
    const [state201, setState201] = useState<any>();
    const [state202, setState202] = useState<any>();
    const [state203, setState203] = useState<any>();
    const [state204, setState204] = useState<any>();
    const [state205, setState205] = useState<any>();
    const [state206, setState206] = useState<any>();
    const [state207, setState207] = useState<any>();
    const [state208, setState208] = useState<any>();
    const [state209, setState209] = useState<any>();
    const [state210, setState210] = useState<any>();
    const [state211, setState211] = useState<any>();
    const [state212, setState212] = useState<any>();
    const [state213, setState213] = useState<any>();
    const [state214, setState214] = useState<any>();
    const [state215, setState215] = useState<any>();
    const [state216, setState216] = useState<any>();
    const [state217, setState217] = useState<any>();
    const [state218, setState218] = useState<any>();
    const [state219, setState219] = useState<any>();
    const [state220, setState220] = useState<any>();
    const [state221, setState221] = useState<any>();
    const [state222, setState222] = useState<any>();
    const [state223, setState223] = useState<any>();
    const [state224, setState224] = useState<any>();
    const [state225, setState225] = useState<any>();
    const [state226, setState226] = useState<any>();
    const [state227, setState227] = useState<any>();
    const [state228, setState228] = useState<any>();
    const [state229, setState229] = useState<any>();
    const [state230, setState230] = useState<any>();
    const [state231, setState231] = useState<any>();
    const [state232, setState232] = useState<any>();
    const [state233, setState233] = useState<any>();
    const [state234, setState234] = useState<any>();
    const [state235, setState235] = useState<any>();
    const [state236, setState236] = useState<any>();
    const [state237, setState237] = useState<any>();
    const [state238, setState238] = useState<any>();
    const [state239, setState239] = useState<any>();
    const [state240, setState240] = useState<any>();
    const [state241, setState241] = useState<any>();
    const [state242, setState242] = useState<any>();
    const [state243, setState243] = useState<any>();
    const [state244, setState244] = useState<any>();
    const [state245, setState245] = useState<any>();
    const [state246, setState246] = useState<any>();
    const [state247, setState247] = useState<any>();
    const [state248, setState248] = useState<any>();
    const [state249, setState249] = useState<any>();
    const [state250, setState250] = useState<any>();
    const [state251, setState251] = useState<any>();
    const [state252, setState252] = useState<any>();
    const [state253, setState253] = useState<any>();
    const [state254, setState254] = useState<any>();
    const [state255, setState255] = useState<any>();
    const [state256, setState256] = useState<any>();
    const [state257, setState257] = useState<any>();
    const [state258, setState258] = useState<any>();
    const [state259, setState259] = useState<any>();
    const [state260, setState260] = useState<any>();
    const [state261, setState261] = useState<any>();
    const [state262, setState262] = useState<any>();
    const [state263, setState263] = useState<any>();
    const [state264, setState264] = useState<any>();
    const [state265, setState265] = useState<any>();
    const [state266, setState266] = useState<any>();
    const [state267, setState267] = useState<any>();
    const [state268, setState268] = useState<any>();
    const [state269, setState269] = useState<any>();
    const [state270, setState270] = useState<any>();
    const [state271, setState271] = useState<any>();
    const [state272, setState272] = useState<any>();
    const [state273, setState273] = useState<any>();
    const [state274, setState274] = useState<any>();
    const [state275, setState275] = useState<any>();
    const [state276, setState276] = useState<any>();
    const [state277, setState277] = useState<any>();
    const [state278, setState278] = useState<any>();
    const [state279, setState279] = useState<any>();
    const [state280, setState280] = useState<any>();
    const [state281, setState281] = useState<any>();
    const [state282, setState282] = useState<any>();
    const [state283, setState283] = useState<any>();
    const [state284, setState284] = useState<any>();
    const [state285, setState285] = useState<any>();
    const [state286, setState286] = useState<any>();
    const [state287, setState287] = useState<any>();
    const [state288, setState288] = useState<any>();
    const [state289, setState289] = useState<any>();
    const [state290, setState290] = useState<any>();
    const [state291, setState291] = useState<any>();
    const [state292, setState292] = useState<any>();
    const [state293, setState293] = useState<any>();
    const [state294, setState294] = useState<any>();
    const [state295, setState295] = useState<any>();
    const [state296, setState296] = useState<any>();
    const [state297, setState297] = useState<any>();
    const [state298, setState298] = useState<any>();
    const [state299, setState299] = useState<any>();
    const [state300, setState300] = useState<any>();
    const [state301, setState301] = useState<any>();
    const [state302, setState302] = useState<any>();
    const [state303, setState303] = useState<any>();
    const [state304, setState304] = useState<any>();
    const [state305, setState305] = useState<any>();
    const [state306, setState306] = useState<any>();
    const [state307, setState307] = useState<any>();
    const [state308, setState308] = useState<any>();
    const [state309, setState309] = useState<any>();
    const [state310, setState310] = useState<any>();
    const [state311, setState311] = useState<any>();
    const [state312, setState312] = useState<any>();
    const [state313, setState313] = useState<any>();
    const [state314, setState314] = useState<any>();
    const [state315, setState315] = useState<any>();
    const [state316, setState316] = useState<any>();
    const [state317, setState317] = useState<any>();
    const [state318, setState318] = useState<any>();
    const [state319, setState319] = useState<any>();
    const [state320, setState320] = useState<any>();
    const [state321, setState321] = useState<any>();
    const [state322, setState322] = useState<any>();
    const [state323, setState323] = useState<any>();
    const [state324, setState324] = useState<any>();
    const [state325, setState325] = useState<any>();
    const [state326, setState326] = useState<any>();
    const [state327, setState327] = useState<any>();
    const [state328, setState328] = useState<any>();
    const [state329, setState329] = useState<any>();
    const [state330, setState330] = useState<any>();
    const [state331, setState331] = useState<any>();
    const [state332, setState332] = useState<any>();
    const [state333, setState333] = useState<any>();
    const [state334, setState334] = useState<any>();
    const [state335, setState335] = useState<any>();
    const [state336, setState336] = useState<any>();
    const [state337, setState337] = useState<any>();
    const [state338, setState338] = useState<any>();
    const [state339, setState339] = useState<any>();
    const [state340, setState340] = useState<any>();
    const [state341, setState341] = useState<any>();
    const [state342, setState342] = useState<any>();
    const [state343, setState343] = useState<any>();
    const [state344, setState344] = useState<any>();
    const [state345, setState345] = useState<any>();
    const [state346, setState346] = useState<any>();
    const [state347, setState347] = useState<any>();
    const [state348, setState348] = useState<any>();
    const [state349, setState349] = useState<any>();
    const [state350, setState350] = useState<any>();
    const [state351, setState351] = useState<any>();
    const [state352, setState352] = useState<any>();
    const [state353, setState353] = useState<any>();
    const [state354, setState354] = useState<any>();
    const [state355, setState355] = useState<any>();
    const [state356, setState356] = useState<any>();
    const [state357, setState357] = useState<any>();
    const [state358, setState358] = useState<any>();
    const [state359, setState359] = useState<any>();
    const [state360, setState360] = useState<any>();
    const [state361, setState361] = useState<any>();
    const [state362, setState362] = useState<any>();
    const [state363, setState363] = useState<any>();
    const [state364, setState364] = useState<any>();
    const [state365, setState365] = useState<any>();
    const [state366, setState366] = useState<any>();
    const [state367, setState367] = useState<any>();
    const [state368, setState368] = useState<any>();
    const [state369, setState369] = useState<any>();
    const [state370, setState370] = useState<any>();
    const [state371, setState371] = useState<any>();
    const [state372, setState372] = useState<any>();
    const [state373, setState373] = useState<any>();
    const [state374, setState374] = useState<any>();
    const [state375, setState375] = useState<any>();
    const [state376, setState376] = useState<any>();
    const [state377, setState377] = useState<any>();
    const [state378, setState378] = useState<any>();
    const [state379, setState379] = useState<any>();
    const [state380, setState380] = useState<any>();
    const [state381, setState381] = useState<any>();
    const [state382, setState382] = useState<any>();
    const [state383, setState383] = useState<any>();
    const [state384, setState384] = useState<any>();
    const [state385, setState385] = useState<any>();
    const [state386, setState386] = useState<any>();
    const [state387, setState387] = useState<any>();
    const [state388, setState388] = useState<any>();
    const [state389, setState389] = useState<any>();
    const [state390, setState390] = useState<any>();
    const [state391, setState391] = useState<any>();
    const [state392, setState392] = useState<any>();
    const [state393, setState393] = useState<any>();
    const [state394, setState394] = useState<any>();
    const [state395, setState395] = useState<any>();
    const [state396, setState396] = useState<any>();
    const [state397, setState397] = useState<any>();
    const [state398, setState398] = useState<any>();
    const [state399, setState399] = useState<any>();
    const [state400, setState400] = useState<any>();


    const panWidth = (width * 0.95) / length


    const onHandlerStateChange = (event: any, item: any) => {

        if (event.nativeEvent.state === State.END) {
            dispatch(removePuzzlePiece(item))


            let puzzleDistance = 2


            const number = Number(item.name)

            const remainder = number % length;
            const layer = Math.floor(number / length);

            let absoluteX;
            let absoluteY;

            if (number <= length) {
                absoluteX = startPosition.x + (number - 1) * panWidth;
                absoluteY = startPosition.y
            }
            else if (remainder == 1) {
                absoluteX = startPosition.x;
                absoluteY = startPosition.y + layer * panWidth;
            } else if (number > length && remainder != 1 && remainder != 0) {
                absoluteX = startPosition.x + (remainder - 1) * panWidth;
                absoluteY = startPosition.y + (layer * panWidth);
            } else if (number > length && remainder == 0) {
                absoluteX = startPosition.x + (length - 1) * panWidth;
                absoluteY = startPosition.y + (layer - 1) * panWidth;
            }

            const newItem = {
                uri: item.uri,
                name: item.name,
                x: event.nativeEvent.absoluteX,
                y: event.nativeEvent.absoluteY,
                absoluteX: absoluteX + (((width * 0.95) / length) / 2),
                absoluteY: item?.whichPerson == 'one' ? absoluteY + (((width * 0.95) / length) * puzzleDistance) : absoluteY - (((width * 0.95) / length) * puzzleDistance),
                enabled: true,
                zIndex: true,
                whichPerson: item?.whichPerson
            }

            if (0 < number && number <= 10) {
                item.name == "1" ? setState1(newItem) :
                    item.name == "2" ? setState2(newItem) :
                        item.name == "3" ? setState3(newItem) :
                            item.name == "4" ? setState4(newItem) :
                                item.name == "5" ? setState5(newItem) :
                                    item.name == "6" ? setState6(newItem) :
                                        item.name == "7" ? setState7(newItem) :
                                            item.name == "8" ? setState8(newItem) :
                                                item.name == "9" ? setState9(newItem) :
                                                    item.name == "10" ? setState10(newItem) : null
            } else if (11 <= number && number <= 20) {
                item.name == "11" ? setState11(newItem) :
                    item.name == "12" ? setState12(newItem) :
                        item.name == "13" ? setState13(newItem) :
                            item.name == "14" ? setState14(newItem) :
                                item.name == "15" ? setState15(newItem) :
                                    item.name == "16" ? setState16(newItem) :
                                        item.name == "17" ? setState17(newItem) :
                                            item.name == "18" ? setState18(newItem) :
                                                item.name == "19" ? setState19(newItem) :
                                                    item.name == "20" ? setState20(newItem) : null
            } else if (21 <= number && number <= 30) {
                item.name == "21" ? setState21(newItem) :
                    item.name == "22" ? setState22(newItem) :
                        item.name == "23" ? setState23(newItem) :
                            item.name == "24" ? setState24(newItem) :
                                item.name == "25" ? setState25(newItem) :
                                    item.name == "26" ? setState26(newItem) :
                                        item.name == "27" ? setState27(newItem) :
                                            item.name == "28" ? setState28(newItem) :
                                                item.name == "29" ? setState29(newItem) :
                                                    item.name == "30" ? setState30(newItem) : null
            } else if (31 <= number && number <= 40) {
                item.name == "31" ? setState31(newItem) :
                    item.name == "32" ? setState32(newItem) :
                        item.name == "33" ? setState33(newItem) :
                            item.name == "34" ? setState34(newItem) :
                                item.name == "35" ? setState35(newItem) :
                                    item.name == "36" ? setState36(newItem) :
                                        item.name == "37" ? setState37(newItem) :
                                            item.name == "38" ? setState38(newItem) :
                                                item.name == "39" ? setState39(newItem) :
                                                    item.name == "40" ? setState40(newItem) : null
            } else if (41 <= number && number <= 50) {
                item.name == "41" ? setState41(newItem) :
                    item.name == "42" ? setState42(newItem) :
                        item.name == "43" ? setState43(newItem) :
                            item.name == "44" ? setState44(newItem) :
                                item.name == "45" ? setState45(newItem) :
                                    item.name == "46" ? setState46(newItem) :
                                        item.name == "47" ? setState47(newItem) :
                                            item.name == "48" ? setState48(newItem) :
                                                item.name == "49" ? setState49(newItem) :
                                                    item.name == "50" ? setState50(newItem) : null
            } else if (51 <= number && number <= 60) {
                item.name == "51" ? setState51(newItem) :
                    item.name == "52" ? setState52(newItem) :
                        item.name == "53" ? setState53(newItem) :
                            item.name == "54" ? setState54(newItem) :
                                item.name == "55" ? setState55(newItem) :
                                    item.name == "56" ? setState56(newItem) :
                                        item.name == "57" ? setState57(newItem) :
                                            item.name == "58" ? setState58(newItem) :
                                                item.name == "59" ? setState59(newItem) :
                                                    item.name == "60" ? setState60(newItem) : null
            } else if (61 <= number && number <= 70) {
                item.name == "61" ? setState61(newItem) :
                    item.name == "62" ? setState62(newItem) :
                        item.name == "63" ? setState63(newItem) :
                            item.name == "64" ? setState64(newItem) :
                                item.name == "65" ? setState65(newItem) :
                                    item.name == "66" ? setState66(newItem) :
                                        item.name == "67" ? setState67(newItem) :
                                            item.name == "68" ? setState68(newItem) :
                                                item.name == "69" ? setState69(newItem) :
                                                    item.name == "70" ? setState70(newItem) : null
            } else if (71 <= number && number <= 80) {
                item.name == "71" ? setState71(newItem) :
                    item.name == "72" ? setState72(newItem) :
                        item.name == "73" ? setState73(newItem) :
                            item.name == "74" ? setState74(newItem) :
                                item.name == "75" ? setState75(newItem) :
                                    item.name == "76" ? setState76(newItem) :
                                        item.name == "77" ? setState77(newItem) :
                                            item.name == "78" ? setState78(newItem) :
                                                item.name == "79" ? setState79(newItem) :
                                                    item.name == "80" ? setState80(newItem) : null
            } else if (81 <= number && number <= 90) {
                item.name == "81" ? setState81(newItem) :
                    item.name == "82" ? setState82(newItem) :
                        item.name == "83" ? setState83(newItem) :
                            item.name == "84" ? setState84(newItem) :
                                item.name == "85" ? setState85(newItem) :
                                    item.name == "86" ? setState86(newItem) :
                                        item.name == "87" ? setState87(newItem) :
                                            item.name == "88" ? setState88(newItem) :
                                                item.name == "89" ? setState89(newItem) :
                                                    item.name == "90" ? setState90(newItem) : null
            } else if (91 <= number && number <= 100) {
                item.name == "91" ? setState91(newItem) :
                    item.name == "92" ? setState92(newItem) :
                        item.name == "93" ? setState93(newItem) :
                            item.name == "94" ? setState94(newItem) :
                                item.name == "95" ? setState95(newItem) :
                                    item.name == "96" ? setState96(newItem) :
                                        item.name == "97" ? setState97(newItem) :
                                            item.name == "98" ? setState98(newItem) :
                                                item.name == "99" ? setState99(newItem) :
                                                    item.name == "100" ? setState100(newItem) : null
            } else if (101 <= number && number <= 110) {
                item.name === "101" ? setState101(newItem) :
                    item.name === "102" ? setState102(newItem) :
                        item.name === "103" ? setState103(newItem) :
                            item.name === "104" ? setState104(newItem) :
                                item.name === "105" ? setState105(newItem) :
                                    item.name === "106" ? setState106(newItem) :
                                        item.name === "107" ? setState107(newItem) :
                                            item.name === "108" ? setState108(newItem) :
                                                item.name === "109" ? setState109(newItem) :
                                                    item.name === "110" ? setState110(newItem) : null;
            } else if (111 <= number && number <= 120) {
                item.name === "111" ? setState111(newItem) :
                    item.name === "112" ? setState112(newItem) :
                        item.name === "113" ? setState113(newItem) :
                            item.name === "114" ? setState114(newItem) :
                                item.name === "115" ? setState115(newItem) :
                                    item.name === "116" ? setState116(newItem) :
                                        item.name === "117" ? setState117(newItem) :
                                            item.name === "118" ? setState118(newItem) :
                                                item.name === "119" ? setState119(newItem) :
                                                    item.name === "120" ? setState120(newItem) : null;
            } else if (121 <= number && number <= 130) {
                item.name === "121" ? setState121(newItem) :
                    item.name === "122" ? setState122(newItem) :
                        item.name === "123" ? setState123(newItem) :
                            item.name === "124" ? setState124(newItem) :
                                item.name === "125" ? setState125(newItem) :
                                    item.name === "126" ? setState126(newItem) :
                                        item.name === "127" ? setState127(newItem) :
                                            item.name === "128" ? setState128(newItem) :
                                                item.name === "129" ? setState129(newItem) :
                                                    item.name === "130" ? setState130(newItem) : null;
            } else if (131 <= number && number <= 140) {
                item.name === "131" ? setState131(newItem) :
                    item.name === "132" ? setState132(newItem) :
                        item.name === "133" ? setState133(newItem) :
                            item.name === "134" ? setState134(newItem) :
                                item.name === "135" ? setState135(newItem) :
                                    item.name === "136" ? setState136(newItem) :
                                        item.name === "137" ? setState137(newItem) :
                                            item.name === "138" ? setState138(newItem) :
                                                item.name === "139" ? setState139(newItem) :
                                                    item.name === "140" ? setState140(newItem) : null;
            } else if (141 <= number && number <= 150) {
                item.name === "141" ? setState141(newItem) :
                    item.name === "142" ? setState142(newItem) :
                        item.name === "143" ? setState143(newItem) :
                            item.name === "144" ? setState144(newItem) :
                                item.name === "145" ? setState145(newItem) :
                                    item.name === "146" ? setState146(newItem) :
                                        item.name === "147" ? setState147(newItem) :
                                            item.name === "148" ? setState148(newItem) :
                                                item.name === "149" ? setState149(newItem) :
                                                    item.name === "150" ? setState150(newItem) : null;
            } else if (151 <= number && number <= 160) {
                item.name === "151" ? setState151(newItem) :
                    item.name === "152" ? setState152(newItem) :
                        item.name === "153" ? setState153(newItem) :
                            item.name === "154" ? setState154(newItem) :
                                item.name === "155" ? setState155(newItem) :
                                    item.name === "156" ? setState156(newItem) :
                                        item.name === "157" ? setState157(newItem) :
                                            item.name === "158" ? setState158(newItem) :
                                                item.name === "159" ? setState159(newItem) :
                                                    item.name === "160" ? setState160(newItem) : null;
            } else if (161 <= number && number <= 170) {
                item.name === "161" ? setState161(newItem) :
                    item.name === "162" ? setState162(newItem) :
                        item.name === "163" ? setState163(newItem) :
                            item.name === "164" ? setState164(newItem) :
                                item.name === "165" ? setState165(newItem) :
                                    item.name === "166" ? setState166(newItem) :
                                        item.name === "167" ? setState167(newItem) :
                                            item.name === "168" ? setState168(newItem) :
                                                item.name === "169" ? setState169(newItem) :
                                                    item.name === "170" ? setState170(newItem) : null;
            } else if (171 <= number && number <= 180) {
                item.name === "171" ? setState171(newItem) :
                    item.name === "172" ? setState172(newItem) :
                        item.name === "173" ? setState173(newItem) :
                            item.name === "174" ? setState174(newItem) :
                                item.name === "175" ? setState175(newItem) :
                                    item.name === "176" ? setState176(newItem) :
                                        item.name === "177" ? setState177(newItem) :
                                            item.name === "178" ? setState178(newItem) :
                                                item.name === "179" ? setState179(newItem) :
                                                    item.name === "180" ? setState180(newItem) : null;
            } else if (181 <= number && number <= 190) {
                item.name === "181" ? setState181(newItem) :
                    item.name === "182" ? setState182(newItem) :
                        item.name === "183" ? setState183(newItem) :
                            item.name === "184" ? setState184(newItem) :
                                item.name === "185" ? setState185(newItem) :
                                    item.name === "186" ? setState186(newItem) :
                                        item.name === "187" ? setState187(newItem) :
                                            item.name === "188" ? setState188(newItem) :
                                                item.name === "189" ? setState189(newItem) :
                                                    item.name === "190" ? setState190(newItem) : null;
            } else if (191 <= number && number <= 200) {
                item.name === "191" ? setState191(newItem) :
                    item.name === "192" ? setState192(newItem) :
                        item.name === "193" ? setState193(newItem) :
                            item.name === "194" ? setState194(newItem) :
                                item.name === "195" ? setState195(newItem) :
                                    item.name === "196" ? setState196(newItem) :
                                        item.name === "197" ? setState197(newItem) :
                                            item.name === "198" ? setState198(newItem) :
                                                item.name === "199" ? setState199(newItem) :
                                                    item.name === "200" ? setState200(newItem) : null;
            } else if (201 <= number && number <= 210) {
                item.name === "201" ? setState201(newItem) :
                    item.name === "202" ? setState202(newItem) :
                        item.name === "203" ? setState203(newItem) :
                            item.name === "204" ? setState204(newItem) :
                                item.name === "205" ? setState205(newItem) :
                                    item.name === "206" ? setState206(newItem) :
                                        item.name === "207" ? setState207(newItem) :
                                            item.name === "208" ? setState208(newItem) :
                                                item.name === "209" ? setState209(newItem) :
                                                    item.name === "210" ? setState210(newItem) : null;
            } else if (211 <= number && number <= 220) {
                item.name === "211" ? setState211(newItem) :
                    item.name === "212" ? setState212(newItem) :
                        item.name === "213" ? setState213(newItem) :
                            item.name === "214" ? setState214(newItem) :
                                item.name === "215" ? setState215(newItem) :
                                    item.name === "216" ? setState216(newItem) :
                                        item.name === "217" ? setState217(newItem) :
                                            item.name === "218" ? setState218(newItem) :
                                                item.name === "219" ? setState219(newItem) :
                                                    item.name === "220" ? setState220(newItem) : null;
            } else if (221 <= number && number <= 230) {
                item.name === "221" ? setState221(newItem) :
                    item.name === "222" ? setState222(newItem) :
                        item.name === "223" ? setState223(newItem) :
                            item.name === "224" ? setState224(newItem) :
                                item.name === "225" ? setState225(newItem) :
                                    item.name === "226" ? setState226(newItem) :
                                        item.name === "227" ? setState227(newItem) :
                                            item.name === "228" ? setState228(newItem) :
                                                item.name === "229" ? setState229(newItem) :
                                                    item.name === "230" ? setState230(newItem) : null;
            } else if (231 <= number && number <= 240) {
                item.name === "231" ? setState231(newItem) :
                    item.name === "232" ? setState232(newItem) :
                        item.name === "233" ? setState233(newItem) :
                            item.name === "234" ? setState234(newItem) :
                                item.name === "235" ? setState235(newItem) :
                                    item.name === "236" ? setState236(newItem) :
                                        item.name === "237" ? setState237(newItem) :
                                            item.name === "238" ? setState238(newItem) :
                                                item.name === "239" ? setState239(newItem) :
                                                    item.name === "240" ? setState240(newItem) : null;
            } else if (241 <= number && number <= 250) {
                item.name === "241" ? setState241(newItem) :
                    item.name === "242" ? setState242(newItem) :
                        item.name === "243" ? setState243(newItem) :
                            item.name === "244" ? setState244(newItem) :
                                item.name === "245" ? setState245(newItem) :
                                    item.name === "246" ? setState246(newItem) :
                                        item.name === "247" ? setState247(newItem) :
                                            item.name === "248" ? setState248(newItem) :
                                                item.name === "249" ? setState249(newItem) :
                                                    item.name === "250" ? setState250(newItem) : null;
            } else if (251 <= number && number <= 260) {
                item.name === "251" ? setState251(newItem) :
                    item.name === "252" ? setState252(newItem) :
                        item.name === "253" ? setState253(newItem) :
                            item.name === "254" ? setState254(newItem) :
                                item.name === "255" ? setState255(newItem) :
                                    item.name === "256" ? setState256(newItem) :
                                        item.name === "257" ? setState257(newItem) :
                                            item.name === "258" ? setState258(newItem) :
                                                item.name === "259" ? setState259(newItem) :
                                                    item.name === "260" ? setState260(newItem) : null;
            } else if (261 <= number && number <= 270) {
                item.name === "261" ? setState261(newItem) :
                    item.name === "262" ? setState262(newItem) :
                        item.name === "263" ? setState263(newItem) :
                            item.name === "264" ? setState264(newItem) :
                                item.name === "265" ? setState265(newItem) :
                                    item.name === "266" ? setState266(newItem) :
                                        item.name === "267" ? setState267(newItem) :
                                            item.name === "268" ? setState268(newItem) :
                                                item.name === "269" ? setState269(newItem) :
                                                    item.name === "270" ? setState270(newItem) : null;
            } else if (271 <= number && number <= 280) {
                item.name === "271" ? setState271(newItem) :
                    item.name === "272" ? setState272(newItem) :
                        item.name === "273" ? setState273(newItem) :
                            item.name === "274" ? setState274(newItem) :
                                item.name === "275" ? setState275(newItem) :
                                    item.name === "276" ? setState276(newItem) :
                                        item.name === "277" ? setState277(newItem) :
                                            item.name === "278" ? setState278(newItem) :
                                                item.name === "279" ? setState279(newItem) :
                                                    item.name === "280" ? setState280(newItem) : null;
            } else if (281 <= number && number <= 290) {
                item.name === "281" ? setState281(newItem) :
                    item.name === "282" ? setState282(newItem) :
                        item.name === "283" ? setState283(newItem) :
                            item.name === "284" ? setState284(newItem) :
                                item.name === "285" ? setState285(newItem) :
                                    item.name === "286" ? setState286(newItem) :
                                        item.name === "287" ? setState287(newItem) :
                                            item.name === "288" ? setState288(newItem) :
                                                item.name === "289" ? setState289(newItem) :
                                                    item.name === "290" ? setState290(newItem) : null;
            } else if (291 <= number && number <= 300) {
                item.name === "291" ? setState291(newItem) :
                    item.name === "292" ? setState292(newItem) :
                        item.name === "293" ? setState293(newItem) :
                            item.name === "294" ? setState294(newItem) :
                                item.name === "295" ? setState295(newItem) :
                                    item.name === "296" ? setState296(newItem) :
                                        item.name === "297" ? setState297(newItem) :
                                            item.name === "298" ? setState298(newItem) :
                                                item.name === "299" ? setState299(newItem) :
                                                    item.name === "300" ? setState300(newItem) : null;
            } else if (301 <= number && number <= 310) {
                item.name === "301" ? setState301(newItem) :
                    item.name === "302" ? setState302(newItem) :
                        item.name === "303" ? setState303(newItem) :
                            item.name === "304" ? setState304(newItem) :
                                item.name === "305" ? setState305(newItem) :
                                    item.name === "306" ? setState306(newItem) :
                                        item.name === "307" ? setState307(newItem) :
                                            item.name === "308" ? setState308(newItem) :
                                                item.name === "309" ? setState309(newItem) :
                                                    item.name === "310" ? setState310(newItem) : null;
            } else if (311 <= number && number <= 320) {
                item.name === "311" ? setState311(newItem) :
                    item.name === "312" ? setState312(newItem) :
                        item.name === "313" ? setState313(newItem) :
                            item.name === "314" ? setState314(newItem) :
                                item.name === "315" ? setState315(newItem) :
                                    item.name === "316" ? setState316(newItem) :
                                        item.name === "317" ? setState317(newItem) :
                                            item.name === "318" ? setState318(newItem) :
                                                item.name === "319" ? setState319(newItem) :
                                                    item.name === "320" ? setState320(newItem) : null;
            } else if (321 <= number && number <= 330) {
                item.name === "321" ? setState321(newItem) :
                    item.name === "322" ? setState322(newItem) :
                        item.name === "323" ? setState323(newItem) :
                            item.name === "324" ? setState324(newItem) :
                                item.name === "325" ? setState325(newItem) :
                                    item.name === "326" ? setState326(newItem) :
                                        item.name === "327" ? setState327(newItem) :
                                            item.name === "328" ? setState328(newItem) :
                                                item.name === "329" ? setState329(newItem) :
                                                    item.name === "330" ? setState330(newItem) : null;
            } else if (331 <= number && number <= 340) {
                item.name === "331" ? setState331(newItem) :
                    item.name === "332" ? setState332(newItem) :
                        item.name === "333" ? setState333(newItem) :
                            item.name === "334" ? setState334(newItem) :
                                item.name === "335" ? setState335(newItem) :
                                    item.name === "336" ? setState336(newItem) :
                                        item.name === "337" ? setState337(newItem) :
                                            item.name === "338" ? setState338(newItem) :
                                                item.name === "339" ? setState339(newItem) :
                                                    item.name === "340" ? setState340(newItem) : null;
            } else if (341 <= number && number <= 350) {
                item.name === "341" ? setState341(newItem) :
                    item.name === "342" ? setState342(newItem) :
                        item.name === "343" ? setState343(newItem) :
                            item.name === "344" ? setState344(newItem) :
                                item.name === "345" ? setState345(newItem) :
                                    item.name === "346" ? setState346(newItem) :
                                        item.name === "347" ? setState347(newItem) :
                                            item.name === "348" ? setState348(newItem) :
                                                item.name === "349" ? setState349(newItem) :
                                                    item.name === "350" ? setState350(newItem) : null;
            } else if (351 <= number && number <= 360) {
                item.name === "351" ? setState351(newItem) :
                    item.name === "352" ? setState352(newItem) :
                        item.name === "353" ? setState353(newItem) :
                            item.name === "354" ? setState354(newItem) :
                                item.name === "355" ? setState355(newItem) :
                                    item.name === "356" ? setState356(newItem) :
                                        item.name === "357" ? setState357(newItem) :
                                            item.name === "358" ? setState358(newItem) :
                                                item.name === "359" ? setState359(newItem) :
                                                    item.name === "360" ? setState360(newItem) : null;
            } else if (361 <= number && number <= 370) {
                item.name === "361" ? setState361(newItem) :
                    item.name === "362" ? setState362(newItem) :
                        item.name === "363" ? setState363(newItem) :
                            item.name === "364" ? setState364(newItem) :
                                item.name === "365" ? setState365(newItem) :
                                    item.name === "366" ? setState366(newItem) :
                                        item.name === "367" ? setState367(newItem) :
                                            item.name === "368" ? setState368(newItem) :
                                                item.name === "369" ? setState369(newItem) :
                                                    item.name === "370" ? setState370(newItem) : null;
            } else if (371 <= number && number <= 380) {
                item.name === "371" ? setState371(newItem) :
                    item.name === "372" ? setState372(newItem) :
                        item.name === "373" ? setState373(newItem) :
                            item.name === "374" ? setState374(newItem) :
                                item.name === "375" ? setState375(newItem) :
                                    item.name === "376" ? setState376(newItem) :
                                        item.name === "377" ? setState377(newItem) :
                                            item.name === "378" ? setState378(newItem) :
                                                item.name === "379" ? setState379(newItem) :
                                                    item.name === "380" ? setState380(newItem) : null;
            } else if (381 <= number && number <= 390) {
                item.name === "381" ? setState381(newItem) :
                    item.name === "382" ? setState382(newItem) :
                        item.name === "383" ? setState383(newItem) :
                            item.name === "384" ? setState384(newItem) :
                                item.name === "385" ? setState385(newItem) :
                                    item.name === "386" ? setState386(newItem) :
                                        item.name === "387" ? setState387(newItem) :
                                            item.name === "388" ? setState388(newItem) :
                                                item.name === "389" ? setState389(newItem) :
                                                    item.name === "390" ? setState390(newItem) : null;
            } else if (391 <= number && number <= 400) {
                item.name === "391" ? setState391(newItem) :
                    item.name === "392" ? setState392(newItem) :
                        item.name === "393" ? setState393(newItem) :
                            item.name === "394" ? setState394(newItem) :
                                item.name === "395" ? setState395(newItem) :
                                    item.name === "396" ? setState396(newItem) :
                                        item.name === "397" ? setState397(newItem) :
                                            item.name === "398" ? setState398(newItem) :
                                                item.name === "399" ? setState399(newItem) :
                                                    item.name === "400" ? setState400(newItem) : null;
            }
        }
    }

    const handleLayout = (event: LayoutChangeEvent) => {
        const { x, y } = event.nativeEvent.layout
        dispatch(setArenaStartPosition({ x: x, y: y }))
    }


    return (


        <>
            {
                puzzleİsComplete == false &&
                <GestureHandlerRootView style={styles.container}>

                    {state1 && <Pan state={state1} setState={setState1} />}
                    {state2 && <Pan state={state2} setState={setState2} />}
                    {state3 && <Pan state={state3} setState={setState3} />}
                    {state4 && <Pan state={state4} setState={setState4} />}
                    {state5 && <Pan state={state5} setState={setState5} />}
                    {state6 && <Pan state={state6} setState={setState6} />}
                    {state7 && <Pan state={state7} setState={setState7} />}
                    {state8 && <Pan state={state8} setState={setState8} />}
                    {state9 && <Pan state={state9} setState={setState9} />}
                    {state10 && <Pan state={state10} setState={setState10} />}
                    {state11 && <Pan state={state11} setState={setState11} />}
                    {state12 && <Pan state={state12} setState={setState12} />}
                    {state13 && <Pan state={state13} setState={setState13} />}
                    {state14 && <Pan state={state14} setState={setState14} />}
                    {state15 && <Pan state={state15} setState={setState15} />}
                    {state16 && <Pan state={state16} setState={setState16} />}
                    {state17 && <Pan state={state17} setState={setState17} />}
                    {state18 && <Pan state={state18} setState={setState18} />}
                    {state19 && <Pan state={state19} setState={setState19} />}
                    {state20 && <Pan state={state20} setState={setState20} />}
                    {state21 && <Pan state={state21} setState={setState21} />}
                    {state22 && <Pan state={state22} setState={setState22} />}
                    {state23 && <Pan state={state23} setState={setState23} />}
                    {state24 && <Pan state={state24} setState={setState24} />}
                    {state25 && <Pan state={state25} setState={setState25} />}
                    {state26 && <Pan state={state26} setState={setState26} />}
                    {state27 && <Pan state={state27} setState={setState27} />}
                    {state28 && <Pan state={state28} setState={setState28} />}
                    {state29 && <Pan state={state29} setState={setState29} />}
                    {state30 && <Pan state={state30} setState={setState30} />}
                    {state31 && <Pan state={state31} setState={setState31} />}
                    {state32 && <Pan state={state32} setState={setState32} />}
                    {state33 && <Pan state={state33} setState={setState33} />}
                    {state34 && <Pan state={state34} setState={setState34} />}
                    {state35 && <Pan state={state35} setState={setState35} />}
                    {state36 && <Pan state={state36} setState={setState36} />}
                    {state37 && <Pan state={state37} setState={setState37} />}
                    {state38 && <Pan state={state38} setState={setState38} />}
                    {state39 && <Pan state={state39} setState={setState39} />}
                    {state40 && <Pan state={state40} setState={setState40} />}
                    {state41 && <Pan state={state41} setState={setState41} />}
                    {state42 && <Pan state={state42} setState={setState42} />}
                    {state43 && <Pan state={state43} setState={setState43} />}
                    {state44 && <Pan state={state44} setState={setState44} />}
                    {state45 && <Pan state={state45} setState={setState45} />}
                    {state46 && <Pan state={state46} setState={setState46} />}
                    {state47 && <Pan state={state47} setState={setState47} />}
                    {state48 && <Pan state={state48} setState={setState48} />}
                    {state49 && <Pan state={state49} setState={setState49} />}
                    {state50 && <Pan state={state50} setState={setState50} />}
                    {state51 && <Pan state={state51} setState={setState51} />}
                    {state52 && <Pan state={state52} setState={setState52} />}
                    {state53 && <Pan state={state53} setState={setState53} />}
                    {state54 && <Pan state={state54} setState={setState54} />}
                    {state55 && <Pan state={state55} setState={setState55} />}
                    {state56 && <Pan state={state56} setState={setState56} />}
                    {state57 && <Pan state={state57} setState={setState57} />}
                    {state58 && <Pan state={state58} setState={setState58} />}
                    {state59 && <Pan state={state59} setState={setState59} />}
                    {state60 && <Pan state={state60} setState={setState60} />}
                    {state61 && <Pan state={state61} setState={setState61} />}
                    {state62 && <Pan state={state62} setState={setState62} />}
                    {state63 && <Pan state={state63} setState={setState63} />}
                    {state64 && <Pan state={state64} setState={setState64} />}
                    {state65 && <Pan state={state65} setState={setState65} />}
                    {state66 && <Pan state={state66} setState={setState66} />}
                    {state67 && <Pan state={state67} setState={setState67} />}
                    {state68 && <Pan state={state68} setState={setState68} />}
                    {state69 && <Pan state={state69} setState={setState69} />}
                    {state70 && <Pan state={state70} setState={setState70} />}
                    {state71 && <Pan state={state71} setState={setState71} />}
                    {state72 && <Pan state={state72} setState={setState72} />}
                    {state73 && <Pan state={state73} setState={setState73} />}
                    {state74 && <Pan state={state74} setState={setState74} />}
                    {state75 && <Pan state={state75} setState={setState75} />}
                    {state76 && <Pan state={state76} setState={setState76} />}
                    {state77 && <Pan state={state77} setState={setState77} />}
                    {state78 && <Pan state={state78} setState={setState78} />}
                    {state79 && <Pan state={state79} setState={setState79} />}
                    {state80 && <Pan state={state80} setState={setState80} />}
                    {state81 && <Pan state={state81} setState={setState81} />}
                    {state82 && <Pan state={state82} setState={setState82} />}
                    {state83 && <Pan state={state83} setState={setState83} />}
                    {state84 && <Pan state={state84} setState={setState84} />}
                    {state85 && <Pan state={state85} setState={setState85} />}
                    {state86 && <Pan state={state86} setState={setState86} />}
                    {state87 && <Pan state={state87} setState={setState87} />}
                    {state88 && <Pan state={state88} setState={setState88} />}
                    {state89 && <Pan state={state89} setState={setState89} />}
                    {state90 && <Pan state={state90} setState={setState90} />}
                    {state91 && <Pan state={state91} setState={setState91} />}
                    {state92 && <Pan state={state92} setState={setState92} />}
                    {state93 && <Pan state={state93} setState={setState93} />}
                    {state94 && <Pan state={state94} setState={setState94} />}
                    {state95 && <Pan state={state95} setState={setState95} />}
                    {state96 && <Pan state={state96} setState={setState96} />}
                    {state97 && <Pan state={state97} setState={setState97} />}
                    {state98 && <Pan state={state98} setState={setState98} />}
                    {state99 && <Pan state={state99} setState={setState99} />}
                    {state100 && <Pan state={state100} setState={setState100} />}
                    {state101 && <Pan state={state101} setState={setState101} />}
                    {state102 && <Pan state={state102} setState={setState102} />}
                    {state103 && <Pan state={state103} setState={setState103} />}
                    {state104 && <Pan state={state104} setState={setState104} />}
                    {state105 && <Pan state={state105} setState={setState105} />}
                    {state106 && <Pan state={state106} setState={setState106} />}
                    {state107 && <Pan state={state107} setState={setState107} />}
                    {state108 && <Pan state={state108} setState={setState108} />}
                    {state109 && <Pan state={state109} setState={setState109} />}
                    {state110 && <Pan state={state110} setState={setState110} />}
                    {state111 && <Pan state={state111} setState={setState111} />}
                    {state112 && <Pan state={state112} setState={setState112} />}
                    {state113 && <Pan state={state113} setState={setState113} />}
                    {state114 && <Pan state={state114} setState={setState114} />}
                    {state115 && <Pan state={state115} setState={setState115} />}
                    {state116 && <Pan state={state116} setState={setState116} />}
                    {state117 && <Pan state={state117} setState={setState117} />}
                    {state118 && <Pan state={state118} setState={setState118} />}
                    {state119 && <Pan state={state119} setState={setState119} />}
                    {state120 && <Pan state={state120} setState={setState120} />}
                    {state121 && <Pan state={state121} setState={setState121} />}
                    {state122 && <Pan state={state122} setState={setState122} />}
                    {state123 && <Pan state={state123} setState={setState123} />}
                    {state124 && <Pan state={state124} setState={setState124} />}
                    {state125 && <Pan state={state125} setState={setState125} />}
                    {state126 && <Pan state={state126} setState={setState126} />}
                    {state127 && <Pan state={state127} setState={setState127} />}
                    {state128 && <Pan state={state128} setState={setState128} />}
                    {state129 && <Pan state={state129} setState={setState129} />}
                    {state130 && <Pan state={state130} setState={setState130} />}
                    {state131 && <Pan state={state131} setState={setState131} />}
                    {state132 && <Pan state={state132} setState={setState132} />}
                    {state133 && <Pan state={state133} setState={setState133} />}
                    {state134 && <Pan state={state134} setState={setState134} />}
                    {state135 && <Pan state={state135} setState={setState135} />}
                    {state136 && <Pan state={state136} setState={setState136} />}
                    {state137 && <Pan state={state137} setState={setState137} />}
                    {state138 && <Pan state={state138} setState={setState138} />}
                    {state139 && <Pan state={state139} setState={setState139} />}
                    {state140 && <Pan state={state140} setState={setState140} />}
                    {state141 && <Pan state={state141} setState={setState141} />}
                    {state142 && <Pan state={state142} setState={setState142} />}
                    {state143 && <Pan state={state143} setState={setState143} />}
                    {state144 && <Pan state={state144} setState={setState144} />}
                    {state145 && <Pan state={state145} setState={setState145} />}
                    {state146 && <Pan state={state146} setState={setState146} />}
                    {state147 && <Pan state={state147} setState={setState147} />}
                    {state148 && <Pan state={state148} setState={setState148} />}
                    {state149 && <Pan state={state149} setState={setState149} />}
                    {state150 && <Pan state={state150} setState={setState150} />}
                    {state151 && <Pan state={state151} setState={setState151} />}
                    {state152 && <Pan state={state152} setState={setState152} />}
                    {state153 && <Pan state={state153} setState={setState153} />}
                    {state154 && <Pan state={state154} setState={setState154} />}
                    {state155 && <Pan state={state155} setState={setState155} />}
                    {state156 && <Pan state={state156} setState={setState156} />}
                    {state157 && <Pan state={state157} setState={setState157} />}
                    {state158 && <Pan state={state158} setState={setState158} />}
                    {state159 && <Pan state={state159} setState={setState159} />}
                    {state160 && <Pan state={state160} setState={setState160} />}
                    {state161 && <Pan state={state161} setState={setState161} />}
                    {state162 && <Pan state={state162} setState={setState162} />}
                    {state163 && <Pan state={state163} setState={setState163} />}
                    {state164 && <Pan state={state164} setState={setState164} />}
                    {state165 && <Pan state={state165} setState={setState165} />}
                    {state166 && <Pan state={state166} setState={setState166} />}
                    {state167 && <Pan state={state167} setState={setState167} />}
                    {state168 && <Pan state={state168} setState={setState168} />}
                    {state169 && <Pan state={state169} setState={setState169} />}
                    {state170 && <Pan state={state170} setState={setState170} />}
                    {state171 && <Pan state={state171} setState={setState171} />}
                    {state172 && <Pan state={state172} setState={setState172} />}
                    {state173 && <Pan state={state173} setState={setState173} />}
                    {state174 && <Pan state={state174} setState={setState174} />}
                    {state175 && <Pan state={state175} setState={setState175} />}
                    {state176 && <Pan state={state176} setState={setState176} />}
                    {state177 && <Pan state={state177} setState={setState177} />}
                    {state178 && <Pan state={state178} setState={setState178} />}
                    {state179 && <Pan state={state179} setState={setState179} />}
                    {state180 && <Pan state={state180} setState={setState180} />}
                    {state181 && <Pan state={state181} setState={setState181} />}
                    {state182 && <Pan state={state182} setState={setState182} />}
                    {state183 && <Pan state={state183} setState={setState183} />}
                    {state184 && <Pan state={state184} setState={setState184} />}
                    {state185 && <Pan state={state185} setState={setState185} />}
                    {state186 && <Pan state={state186} setState={setState186} />}
                    {state187 && <Pan state={state187} setState={setState187} />}
                    {state188 && <Pan state={state188} setState={setState188} />}
                    {state189 && <Pan state={state189} setState={setState189} />}
                    {state190 && <Pan state={state190} setState={setState190} />}
                    {state191 && <Pan state={state191} setState={setState191} />}
                    {state192 && <Pan state={state192} setState={setState192} />}
                    {state193 && <Pan state={state193} setState={setState193} />}
                    {state194 && <Pan state={state194} setState={setState194} />}
                    {state195 && <Pan state={state195} setState={setState195} />}
                    {state196 && <Pan state={state196} setState={setState196} />}
                    {state197 && <Pan state={state197} setState={setState197} />}
                    {state198 && <Pan state={state198} setState={setState198} />}
                    {state199 && <Pan state={state199} setState={setState199} />}
                    {state200 && <Pan state={state200} setState={setState200} />}
                    {state201 && <Pan state={state201} setState={setState201} />}
                    {state202 && <Pan state={state202} setState={setState202} />}
                    {state203 && <Pan state={state203} setState={setState203} />}
                    {state204 && <Pan state={state204} setState={setState204} />}
                    {state205 && <Pan state={state205} setState={setState205} />}
                    {state206 && <Pan state={state206} setState={setState206} />}
                    {state207 && <Pan state={state207} setState={setState207} />}
                    {state208 && <Pan state={state208} setState={setState208} />}
                    {state209 && <Pan state={state209} setState={setState209} />}
                    {state210 && <Pan state={state210} setState={setState210} />}
                    {state211 && <Pan state={state211} setState={setState211} />}
                    {state212 && <Pan state={state212} setState={setState212} />}
                    {state213 && <Pan state={state213} setState={setState213} />}
                    {state214 && <Pan state={state214} setState={setState214} />}
                    {state215 && <Pan state={state215} setState={setState215} />}
                    {state216 && <Pan state={state216} setState={setState216} />}
                    {state217 && <Pan state={state217} setState={setState217} />}
                    {state218 && <Pan state={state218} setState={setState218} />}
                    {state219 && <Pan state={state219} setState={setState219} />}
                    {state220 && <Pan state={state220} setState={setState220} />}
                    {state221 && <Pan state={state221} setState={setState221} />}
                    {state222 && <Pan state={state222} setState={setState222} />}
                    {state223 && <Pan state={state223} setState={setState223} />}
                    {state224 && <Pan state={state224} setState={setState224} />}
                    {state225 && <Pan state={state225} setState={setState225} />}
                    {state226 && <Pan state={state226} setState={setState226} />}
                    {state227 && <Pan state={state227} setState={setState227} />}
                    {state228 && <Pan state={state228} setState={setState228} />}
                    {state229 && <Pan state={state229} setState={setState229} />}
                    {state230 && <Pan state={state230} setState={setState230} />}
                    {state231 && <Pan state={state231} setState={setState231} />}
                    {state232 && <Pan state={state232} setState={setState232} />}
                    {state233 && <Pan state={state233} setState={setState233} />}
                    {state234 && <Pan state={state234} setState={setState234} />}
                    {state235 && <Pan state={state235} setState={setState235} />}
                    {state236 && <Pan state={state236} setState={setState236} />}
                    {state237 && <Pan state={state237} setState={setState237} />}
                    {state238 && <Pan state={state238} setState={setState238} />}
                    {state239 && <Pan state={state239} setState={setState239} />}
                    {state240 && <Pan state={state240} setState={setState240} />}
                    {state241 && <Pan state={state241} setState={setState241} />}
                    {state242 && <Pan state={state242} setState={setState242} />}
                    {state243 && <Pan state={state243} setState={setState243} />}
                    {state244 && <Pan state={state244} setState={setState244} />}
                    {state245 && <Pan state={state245} setState={setState245} />}
                    {state246 && <Pan state={state246} setState={setState246} />}
                    {state247 && <Pan state={state247} setState={setState247} />}
                    {state248 && <Pan state={state248} setState={setState248} />}
                    {state249 && <Pan state={state249} setState={setState249} />}
                    {state250 && <Pan state={state250} setState={setState250} />}
                    {state251 && <Pan state={state251} setState={setState251} />}
                    {state252 && <Pan state={state252} setState={setState252} />}
                    {state253 && <Pan state={state253} setState={setState253} />}
                    {state254 && <Pan state={state254} setState={setState254} />}
                    {state255 && <Pan state={state255} setState={setState255} />}
                    {state256 && <Pan state={state256} setState={setState256} />}
                    {state257 && <Pan state={state257} setState={setState257} />}
                    {state258 && <Pan state={state258} setState={setState258} />}
                    {state259 && <Pan state={state259} setState={setState259} />}
                    {state260 && <Pan state={state260} setState={setState260} />}
                    {state261 && <Pan state={state261} setState={setState261} />}
                    {state262 && <Pan state={state262} setState={setState262} />}
                    {state263 && <Pan state={state263} setState={setState263} />}
                    {state264 && <Pan state={state264} setState={setState264} />}
                    {state265 && <Pan state={state265} setState={setState265} />}
                    {state266 && <Pan state={state266} setState={setState266} />}
                    {state267 && <Pan state={state267} setState={setState267} />}
                    {state268 && <Pan state={state268} setState={setState268} />}
                    {state269 && <Pan state={state269} setState={setState269} />}
                    {state270 && <Pan state={state270} setState={setState270} />}
                    {state271 && <Pan state={state271} setState={setState271} />}
                    {state272 && <Pan state={state272} setState={setState272} />}
                    {state273 && <Pan state={state273} setState={setState273} />}
                    {state274 && <Pan state={state274} setState={setState274} />}
                    {state275 && <Pan state={state275} setState={setState275} />}
                    {state276 && <Pan state={state276} setState={setState276} />}
                    {state277 && <Pan state={state277} setState={setState277} />}
                    {state278 && <Pan state={state278} setState={setState278} />}
                    {state279 && <Pan state={state279} setState={setState279} />}
                    {state280 && <Pan state={state280} setState={setState280} />}
                    {state281 && <Pan state={state281} setState={setState281} />}
                    {state282 && <Pan state={state282} setState={setState282} />}
                    {state283 && <Pan state={state283} setState={setState283} />}
                    {state284 && <Pan state={state284} setState={setState284} />}
                    {state285 && <Pan state={state285} setState={setState285} />}
                    {state286 && <Pan state={state286} setState={setState286} />}
                    {state287 && <Pan state={state287} setState={setState287} />}
                    {state288 && <Pan state={state288} setState={setState288} />}
                    {state289 && <Pan state={state289} setState={setState289} />}
                    {state290 && <Pan state={state290} setState={setState290} />}
                    {state291 && <Pan state={state291} setState={setState291} />}
                    {state292 && <Pan state={state292} setState={setState292} />}
                    {state293 && <Pan state={state293} setState={setState293} />}
                    {state294 && <Pan state={state294} setState={setState294} />}
                    {state295 && <Pan state={state295} setState={setState295} />}
                    {state296 && <Pan state={state296} setState={setState296} />}
                    {state297 && <Pan state={state297} setState={setState297} />}
                    {state298 && <Pan state={state298} setState={setState298} />}
                    {state299 && <Pan state={state299} setState={setState299} />}
                    {state300 && <Pan state={state300} setState={setState300} />}
                    {state301 && <Pan state={state301} setState={setState301} />}
                    {state302 && <Pan state={state302} setState={setState302} />}
                    {state303 && <Pan state={state303} setState={setState303} />}
                    {state304 && <Pan state={state304} setState={setState304} />}
                    {state305 && <Pan state={state305} setState={setState305} />}
                    {state306 && <Pan state={state306} setState={setState306} />}
                    {state307 && <Pan state={state307} setState={setState307} />}
                    {state308 && <Pan state={state308} setState={setState308} />}
                    {state309 && <Pan state={state309} setState={setState309} />}
                    {state310 && <Pan state={state310} setState={setState310} />}
                    {state311 && <Pan state={state311} setState={setState311} />}
                    {state312 && <Pan state={state312} setState={setState312} />}
                    {state313 && <Pan state={state313} setState={setState313} />}
                    {state314 && <Pan state={state314} setState={setState314} />}
                    {state315 && <Pan state={state315} setState={setState315} />}
                    {state316 && <Pan state={state316} setState={setState316} />}
                    {state317 && <Pan state={state317} setState={setState317} />}
                    {state318 && <Pan state={state318} setState={setState318} />}
                    {state319 && <Pan state={state319} setState={setState319} />}
                    {state320 && <Pan state={state320} setState={setState320} />}
                    {state321 && <Pan state={state321} setState={setState321} />}
                    {state322 && <Pan state={state322} setState={setState322} />}
                    {state323 && <Pan state={state323} setState={setState323} />}
                    {state324 && <Pan state={state324} setState={setState324} />}
                    {state325 && <Pan state={state325} setState={setState325} />}
                    {state326 && <Pan state={state326} setState={setState326} />}
                    {state327 && <Pan state={state327} setState={setState327} />}
                    {state328 && <Pan state={state328} setState={setState328} />}
                    {state329 && <Pan state={state329} setState={setState329} />}
                    {state330 && <Pan state={state330} setState={setState330} />}
                    {state331 && <Pan state={state331} setState={setState331} />}
                    {state332 && <Pan state={state332} setState={setState332} />}
                    {state333 && <Pan state={state333} setState={setState333} />}
                    {state334 && <Pan state={state334} setState={setState334} />}
                    {state335 && <Pan state={state335} setState={setState335} />}
                    {state336 && <Pan state={state336} setState={setState336} />}
                    {state337 && <Pan state={state337} setState={setState337} />}
                    {state338 && <Pan state={state338} setState={setState338} />}
                    {state339 && <Pan state={state339} setState={setState339} />}
                    {state340 && <Pan state={state340} setState={setState340} />}
                    {state341 && <Pan state={state341} setState={setState341} />}
                    {state342 && <Pan state={state342} setState={setState342} />}
                    {state343 && <Pan state={state343} setState={setState343} />}
                    {state344 && <Pan state={state344} setState={setState344} />}
                    {state345 && <Pan state={state345} setState={setState345} />}
                    {state346 && <Pan state={state346} setState={setState346} />}
                    {state347 && <Pan state={state347} setState={setState347} />}
                    {state348 && <Pan state={state348} setState={setState348} />}
                    {state349 && <Pan state={state349} setState={setState349} />}
                    {state350 && <Pan state={state350} setState={setState350} />}
                    {state351 && <Pan state={state351} setState={setState351} />}
                    {state352 && <Pan state={state352} setState={setState352} />}
                    {state353 && <Pan state={state353} setState={setState353} />}
                    {state354 && <Pan state={state354} setState={setState354} />}
                    {state355 && <Pan state={state355} setState={setState355} />}
                    {state356 && <Pan state={state356} setState={setState356} />}
                    {state357 && <Pan state={state357} setState={setState357} />}
                    {state358 && <Pan state={state358} setState={setState358} />}
                    {state359 && <Pan state={state359} setState={setState359} />}
                    {state360 && <Pan state={state360} setState={setState360} />}
                    {state361 && <Pan state={state361} setState={setState361} />}
                    {state362 && <Pan state={state362} setState={setState362} />}
                    {state363 && <Pan state={state363} setState={setState363} />}
                    {state364 && <Pan state={state364} setState={setState364} />}
                    {state365 && <Pan state={state365} setState={setState365} />}
                    {state366 && <Pan state={state366} setState={setState366} />}
                    {state367 && <Pan state={state367} setState={setState367} />}
                    {state368 && <Pan state={state368} setState={setState368} />}
                    {state369 && <Pan state={state369} setState={setState369} />}
                    {state370 && <Pan state={state370} setState={setState370} />}
                    {state371 && <Pan state={state371} setState={setState371} />}
                    {state372 && <Pan state={state372} setState={setState372} />}
                    {state373 && <Pan state={state373} setState={setState373} />}
                    {state374 && <Pan state={state374} setState={setState374} />}
                    {state375 && <Pan state={state375} setState={setState375} />}
                    {state376 && <Pan state={state376} setState={setState376} />}
                    {state377 && <Pan state={state377} setState={setState377} />}
                    {state378 && <Pan state={state378} setState={setState378} />}
                    {state379 && <Pan state={state379} setState={setState379} />}
                    {state380 && <Pan state={state380} setState={setState380} />}
                    {state381 && <Pan state={state381} setState={setState381} />}
                    {state382 && <Pan state={state382} setState={setState382} />}
                    {state383 && <Pan state={state383} setState={setState383} />}
                    {state384 && <Pan state={state384} setState={setState384} />}
                    {state385 && <Pan state={state385} setState={setState385} />}
                    {state386 && <Pan state={state386} setState={setState386} />}
                    {state387 && <Pan state={state387} setState={setState387} />}
                    {state388 && <Pan state={state388} setState={setState388} />}
                    {state389 && <Pan state={state389} setState={setState389} />}
                    {state390 && <Pan state={state390} setState={setState390} />}
                    {state391 && <Pan state={state391} setState={setState391} />}
                    {state392 && <Pan state={state392} setState={setState392} />}
                    {state393 && <Pan state={state393} setState={setState393} />}
                    {state394 && <Pan state={state394} setState={setState394} />}
                    {state395 && <Pan state={state395} setState={setState395} />}
                    {state396 && <Pan state={state396} setState={setState396} />}
                    {state397 && <Pan state={state397} setState={setState397} />}
                    {state398 && <Pan state={state398} setState={setState398} />}
                    {state399 && <Pan state={state399} setState={setState399} />}
                    {state400 && <Pan state={state400} setState={setState400} />}



                    <View style={styles.banner}>
                        <BannerAd ref={twoBannerRef} unitId={adTwoUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
                    </View>




                    {/* Hand */}
                    {
                        gamePerson == "2" &&
                        <LinearGradient
                            colors={["#fff", "#fff", "red", "#fff", "#fff"]}
                            style={styles.handBox}
                            onLayout={(event) => screenLayout(event)}
                        >
                            <PanGestureHandler
                                onGestureEvent={(event) => twoHandGestureEvent(event)}
                            >
                                <Pressable
                                    style={[{
                                        transform: twoHandTranslateX && handHeight && [
                                            { translateX: twoHandTranslateX },
                                        ],
                                        zIndex: 99,
                                        position: 'absolute',
                                        backgroundColor: 'red'
                                    },
                                    styles.hand]}
                                />
                            </PanGestureHandler>
                        </LinearGradient>
                    }


                    {/* İKİNCİ KİŞİ */}
                    <View style={styles.topBox}>
                        {
                            gamePerson == "2" &&
                            <>
                                <FlatList
                                    data={gamePuzzlePieces.twoPersonPuzzlePieces}
                                    ref={twoFlatListRef}
                                    onContentSizeChange={(w: number) => setTwoFlatlistWidth(w)}
                                    renderItem={({ item, index }) => (
                                        <View
                                            style={styles.topPuzzleWrapper}
                                            key={index}
                                        >
                                            {
                                                item &&
                                                <PanGestureHandler
                                                    onHandlerStateChange={(event) => onHandlerStateChange(event, item)}
                                                >
                                                    < Image
                                                        style={styles.image}
                                                        source={{ uri: item.uri }}
                                                        resizeMode='contain'
                                                    />
                                                </PanGestureHandler>
                                            }
                                        </View>
                                    )}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.pieceListContainer}
                                />
                            </>
                        }
                    </View>




                    {/* OYUN ALANI */}
                    <View style={styles.mainBox} >
                        {
                            toggle &&
                            <AntDesign
                                style={styles.toggleBox}
                                name="closecircle" size={20} color="black"
                                onPress={closeGame}
                            />
                        }
                        <Entypo
                            style={styles.infoBox}
                            onPress={() => setToggleVisibilty()}
                            name="dots-two-horizontal"
                            size={24}
                            color="black"
                        />
                    </View>
                    <View
                        onLayout={(event) => handleLayout(event)}
                        style={styles.arena}
                    >
                        {
                            loadingGame &&
                            <ActivityIndicator color="red" size={30} />
                        }
                    </View>




                    {/* BİRİNCİ KİŞİ  */}
                    <View style={styles.bottomBox}>
                        <FlatList
                            data={gamePuzzlePieces.onePersonPuzzlePieces}
                            ref={oneFlatListRef}
                            onContentSizeChange={(w: number) => setOneFlatlistWidth(w)}
                            renderItem={({ item, index }) => (
                                <View
                                    style={styles.bottomPuzzleWrapper}
                                    key={index}
                                >
                                    {
                                        item &&
                                        <PanGestureHandler
                                            onHandlerStateChange={(event) => onHandlerStateChange(event, item)}
                                        >
                                            < Image
                                                style={styles.image}
                                                source={{ uri: item.uri }}
                                                resizeMode='contain'
                                            />
                                        </PanGestureHandler>
                                    }
                                </View>
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.pieceListContainer}
                        />
                    </View>


                    {/* Hand */}
                    <LinearGradient
                        colors={["#fff", "#fff", "#00a6fb", "#fff", "#fff"]}
                        style={styles.handBox}
                        onLayout={(event) => screenLayout(event)}
                    >
                        <PanGestureHandler
                            onGestureEvent={(event) => oneHandGestureEvent(event)}
                        >
                            <Pressable
                                onLayout={(event) => handSize(event)}
                                style={[{
                                    transform: oneHandTranslateX && [
                                        { translateX: oneHandTranslateX },
                                    ],
                                    zIndex: 99,
                                    position: 'absolute',
                                    backgroundColor: '#00a6fb'
                                },
                                styles.hand]}
                            />
                        </PanGestureHandler>
                    </LinearGradient>

                    <View style={styles.banner}>
                        <BannerAd ref={oneBannerRef} unitId={adOneUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
                    </View>
                </GestureHandlerRootView >
            }

            {
                puzzleİsComplete &&
                <ReactNativeModal
                    isVisible={true}
                    style={styles.modalContainer}
                    hasBackdrop={false}
                >
                    {
                        image &&
                        <Image style={styles.finishImage} source={{ uri: image }} />
                    }
                    <Text style={{ fontSize: 25, fontWeight: '700', color: '#fff' }}>Tebrikler ...</Text>
                    <Pressable style={styles.finishBtn} onPress={() => setFinish()}>
                        <Text style={styles.finishText}>Ana ekran</Text>
                        <FontAwesome6 name="chevron-right" size={22} color="#fff" />
                    </Pressable>
                </ReactNativeModal>
            }
        </>

    )
}

export default GameScreen
