<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'D:\OpenServer\domains\test\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'test' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tBzS7O6qb9,52_$.z=@1`W(#a3f@mA`3$`=Ah$PP #JhaPK=+($f5qyS^V= N$<=' );
define( 'SECURE_AUTH_KEY',  'EYY&!j}L)uh;$>b2f>iG;WrgA*C:bH^fOe-&/Mg[^ui$RV8Xs8bXb#=vTy$xChnI' );
define( 'LOGGED_IN_KEY',    '(gL?X06bDb%+*i815DQ@^59 3QEvz7oD,0T;V3x$G;ZHu!EN*q7ry*rP1=r4J4t#' );
define( 'NONCE_KEY',        '/Z+2J|)jPy.5tCyV2pF@NHFD6v1th/`lP)?B.[mw`J`kg+Ma&135~!4T~zWHAeJ8' );
define( 'AUTH_SALT',        '2d y}GGs*wJ4_1Q4C?r{A,hj_o6j^@<oF=iZ31UAc6g7}]4_hQO>X{@2w;bJeT9u' );
define( 'SECURE_AUTH_SALT', 'iubR/b2|P#@mF=,F/qkIGFbmFNIGLIdEXb7ePJ^sq.4)^?(pNkq9P:HM&7n.O!R&' );
define( 'LOGGED_IN_SALT',   'vKaB]ppS7C|re,Rq>mX&Y++Gf)fNS;%qIv}zY?$XAkQy$9},k!ROZF#hfka#[9o)' );
define( 'NONCE_SALT',       'VCb8a!:r:UXH)6%Ma6B~p e]cYAZZI*0=*w,~/!zK$,AyYt:S0zxGyRJ)Q7-kGkC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
