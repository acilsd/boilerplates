/* @flow */
import type { Reducers } from '../reducer';
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type RootState = $ObjMap<Reducers, $ExtractFunctionReturn>;
