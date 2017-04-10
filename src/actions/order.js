/**
 * Created by Tony on 2017/4/10.
 */
export const SHOW_ALREADY_DEAL = 'showAlreadyDeal';
export const SHOW_ALL = 'showAll';

export function showProcessed() {
    return {
        type: SHOW_ALREADY_DEAL
    }
}

export function showAll() {
    return {
        type: SHOW_ALL
    }
}