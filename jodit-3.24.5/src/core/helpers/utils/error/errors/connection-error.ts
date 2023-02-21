/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * @module helpers/utils
 */

export class ConnectionError extends Error {
	constructor(m: string) {
		super(m);
		Object.setPrototypeOf(this, ConnectionError.prototype);
	}
}
