import { XFL as BaseXFL } from '../index.js'
import * as op from '../operators.js'
import { toBigInt } from '../conversion.js'

export function XFL(input){
	return toBigInt(BaseXFL(input))
}

export function neg(x){
	return XFL(op.neg(x))
}

export function sum(a, b){
	return XFL(op.sum(a, b))
}

export function sub(a, b){
	return XFL(op.sub(a, b))
}

export function mul(a, b){
	return XFL(op.mul(a, b))
}

export function div(a, b){
	return XFL(op.div(a, b))
}

export function eq(a, b){
	return op.eq(a, b)
}

export function lt(a, b){
	return op.lt(a, b)
}

export function lte(a, b){
	return op.lte(a, b)
}

export function gt(a, b){
	return op.gt(a, b)
}

export function gte(a, b){
	return op.gte(a, b)
}

export function toString(x){
	return BaseXFL(x).toString()
}