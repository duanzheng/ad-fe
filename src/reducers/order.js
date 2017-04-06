/**
 * Created by mac on 2017/4/6.
 */
let defaultState = {
    isLoading: false,
    orderList: [
        {
            table: '10号桌',
            food: ['鱼香肉丝', '番茄蛋汤', '炒苦瓜'],
            status: 'untreated'
        },
        {
            table: '5号桌',
            food: ['回锅肉', '麻辣小龙虾', '米饭', '炒苕尖'],
            status: 'processed'
        }
    ]
}

function order(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default order;