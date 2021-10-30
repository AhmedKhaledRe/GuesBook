import * as moment from "moment";

export const prettifyDate = (date) => moment(date).format("LLLL");
