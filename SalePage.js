import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Icon, SearchBar, TabBar, WhiteSpace, Grid } from 'antd-mobile-rn';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `Name${i}`,
}));

const data1 = [{
    icon: '../saleMobile/img/customer.png',
    text: '客户',
    id: 1
},
    {
    icon: '../saleMobile/img/remind.png',
    text: '提醒',
    id: 2
    }];
//     {
//     icon: 'http://119.23.77.187/img/remind.png',
//     text: '提醒',
// };

class SalePage extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
        // this.handleClick = this.handleClick.bind(this)
    }

//     handleClick = (index) => {
//
//         return(
//             console.log('selectedTab: ' )
//             alert('dfdfd')
//             // <Button>按钮</Button>
//         );
// };

    render() {
        return (
            <ScrollView>
                {/*<View style={[{ margin: 10 }]}>*/}
                    {/*<Text>Simple</Text>*/}
                {/*</View>*/}
                {/*<View style={[{ padding: 10 }]}>*/}
                    {/*<Grid data={data} hasLine={false} />*/}
                {/*</View>*/}

                {/*<View style={[{ margin: 10 }]}>*/}
                    {/*<Text> 销售首页</Text>*/}
                {/*</View>*/}
                {/*<Grid*/}
                    {/*data={data1}*/}
                    {/*columnNum={3}*/}
                    {/*isCarousel*/}
                    {/*onPress={(_el, index) => alert(index)}*/}
                    {/*itemStyle={{ backgroundColor: '#1296db' }}*/}
                    {/*/!*<Button>按钮</Button>*!/*/}
                {/*/>*/}

                <View style={[{ margin: 10 }]}>
                    <Text>Custom GridCell Style</Text>
                </View>
                <Grid
                    data={data1}
                    columnNum={3}
                    itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
                />
            </ScrollView>
        );
    }

}

export default SalePage;