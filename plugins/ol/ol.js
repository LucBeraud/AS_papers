// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.5.0
;
(function(root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function() {
    var OPENLAYERS = {};
    var k, aa = this;

    function t(a, b) { var c = OPENLAYERS;
        a = a.split(".");
        c = c || aa;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b };
    var ba, ca;

    function v(a, b) { a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a }

    function da() {}

    function w(a) { return a.op || (a.op = ++ea) }
    var ea = 0;

    function ha(a) { this.message = "Assertion failed. See https://openlayers.org/en/v4.5.0/doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError" }
    v(ha, Error);

    function ia(a, b, c, d) { this.fa = a;
        this.la = b;
        this.ea = c;
        this.ka = d }

    function ja(a, b, c, d, e) { return void 0 !== e ? (e.fa = a, e.la = b, e.ea = c, e.ka = d, e) : new ia(a, b, c, d) }

    function ka(a, b, c) { return a.fa <= b && b <= a.la && a.ea <= c && c <= a.ka }

    function la(a, b) { return a.fa == b.fa && a.ea == b.ea && a.la == b.la && a.ka == b.ka };

    function na(a, b) { if (!a) throw new ha(b); };

    function oa(a, b, c) { return Math.min(Math.max(a, b), c) }
    var qa = function() { var a; "cosh" in Math ? a = Math.cosh : a = function(a) { a = Math.exp(a); return (a + 1 / a) / 2 }; return a }();

    function ra(a) { na(0 < a, 29); return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2)) }

    function sa(a, b, c, d, e, f) { var g = e - c,
            h = f - d; if (0 !== g || 0 !== h) { var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e, d = f) : 0 < l && (c += g * l, d += h * l) } return ta(a, b, c, d) }

    function ta(a, b, c, d) { a = c - a;
        b = d - b; return a * a + b * b }

    function ua(a) { return a * Math.PI / 180 }

    function va(a, b) { a %= b; return 0 > a * b ? a + b : a }

    function wa(a, b, c) { return a + c * (b - a) };

    function xa(a, b, c) { void 0 === c && (c = [0, 0]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b; return c }

    function za(a, b, c) { void 0 === c && (c = [0, 0]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0; return c }

    function Aa(a, b) { if (Array.isArray(a)) return a;
        void 0 === b ? b = [a, a] : b[0] = b[1] = a; return b };

    function Ba(a) { for (var b = Ca(), c = 0, d = a.length; c < d; ++c) Da(b, a[c]); return b }

    function Ea(a, b, c) { return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b] }

    function Fa(a, b) { return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice() }

    function Ga(a, b, c) { b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0; return b * b + a * a }

    function Ha(a, b) { return Ia(a, b[0], b[1]) }

    function Ka(a, b) { return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3] }

    function Ia(a, b, c) { return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3] }

    function La(a, b) { var c = a[1],
            d = a[2],
            e = a[3],
            f = b[0];
        b = b[1]; var g = 0;
        f < a[0] ? g |= 16 : f > d && (g |= 4);
        b < c ? g |= 8 : b > e && (g |= 2);
        0 === g && (g = 1); return g }

    function Ca() { return [Infinity, Infinity, -Infinity, -Infinity] }

    function Ma(a, b, c, d, e) { return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d] }

    function Na(a) { return Ma(Infinity, Infinity, -Infinity, -Infinity, a) }

    function Oa(a, b) { var c = a[0];
        a = a[1]; return Ma(c, a, c, a, b) }

    function Pa(a, b, c, d, e) { e = Na(e); return Qa(e, a, b, c, d) }

    function Ra(a, b) { return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3] }

    function Ta(a, b) { b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]); return a }

    function Da(a, b) { b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1]) }

    function Qa(a, b, c, d, e) { for (; c < d; c += e) { var f = a,
                g = b[c],
                h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h) } return a }

    function Ua(a, b, c) { var d; return (d = b.call(c, Va(a))) || (d = b.call(c, Wa(a))) || (d = b.call(c, Xa(a))) ? d : (d = b.call(c, Ya(a))) ? d : !1 }

    function Za(a) { var b = 0;
        $a(a) || (b = ab(a) * bb(a)); return b }

    function Va(a) { return [a[0], a[1]] }

    function Wa(a) { return [a[2], a[1]] }

    function cb(a) { return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2] }

    function db(a, b, c, d, e) { var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c); var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d; var h = d * g,
            l = a[0],
            m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        h = m - f - b;
        l = m - f + b; var n = m + f + b;
        f = m + f - b; return Ma(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e) }

    function bb(a) { return a[3] - a[1] }

    function eb(a, b, c) { c = c ? c : Ca();
        fb(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]); return c }

    function Ya(a) { return [a[0], a[3]] }

    function Xa(a) { return [a[2], a[3]] }

    function ab(a) { return a[2] - a[0] }

    function fb(a, b) { return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1] }

    function $a(a) { return a[2] < a[0] || a[3] < a[1] }

    function gb(a, b) { var c = (a[2] - a[0]) / 2 * (b - 1);
        b = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= b;
        a[3] += b }

    function hb(a, b, c) { a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2); var d = [a[0], a[2], a[4], a[6]],
            e = [a[1], a[3], a[5], a[7]];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e); return Ma(b, a, d, e, c) };
    var jb = "function" === typeof Object.assign ? Object.assign : function(a, b) { if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object"); for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) { var f = arguments[d]; if (void 0 !== f && null !== f)
                for (var g in f) f.hasOwnProperty(g) && (c[g] = f[g]) } return c };

    function kb(a) { for (var b in a) delete a[b] }

    function lb(a) { var b = [],
            c; for (c in a) b.push(a[c]); return b }

    function mb(a) { for (var b in a) return !1; return !b };
    /*
      
       Latitude/longitude spherical geodesy formulae taken from
       http://www.movable-type.co.uk/scripts/latlong.html
       Licensed under CC-BY-3.0.
      */
    function nb(a) { this.radius = a }
    nb.prototype.a = function(a) { return ob(a, this.radius) };
    nb.prototype.b = function(a, b) { return pb(a, b, this.radius) };
    nb.prototype.offset = function(a, b, c) { var d = ua(a[1]);
        b /= this.radius; var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c)); return [180 * (ua(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI] };

    function qb(a, b) {
        var c = b || {},
            d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().jb(c, "EPSG:4326");
        var e = a.T();
        c = 0;
        var f;
        switch (e) {
            case "Point":
            case "MultiPoint":
                break;
            case "LineString":
            case "LinearRing":
                b = a.U();
                c = rb(b, d);
                break;
            case "MultiLineString":
            case "Polygon":
                b = a.U();
                a = 0;
                for (e = b.length; a < e; ++a) c += rb(b[a], d);
                break;
            case "MultiPolygon":
                b = a.U();
                a = 0;
                for (e = b.length; a < e; ++a) { var g = b[a]; var h = 0; for (f = g.length; h < f; ++h) c += rb(g[h], d) }
                break;
            case "GeometryCollection":
                d = a.td();
                a = 0;
                for (e = d.length; a <
                    e; ++a) c += qb(d[a], b);
                break;
            default:
                throw Error("Unsupported geometry type: " + e);
        }
        return c
    }

    function rb(a, b) { for (var c = 0, d = 0, e = a.length; d < e - 1; ++d) c += pb(a[d], a[d + 1], b); return c }

    function pb(a, b, c) { var d = ua(a[1]),
            e = ua(b[1]),
            f = (e - d) / 2;
        a = ua(b[0] - a[0]) / 2;
        d = Math.sin(f) * Math.sin(f) + Math.sin(a) * Math.sin(a) * Math.cos(d) * Math.cos(e); return 2 * c * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)) }

    function sb(a, b) {
        var c = b || {},
            d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().jb(c, "EPSG:4326");
        var e = a.T();
        c = 0;
        var f;
        switch (e) {
            case "Point":
            case "MultiPoint":
            case "LineString":
            case "MultiLineString":
            case "LinearRing":
                break;
            case "Polygon":
                b = a.U();
                c = Math.abs(ob(b[0], d));
                a = 1;
                for (e = b.length; a < e; ++a) c -= Math.abs(ob(b[a], d));
                break;
            case "MultiPolygon":
                b = a.U();
                a = 0;
                for (e = b.length; a < e; ++a) { var g = b[a];
                    c += Math.abs(ob(g[0], d)); var h = 1; for (f = g.length; h < f; ++h) c -= Math.abs(ob(g[h], d)) }
                break;
            case "GeometryCollection":
                d =
                    a.td();
                a = 0;
                for (e = d.length; a < e; ++a) c += sb(d[a], b);
                break;
            default:
                throw Error("Unsupported geometry type: " + e);
        }
        return c
    }

    function ob(a, b) { for (var c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) { var h = a[g][0],
                l = a[g][1];
            c += ua(h - e) * (2 + Math.sin(ua(f)) + Math.sin(ua(l)));
            e = h;
            f = l } return c * b * b / 2 };
    var tb = {};
    tb.degrees = 12741994 * Math.PI / 360;
    tb.ft = .3048;
    tb.m = 1;
    tb["us-ft"] = 1200 / 3937;
    var ub = null;

    function vb(a) {
        this.ub = a.code;
        this.a = a.units;
        this.i = void 0 !== a.extent ? a.extent : null;
        this.ne = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.c = void 0 !== a.global ? a.global : !1;
        this.g = !(!this.c || !this.i);
        this.j = a.getPointResolution;
        this.f = null;
        this.l = a.metersPerUnit;
        var b = a.code,
            c = ub || window.proj4;
        "function" == typeof c && (b = c.defs(b), void 0 !== b && (void 0 !== b.axis && void 0 === a.axisOrientation && (this.b = b.axis), void 0 === a.metersPerUnit && (this.l = b.to_meter),
            void 0 === a.units && (this.a = b.units)))
    }
    k = vb.prototype;
    k.el = function() { return this.ub };
    k.C = function() { return this.i };
    k.qo = function() { return this.a };
    k.Wc = function() { return this.l || tb[this.a] };
    k.Ml = function() { return this.ne };
    k.xm = function() { return this.c };
    k.oq = function(a) { this.c = a;
        this.g = !(!a || !this.i) };
    k.Pi = function(a) { this.i = a;
        this.g = !(!this.c || !a) };
    k.Nj = function(a) { this.ne = a };
    k.nq = function(a) { this.j = a };

    function wb(a) { vb.call(this, { code: a, units: "m", extent: xb, global: !0, worldExtent: yb, getPointResolution: function(a, c) { return a / qa(c[1] / 6378137) } }) }
    v(wb, vb);
    var zb = 6378137 * Math.PI,
        xb = [-zb, -zb, zb, zb],
        yb = [-180, -85, 180, 85],
        Ab = [new wb("EPSG:3857"), new wb("EPSG:102100"), new wb("EPSG:102113"), new wb("EPSG:900913"), new wb("urn:ogc:def:crs:EPSG:6.18:3:3857"), new wb("urn:ogc:def:crs:EPSG::3857"), new wb("http://www.opengis.net/gml/srs/epsg.xml#3857")];

    function Bb(a, b, c) { var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d)); for (var e = 0; e < d; e += c) { b[e] = zb * a[e] / 180; var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > zb ? f = zb : f < -zb && (f = -zb);
            b[e + 1] = f } return b }

    function Cb(a, b, c) { var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d)); for (var e = 0; e < d; e += c) b[e] = 180 * a[e] / zb, b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90; return b };

    function Db(a, b) { vb.call(this, { code: a, units: "degrees", extent: Eb, axisOrientation: b, global: !0, metersPerUnit: Fb, worldExtent: Eb }) }
    v(Db, vb);
    var Eb = [-180, -90, 180, 90],
        Fb = 6378137 * Math.PI / 180,
        Gb = [new Db("CRS:84"), new Db("EPSG:4326", "neu"), new Db("urn:ogc:def:crs:EPSG::4326", "neu"), new Db("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Db("urn:ogc:def:crs:OGC:1.3:CRS84"), new Db("urn:ogc:def:crs:OGC:2:84"), new Db("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Db("urn:x-ogc:def:crs:EPSG:4326", "neu")];
    var Hb = {};
    var Ib = {};

    function Jb(a, b, c) { a = a.ub;
        b = b.ub;
        a in Ib || (Ib[a] = {});
        Ib[a][b] = c }

    function Kb(a, b) { var c;
        a in Ib && b in Ib[a] && (c = Ib[a][b]); return c };
    var Lb = new nb(6371008.8);

    function Mb(a, b, c, d) { a = Nb(a); var e = a.j;
        e ? b = e(b, c) : "degrees" == a.a && !d || "degrees" == d || (e = Ob(a, Nb("EPSG:4326")), b = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2], b = e(b, b, 2), b = (Lb.b(b.slice(0, 2), b.slice(2, 4)) + Lb.b(b.slice(4, 6), b.slice(6, 8))) / 2, a = d ? tb[d] : a.Wc(), void 0 !== a && (b /= a)); return b }

    function Pb(a) { a.forEach(Qb);
        a.forEach(function(b) { a.forEach(function(a) { b !== a && Jb(b, a, Rb) }) }) }

    function Sb() { Gb.forEach(function(a) { Ab.forEach(function(b) { Jb(a, b, Bb);
                Jb(b, a, Cb) }) }) }

    function Qb(a) { Hb[a.ub] = a;
        Jb(a, a, Rb) }

    function Tb(a) { return a ? "string" === typeof a ? Nb(a) : a : Nb("EPSG:3857") }

    function Ub(a, b, c, d) { a = Nb(a);
        b = Nb(b);
        Jb(a, b, Vb(c));
        Jb(b, a, Vb(d)) }

    function Vb(a) { return function(b, c, d) { var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e); var f; for (f = 0; f < e; f += d) { var g = a([b[f], b[f + 1]]);
                c[f] = g[0];
                c[f + 1] = g[1]; for (g = d - 1; 2 <= g; --g) c[f + g] = b[f + g] } return c } }

    function Nb(a) { var b = null; if (a instanceof vb) b = a;
        else if ("string" === typeof a && (b = Hb[a] || null, !b)) { var c = ub || window.proj4; "function" == typeof c && void 0 !== c.defs(a) && (b = new vb({ code: a }), Qb(b)) } return b }

    function Wb(a, b) { if (a === b) return !0; var c = a.a === b.a; return a.ub === b.ub ? c : Ob(a, b) === Rb && c }

    function Xb(a, b) { a = Nb(a);
        b = Nb(b); return Ob(a, b) }

    function Ob(a, b) { var c = a.ub,
            d = b.ub,
            e = Kb(c, d); if (!e) { var f = ub || window.proj4; if ("function" == typeof f) { var g = f.defs(c),
                    h = f.defs(d);
                void 0 !== g && void 0 !== h && (g === h ? Pb([b, a]) : (e = f(d, c), Ub(b, a, e.forward, e.inverse)), e = Kb(c, d)) } }
        e || (e = Yb); return e }

    function Yb(a, b) { if (void 0 !== b && a !== b) { for (var c = 0, d = a.length; c < d; ++c) b[c] = a[c];
            a = b } return a }

    function Rb(a, b) { if (void 0 !== b) { for (var c = 0, d = a.length; c < d; ++c) b[c] = a[c];
            a = b } else a = a.slice(); return a }

    function Zb(a, b, c) { return Xb(b, c)(a, void 0, a.length) }

    function $b(a, b, c) { b = Xb(b, c); return hb(a, b) }

    function ac() { Pb(Ab);
        Pb(Gb);
        Sb() }
    ac();

    function bc(a, b) { return a > b ? 1 : a < b ? -1 : 0 }

    function cc(a, b) { return 0 <= a.indexOf(b) }

    function dc(a, b, c) { var d = a.length; if (a[0] <= b) return 0; if (!(b <= a[d - 1]))
            if (0 < c)
                for (c = 1; c < d; ++c) { if (a[c] < b) return c - 1 } else if (0 > c)
                    for (c = 1; c < d; ++c) { if (a[c] <= b) return c } else
                        for (c = 1; c < d; ++c) { if (a[c] == b) return c; if (a[c] < b) return a[c - 1] - b < b - a[c] ? c - 1 : c }
                return d - 1 }

    function ec(a, b) { var c = Array.isArray(b) ? b : [b],
            d = c.length; for (b = 0; b < d; b++) a[a.length] = c[b] }

    function fc(a, b) { for (var c = a.length >>> 0, d, e = 0; e < c; e++)
            if (d = a[e], b(d, e, a)) return d;
        return null }

    function gc(a, b) { var c = a.length; if (c !== b.length) return !1; for (var d = 0; d < c; d++)
            if (a[d] !== b[d]) return !1;
        return !0 }

    function ic(a) { var b = lc,
            c = a.length,
            d = Array(a.length),
            e; for (e = 0; e < c; e++) d[e] = { index: e, value: a[e] };
        d.sort(function(a, c) { return b(a.value, c.value) || a.index - c.index }); for (e = 0; e < a.length; e++) a[e] = d[e].value }

    function mc(a, b) { var c; return a.every(function(d, e) { c = e; return !b(d, e, a) }) ? -1 : c }

    function nc(a, b) { var c = b || bc; return a.every(function(b, e) { if (0 === e) return !0;
            b = c(a[e - 1], b); return !(0 < b || 0 === b) }) };

    function oc(a, b, c, d) { return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c] }

    function pc(a) { var b = a[0],
            c = Array(b),
            d = 1 << b - 1,
            e; for (e = 0; e < b; ++e) { var f = 48;
            a[1] & d && (f += 1);
            a[2] & d && (f += 2);
            c[e] = String.fromCharCode(f);
            d >>= 1 } return c.join("") };

    function qc(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        na(nc(this.b, function(a, b) { return b - a }), 17);
        if (!a.origins)
            for (var b = 0, c = this.b.length - 1; b < c; ++b)
                if (!d) var d = this.b[b] / this.b[b + 1];
                else if (this.b[b] / this.b[b + 1] !== d) { d = void 0; break }
        this.l = d;
        this.maxZoom = this.b.length - 1;
        this.g = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins, na(this.c.length == this.b.length, 20));
        d = a.extent;
        void 0 === d || this.g || this.c || (this.g = Ya(d));
        na(!this.g && this.c || this.g &&
            !this.c, 18);
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes, na(this.i.length == this.b.length, 19));
        this.j = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
        na(!this.j && this.i || this.j && !this.i, 22);
        this.o = void 0 !== d ? d : null;
        this.a = null;
        this.f = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function(a) { return new ia(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1)) }, this) : d && rc(this, d)
    }
    var sc = [0, 0, 0];
    k = qc.prototype;
    k.Tf = function(a, b, c) { a = tc(this, a, b); for (var d = a.fa, e = a.la; d <= e; ++d)
            for (var f = a.ea, g = a.ka; f <= g; ++f) c([b, d, f]) };

    function uc(a, b, c, d, e) { var f = null,
            g = b[0] - 1; if (2 === a.l) { var h = b[1]; var l = b[2] } else f = a.La(b, e); for (; g >= a.minZoom;) { 2 === a.l ? (h = Math.floor(h / 2), l = Math.floor(l / 2), b = ja(h, h, l, l, d)) : b = tc(a, f, g, d); if (c.call(null, g, b)) return !0;--g } return !1 }
    k.C = function() { return this.o };
    k.jj = function() { return this.maxZoom };
    k.kj = function() { return this.minZoom };
    k.Gc = function(a) { return this.g ? this.g : this.c[a] };
    k.Sa = function(a) { return this.b[a] };
    k.lj = function() { return this.b };

    function vc(a, b, c, d) { if (b[0] < a.maxZoom) { if (2 === a.l) return a = 2 * b[1], b = 2 * b[2], ja(a, a + 1, b, b + 1, c);
            d = a.La(b, d); return tc(a, d, b[0] + 1, c) } return null }

    function wc(a, b, c) { var d = a.Gc(b),
            e = a.Sa(b);
        a = Aa(a.Za(b), a.f); return Ma(d[0] + c.fa * a[0] * e, d[1] + c.ea * a[1] * e, d[0] + (c.la + 1) * a[0] * e, d[1] + (c.ka + 1) * a[1] * e, void 0) }

    function tc(a, b, c, d) { xc(a, b[0], b[1], c, !1, sc); var e = sc[1],
            f = sc[2];
        xc(a, b[2], b[3], c, !0, sc); return ja(e, sc[1], f, sc[2], d) }

    function yc(a, b) { var c = a.Gc(b[0]),
            d = a.Sa(b[0]);
        a = Aa(a.Za(b[0]), a.f); return [c[0] + (b[1] + .5) * a[0] * d, c[1] + (b[2] + .5) * a[1] * d] }
    k.La = function(a, b) { var c = this.Gc(a[0]),
            d = this.Sa(a[0]),
            e = Aa(this.Za(a[0]), this.f),
            f = c[0] + a[1] * e[0] * d;
        a = c[1] + a[2] * e[1] * d; return Ma(f, a, f + e[0] * d, a + e[1] * d, b) };
    k.Ke = function(a, b, c) { var d = a[0],
            e = a[1];
        a = this.Bc(b); var f = b / this.Sa(a),
            g = this.Gc(a),
            h = Aa(this.Za(a), this.f);
        d = f * Math.floor((d - g[0]) / b + 0) / h[0];
        b = f * Math.floor((e - g[1]) / b + .5) / h[1];
        d = Math.floor(d);
        b = Math.floor(b); return oc(a, d, b, c) };

    function xc(a, b, c, d, e, f) { var g = a.Gc(d),
            h = a.Sa(d);
        a = Aa(a.Za(d), a.f);
        b = Math.floor((b - g[0]) / h + (e ? .5 : 0)) / a[0];
        c = Math.floor((c - g[1]) / h + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c)); return oc(d, b, c, f) }
    k.hg = function(a, b, c) { return xc(this, a[0], a[1], b, !1, c) };
    k.Za = function(a) { return this.j ? this.j : this.i[a] };
    k.Bc = function(a, b) { return oa(dc(this.b, a, b || 0), this.minZoom, this.maxZoom) };

    function rc(a, b) { for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e) d[e] = tc(a, b, e);
        a.a = d };

    function zc(a) { var b = a.f;
        b || (b = Ac(a), a.f = b); return b }

    function Bc(a) { var b = {};
        jb(b, void 0 !== a ? a : {});
        void 0 === b.extent && (b.extent = Nb("EPSG:3857").C());
        b.resolutions = Cc(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom; return new qc(b) }

    function Cc(a, b, c) { b = void 0 !== b ? b : 42; var d = bb(a);
        a = ab(a);
        c = Aa(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b); for (a = 0; a < b; ++a) d[a] = c / Math.pow(2, a); return d }

    function Ac(a, b, c) { a = Dc(a);
        b = Cc(a, b, c); return new qc({ extent: a, origin: Ya(a), resolutions: b, tileSize: c }) }

    function Dc(a) { a = Nb(a); var b = a.C();
        b || (a = 180 * tb.degrees / a.Wc(), b = Ma(-a, -a, a, a)); return b };

    function Ec(a) { this.mg = a.html }
    Ec.prototype.b = function() { return this.mg };

    function Fc(a) {
        function b(b) { var c = a.listener,
                e = a.Ah || a.target;
            a.Ch && Gc(a); return c.call(e, b) } return a.Bh = b }

    function Hc(a, b, c, d) { for (var e, f = 0, g = a.length; f < g; ++f)
            if (e = a[f], e.listener === b && e.Ah === c) return d && (e.deleteIndex = f), e }

    function Ic(a, b) { return (a = a.mb) ? a[b] : void 0 }

    function Jc(a) { var b = a.mb;
        b || (b = a.mb = {}); return b }

    function Kc(a, b) { var c = Ic(a, b); if (c) { for (var d = 0, e = c.length; d < e; ++d) a.removeEventListener(b, c[d].Bh), kb(c[d]);
            c.length = 0; if (c = a.mb) delete c[b], 0 === Object.keys(c).length && delete a.mb } }

    function y(a, b, c, d, e) { var f = Jc(a),
            g = f[b];
        g || (g = f[b] = []);
        (f = Hc(g, c, d, !1)) ? e || (f.Ch = !1): (f = { Ah: d, Ch: !!e, listener: c, target: a, type: b }, a.addEventListener(b, Fc(f)), g.push(f)); return f }

    function Lc(a, b, c, d) { return y(a, b, c, d, !0) }

    function Mc(a, b, c, d) {
        (a = Ic(a, b)) && (c = Hc(a, c, d, !0)) && Gc(c) }

    function Gc(a) { if (a && a.target) { a.target.removeEventListener(a.type, a.Bh); var b = Ic(a.target, a.type); if (b) { var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a); - 1 !== c && b.splice(c, 1);
                0 === b.length && Kc(a.target, a.type) }
            kb(a) } }

    function Nc(a) { var b = Jc(a),
            c; for (c in b) Kc(a, c) };

    function Oc() {}
    Oc.prototype.Ub = !1;

    function Pc(a) { a.Ub || (a.Ub = !0, a.ha()) }
    Oc.prototype.ha = da;

    function Qc(a) { this.type = a;
        this.target = null }
    Qc.prototype.preventDefault = Qc.prototype.stopPropagation = function() { this.Jp = !0 };

    function Rc(a) { a.stopPropagation() };

    function Sc() { this.Va = {};
        this.qa = {};
        this.oa = {} }
    v(Sc, Oc);
    Sc.prototype.addEventListener = function(a, b) { var c = this.oa[a];
        c || (c = this.oa[a] = []); - 1 === c.indexOf(b) && c.push(b) };
    Sc.prototype.b = function(a) { var b = "string" === typeof a ? new Qc(a) : a;
        a = b.type;
        b.target = this; var c = this.oa[a]; if (c) { a in this.qa || (this.qa[a] = 0, this.Va[a] = 0);++this.qa[a]; for (var d = 0, e = c.length; d < e; ++d)
                if (!1 === c[d].call(this, b) || b.Jp) { var f = !1; break }--this.qa[a]; if (0 === this.qa[a]) { b = this.Va[a]; for (delete this.Va[a]; b--;) this.removeEventListener(a, da);
                delete this.qa[a] } return f } };
    Sc.prototype.ha = function() { Nc(this) };

    function Tc(a, b) { return b ? b in a.oa : 0 < Object.keys(a.oa).length }
    Sc.prototype.removeEventListener = function(a, b) { var c = this.oa[a];
        c && (b = c.indexOf(b), a in this.Va ? (c[b] = da, ++this.Va[a]) : (c.splice(b, 1), 0 === c.length && delete this.oa[a])) };

    function Uc() { Sc.call(this);
        this.g = 0 }
    v(Uc, Sc);
    k = Uc.prototype;
    k.u = function() {++this.g;
        this.b("change") };
    k.L = function() { return this.g };
    k.J = function(a, b, c) { if (Array.isArray(a)) { for (var d = a.length, e = Array(d), f = 0; f < d; ++f) e[f] = y(this, a[f], b, c); return e } return y(this, a, b, c) };
    k.once = function(a, b, c) { if (Array.isArray(a)) { for (var d = a.length, e = Array(d), f = 0; f < d; ++f) e[f] = Lc(this, a[f], b, c); return e } return Lc(this, a, b, c) };
    k.K = function(a, b, c) { if (Array.isArray(a))
            for (var d = 0, e = a.length; d < e; ++d) Mc(this, a[d], b, c);
        else Mc(this, a, b, c) };

    function Vc(a) { Uc.call(this);
        w(this);
        this.P = {};
        void 0 !== a && this.I(a) }
    v(Vc, Uc);
    var Wc = {};

    function Xc(a) { return Wc.hasOwnProperty(a) ? Wc[a] : Wc[a] = "change:" + a }
    k = Vc.prototype;
    k.get = function(a) { var b;
        this.P.hasOwnProperty(a) && (b = this.P[a]); return b };
    k.R = function() { return Object.keys(this.P) };
    k.M = function() { return jb({}, this.P) };

    function Yc(a, b, c) { var d = Xc(b);
        a.b(new Zc(d, b, c));
        a.b(new Zc("propertychange", b, c)) }
    k.set = function(a, b, c) { c ? this.P[a] = b : (c = this.P[a], this.P[a] = b, c !== b && Yc(this, a, c)) };
    k.I = function(a, b) { for (var c in a) this.set(c, a[c], b) };
    k.S = function(a, b) { if (a in this.P) { var c = this.P[a];
            delete this.P[a];
            b || Yc(this, a, c) } };

    function Zc(a, b, c) { Qc.call(this, a);
        this.key = b;
        this.oldValue = c }
    v(Zc, Qc);

    function A(a, b) { Vc.call(this);
        this.c = !!(b || {}).unique;
        this.a = a ? a : []; if (this.c)
            for (a = 0, b = this.a.length; a < b; ++a) $c(this, this.a[a], a);
        ad(this) }
    v(A, Vc);
    k = A.prototype;
    k.clear = function() { for (; 0 < this.jc();) this.pop() };
    k.og = function(a) { var b; var c = 0; for (b = a.length; c < b; ++c) this.push(a[c]); return this };
    k.forEach = function(a, b) { a = b ? a.bind(b) : a;
        b = this.a; for (var c = 0, d = b.length; c < d; ++c) a(b[c], c, b) };
    k.Om = function() { return this.a };
    k.item = function(a) { return this.a[a] };
    k.jc = function() { return this.get(bd) };
    k.Qe = function(a, b) { this.c && $c(this, b);
        this.a.splice(a, 0, b);
        ad(this);
        this.b(new cd("add", b)) };
    k.pop = function() { return this.Vg(this.jc() - 1) };
    k.push = function(a) { this.c && $c(this, a); var b = this.jc();
        this.Qe(b, a); return this.jc() };
    k.remove = function(a) { var b = this.a,
            c; var d = 0; for (c = b.length; d < c; ++d)
            if (b[d] === a) return this.Vg(d) };
    k.Vg = function(a) { var b = this.a[a];
        this.a.splice(a, 1);
        ad(this);
        this.b(new cd("remove", b)); return b };
    k.jq = function(a, b) { var c = this.jc(); if (a < c) this.c && $c(this, b, a), c = this.a[a], this.a[a] = b, this.b(new cd("remove", c)), this.b(new cd("add", b));
        else { for (; c < a; ++c) this.Qe(c, void 0);
            this.Qe(a, b) } };

    function ad(a) { a.set(bd, a.a.length) }

    function $c(a, b, c) { for (var d = 0, e = a.a.length; d < e; ++d)
            if (a.a[d] === b && d !== c) throw new ha(58); }
    var bd = "length";

    function cd(a, b) { Qc.call(this, a);
        this.element = b }
    v(cd, Qc);

    function dd(a, b, c) { Qc.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null }
    v(dd, Qc);

    function ed(a, b, c, d, e) { dd.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.sd(c);
        this.coordinate = b.Pa(this.pixel);
        this.dragging = void 0 !== d ? d : !1 }
    v(ed, dd);
    ed.prototype.preventDefault = function() { dd.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault() };
    ed.prototype.stopPropagation = function() { dd.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation() };
    var fd = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function gd(a, b) { var c, d, e = fd.length; for (d = 0; d < e; ++d) try { if (c = a.getContext(fd[d], b)) return c } catch (f) {}
        return null };
    var hd, id = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
        jd = -1 !== id.indexOf("firefox"),
        kd = -1 !== id.indexOf("safari") && -1 == id.indexOf("chrom"),
        ld = -1 !== id.indexOf("webkit") && -1 == id.indexOf("edge"),
        md = -1 !== id.indexOf("macintosh"),
        nd = window.devicePixelRatio || 1,
        od = !1,
        pd = function() { if (!("HTMLCanvasElement" in window)) return !1; try { var a = document.createElement("CANVAS").getContext("2d"); return a ? (void 0 !== a.setLineDash && (od = !0), !0) : !1 } catch (b) { return !1 } }(),
        qd = "DeviceOrientationEvent" in
        window,
        rd = "geolocation" in navigator,
        sd = "ontouchstart" in window,
        td = "PointerEvent" in window,
        ud = !!navigator.msPointerEnabled,
        vd = !1,
        wd, xd = [];
    if ("WebGLRenderingContext" in window) try { var yd = gd(document.createElement("CANVAS"), { failIfMajorPerformanceCaveat: !0 });
        yd && (vd = !0, wd = yd.getParameter(yd.MAX_TEXTURE_SIZE), xd = yd.getSupportedExtensions()) } catch (a) {}
    hd = vd;
    ca = xd;
    ba = wd;
    var zd = { Wq: "singleclick", Lq: "click", Mq: "dblclick", Pq: "pointerdrag", Sq: "pointermove", Oq: "pointerdown", Vq: "pointerup", Uq: "pointerover", Tq: "pointerout", Qq: "pointerenter", Rq: "pointerleave", Nq: "pointercancel" };

    function Ad(a, b, c, d, e) { ed.call(this, a, b, c.b, d, e);
        this.b = c }
    v(Ad, ed);

    function Bd(a, b) { this.b = a;
        this.i = b };

    function Cd(a) { Bd.call(this, a, { mousedown: this.Am, mousemove: this.Bm, mouseup: this.Em, mouseover: this.Dm, mouseout: this.Cm });
        this.a = a.g;
        this.g = [] }
    v(Cd, Bd);

    function Dd(a, b) { a = a.g; var c = b.clientX;
        b = b.clientY; for (var d = 0, e = a.length, f; d < e && (f = a[d]); d++) { var g = Math.abs(b - f[1]); if (25 >= Math.abs(c - f[0]) && 25 >= g) return !0 } return !1 }

    function Ed(a) { var b = Fd(a, a),
            c = b.preventDefault;
        b.preventDefault = function() { a.preventDefault();
            c() };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse"; return b }
    k = Cd.prototype;
    k.Am = function(a) { if (!Dd(this, a)) {
            (1).toString() in this.a && this.cancel(a); var b = Ed(a);
            this.a[(1).toString()] = a;
            Gd(this.b, "pointerdown", b, a) } };
    k.Bm = function(a) { if (!Dd(this, a)) { var b = Ed(a);
            Gd(this.b, "pointermove", b, a) } };
    k.Em = function(a) { if (!Dd(this, a)) { var b = this.a[(1).toString()];
            b && b.button === a.button && (b = Ed(a), Gd(this.b, "pointerup", b, a), delete this.a[(1).toString()]) } };
    k.Dm = function(a) { if (!Dd(this, a)) { var b = Ed(a);
            Hd(this.b, b, a) } };
    k.Cm = function(a) { if (!Dd(this, a)) { var b = Ed(a);
            Id(this.b, b, a) } };
    k.cancel = function(a) { var b = Ed(a);
        this.b.cancel(b, a);
        delete this.a[(1).toString()] };

    function Jd(a) { Bd.call(this, a, { MSPointerDown: this.Jm, MSPointerMove: this.Km, MSPointerUp: this.Nm, MSPointerOut: this.Lm, MSPointerOver: this.Mm, MSPointerCancel: this.Im, MSGotPointerCapture: this.Gm, MSLostPointerCapture: this.Hm });
        this.a = a.g;
        this.g = ["", "unavailable", "touch", "pen", "mouse"] }
    v(Jd, Bd);

    function Kd(a, b) { var c = b; "number" === typeof b.pointerType && (c = Fd(b, b), c.pointerType = a.g[b.pointerType]); return c }
    k = Jd.prototype;
    k.Jm = function(a) { this.a[a.pointerId.toString()] = a; var b = Kd(this, a);
        Gd(this.b, "pointerdown", b, a) };
    k.Km = function(a) { var b = Kd(this, a);
        Gd(this.b, "pointermove", b, a) };
    k.Nm = function(a) { var b = Kd(this, a);
        Gd(this.b, "pointerup", b, a);
        delete this.a[a.pointerId.toString()] };
    k.Lm = function(a) { var b = Kd(this, a);
        Id(this.b, b, a) };
    k.Mm = function(a) { var b = Kd(this, a);
        Hd(this.b, b, a) };
    k.Im = function(a) { var b = Kd(this, a);
        this.b.cancel(b, a);
        delete this.a[a.pointerId.toString()] };
    k.Hm = function(a) { this.b.b(new Ld("lostpointercapture", a, a)) };
    k.Gm = function(a) { this.b.b(new Ld("gotpointercapture", a, a)) };

    function Md(a) { Bd.call(this, a, { pointerdown: this.Bp, pointermove: this.Cp, pointerup: this.Fp, pointerout: this.Dp, pointerover: this.Ep, pointercancel: this.Ap, gotpointercapture: this.Nl, lostpointercapture: this.ym }) }
    v(Md, Bd);
    k = Md.prototype;
    k.Bp = function(a) { Nd(this.b, a) };
    k.Cp = function(a) { Nd(this.b, a) };
    k.Fp = function(a) { Nd(this.b, a) };
    k.Dp = function(a) { Nd(this.b, a) };
    k.Ep = function(a) { Nd(this.b, a) };
    k.Ap = function(a) { Nd(this.b, a) };
    k.ym = function(a) { Nd(this.b, a) };
    k.Nl = function(a) { Nd(this.b, a) };

    function Ld(a, b, c) {
        Qc.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = Od(a);
        this.pressure = Pd(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.ctrlKey = "ctrlKey" in a ? a.ctrlKey : !1;
        this.altKey = "altKey" in a ? a.altKey : !1;
        this.shiftKey =
            "shiftKey" in a ? a.shiftKey : !1;
        this.metaKey = "metaKey" in a ? a.metaKey : !1;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget : null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.tiltX = "tiltX" in a ? a.tiltX : 0;
        this.tiltY = "tiltY" in a ? a.tiltY : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function() { b.preventDefault() })
    }
    v(Ld, Qc);

    function Od(a) { if (a.buttons || Rd) a = a.buttons;
        else switch (a.which) {
            case 1:
                a = 1; break;
            case 2:
                a = 4; break;
            case 3:
                a = 2; break;
            default:
                a = 0 }
        return a }

    function Pd(a, b) { var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0; return c }
    var Rd = !1;
    try { Rd = 1 === (new MouseEvent("click", { buttons: 1 })).buttons } catch (a) {};

    function Sd(a, b) { Bd.call(this, a, { touchstart: this.Fq, touchmove: this.Eq, touchend: this.Dq, touchcancel: this.Cq });
        this.a = a.g;
        this.j = b;
        this.g = void 0;
        this.f = 0;
        this.c = void 0 }
    v(Sd, Bd);
    k = Sd.prototype;
    k.zj = function() { this.f = 0;
        this.c = void 0 };

    function Td(a, b, c) { b = Fd(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.f;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.g === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY; return b }

    function Ud(a, b, c) {
        function d() { b.preventDefault() } var e = Array.prototype.slice.call(b.changedTouches),
            f = e.length,
            g; for (g = 0; g < f; ++g) { var h = Td(a, b, e[g]);
            h.preventDefault = d;
            c.call(a, b, h) } }
    k.Fq = function(a) { var b = a.touches,
            c = Object.keys(this.a),
            d = c.length; if (d >= b.length) { var e = [],
                f; for (f = 0; f < d; ++f) { var g = c[f]; var h = this.a[g]; var l; if (!(l = 1 == g)) a: { for (var m = b.length, n = 0; n < m; n++)
                        if (l = b[n], l.identifier === g - 2) { l = !0; break a }
                    l = !1 }
                l || e.push(h.out) } for (f = 0; f < e.length; ++f) this.Mf(a, e[f]) }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length; if (0 === c || 1 === c && (1).toString() in this.a) this.g = b.identifier, void 0 !== this.c && clearTimeout(this.c);
        Vd(this, a);
        this.f++;
        Ud(this, a, this.wp) };
    k.wp = function(a, b) { this.a[b.pointerId] = { target: b.target, out: b, mj: b.target }; var c = this.b;
        b.bubbles = !0;
        Gd(c, "pointerover", b, a);
        c = this.b;
        b.bubbles = !1;
        Gd(c, "pointerenter", b, a);
        Gd(this.b, "pointerdown", b, a) };
    k.Eq = function(a) { a.preventDefault();
        Ud(this, a, this.Fm) };
    k.Fm = function(a, b) { var c = this.a[b.pointerId]; if (c) { var d = c.out,
                e = c.mj;
            Gd(this.b, "pointermove", b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (Id(this.b, d, a), Hd(this.b, b, a)) : (b.target = e, b.relatedTarget = null, this.Mf(a, b)));
            c.out = b;
            c.mj = b.target } };
    k.Dq = function(a) { Vd(this, a);
        Ud(this, a, this.Gq) };
    k.Gq = function(a, b) { Gd(this.b, "pointerup", b, a);
        this.b.out(b, a);
        Wd(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.c = setTimeout(this.zj.bind(this), 200)) };
    k.Cq = function(a) { Ud(this, a, this.Mf) };
    k.Mf = function(a, b) { this.b.cancel(b, a);
        this.b.out(b, a);
        Wd(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.c = setTimeout(this.zj.bind(this), 200)) };

    function Vd(a, b) { var c = a.j.g;
        b = b.changedTouches[0]; if (a.g === b.identifier) { var d = [b.clientX, b.clientY];
            c.push(d);
            setTimeout(function() { var a = c.indexOf(d); - 1 < a && c.splice(a, 1) }, 2500) } };

    function Xd(a) { Sc.call(this);
        this.f = a;
        this.g = {};
        this.i = {};
        this.a = [];
        td ? Yd(this, new Md(this)) : ud ? Yd(this, new Jd(this)) : (a = new Cd(this), Yd(this, a), sd && Yd(this, new Sd(this, a)));
        a = this.a.length; for (var b, c = 0; c < a; c++) b = this.a[c], Zd(this, Object.keys(b.i)) }
    v(Xd, Sc);

    function Yd(a, b) { var c = Object.keys(b.i);
        c && (c.forEach(function(a) { var c = b.i[a];
            c && (this.i[a] = c.bind(b)) }, a), a.a.push(b)) }
    Xd.prototype.c = function(a) { var b = this.i[a.type];
        b && b(a) };

    function Zd(a, b) { b.forEach(function(a) { y(this.f, a, this.c, this) }, a) }

    function $d(a, b) { b.forEach(function(a) { Mc(this.f, a, this.c, this) }, a) }

    function Fd(a, b) { for (var c = {}, d, e = 0, f = ae.length; e < f; e++) d = ae[e][0], c[d] = a[d] || b[d] || ae[e][1]; return c }

    function Wd(a, b, c) { b.bubbles = !1;
        Gd(a, "pointerleave", b, c) }
    Xd.prototype.out = function(a, b) { a.bubbles = !0;
        Gd(this, "pointerout", a, b) };
    Xd.prototype.cancel = function(a, b) { Gd(this, "pointercancel", a, b) };

    function Id(a, b, c) { a.out(b, c); var d = b.target,
            e = b.relatedTarget;
        d && e && d.contains(e) || Wd(a, b, c) }

    function Hd(a, b, c) { b.bubbles = !0;
        Gd(a, "pointerover", b, c); var d = b.target,
            e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, Gd(a, "pointerenter", b, c)) }

    function Gd(a, b, c, d) { a.b(new Ld(b, d, c)) }

    function Nd(a, b) { a.b(new Ld(b.type, b, b)) }
    Xd.prototype.ha = function() { for (var a = this.a.length, b, c = 0; c < a; c++) b = this.a[c], $d(this, Object.keys(b.i));
        Sc.prototype.ha.call(this) };
    var ae = [
        ["bubbles", !1],
        ["cancelable", !1],
        ["view", null],
        ["detail", null],
        ["screenX", 0],
        ["screenY", 0],
        ["clientX", 0],
        ["clientY", 0],
        ["ctrlKey", !1],
        ["altKey", !1],
        ["shiftKey", !1],
        ["metaKey", !1],
        ["button", 0],
        ["relatedTarget", null],
        ["buttons", 0],
        ["pointerId", 0],
        ["width", 0],
        ["height", 0],
        ["pressure", 0],
        ["tiltX", 0],
        ["tiltY", 0],
        ["pointerType", ""],
        ["hwTimestamp", 0],
        ["isPrimary", !1],
        ["type", ""],
        ["target", null],
        ["currentTarget", null],
        ["which", 0]
    ];

    function be(a, b) { Sc.call(this);
        this.g = a;
        this.j = 0;
        this.l = !1;
        this.i = [];
        this.D = b ? b * nd : nd;
        this.c = null;
        a = this.g.a;
        this.P = 0;
        this.o = {};
        this.f = new Xd(a);
        this.a = null;
        this.s = y(this.f, "pointerdown", this.gm, this);
        this.v = y(this.f, "pointermove", this.eq, this) }
    v(be, Sc);

    function de(a, b) { var c = new Ad("click", a.g, b);
        a.b(c);
        0 !== a.j ? (clearTimeout(a.j), a.j = 0, c = new Ad("dblclick", a.g, b), a.b(c)) : a.j = setTimeout(function() { this.j = 0; var a = new Ad("singleclick", this.g, b);
            this.b(a) }.bind(a), 250) }

    function ee(a, b) { "pointerup" == b.type || "pointercancel" == b.type ? delete a.o[b.pointerId] : "pointerdown" == b.type && (a.o[b.pointerId] = !0);
        a.P = Object.keys(a.o).length }
    k = be.prototype;
    k.$h = function(a) { ee(this, a); var b = new Ad("pointerup", this.g, a);
        this.b(b);!this.l && 0 === a.button && de(this, this.c);
        0 === this.P && (this.i.forEach(Gc), this.i.length = 0, this.l = !1, this.c = null, Pc(this.a), this.a = null) };
    k.gm = function(a) { ee(this, a); var b = new Ad("pointerdown", this.g, a);
        this.b(b);
        this.c = a;
        0 === this.i.length && (this.a = new Xd(document), this.i.push(y(this.a, "pointermove", this.cn, this), y(this.a, "pointerup", this.$h, this), y(this.f, "pointercancel", this.$h, this))) };
    k.cn = function(a) { if (fe(this, a)) { this.l = !0; var b = new Ad("pointerdrag", this.g, a, this.l);
            this.b(b) }
        a.preventDefault() };
    k.eq = function(a) { this.b(new Ad(a.type, this.g, a, !(!this.c || !fe(this, a)))) };

    function fe(a, b) { return Math.abs(b.clientX - a.c.clientX) > a.D || Math.abs(b.clientY - a.c.clientY) > a.D }
    k.ha = function() { this.v && (Gc(this.v), this.v = null);
        this.s && (Gc(this.s), this.s = null);
        this.i.forEach(Gc);
        this.i.length = 0;
        this.a && (Pc(this.a), this.a = null);
        this.f && (Pc(this.f), this.f = null);
        Sc.prototype.ha.call(this) };

    function ge(a, b) { this.s = a;
        this.c = b;
        this.b = [];
        this.g = [];
        this.a = {} }
    ge.prototype.clear = function() { this.b.length = 0;
        this.g.length = 0;
        kb(this.a) };

    function he(a) { var b = a.b,
            c = a.g,
            d = b[0];
        1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), ie(a, 0));
        b = a.c(d);
        delete a.a[b]; return d }
    ge.prototype.i = function(a) { na(!(this.c(a) in this.a), 31); var b = this.s(a); return Infinity != b ? (this.b.push(a), this.g.push(b), this.a[this.c(a)] = !0, je(this, 0, this.b.length - 1), !0) : !1 };

    function ie(a, b) { for (var c = a.b, d = a.g, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) { var l = 2 * b + 1,
                m = 2 * b + 2;
            l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l }
        c[b] = f;
        d[b] = g;
        je(a, h, b) }

    function je(a, b, c) { var d = a.b;
        a = a.g; for (var e = d[c], f = a[c]; c > b;) { var g = c - 1 >> 1; if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g;
            else break }
        d[c] = e;
        a[c] = f }

    function ke(a) { var b = a.s,
            c = a.b,
            d = a.g,
            e = 0,
            f = c.length,
            g; for (g = 0; g < f; ++g) { var h = c[g]; var l = b(h);
            Infinity == l ? delete a.a[a.c(h)] : (d[e] = l, c[e++] = h) }
        c.length = e;
        d.length = e; for (b = (a.b.length >> 1) - 1; 0 <= b; b--) ie(a, b) };

    function le(a, b) { ge.call(this, function(b) { return a.apply(null, b) }, function(a) { return a[0].ib() });
        this.v = b;
        this.j = 0;
        this.f = {} }
    v(le, ge);
    le.prototype.i = function(a) { var b = ge.prototype.i.call(this, a);
        b && y(a[0], "change", this.l, this); return b };
    le.prototype.l = function(a) { a = a.target; var b = a.getState(); if (2 === b || 3 === b || 4 === b || 5 === b) Mc(a, "change", this.l, this), a = a.ib(), a in this.f && (delete this.f[a], --this.j), this.v() };

    function me(a, b, c) { for (var d = 0, e = !1, f, g, h; a.j < b && d < c && 0 < a.b.length;) g = he(a)[0], h = g.ib(), f = g.getState(), 5 === f ? e = !0 : 0 !== f || h in a.f || (a.f[h] = !0, ++a.j, ++d, g.load());
        0 === d && e && a.v() };

    function ne(a) { return function(b) { if (b) return [oa(b[0], a[0], a[2]), oa(b[1], a[1], a[3])] } }

    function oe(a) { return a };

    function pe(a) { return function(b, c, d) { if (void 0 !== b) return b = dc(a, b, d), b = oa(b + c, 0, a.length - 1), c = Math.floor(b), b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c] } }

    function qe(a, b, c) { return function(d, e, f) { if (void 0 !== d) return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0), void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d) } };

    function re(a) { if (void 0 !== a) return 0 }

    function te(a, b) { if (void 0 !== a) return a + b }

    function ve(a) { var b = 2 * Math.PI / a; return function(a, d) { if (void 0 !== a) return a = Math.floor((a + d) / b + .5) * b } }

    function we() { var a = ua(5); return function(b, c) { if (void 0 !== b) return Math.abs(b + c) <= a ? 0 : b + c } };

    function xe(a, b) { a = void 0 !== b ? a.toFixed(b) : "" + a;
        b = a.indexOf(".");
        b = -1 === b ? a.length : b; return 2 < b ? a : Array(3 - b).join("0") + a }

    function ye(a) { a = ("" + a).split("."); for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) { var d = parseInt(a[c] || "0", 10),
                e = parseInt(b[c] || "0", 10); if (d > e) return 1; if (e > d) return -1 } return 0 };

    function ze(a, b) { a[0] += b[0];
        a[1] += b[1]; return a }

    function Ae(a, b) { var c = b.zd(),
            d = b.wa();
        b = d[0];
        d = d[1]; var e = a[0] - b;
        a = a[1] - d;
        0 === e && 0 === a && (e = 1); var f = Math.sqrt(e * e + a * a); return [b + c * e / f, d + c * a / f] }

    function Be(a, b) { var c = a[0];
        a = a[1]; var d = b[0],
            e = b[1];
        b = d[0];
        d = d[1]; var f = e[0];
        e = e[1]; var g = f - b,
            h = e - d;
        c = 0 === g && 0 === h ? 0 : (g * (c - b) + h * (a - d)) / (g * g + h * h || 0);
        0 >= c ? (a = b, c = d) : 1 <= c ? (a = f, c = e) : (a = b + c * g, c = d + c * h); return [a, c] }

    function Ce(a, b, c) { b = va(b + 180, 360) - 180; var d = Math.abs(3600 * b);
        c = c || 0; var e = Math.pow(10, c),
            f = Math.floor(d / 3600),
            g = Math.floor((d - 3600 * f) / 60);
        d = Math.ceil((d - 3600 * f - 60 * g) * e) / e;
        60 <= d && (d = 0, g += 1);
        60 <= g && (g = 0, f += 1); return f + "\u00b0 " + xe(g) + "\u2032 " + xe(d, c) + "\u2033" + (0 == b ? "" : " " + a.charAt(0 > b ? 1 : 0)) }

    function De(a, b, c) { return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : "" }

    function Ee(a, b) { for (var c = !0, d = a.length - 1; 0 <= d; --d)
            if (a[d] != b[d]) { c = !1; break }
        return c }

    function Fe(a, b) { var c = Math.cos(b);
        b = Math.sin(b); var d = a[1] * c + a[0] * b;
        a[0] = a[0] * c - a[1] * b;
        a[1] = d; return a }

    function Ge(a, b) { a[0] *= b;
        a[1] *= b }

    function He(a, b) { var c = a[0] - b[0];
        a = a[1] - b[1]; return c * c + a * a }

    function Ie(a, b) { return Math.sqrt(He(a, b)) }

    function Je(a, b) { return He(a, Be(a, b)) }

    function Ke(a, b) { return De(a, "{x}, {y}", b) };

    function Le(a) { return Math.pow(a, 3) }

    function Ne(a) { return 1 - Le(1 - a) }

    function Oe(a) { return 3 * a * a - 2 * a * a * a }

    function Pe(a) { return a };

    function Qe() { return !0 }

    function Re() { return !1 };

    function Se(a, b, c, d, e, f) { for (var g = f ? f : [], h = 0; b < c; b += d) { var l = a[b],
                m = a[b + 1];
            g[h++] = e[0] * l + e[2] * m + e[4];
            g[h++] = e[1] * l + e[3] * m + e[5] }
        f && g.length != h && (g.length = h); return g }

    function Te(a, b, c, d, e, f, g) { for (var h = g ? g : [], l = 0, m; b < c; b += d)
            for (h[l++] = a[b] + e, h[l++] = a[b + 1] + f, m = b + 2; m < b + d; ++m) h[l++] = a[m];
        g && h.length != l && (h.length = l); return h };
    var Ue = Array(6);

    function Ve() { return [1, 0, 0, 1, 0, 0] }

    function We(a) { return Xe(a, 1, 0, 0, 1, 0, 0) }

    function Ye(a, b) { var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            h = a[5],
            l = b[0],
            m = b[1],
            n = b[2],
            p = b[3],
            q = b[4];
        b = b[5];
        a[0] = c * l + e * m;
        a[1] = d * l + f * m;
        a[2] = c * n + e * p;
        a[3] = d * n + f * p;
        a[4] = c * q + e * b + g;
        a[5] = d * q + f * b + h; return a }

    function Xe(a, b, c, d, e, f, g) { a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g; return a }

    function Ze(a, b) { a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5]; return a }

    function $e(a, b) { var c = b[0],
            d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5]; return b }

    function af(a, b) { var c = Math.cos(b);
        b = Math.sin(b);
        Ye(a, Xe(Ue, c, b, -b, c, 0, 0)) }

    function bf(a, b, c) { return Ye(a, Xe(Ue, b, 0, 0, c, 0, 0)) }

    function cf(a, b, c) { Ye(a, Xe(Ue, 1, 0, 0, 1, b, c)) }

    function df(a, b, c, d, e, f, g, h) { var l = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * l;
        a[2] = -d * l;
        a[3] = e * f;
        a[4] = g * d * f - h * d * l + b;
        a[5] = g * e * l + h * e * f + c; return a }

    function ef(a) { var b = a[0] * a[3] - a[1] * a[2];
        na(0 !== b, 32); var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            h = a[5];
        a[0] = f / b;
        a[1] = -d / b;
        a[2] = -e / b;
        a[3] = c / b;
        a[4] = (e * h - f * g) / b;
        a[5] = -(c * h - d * g) / b; return a };

    function ff() { Vc.call(this);
        this.s = Ca();
        this.v = -1;
        this.i = {};
        this.l = this.f = 0;
        this.O = Ve() }
    v(ff, Vc);
    k = ff.prototype;
    k.Ib = function(a, b) { b = b ? b : [NaN, NaN];
        this.Nb(a[0], a[1], b, Infinity); return b };
    k.Bb = function(a) { return this.Zc(a[0], a[1]) };
    k.Zc = Re;
    k.C = function(a) { this.v != this.g && (this.s = this.ze(this.s), this.v = this.g); var b = this.s;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b; return a };
    k.Sb = function(a) { return this.Vd(a * a) };
    k.jb = function(a, b) { var c = this.O;
        a = Nb(a); var d = "tile-pixels" == a.a ? function(d, f, g) { var e = a.C(),
                l = a.ne;
            e = bb(l) / bb(e);
            df(c, l[0], l[3], e, -e, 0, 0, 0);
            Se(d, 0, d.length, g, c, f); return Xb(a, b)(d, f, g) } : Xb(a, b);
        this.Pc(d); return this };

    function gf() { ff.call(this);
        this.ja = "XY";
        this.a = 2;
        this.A = null }
    v(gf, ff);

    function hf(a) { var b; "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4); return b }
    k = gf.prototype;
    k.Zc = Re;
    k.ze = function(a) { return Pa(this.A, 0, this.A.length, this.a, a) };
    k.ec = function() { return this.A.slice(0, this.a) };
    k.da = function() { return this.A };
    k.fc = function() { return this.A.slice(this.A.length - this.a) };
    k.hc = function() { return this.ja };
    k.Vd = function(a) { this.l != this.g && (kb(this.i), this.f = 0, this.l = this.g); if (0 > a || 0 !== this.f && a <= this.f) return this; var b = a.toString(); if (this.i.hasOwnProperty(b)) return this.i[b]; var c = this.vd(a); if (c.da().length < this.A.length) return this.i[b] = c;
        this.f = a; return this };
    k.vd = function() { return this };
    k.pa = function() { return this.a };

    function jf(a, b, c) { a.a = hf(b);
        a.ja = b;
        a.A = c }

    function kf(a, b, c, d) { if (b) c = hf(b);
        else { for (b = 0; b < d; ++b) { if (0 === c.length) { a.ja = "XY";
                    a.a = 2; return }
                c = c[0] }
            c = c.length; var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            b = e }
        a.ja = b;
        a.a = c }
    k.Pc = function(a) { this.A && (a(this.A, this.A, this.a), this.u()) };
    k.rotate = function(a, b) { var c = this.da(); if (c) { var d = c.length,
                e = this.pa(),
                f = c ? c : [],
                g = Math.cos(a);
            a = Math.sin(a); var h = b[0];
            b = b[1]; for (var l = 0, m = 0; m < d; m += e) { var n = c[m] - h,
                    p = c[m + 1] - b;
                f[l++] = h + n * g - p * a;
                f[l++] = b + n * a + p * g; for (n = m + 2; n < m + e; ++n) f[l++] = c[n] }
            c && f.length != l && (f.length = l);
            this.u() } };
    k.scale = function(a, b, c) { var d = b;
        void 0 === d && (d = a); var e = c;
        e || (e = cb(this.C())); if (c = this.da()) { b = c.length; var f = this.pa(),
                g = c ? c : [],
                h = e[0];
            e = e[1]; for (var l = 0, m = 0; m < b; m += f) { var n = c[m] - h,
                    p = c[m + 1] - e;
                g[l++] = h + a * n;
                g[l++] = e + d * p; for (n = m + 2; n < m + f; ++n) g[l++] = c[n] }
            c && g.length != l && (g.length = l);
            this.u() } };
    k.translate = function(a, b) { var c = this.da();
        c && (Te(c, 0, c.length, this.pa(), a, b, c), this.u()) };

    function lf(a, b, c, d) { for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) { var h = a[b],
                l = a[b + 1];
            e += g * h - f * l;
            f = h;
            g = l } return e / 2 }

    function mf(a, b, c, d) { var e = 0,
            f; var g = 0; for (f = c.length; g < f; ++g) { var h = c[g];
            e += lf(a, b, h, d);
            b = h } return e };

    function nf(a, b, c, d, e, f, g) { var h = a[b],
            l = a[b + 1],
            m = a[c] - h,
            n = a[c + 1] - l; if (0 !== m || 0 !== n)
            if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n), 1 < f) b = c;
            else if (0 < f) { for (e = 0; e < d; ++e) g[e] = wa(a[b + e], a[c + e], f);
            g.length = d; return } for (e = 0; e < d; ++e) g[e] = a[b + e];
        g.length = d }

    function qf(a, b, c, d, e) { var f = a[b],
            g = a[b + 1]; for (b += d; b < c; b += d) { var h = a[b],
                l = a[b + 1];
            f = ta(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l } return e }

    function tf(a, b, c, d, e) { var f; var g = 0; for (f = c.length; g < f; ++g) { var h = c[g];
            e = qf(a, b, h, d, e);
            b = h } return e }

    function uf(a, b, c, d, e, f, g, h, l, m, n) { if (b == c) return m; if (0 === e) { var p = ta(g, h, a[b], a[b + 1]); if (p < m) { for (n = 0; n < d; ++n) l[n] = a[b + n];
                l.length = d; return p } return m } for (var q = n ? n : [NaN, NaN], r = b + d; r < c;)
            if (nf(a, r - d, r, d, g, h, q), p = ta(g, h, q[0], q[1]), p < m) { m = p; for (n = 0; n < d; ++n) l[n] = q[n];
                l.length = d;
                r += d } else r += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (nf(a, c - d, b, d, g, h, q), p = ta(g, h, q[0], q[1]), p < m)) { m = p; for (n = 0; n < d; ++n) l[n] = q[n];
            l.length = d } return m }

    function vf(a, b, c, d, e, f, g, h, l, m, n) { n = n ? n : [NaN, NaN]; var p; var q = 0; for (p = c.length; q < p; ++q) { var r = c[q];
            m = uf(a, b, r, d, e, f, g, h, l, m, n);
            b = r } return m };

    function wf(a, b) { var c = 0,
            d; var e = 0; for (d = b.length; e < d; ++e) a[c++] = b[e]; return c }

    function xf(a, b, c, d) { var e; var f = 0; for (e = c.length; f < e; ++f) { var g = c[f],
                h; for (h = 0; h < d; ++h) a[b++] = g[h] } return b }

    function yf(a, b, c, d, e) { e = e ? e : []; var f = 0,
            g; var h = 0; for (g = c.length; h < g; ++h) b = xf(a, b, c[h], d), e[f++] = b;
        e.length = f; return e };

    function zf(a, b, c, d, e) { e = void 0 !== e ? e : []; for (var f = 0; b < c; b += d) e[f++] = a.slice(b, b + d);
        e.length = f; return e }

    function Af(a, b, c, d, e) { e = void 0 !== e ? e : []; var f = 0,
            g; var h = 0; for (g = c.length; h < g; ++h) { var l = c[h];
            e[f++] = zf(a, b, l, d, e[f]);
            b = l }
        e.length = f; return e }

    function Bf(a, b, c, d, e) { e = void 0 !== e ? e : []; var f = 0,
            g; var h = 0; for (g = c.length; h < g; ++h) { var l = c[h];
            e[f++] = Af(a, b, l, d, e[f]);
            b = l[l.length - 1] }
        e.length = f; return e };

    function Cf(a, b, c, d, e, f, g) { var h = (c - b) / d; if (3 > h) { for (; b < c; b += d) f[g++] = a[b], f[g++] = a[b + 1]; return g } var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [b, c - d]; for (var m = 0, n; 0 < c.length;) { var p = c.pop(),
                q = c.pop(),
                r = 0,
                u = a[q],
                x = a[q + 1],
                C = a[p],
                z = a[p + 1]; for (n = q + d; n < p; n += d) { var E = sa(a[n], a[n + 1], u, x, C, z);
                E > r && (m = n, r = E) }
            r > e && (l[(m - b) / d] = 1, q + d < m && c.push(q, m), m + d < p && c.push(m, p)) } for (n = 0; n < h; ++n) l[n] && (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]); return g }

    function Df(a, b, c, d, e, f, g, h) {
        var l;
        var m = 0;
        for (l = c.length; m < l; ++m) {
            var n = c[m];
            a: {
                var p = a,
                    q = n,
                    r = d,
                    u = e,
                    x = f,
                    C = g;
                if (b != q) {
                    var z = u * Math.round(p[b] / u),
                        E = u * Math.round(p[b + 1] / u);
                    b += r;
                    x[C++] = z;
                    x[C++] = E;
                    do { var V = u * Math.round(p[b] / u);
                        g = u * Math.round(p[b + 1] / u);
                        b += r; if (b == q) { x[C++] = V;
                            x[C++] = g;
                            g = C; break a } } while (V == z && g == E);
                    for (; b < q;) {
                        var ya = u * Math.round(p[b] / u);
                        var fa = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (ya != V || fa != g) {
                            var pa = V - z,
                                Ja = g - E,
                                ma = ya - z,
                                Sa = fa - E;
                            pa * Sa == Ja * ma && (0 > pa && ma < pa || pa == ma || 0 < pa && ma > pa) && (0 > Ja && Sa < Ja || Ja ==
                                Sa || 0 < Ja && Sa > Ja) || (x[C++] = V, x[C++] = g, z = V, E = g);
                            V = ya;
                            g = fa
                        }
                    }
                    x[C++] = V;
                    x[C++] = g
                }
                g = C
            }
            h.push(g);
            b = n
        }
        return g
    };

    function Ef(a, b) { gf.call(this);
        this.c = this.j = -1;
        this.na(a, b) }
    v(Ef, gf);
    k = Ef.prototype;
    k.clone = function() { var a = new Ef(null);
        Ff(a, this.ja, this.A.slice()); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d;
        this.c != this.g && (this.j = Math.sqrt(qf(this.A, 0, this.A.length, this.a, 0)), this.c = this.g); return uf(this.A, 0, this.A.length, this.a, this.j, !0, a, b, c, d) };
    k.Mn = function() { return lf(this.A, 0, this.A.length, this.a) };
    k.U = function() { return zf(this.A, 0, this.A.length, this.a) };
    k.vd = function(a) { var b = [];
        b.length = Cf(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new Ef(null);
        Ff(a, "XY", b); return a };
    k.T = function() { return "LinearRing" };
    k.$a = function() {};
    k.na = function(a, b) { a ? (kf(this, b, a, 1), this.A || (this.A = []), this.A.length = xf(this.A, 0, a, this.a), this.u()) : Ff(this, "XY", null) };

    function Ff(a, b, c) { jf(a, b, c);
        a.u() };

    function B(a, b) { gf.call(this);
        this.na(a, b) }
    v(B, gf);
    k = B.prototype;
    k.clone = function() { var a = new B(null);
        a.ba(this.ja, this.A.slice()); return a };
    k.Nb = function(a, b, c, d) { var e = this.A;
        a = ta(a, b, e[0], e[1]); if (a < d) { d = this.a; for (b = 0; b < d; ++b) c[b] = e[b];
            c.length = d; return a } return d };
    k.U = function() { return this.A ? this.A.slice() : [] };
    k.ze = function(a) { return Oa(this.A, a) };
    k.T = function() { return "Point" };
    k.$a = function(a) { return Ia(a, this.A[0], this.A[1]) };
    k.na = function(a, b) { a ? (kf(this, b, a, 0), this.A || (this.A = []), this.A.length = wf(this.A, a), this.u()) : this.ba("XY", null) };
    k.ba = function(a, b) { jf(this, a, b);
        this.u() };

    function Gf(a, b, c, d, e) { return !Ua(e, function(e) { return !Hf(a, b, c, d, e[0], e[1]) }) }

    function Hf(a, b, c, d, e, f) { for (var g = 0, h = a[c - d], l = a[c - d + 1]; b < c; b += d) { var m = a[b],
                n = a[b + 1];
            l <= f ? n > f && 0 < (m - h) * (f - l) - (e - h) * (n - l) && g++ : n <= f && 0 > (m - h) * (f - l) - (e - h) * (n - l) && g--;
            h = m;
            l = n } return 0 !== g }

    function If(a, b, c, d, e, f) { if (0 === c.length || !Hf(a, b, c[0], d, e, f)) return !1; var g;
        b = 1; for (g = c.length; b < g; ++b)
            if (Hf(a, c[b - 1], c[b], d, e, f)) return !1;
        return !0 };

    function Jf(a, b, c, d, e, f, g) { var h, l = e[f + 1],
            m = [],
            n = c[0]; var p = a[n - d]; var q = a[n - d + 1]; for (h = b; h < n; h += d) { var r = a[h]; var u = a[h + 1]; if (l <= q && u <= l || q <= l && l <= u) p = (l - q) / (u - q) * (r - p) + p, m.push(p);
            p = r;
            q = u }
        n = NaN;
        q = -Infinity;
        m.sort(bc);
        p = m[0];
        h = 1; for (u = m.length; h < u; ++h) { r = m[h]; var x = Math.abs(r - p);
            x > q && (p = (p + r) / 2, If(a, b, c, d, p, l) && (n = p, q = x));
            p = r }
        isNaN(n) && (n = e[f]); return g ? (g.push(n, l, q), g) : [n, l, q] };

    function Kf(a, b, c, d, e, f) { for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) { h[0] = a[b + d];
            h[1] = a[b + d + 1]; if (l = e.call(f, g, h)) return l;
            g[0] = h[0];
            g[1] = h[1] } return !1 };

    function Lf(a, b, c, d, e) { var f = Qa(Ca(), a, b, c, d); return fb(e, f) ? Ka(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Kf(a, b, c, d, function(a, b) { var c = !1,
                d = La(e, a),
                f = La(e, b); if (1 === d || 1 === f) c = !0;
            else { var g = e[0],
                    h = e[1],
                    r = e[2],
                    u = e[3],
                    x = b[0];
                b = b[1];
                a = (b - a[1]) / (x - a[0]);
                f & 2 && !(d & 2) && (c = x - (b - u) / a, c = c >= g && c <= r);
                c || !(f & 4) || d & 4 || (c = b - (x - r) * a, c = c >= h && c <= u);
                c || !(f & 8) || d & 8 || (c = x - (b - h) / a, c = c >= g && c <= r);
                c || !(f & 16) || d & 16 || (c = b - (x - g) * a, c = c >= h && c <= u) } return c }) : !1 }

    function Mf(a, b, c, d, e) { var f = c[0]; if (!(Lf(a, b, f, d, e) || Hf(a, b, f, d, e[0], e[1]) || Hf(a, b, f, d, e[0], e[3]) || Hf(a, b, f, d, e[2], e[1]) || Hf(a, b, f, d, e[2], e[3]))) return !1; if (1 === c.length) return !0;
        b = 1; for (f = c.length; b < f; ++b)
            if (Gf(a, c[b - 1], c[b], d, e)) return !1;
        return !0 };

    function Nf(a, b, c, d) { for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) { var h = a[b],
                l = a[b + 1];
            e += (h - f) * (l + g);
            f = h;
            g = l } return 0 < e }

    function Of(a, b, c, d) { var e = 0;
        d = void 0 !== d ? d : !1; var f; var g = 0; for (f = b.length; g < f; ++g) { var h = b[g];
            e = Nf(a, e, h, c); if (0 === g) { if (d && e || !d && !e) return !1 } else if (d && !e || !d && e) return !1;
            e = h } return !0 }

    function Pf(a, b, c, d, e) { e = void 0 !== e ? e : !1; var f; var g = 0; for (f = c.length; g < f; ++g) { var h = c[g],
                l = Nf(a, b, h, d); if (0 === g ? e && l || !e && !l : e && !l || !e && l) { l = a; for (var m = h, n = d; b < m - n;) { var p; for (p = 0; p < n; ++p) { var q = l[b + p];
                        l[b + p] = l[m - n + p];
                        l[m - n + p] = q }
                    b += n;
                    m -= n } }
            b = h } return b }

    function Qf(a, b, c, d) { var e = 0,
            f; var g = 0; for (f = b.length; g < f; ++g) e = Pf(a, e, b[g], c, d); return e };

    function D(a, b) { gf.call(this);
        this.c = [];
        this.o = -1;
        this.D = null;
        this.G = this.B = this.H = -1;
        this.j = null;
        this.na(a, b) }
    v(D, gf);
    k = D.prototype;
    k.Ck = function(a) { this.A ? ec(this.A, a.da()) : this.A = a.da().slice();
        this.c.push(this.A.length);
        this.u() };
    k.clone = function() { var a = new D(null);
        a.ba(this.ja, this.A.slice(), this.c.slice()); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d;
        this.B != this.g && (this.H = Math.sqrt(tf(this.A, 0, this.c, this.a, 0)), this.B = this.g); return vf(this.A, 0, this.c, this.a, this.H, !0, a, b, c, d) };
    k.Zc = function(a, b) { return If(this.Xb(), 0, this.c, this.a, a, b) };
    k.Pn = function() { return mf(this.Xb(), 0, this.c, this.a) };
    k.U = function(a) { if (void 0 !== a) { var b = this.Xb().slice();
            Pf(b, 0, this.c, this.a, a) } else b = this.A; return Af(b, 0, this.c, this.a) };
    k.ob = function() { return this.c };
    k.Sd = function() { if (this.o != this.g) { var a = cb(this.C());
            this.D = Jf(this.Xb(), 0, this.c, this.a, a, 0);
            this.o = this.g } return this.D };
    k.ml = function() { return new B(this.Sd(), "XYM") };
    k.sl = function() { return this.c.length };
    k.Th = function(a) { if (0 > a || this.c.length <= a) return null; var b = new Ef(null);
        Ff(b, this.ja, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a])); return b };
    k.Td = function() { var a = this.ja,
            b = this.A,
            c = this.c,
            d = [],
            e = 0,
            f; var g = 0; for (f = c.length; g < f; ++g) { var h = c[g],
                l = new Ef(null);
            Ff(l, a, b.slice(e, h));
            d.push(l);
            e = h } return d };
    k.Xb = function() { if (this.G != this.g) { var a = this.A;
            Of(a, this.c, this.a) ? this.j = a : (this.j = a.slice(), this.j.length = Pf(this.j, 0, this.c, this.a));
            this.G = this.g } return this.j };
    k.vd = function(a) { var b = [],
            c = [];
        b.length = Df(this.A, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
        a = new D(null);
        a.ba("XY", b, c); return a };
    k.T = function() { return "Polygon" };
    k.$a = function(a) { return Mf(this.Xb(), 0, this.c, this.a, a) };
    k.na = function(a, b) { a ? (kf(this, b, a, 2), this.A || (this.A = []), a = yf(this.A, 0, a, this.a, this.c), this.A.length = 0 === a.length ? 0 : a[a.length - 1], this.u()) : this.ba("XY", null, this.c) };
    k.ba = function(a, b, c) { jf(this, a, b);
        this.c = c;
        this.u() };

    function Rf(a, b, c, d) { var e = d ? d : 32;
        d = []; var f; for (f = 0; f < e; ++f) ec(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new D(null);
        a.ba("XY", d, [d.length]); return a }

    function Sf(a) { var b = a[0],
            c = a[1],
            d = a[2];
        a = a[3];
        b = [b, c, b, a, d, a, d, c, b, c];
        c = new D(null);
        c.ba("XY", b, [b.length]); return c }

    function Tf(a, b, c) { var d = b ? b : 32,
            e = a.pa();
        b = a.ja; var f = new D(null, b);
        d = e * (d + 1);
        e = Array(d); for (var g = 0; g < d; g++) e[g] = 0;
        f.ba(b, e, [e.length]);
        Xf(f, a.wa(), a.zd(), c); return f }

    function Xf(a, b, c, d) { var e = a.da(),
            f = a.ja,
            g = a.pa(),
            h = a.ob(),
            l = e.length / g - 1;
        d = d ? d : 0; for (var m, n, p = 0; p <= l; ++p) n = p * g, m = d + 2 * va(p, l) * Math.PI / l, e[n] = b[0] + c * Math.cos(m), e[n + 1] = b[1] + c * Math.sin(m);
        a.ba(f, e, h) };

    function F(a) { Vc.call(this);
        a = jb({}, a);
        this.i = [0, 0];
        this.c = [];
        this.Df = this.Df.bind(this);
        this.v = Tb(a.projection);
        Yf(this, a) }
    v(F, Vc);

    function Yf(a, b) {
        var c = {};
        c.center = void 0 !== b.center ? b.center : null;
        var d = void 0 !== b.minZoom ? b.minZoom : 0;
        var e = void 0 !== b.maxZoom ? b.maxZoom : 28;
        var f = void 0 !== b.zoomFactor ? b.zoomFactor : 2;
        if (void 0 !== b.resolutions) { e = b.resolutions; var g = e[0]; var h = e[e.length - 1];
            e = pe(e) } else {
            g = Tb(b.projection);
            h = g.C();
            var l = (h ? Math.max(ab(h), bb(h)) : 360 * tb.degrees / g.Wc()) / 256 / Math.pow(2, 0),
                m = l / Math.pow(2, 28);
            g = b.maxResolution;
            void 0 !== g ? d = 0 : g = l / Math.pow(f, d);
            h = b.minResolution;
            void 0 === h && (h = void 0 !== b.maxZoom ? void 0 !==
                b.maxResolution ? g / Math.pow(f, e) : l / Math.pow(f, e) : m);
            e = d + Math.floor(Math.log(g / h) / Math.log(f));
            h = g / Math.pow(f, e - d);
            e = qe(f, g, e - d)
        }
        a.a = g;
        a.f = h;
        a.D = f;
        a.l = b.resolutions;
        a.s = d;
        (void 0 !== b.enableRotation ? b.enableRotation : 1) ? (d = b.constrainRotation, d = void 0 === d || !0 === d ? we() : !1 === d ? te : "number" === typeof d ? ve(d) : te) : d = re;
        a.j = { center: void 0 !== b.extent ? ne(b.extent) : oe, resolution: e, rotation: d };
        void 0 !== b.resolution ? c.resolution = b.resolution : void 0 !== b.zoom && (c.resolution = a.constrainResolution(a.a, b.zoom - a.s));
        c.rotation =
            void 0 !== b.rotation ? b.rotation : 0;
        a.I(c);
        a.B = b
    }

    function Zf(a, b) { var c = jb({}, a.B);
        void 0 !== c.resolution ? c.resolution = a.Qa() : c.zoom = a.jg();
        c.center = a.wa();
        c.rotation = a.Ra(); return jb({}, c, b) }
    k = F.prototype;
    k.animate = function(a) {
        var b = arguments.length;
        if (1 < b && "function" === typeof arguments[b - 1]) { var c = arguments[b - 1];--b }
        if ($f(this)) {
            for (var d = Date.now(), e = this.wa().slice(), f = this.Qa(), g = this.Ra(), h = [], l = 0; l < b; ++l) {
                var m = arguments[l],
                    n = { start: d, complete: !1, anchor: m.anchor, duration: void 0 !== m.duration ? m.duration : 1E3, easing: m.easing || Oe };
                m.center && (n.he = e, n.le = m.center, e = n.le);
                void 0 !== m.zoom ? (n.je = f, n.jd = this.constrainResolution(this.a, m.zoom - this.s, 0), f = n.jd) : m.resolution && (n.je = f, n.jd = m.resolution, f =
                    n.jd);
                void 0 !== m.rotation && (n.Bf = g, n.me = g + (va(m.rotation - g + Math.PI, 2 * Math.PI) - Math.PI), g = n.me);
                n.callback = c;
                n.he && n.le && !Ee(n.he, n.le) || n.je !== n.jd || n.Bf !== n.me ? d += n.duration : n.complete = !0;
                h.push(n)
            }
            this.c.push(h);
            ag(this, 0, 1);
            this.Df()
        } else b = arguments[b - 1], b.center && this.tb(b.center), void 0 !== b.zoom && this.Oj(b.zoom), void 0 !== b.rotation && this.ae(b.rotation), c && c(!0)
    };
    k.zc = function() { return 0 < this.i[0] };
    k.Sh = function() { return 0 < this.i[1] };
    k.pd = function() { ag(this, 0, -this.i[0]); for (var a = 0, b = this.c.length; a < b; ++a) { var c = this.c[a];
            c[0].callback && c[0].callback(!1) }
        this.c.length = 0 };
    k.Df = function() {
        void 0 !== this.o && (cancelAnimationFrame(this.o), this.o = void 0);
        if (this.zc()) {
            for (var a = Date.now(), b = !1, c = this.c.length - 1; 0 <= c; --c) {
                for (var d = this.c[c], e = !0, f = 0, g = d.length; f < g; ++f) {
                    var h = d[f];
                    if (!h.complete) {
                        b = a - h.start;
                        b = 0 < h.duration ? b / h.duration : 1;
                        1 <= b ? (h.complete = !0, b = 1) : e = !1;
                        b = h.easing(b);
                        if (h.he) { var l = h.he[0],
                                m = h.he[1];
                            this.set("center", [l + b * (h.le[0] - l), m + b * (h.le[1] - m)]) }
                        h.je && h.jd && (l = 1 === b ? h.jd : h.je + b * (h.jd - h.je), h.anchor && this.set("center", bg(this, l, h.anchor)), this.set("resolution",
                            l));
                        void 0 !== h.Bf && void 0 !== h.me && (b = 1 === b ? va(h.me + Math.PI, 2 * Math.PI) - Math.PI : h.Bf + b * (h.me - h.Bf), h.anchor && this.set("center", cg(this, b, h.anchor)), this.set("rotation", b));
                        b = !0;
                        if (!h.complete) break
                    }
                }
                e && (this.c[c] = null, ag(this, 0, -1), (d = d[0].callback) && d(!0))
            }
            this.c = this.c.filter(Boolean);
            b && void 0 === this.o && (this.o = requestAnimationFrame(this.Df))
        }
    };

    function cg(a, b, c) { var d = a.wa(); if (void 0 !== d) { var e = [d[0] - c[0], d[1] - c[1]];
            Fe(e, b - a.Ra());
            ze(e, c) } return e }

    function bg(a, b, c) { var d, e = a.wa();
        a = a.Qa();
        void 0 !== e && void 0 !== a && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]); return d }

    function dg(a) { var b = [100, 100];
        a = '.ol-viewport[data-view="' + w(a) + '"]'; if (a = document.querySelector(a)) a = getComputedStyle(a), b[0] = parseInt(a.width, 10), b[1] = parseInt(a.height, 10); return b }
    k.Qc = function(a) { return this.j.center(a) };
    k.constrainResolution = function(a, b, c) { return this.j.resolution(a, b || 0, c || 0) };
    k.constrainRotation = function(a, b) { return this.j.rotation(a, b || 0) };
    k.wa = function() { return this.get("center") };
    k.od = function(a) { a = a || dg(this); var b = this.wa();
        na(b, 1); var c = this.Qa();
        na(void 0 !== c, 2); var d = this.Ra();
        na(void 0 !== d, 3); return db(b, c, d, a) };
    k.hn = function() { return this.a };
    k.kn = function() { return this.f };
    k.jn = function() { return this.Le(this.f) };
    k.tq = function(a) { Yf(this, Zf(this, { maxZoom: a })) };
    k.ln = function() { return this.Le(this.a) };
    k.uq = function(a) { Yf(this, Zf(this, { minZoom: a })) };
    k.mn = function() { return this.v };
    k.Qa = function() { return this.get("resolution") };
    k.nn = function() { return this.l };
    k.Ie = function(a, b) { b = b || dg(this); return Math.max(ab(a) / b[0], bb(a) / b[1]) };

    function eg(a) { var b = a.a,
            c = Math.log(b / a.f) / Math.log(2); return function(a) { return b / Math.pow(2, a * c) } }
    k.Ra = function() { return this.get("rotation") };

    function fg(a) { var b = a.a,
            c = Math.log(b / a.f) / Math.log(2); return function(a) { return Math.log(b / a) / Math.log(2) / c } }
    k.getState = function() { var a = this.wa(),
            b = this.v,
            c = this.Qa(),
            d = this.Ra(); return { center: a.slice(), projection: void 0 !== b ? b : null, resolution: c, rotation: d, zoom: this.jg() } };
    k.jg = function() { var a, b = this.Qa();
        void 0 !== b && (a = this.Le(b)); return a };
    k.Le = function(a) { var b = this.s || 0; if (this.l) { var c = dc(this.l, a, 1);
            b += c; var d = this.l[c];
            c = c == this.l.length - 1 ? 2 : d / this.l[c + 1] } else d = this.a, c = this.D; return b + Math.log(d / a) / Math.log(c) };
    k.Xh = function(a) { return this.constrainResolution(this.a, a - this.s, 0) };
    k.Sf = function(a, b) {
        b = b || {};
        var c = b.size;
        c || (c = dg(this));
        if (a instanceof gf)
            if ("Circle" === a.T()) { a = a.C(); var d = Sf(a);
                d.rotate(this.Ra(), cb(a)) } else d = a;
        else na(Array.isArray(a), 24), na(!$a(a), 25), d = Sf(a);
        var e = void 0 !== b.padding ? b.padding : [0, 0, 0, 0],
            f = void 0 !== b.constrainResolution ? b.constrainResolution : !0,
            g = void 0 !== b.nearest ? b.nearest : !1,
            h;
        void 0 !== b.minResolution ? h = b.minResolution : void 0 !== b.maxZoom ? h = this.constrainResolution(this.a, b.maxZoom - this.s, 0) : h = 0;
        var l = d.da(),
            m = this.Ra();
        a = Math.cos(-m);
        m = Math.sin(-m);
        var n = Infinity,
            p = Infinity,
            q = -Infinity,
            r = -Infinity;
        d = d.pa();
        for (var u = 0, x = l.length; u < x; u += d) { var C = l[u] * a - l[u + 1] * m,
                z = l[u] * m + l[u + 1] * a;
            n = Math.min(n, C);
            p = Math.min(p, z);
            q = Math.max(q, C);
            r = Math.max(r, z) }
        c = this.Ie([n, p, q, r], [c[0] - e[1] - e[3], c[1] - e[0] - e[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        m = -m;
        h = (n + q) / 2 + (e[1] - e[3]) / 2 * c;
        e = (p + r) / 2 + (e[0] - e[2]) / 2 * c;
        a = [h * a - e * m, e * a + h * m];
        e = b.callback ? b.callback : da;
        void 0 !== b.duration ?
            this.animate({ resolution: c, center: a, duration: b.duration, easing: b.easing }, e) : (this.fd(c), this.tb(a), setTimeout(e.bind(void 0, !0), 0))
    };
    k.Ik = function(a, b, c) { var d = this.Ra(),
            e = Math.cos(-d);
        d = Math.sin(-d); var f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d; var g = this.Qa();
        f += (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.tb([f * e - a * d, a * e + f * d]) };

    function $f(a) { return !!a.wa() && void 0 !== a.Qa() }
    k.rotate = function(a, b) { void 0 !== b && (b = cg(this, a, b), this.tb(b));
        this.ae(a) };
    k.tb = function(a) { this.set("center", a);
        this.zc() && this.pd() };

    function ag(a, b, c) { a.i[b] += c;
        a.u() }
    k.fd = function(a) { this.set("resolution", a);
        this.zc() && this.pd() };
    k.ae = function(a) { this.set("rotation", a);
        this.zc() && this.pd() };
    k.Oj = function(a) { this.fd(this.Xh(a)) };

    function gg(a, b) { var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b); return c.getContext("2d") }

    function hg(a, b) { var c = b.parentNode;
        c && c.replaceChild(a, b) }

    function ig(a) { a && a.parentNode && a.parentNode.removeChild(a) };

    function jg(a) { Vc.call(this); var b = jb({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.I(b);
        this.a = { layer: this, Se: !0 } }
    v(jg, Vc);
    k = jg.prototype;
    k.T = function() { return this.type };

    function kg(a) { a.a.opacity = oa(a.mc(), 0, 1);
        a.a.Qj = a.fg();
        a.a.visible = a.Jb();
        a.a.extent = a.C();
        a.a.zIndex = a.Ba();
        a.a.maxResolution = a.kc();
        a.a.minResolution = Math.max(a.lc(), 0); return a.a }
    k.C = function() { return this.get("extent") };
    k.kc = function() { return this.get("maxResolution") };
    k.lc = function() { return this.get("minResolution") };
    k.mc = function() { return this.get("opacity") };
    k.Jb = function() { return this.get("visible") };
    k.Ba = function() { return this.get("zIndex") };
    k.Dc = function(a) { this.set("extent", a) };
    k.Kc = function(a) { this.set("maxResolution", a) };
    k.Lc = function(a) { this.set("minResolution", a) };
    k.Ec = function(a) { this.set("opacity", a) };
    k.Fc = function(a) { this.set("visible", a) };
    k.$b = function(a) { this.set("zIndex", a) };

    function lg(a) { var b = a || {};
        a = jb({}, b);
        delete a.layers;
        b = b.layers;
        jg.call(this, a);
        this.i = [];
        this.c = {};
        y(this, Xc(mg), this.$l, this);
        b ? Array.isArray(b) ? b = new A(b.slice(), { unique: !0 }) : na(b instanceof A, 43) : b = new A(void 0, { unique: !0 });
        this.Ni(b) }
    v(lg, jg);
    k = lg.prototype;
    k.Oe = function() { this.u() };
    k.$l = function() { this.i.forEach(Gc);
        this.i.length = 0; var a = this.Ad();
        this.i.push(y(a, "add", this.Zl, this), y(a, "remove", this.am, this)); for (var b in this.c) this.c[b].forEach(Gc);
        kb(this.c);
        a = a.a; var c;
        b = 0; for (c = a.length; b < c; b++) { var d = a[b];
            this.c[w(d).toString()] = [y(d, "propertychange", this.Oe, this), y(d, "change", this.Oe, this)] }
        this.u() };
    k.Zl = function(a) { a = a.element; var b = w(a).toString();
        this.c[b] = [y(a, "propertychange", this.Oe, this), y(a, "change", this.Oe, this)];
        this.u() };
    k.am = function(a) { a = w(a.element).toString();
        this.c[a].forEach(Gc);
        delete this.c[a];
        this.u() };
    k.Ad = function() { return this.get(mg) };
    k.Ni = function(a) { this.set(mg, a) };
    k.bg = function(a) { var b = void 0 !== a ? a : [],
            c = b.length;
        this.Ad().forEach(function(a) { a.bg(b) });
        a = kg(this); var d; for (d = b.length; c < d; c++) { var e = b[c];
            e.opacity *= a.opacity;
            e.visible = e.visible && a.visible;
            e.maxResolution = Math.min(e.maxResolution, a.maxResolution);
            e.minResolution = Math.max(e.minResolution, a.minResolution);
            void 0 !== a.extent && (e.extent = void 0 !== e.extent ? eb(e.extent, a.extent) : a.extent) } return b };
    k.fg = function() { return "ready" };
    var mg = "layers";
    var ng = [],
        og = [];

    function pg(a, b) { switch (a) {
            case "MAP_RENDERER":
                a = ng;
                a.push(b); break;
            case "LAYER_RENDERER":
                a = og;
                a.push(b); break;
            default:
                throw Error("Unsupported plugin type: " + a); } }

    function qg(a) { for (var b = 0, c = a.length; b < c; ++b) pg("LAYER_RENDERER", a[b]) };

    function G(a) {
        Vc.call(this);
        var b = rg(a);
        this.nb = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.xb = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Ld = void 0 !== a.pixelRatio ? a.pixelRatio : nd;
        this.rc = b.logos;
        this.W = function() { this.j = void 0;
            this.hq.call(this, Date.now()) }.bind(this);
        this.ya = Ve();
        this.Gf = Ve();
        this.Xa = 0;
        this.D = this.B = this.H = this.f = this.c = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (sd ? " ol-touch" : "");
        this.a.style.position =
            "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.o = document.createElement("DIV");
        this.o.className = "ol-overlaycontainer";
        this.a.appendChild(this.o);
        this.v = document.createElement("DIV");
        this.v.className = "ol-overlaycontainer-stopevent";
        for (var c = "click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" "), d = 0, e = c.length; d < e; ++d) y(this.v, c[d], Rc);
        this.a.appendChild(this.v);
        this.ca = new be(this, a.moveTolerance);
        for (var f in zd) y(this.ca, zd[f], this.Zh, this);
        this.aa = b.keyboardEventTarget;
        this.s = null;
        y(this.a, "wheel", this.wd, this);
        y(this.a, "mousewheel", this.wd, this);
        this.controls = b.controls || new A;
        this.interactions = b.interactions || new A;
        this.l = b.overlays;
        this.Eg = {};
        this.oc = b.zm.create(this.a, this);
        this.G = null;
        this.va = [];
        this.ua = new le(this.Kl.bind(this), this.qm.bind(this));
        this.O = {};
        y(this, Xc("layergroup"), this.Xl, this);
        y(this, Xc("view"), this.rm, this);
        y(this, Xc("size"),
            this.lm, this);
        y(this, Xc("target"), this.pm, this);
        this.I(b.values);
        this.controls.forEach(function(a) { a.setMap(this) }, this);
        y(this.controls, "add", function(a) { a.element.setMap(this) }, this);
        y(this.controls, "remove", function(a) { a.element.setMap(null) }, this);
        this.interactions.forEach(function(a) { a.setMap(this) }, this);
        y(this.interactions, "add", function(a) { a.element.setMap(this) }, this);
        y(this.interactions, "remove", function(a) { a.element.setMap(null) }, this);
        this.l.forEach(this.yh, this);
        y(this.l, "add", function(a) { this.yh(a.element) },
            this);
        y(this.l, "remove", function(a) { var b = a.element.id;
            void 0 !== b && delete this.Eg[b.toString()];
            a.element.setMap(null) }, this)
    }
    v(G, Vc);
    k = G.prototype;
    k.Kf = function(a) { this.controls.push(a) };
    k.Lf = function(a) { this.interactions.push(a) };
    k.we = function(a) { this.gc().Ad().push(a) };
    k.xe = function(a) { this.l.push(a) };
    k.yh = function(a) { var b = a.id;
        void 0 !== b && (this.Eg[b.toString()] = a);
        a.setMap(this) };
    k.ha = function() { Pc(this.ca);
        Pc(this.oc);
        Mc(this.a, "wheel", this.wd, this);
        Mc(this.a, "mousewheel", this.wd, this);
        void 0 !== this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0);
        this.j && (cancelAnimationFrame(this.j), this.j = void 0);
        this.yd(null);
        Vc.prototype.ha.call(this) };
    k.Sc = function(a, b, c) { if (this.c) return a = this.Pa(a), c = void 0 !== c ? c : {}, this.oc.Ga(a, this.c, void 0 !== c.hitTolerance ? c.hitTolerance * this.c.pixelRatio : 0, b, null, void 0 !== c.layerFilter ? c.layerFilter : Qe, null) };
    k.Vf = function(a, b) { var c = null;
        this.Sc(a, function(a) { c || (c = []);
            c.push(a) }, b); return c };
    k.rg = function(a, b, c, d, e) { if (this.c) return this.oc.Qi(a, this.c, b, void 0 !== c ? c : null, void 0 !== d ? d : Qe, void 0 !== e ? e : null) };
    k.lg = function(a, b) { if (!this.c) return !1;
        a = this.Pa(a);
        b = void 0 !== b ? b : {}; return this.oc.Ri(a, this.c, void 0 !== b.hitTolerance ? b.hitTolerance * this.c.pixelRatio : 0, void 0 !== b.layerFilter ? b.layerFilter : Qe, null) };
    k.Rd = function(a) { return this.Pa(this.sd(a)) };
    k.sd = function(a) { var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a; return [a.clientX - b.left, a.clientY - b.top] };
    k.Wd = function() { return this.get("target") };
    k.Ac = function() { var a = this.Wd(); return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null };
    k.Pa = function(a) { var b = this.c; return b ? $e(b.pixelToCoordinateTransform, a.slice()) : null };
    k.Uf = function() { return this.controls };
    k.eg = function() { return this.l };
    k.dg = function(a) { a = this.Eg[a.toString()]; return void 0 !== a ? a : null };
    k.$f = function() { return this.interactions };
    k.gc = function() { return this.get("layergroup") };
    k.We = function() { return this.gc().Ad() };
    k.Ia = function(a) { var b = this.c; return b ? $e(b.coordinateToPixelTransform, a.slice(0, 2)) : null };
    k.He = function() { return this.oc };
    k.Cb = function() { return this.get("size") };
    k.$ = function() { return this.get("view") };
    k.ig = function() { return this.a };
    k.Kl = function(a, b, c, d) { var e = this.c; if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.ib()])) return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1]; return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d };
    k.wd = function(a, b) { a = new ed(b || a.type, this, a);
        this.Zh(a) };
    k.Zh = function(a) { if (this.c) { this.G = a.coordinate;
            a.frameState = this.c; var b = this.interactions.a,
                c; if (!1 !== this.b(a))
                for (c = b.length - 1; 0 <= c; c--) { var d = b[c]; if (d.c() && !d.handleEvent(a)) break } } };
    k.jm = function() { var a = this.c,
            b = this.ua; if (0 !== b.b.length) { var c = 16,
                d = c; if (a) { var e = a.viewHints;
                e[0] && (c = this.nb ? 8 : 0, d = 2);
                e[1] && (c = this.xb ? 8 : 0, d = 2) }
            b.j < c && (ke(b), me(b, c, d)) }
        b = this.va;
        c = 0; for (d = b.length; c < d; ++c) b[c](this, a);
        b.length = 0 };
    k.lm = function() { this.render() };
    k.pm = function() { var a;
        this.Wd() && (a = this.Ac()); if (this.s) { for (var b = 0, c = this.s.length; b < c; ++b) Gc(this.s[b]);
            this.s = null }
        a ? (a.appendChild(this.a), a = this.aa ? this.aa : a, this.s = [y(a, "keydown", this.wd, this), y(a, "keypress", this.wd, this)], this.i || (this.i = this.Mc.bind(this), window.addEventListener("resize", this.i, !1))) : (ig(this.a), void 0 !== this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0));
        this.Mc() };
    k.qm = function() { this.render() };
    k.bi = function() { this.render() };
    k.rm = function() { this.H && (Gc(this.H), this.H = null);
        this.B && (Gc(this.B), this.B = null); var a = this.$();
        a && (this.a.setAttribute("data-view", w(a)), this.H = y(a, "propertychange", this.bi, this), this.B = y(a, "change", this.bi, this));
        this.render() };
    k.Xl = function() { this.D && (this.D.forEach(Gc), this.D = null); var a = this.gc();
        a && (this.D = [y(a, "propertychange", this.render, this), y(a, "change", this.render, this)]);
        this.render() };
    k.bh = function() { this.j && cancelAnimationFrame(this.j);
        this.W() };
    k.render = function() { void 0 === this.j && (this.j = requestAnimationFrame(this.W)) };
    k.Wg = function(a) { return this.controls.remove(a) };
    k.Yg = function(a) { return this.interactions.remove(a) };
    k.Zg = function(a) { return this.gc().Ad().remove(a) };
    k.$g = function(a) { return this.l.remove(a) };
    k.hq = function(a) {
        var b, c = this.Cb(),
            d = this.$(),
            e = Ca(),
            f = this.c,
            g = null;
        if (void 0 !== c && 0 < c[0] && 0 < c[1] && d && $f(d)) {
            g = this.c ? this.c.viewHints : void 0;
            void 0 !== g ? (g[0] = d.i[0], g[1] = d.i[1]) : g = d.i.slice();
            var h = this.gc().bg(),
                l = {};
            var m = 0;
            for (b = h.length; m < b; ++m) l[w(h[m].layer)] = h[m];
            m = d.getState();
            g = {
                animate: !1,
                attributions: {},
                coordinateToPixelTransform: this.ya,
                extent: e,
                focus: this.G ? this.G : m.center,
                index: this.Xa++,
                layerStates: l,
                layerStatesArray: h,
                logos: jb({}, this.rc),
                pixelRatio: this.Ld,
                pixelToCoordinateTransform: this.Gf,
                postRenderFunctions: [],
                size: c,
                skippedFeatureUids: this.O,
                tileQueue: this.ua,
                time: a,
                usedTiles: {},
                viewState: m,
                viewHints: g,
                wantedTiles: {}
            }
        }
        g && (g.extent = db(m.center, m.resolution, m.rotation, g.size, e));
        this.c = g;
        this.oc.ah(g);
        g && (g.animate && this.render(), Array.prototype.push.apply(this.va, g.postRenderFunctions), !f || this.f && ($a(this.f) || Ra(g.extent, this.f)) || (this.b(new dd("movestart", this, f)), this.f = Na(this.f)), !this.f || g.viewHints[0] || g.viewHints[1] || Ra(g.extent, this.f) || (this.b(new dd("moveend", this, g)),
            Fa(g.extent, this.f)));
        this.b(new dd("postrender", this, g));
        setTimeout(this.jm.bind(this), 0)
    };
    k.xf = function(a) { this.set("layergroup", a) };
    k.ge = function(a) { this.set("size", a) };
    k.yd = function(a) { this.set("target", a) };
    k.ih = function(a) { this.set("view", a) };
    k.Pj = function(a) { a = w(a).toString();
        this.O[a] = !0;
        this.render() };
    k.Mc = function() { var a = this.Ac(); if (a) { var b = getComputedStyle(a);
            this.ge([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)]) } else this.ge(void 0) };
    k.Uj = function(a) { a = w(a).toString();
        delete this.O[a];
        this.render() };
    var sg = ["canvas", "webgl"];

    function rg(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {},
            d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "https://openlayers.org/";
        else { var e = a.logo; "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[w(e).toString()] = e : e && (na("string" == typeof e.href, 44), na("string" == typeof e.src, 45), d[e.src] = e.href) }
        e = a.layers instanceof lg ? a.layers : new lg({ layers: a.layers });
        c.layergroup = e;
        c.target = a.target;
        c.view = void 0 !== a.view ? a.view : new F;
        var f;
        void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [a.renderer] : na(!1, 46), 0 <= f.indexOf("dom") && (f = f.concat(sg))) : f = sg;
        e = 0;
        var g =
            f.length;
        a: for (; e < g; ++e)
            for (var h = f[e], l = 0, m = ng.length; l < m; ++l) { var n = ng[l]; if (n.handles(h)) { var p = n; break a } }
        if (!p) throw Error("Unable to create a map renderer for types: " + f.join(", "));
        if (void 0 !== a.controls)
            if (Array.isArray(a.controls)) var q = new A(a.controls.slice());
            else na(a.controls instanceof A, 47), q = a.controls;
        if (void 0 !== a.interactions)
            if (Array.isArray(a.interactions)) var r = new A(a.interactions.slice());
            else na(a.interactions instanceof A, 48), r = a.interactions;
        void 0 !== a.overlays ? Array.isArray(a.overlays) ?
            a = new A(a.overlays.slice()) : (na(a.overlays instanceof A, 49), a = a.overlays) : a = new A;
        return { controls: q, interactions: r, keyboardEventTarget: b, logos: d, overlays: a, zm: p, values: c }
    };

    function tg(a) { Vc.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.G = null;
        this.s = [];
        this.render = a.render ? a.render : da;
        a.target && this.i(a.target) }
    v(tg, Vc);
    tg.prototype.ha = function() { ig(this.element);
        Vc.prototype.ha.call(this) };
    tg.prototype.f = function() { return this.a };
    tg.prototype.setMap = function(a) { this.a && ig(this.element); for (var b = 0, c = this.s.length; b < c; ++b) Gc(this.s[b]);
        this.s.length = 0; if (this.a = a)(this.G ? this.G : a.v).appendChild(this.element), this.render !== da && this.s.push(y(a, "postrender", this.render, this)), a.render() };
    tg.prototype.i = function(a) { this.G = "string" === typeof a ? document.getElementById(a) : a };
    var ug = function() { var a, b = {}; return function(c) { a || (a = document.createElement("div").style); if (!(c in b)) { a.font = c; var d = a.fontFamily;
                a.font = ""; if (!d) return null;
                b[c] = d.split(/,\s?/) } return b[c] } }();

    function vg(a) { var b = jb({}, a);
        delete b.source;
        jg.call(this, b);
        this.D = this.v = this.s = null;
        a.map && this.setMap(a.map);
        y(this, Xc("source"), this.nm, this);
        this.gd(a.source ? a.source : null) }
    v(vg, jg);

    function wg(a, b) { return a.visible && b >= a.minResolution && b < a.maxResolution }
    k = vg.prototype;
    k.bg = function(a) { a = a ? a : [];
        a.push(kg(this)); return a };
    k.ia = function() { return this.get("source") || null };
    k.fg = function() { var a = this.ia(); return a ? a.getState() : "undefined" };
    k.po = function() { this.u() };
    k.nm = function() { this.D && (Gc(this.D), this.D = null); var a = this.ia();
        a && (this.D = y(a, "change", this.po, this));
        this.u() };
    k.setMap = function(a) { this.s && (Gc(this.s), this.s = null);
        a || this.u();
        this.v && (Gc(this.v), this.v = null);
        a && (this.s = y(a, "precompose", function(a) { var b = kg(this);
            b.Se = !1;
            b.zIndex = Infinity;
            a.frameState.layerStatesArray.push(b);
            a.frameState.layerStates[w(this)] = b }, this), this.v = y(this, "change", a.render, a), this.u()) };
    k.gd = function(a) { this.set("source", a) };

    function xg(a) {
        a = a ? a : {};
        this.v = document.createElement("UL");
        this.l = document.createElement("LI");
        this.v.appendChild(this.l);
        this.l.style.display = "none";
        this.c = void 0 !== a.collapsed ? a.collapsed : !0;
        this.j = void 0 !== a.collapsible ? a.collapsible : !0;
        this.j || (this.c = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution",
            c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions",
            d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        "string" === typeof d ? (this.o = document.createElement("span"), this.o.textContent = d) : this.o =
            d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.D = document.createElement("span"), this.D.textContent = d) : this.D = d;
        var e = this.j && !this.c ? this.o : this.D;
        d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        y(d, "click", this.rn, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.c && this.j ? " ol-collapsed" : "") + (this.j ? "" : " ol-uncollapsible");
        c.appendChild(this.v);
        c.appendChild(d);
        tg.call(this, {
            element: c,
            render: a.render ?
                a.render : yg,
            target: a.target
        });
        this.H = [];
        this.B = !0;
        this.O = {}
    }
    v(xg, tg);

    function yg(a) {
        if (a = a.frameState) {
            for (var b = {}, c = [], d = a.layerStatesArray, e = a.viewState.resolution, f = 0, g = d.length; f < g; ++f) { var h = d[f]; if (wg(h, e) && (h = h.layer.ia()) && (h = h.B) && (h = h(a)))
                    if (Array.isArray(h))
                        for (var l = 0, m = h.length; l < m; ++l) h[l] in b || (c.push(h[l]), b[h[l]] = !0);
                    else h in b || (c.push(h), b[h] = !0) }
            if (!gc(c, this.H)) {
                for (; this.v.lastChild !== this.l;) this.v.removeChild(this.v.lastChild);
                b = 0;
                for (d = c.length; b < d; ++b) e = document.createElement("LI"), e.innerHTML = c[b], this.v.appendChild(e);
                0 === c.length && 0 <
                    this.H.length ? this.element.classList.add("ol-logo-only") : 0 === this.H.length && 0 < c.length && this.element.classList.remove("ol-logo-only");
                b = 0 < c.length || !mb(a.logos);
                this.B != b && (this.element.style.display = b ? "" : "none", this.B = b);
                this.H = c;
                a = a.logos;
                c = this.O;
                for (p in c) p in a || (ig(c[p]), delete c[p]);
                for (var n in a)
                    if (d = a[n], d instanceof HTMLElement && (this.l.appendChild(d), c[n] = d), !(n in c)) {
                        var p = new Image;
                        p.src = n;
                        "" === d ? b = p : (b = document.createElement("a"), b.href = d, b.appendChild(p));
                        this.l.appendChild(b);
                        c[n] =
                            b
                    }
                this.l.style.display = mb(a) ? "none" : ""
            }
        } else this.B && (this.element.style.display = "none", this.B = !1)
    }
    k = xg.prototype;
    k.rn = function(a) { a.preventDefault();
        zg(this) };

    function zg(a) { a.element.classList.toggle("ol-collapsed");
        a.c ? hg(a.o, a.D) : hg(a.D, a.o);
        a.c = !a.c }
    k.qn = function() { return this.j };
    k.tn = function(a) { this.j !== a && (this.j = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.c && zg(this)) };
    k.sn = function(a) { this.j && this.c !== a && zg(this) };
    k.pn = function() { return this.c };

    function Ag(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate",
            c = void 0 !== a.label ? a.label : "\u21e7";
        this.c = null;
        "string" === typeof c ? (this.c = document.createElement("span"), this.c.className = "ol-compass", this.c.textContent = c) : (this.c = c, this.c.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation";
        c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.c);
        y(c, "click", Ag.prototype.D, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : Bg;
        this.l = a.resetNorth ? a.resetNorth : void 0;
        tg.call(this, { element: d, render: b, target: a.target });
        this.v = void 0 !== a.duration ? a.duration : 250;
        this.j = void 0 !== a.autoHide ? a.autoHide : !0;
        this.o = void 0;
        this.j && this.element.classList.add("ol-hidden")
    }
    v(Ag, tg);
    Ag.prototype.D = function(a) { a.preventDefault();
        void 0 !== this.l ? this.l() : (a = this.a.$()) && void 0 !== a.Ra() && (0 < this.v ? a.animate({ rotation: 0, duration: this.v, easing: Ne }) : a.ae(0)) };

    function Bg(a) { if (a = a.frameState) { a = a.viewState.rotation; if (a != this.o) { var b = "rotate(" + a + "rad)"; if (this.j) { var c = this.element.classList.contains("ol-hidden");
                    c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden") }
                this.c.style.msTransform = b;
                this.c.style.webkitTransform = b;
                this.c.style.transform = b }
            this.o = a } };

    function Cg(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom",
            c = void 0 !== a.delta ? a.delta : 1,
            d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+",
            e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212",
            f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in",
            g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out",
            h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        y(h, "click", Cg.prototype.j.bind(this,
            c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        y(d, "click", Cg.prototype.j.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        tg.call(this, { element: c, target: a.target });
        this.c = void 0 !== a.duration ? a.duration : 250
    }
    v(Cg, tg);
    Cg.prototype.j = function(a, b) { b.preventDefault(); if (b = this.a.$()) { var c = b.Qa();
            c && (a = b.constrainResolution(c, a), 0 < this.c ? (b.zc() && b.pd(), b.animate({ resolution: a, duration: this.c, easing: Ne })) : b.fd(a)) } };

    function Dg(a) { a = a ? a : {}; var b = new A;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new Cg(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new Ag(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new xg(a.attributionOptions)); return b };

    function Eg(a, b, c) { this.i = a;
        this.c = b;
        this.f = c;
        this.b = [];
        this.a = this.g = 0 }

    function Fg(a) { a.b.length = 0;
        a.g = 0;
        a.a = 0 }

    function Gg(a) { if (6 > a.b.length) return !1; var b = Date.now() - a.f,
            c = a.b.length - 3; if (a.b[c + 2] < b) return !1; for (var d = c - 3; 0 < d && a.b[d + 2] > b;) d -= 3;
        b = a.b[c + 2] - a.b[d + 2]; if (b < 1E3 / 60) return !1; var e = a.b[c] - a.b[d];
        c = a.b[c + 1] - a.b[d + 1];
        a.g = Math.atan2(c, e);
        a.a = Math.sqrt(e * e + c * c) / b; return a.a > a.c };

    function Hg(a) { Vc.call(this);
        this.v = null;
        this.Ha(!0);
        this.handleEvent = a.handleEvent }
    v(Hg, Vc);
    Hg.prototype.c = function() { return this.get("active") };
    Hg.prototype.i = function() { return this.v };
    Hg.prototype.Ha = function(a) { this.set("active", a) };
    Hg.prototype.setMap = function(a) { this.v = a };

    function Ig(a, b, c, d) { if (void 0 !== b) { var e = a.Ra(),
                f = a.wa();
            void 0 !== e && f && 0 < d ? a.animate({ rotation: b, anchor: c, duration: d, easing: Ne }) : a.rotate(b, c) } }

    function Qg(a, b, c, d) { var e = a.Qa();
        b = a.constrainResolution(e, b, 0); if (c && void 0 !== b && b !== e) { var f = a.wa();
            c = bg(a, b, c);
            c = a.Qc(c);
            c = [(b * f[0] - e * c[0]) / (b - e), (b * f[1] - e * c[1]) / (b - e)] }
        Rg(a, b, c, d) }

    function Rg(a, b, c, d) { if (b) { var e = a.Qa(),
                f = a.wa();
            void 0 !== e && f && b !== e && d ? a.animate({ resolution: b, anchor: c, duration: d, easing: Ne }) : (c && (c = bg(a, b, c), a.tb(c)), a.fd(b)) } };

    function Sg(a) { a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        Hg.call(this, { handleEvent: Tg });
        this.f = void 0 !== a.duration ? a.duration : 250 }
    v(Sg, Hg);

    function Tg(a) { var b = !1,
            c = a.originalEvent; if ("dblclick" == a.type) { b = a.coordinate;
            c = c.shiftKey ? -this.a : this.a; var d = a.map.$();
            Qg(d, c, b, this.f);
            a.preventDefault();
            b = !0 } return !b };

    function Ug(a) { a = a.originalEvent; return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey }

    function Vg(a) { a = a.originalEvent; return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey }

    function Wg(a) { a = a.originalEvent; return 0 == a.button && !(ld && md && a.ctrlKey) }

    function Xg(a) { return "pointermove" == a.type }

    function Yg(a) { return "singleclick" == a.type }

    function Zg(a) { a = a.originalEvent; return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey }

    function $g(a) { a = a.originalEvent; return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey }

    function ah(a) { a = a.originalEvent.target.tagName; return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a }

    function bh(a) { na(a.b, 56); return "mouse" == a.b.pointerType }

    function ch(a) { a = a.b; return a.isPrimary && 0 === a.button };

    function dh(a) { a = a ? a : {};
        Hg.call(this, { handleEvent: a.handleEvent ? a.handleEvent : eh });
        this.Yj = a.handleDownEvent ? a.handleDownEvent : Re;
        this.zk = a.handleDragEvent ? a.handleDragEvent : da;
        this.Fk = a.handleMoveEvent ? a.handleMoveEvent : da;
        this.Gk = a.handleUpEvent ? a.handleUpEvent : Re;
        this.D = !1;
        this.aa = {};
        this.l = [] }
    v(dh, Hg);

    function fh(a) { for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++) c += a[e].clientX, d += a[e].clientY; return [c / b, d / b] }

    function eh(a) { if (!(a instanceof Ad)) return !0; var b = !1,
            c = a.type; if ("pointerdown" === c || "pointerdrag" === c || "pointerup" === c) { c = a.b; var d = c.pointerId.toString(); "pointerup" == a.type ? delete this.aa[d] : "pointerdown" == a.type ? this.aa[d] = c : d in this.aa && (this.aa[d] = c);
            this.l = lb(this.aa) }
        this.D ? "pointerdrag" == a.type ? this.zk(a) : "pointerup" == a.type && (this.D = this.Gk(a) && 0 < this.l.length) : "pointerdown" == a.type ? (this.D = a = this.Yj(a), b = this.hd(a)) : "pointermove" == a.type && this.Fk(a); return !b }
    dh.prototype.hd = function(a) { return a };

    function gh(a) { dh.call(this, { handleDownEvent: hh, handleDragEvent: ih, handleUpEvent: jh });
        a = a ? a : {};
        this.a = a.kinetic;
        this.f = null;
        this.o = a.condition ? a.condition : Zg;
        this.j = !1 }
    v(gh, dh);

    function ih(a) { var b = this.l,
            c = fh(b); if (b.length == this.s) { if (this.a && this.a.b.push(c[0], c[1], Date.now()), this.f) { var d = this.f[0] - c[0],
                    e = c[1] - this.f[1];
                a = a.map.$(); var f = a.getState();
                d = [d, e];
                Ge(d, f.resolution);
                Fe(d, f.rotation);
                ze(d, f.center);
                d = a.Qc(d);
                a.tb(d) } } else this.a && Fg(this.a);
        this.f = c;
        this.s = b.length }

    function jh(a) { var b = a.map;
        a = b.$(); if (0 === this.l.length) { if (!this.j && this.a && Gg(this.a)) { var c = this.a;
                c = (c.c - c.a) / c.i; var d = this.a.g,
                    e = a.wa();
                e = b.Ia(e);
                b = b.Pa([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
                a.animate({ center: a.Qc(b), duration: 500, easing: Ne }) }
            ag(a, 1, -1); return !1 }
        this.a && Fg(this.a);
        this.f = null; return !0 }

    function hh(a) { if (0 < this.l.length && this.o(a)) { var b = a.map.$();
            this.f = null;
            this.D || ag(b, 1, 1);
            b.zc() && b.tb(a.frameState.viewState.center);
            this.a && Fg(this.a);
            this.j = 1 < this.l.length; return !0 } return !1 }
    gh.prototype.hd = Re;

    function kh(a) { a = a ? a : {};
        dh.call(this, { handleDownEvent: lh, handleDragEvent: mh, handleUpEvent: nh });
        this.f = a.condition ? a.condition : Vg;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250 }
    v(kh, dh);

    function mh(a) { if (bh(a)) { var b = a.map,
                c = b.$(); if (c.j.rotation !== re) { b = b.Cb();
                a = a.pixel;
                a = Math.atan2(b[1] / 2 - a[1], a[0] - b[0] / 2); if (void 0 !== this.a) { b = a - this.a; var d = c.Ra();
                    Ig(c, d - b) }
                this.a = a } } }

    function nh(a) { if (!bh(a)) return !0;
        a = a.map.$();
        ag(a, 1, -1); var b = a.Ra(),
            c = this.j;
        b = a.constrainRotation(b, 0);
        Ig(a, b, void 0, c); return !1 }

    function lh(a) { return bh(a) && Wg(a) && this.f(a) ? (ag(a.map.$(), 1, 1), this.a = void 0, !0) : !1 }
    kh.prototype.hd = Re;

    function oh(a) { this.Tc = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.g = this.c = this.b = null }
    v(oh, Oc);
    oh.prototype.ha = function() { this.setMap(null) };

    function ph(a) { var b = a.c,
            c = a.g;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px" }
    oh.prototype.setMap = function(a) { if (this.b) { this.b.o.removeChild(this.a); var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit" }(this.b = a) && this.b.o.appendChild(this.a) };

    function qh(a) { var b = a.c,
            c = a.g;
        b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Pa, a.b);
        b[4] = b[0].slice();
        a.Tc ? a.Tc.na([b]) : a.Tc = new D([b]) }
    oh.prototype.V = function() { return this.Tc };

    function rh(a) { dh.call(this, { handleDownEvent: sh, handleDragEvent: th, handleUpEvent: uh });
        a = a ? a : {};
        this.a = new oh(a.className || "ol-dragbox");
        this.o = void 0 !== a.minArea ? a.minArea : 64;
        this.f = null;
        this.B = a.condition ? a.condition : Qe;
        this.s = a.boxEndCondition ? a.boxEndCondition : vh }
    v(rh, dh);

    function vh(a, b, c) { a = c[0] - b[0];
        b = c[1] - b[1]; return a * a + b * b >= this.o }

    function th(a) { if (bh(a)) { var b = this.a,
                c = a.pixel;
            b.c = this.f;
            b.g = c;
            qh(b);
            ph(b);
            this.b(new wh(xh, a.coordinate, a)) } }
    rh.prototype.V = function() { return this.a.V() };
    rh.prototype.j = da;

    function uh(a) { if (!bh(a)) return !0;
        this.a.setMap(null);
        this.s(a, this.f, a.pixel) && (this.j(a), this.b(new wh(yh, a.coordinate, a))); return !1 }

    function sh(a) { if (bh(a) && Wg(a) && this.B(a)) { this.f = a.pixel;
            this.a.setMap(a.map); var b = this.a,
                c = this.f;
            b.c = this.f;
            b.g = c;
            qh(b);
            ph(b);
            this.b(new wh(zh, a.coordinate, a)); return !0 } return !1 }
    var zh = "boxstart",
        xh = "boxdrag",
        yh = "boxend";

    function wh(a, b, c) { Qc.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c }
    v(wh, Qc);

    function Ah(a) { a = a ? a : {}; var b = a.condition ? a.condition : $g;
        this.H = void 0 !== a.duration ? a.duration : 200;
        this.G = void 0 !== a.out ? a.out : !1;
        rh.call(this, { condition: b, className: a.className || "ol-dragzoom" }) }
    v(Ah, rh);
    Ah.prototype.j = function() { var a = this.v,
            b = a.$(),
            c = a.Cb(),
            d = this.V().C(); if (this.G) { var e = b.od(c);
            d = [a.Ia(Va(d)), a.Ia(Xa(d))];
            a = Na(void 0); var f; var g = 0; for (f = d.length; g < f; ++g) Da(a, d[g]);
            d = b.Ie(a, c);
            gb(e, 1 / d);
            d = e }
        c = b.constrainResolution(b.Ie(d, c));
        e = cb(d);
        e = b.Qc(e);
        b.animate({ resolution: c, center: e, duration: this.H, easing: Ne }) };

    function Bh(a) { Hg.call(this, { handleEvent: Ch });
        a = a || {};
        this.a = function(a) { return Zg(a) && ah(a) };
        this.f = void 0 !== a.condition ? a.condition : this.a;
        this.j = void 0 !== a.duration ? a.duration : 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128 }
    v(Bh, Hg);

    function Ch(a) { var b = !1; if ("keydown" == a.type) { var c = a.originalEvent.keyCode; if (this.f(a) && (40 == c || 37 == c || 39 == c || 38 == c)) { b = a.map.$(); var d = b.Qa() * this.l,
                    e = 0,
                    f = 0;
                40 == c ? f = -d : 37 == c ? e = -d : 39 == c ? e = d : f = d;
                d = [e, f];
                Fe(d, b.Ra());
                c = this.j; if (e = b.wa()) d = b.Qc([e[0] + d[0], e[1] + d[1]]), c ? b.animate({ duration: c, easing: Pe, center: d }) : b.tb(d);
                a.preventDefault();
                b = !0 } } return !b };

    function Dh(a) { Hg.call(this, { handleEvent: Kh });
        a = a ? a : {};
        this.f = a.condition ? a.condition : ah;
        this.a = a.delta ? a.delta : 1;
        this.j = void 0 !== a.duration ? a.duration : 100 }
    v(Dh, Hg);

    function Kh(a) { var b = !1; if ("keydown" == a.type || "keypress" == a.type) { var c = a.originalEvent.charCode;!this.f(a) || 43 != c && 45 != c || (b = 43 == c ? this.a : -this.a, c = a.map.$(), Qg(c, b, void 0, this.j), a.preventDefault(), b = !0) } return !b };

    function Lh(a) { Hg.call(this, { handleEvent: Mh });
        a = a || {};
        this.j = 0;
        this.D = void 0 !== a.duration ? a.duration : 250;
        this.aa = void 0 !== a.timeout ? a.timeout : 80;
        this.B = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.O = a.constrainResolution || !1;
        this.a = null;
        this.s = this.l = this.o = this.f = void 0 }
    v(Lh, Hg);

    function Mh(a) {
        var b = a.type;
        if ("wheel" !== b && "mousewheel" !== b) return !0;
        a.preventDefault();
        b = a.map;
        var c = a.originalEvent;
        this.B && (this.a = a.coordinate);
        if ("wheel" == a.type) { var d = c.deltaY;
            jd && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= nd);
            c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40) } else "mousewheel" == a.type && (d = -c.wheelDeltaY, kd && (d /= 3));
        if (0 === d) return !1;
        a = Date.now();
        void 0 === this.f && (this.f = a);
        if (!this.l || 400 < a - this.f) this.l = 4 > Math.abs(d) ? Nh : Oh;
        if (this.l === Nh) {
            b = b.$();
            this.s ? clearTimeout(this.s) :
                ag(b, 1, 1);
            this.s = setTimeout(this.H.bind(this), 400);
            c = b.Qa() * Math.pow(2, d / 300);
            var e = b.f,
                f = b.a,
                g = 0;
            c < e ? (c = Math.max(c, e / 1.5), g = 1) : c > f && (c = Math.min(c, 1.5 * f), g = -1);
            if (this.a) { var h = bg(b, c, this.a);
                b.tb(b.Qc(h)) }
            b.fd(c);
            0 === g && this.O && b.animate({ resolution: b.constrainResolution(c, 0 < d ? -1 : 1), easing: Ne, anchor: this.a, duration: this.D });
            0 < g ? b.animate({ resolution: e, easing: Ne, anchor: this.a, duration: 500 }) : 0 > g && b.animate({ resolution: f, easing: Ne, anchor: this.a, duration: 500 });
            this.f = a;
            return !1
        }
        this.j += d;
        d = Math.max(this.aa -
            (a - this.f), 0);
        clearTimeout(this.o);
        this.o = setTimeout(this.G.bind(this, b), d);
        return !1
    }
    Lh.prototype.H = function() { this.s = void 0;
        ag(this.v.$(), 1, -1) };
    Lh.prototype.G = function(a) { a = a.$();
        a.zc() && a.pd();
        Qg(a, -oa(this.j, -1, 1), this.a, this.D);
        this.l = void 0;
        this.j = 0;
        this.a = null;
        this.o = this.f = void 0 };
    Lh.prototype.W = function(a) { this.B = a;
        a || (this.a = null) };
    var Nh = "trackpad",
        Oh = "wheel";

    function Ph(a) { dh.call(this, { handleDownEvent: Qh, handleDragEvent: Rh, handleUpEvent: Sh });
        a = a || {};
        this.f = null;
        this.j = void 0;
        this.a = !1;
        this.s = 0;
        this.B = void 0 !== a.threshold ? a.threshold : .3;
        this.o = void 0 !== a.duration ? a.duration : 250 }
    v(Ph, dh);

    function Rh(a) { var b = 0,
            c = this.l[0],
            d = this.l[1];
        c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j, this.s += b, !this.a && Math.abs(this.s) > this.B && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.$(); if (c.j.rotation !== re) { d = a.a.getBoundingClientRect(); var e = fh(this.l);
            e[0] -= d.left;
            e[1] -= d.top;
            this.f = a.Pa(e);
            this.a && (d = c.Ra(), a.render(), Ig(c, d + b, this.f)) } }

    function Sh(a) { if (2 > this.l.length) { a = a.map.$();
            ag(a, 1, -1); if (this.a) { var b = a.Ra(),
                    c = this.f,
                    d = this.o;
                b = a.constrainRotation(b, 0);
                Ig(a, b, c, d) } return !1 } return !0 }

    function Qh(a) { return 2 <= this.l.length ? (a = a.map, this.f = null, this.j = void 0, this.a = !1, this.s = 0, this.D || ag(a.$(), 1, 1), !0) : !1 }
    Ph.prototype.hd = Re;

    function Th(a) { dh.call(this, { handleDownEvent: Uh, handleDragEvent: Vh, handleUpEvent: Wh });
        a = a ? a : {};
        this.s = a.constrainResolution || !1;
        this.f = null;
        this.o = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1 }
    v(Th, dh);

    function Vh(a) { var b = 1,
            c = this.l[0],
            d = this.l[1],
            e = c.clientX - d.clientX;
        c = c.clientY - d.clientY;
        e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        a = a.map;
        e = a.$();
        d = e.Qa(); var f = e.a,
            g = e.f;
        c = d * b;
        c > f ? (b = f / d, c = f) : c < g && (b = g / d, c = g);
        1 != b && (this.j = b);
        b = a.a.getBoundingClientRect();
        d = fh(this.l);
        d[0] -= b.left;
        d[1] -= b.top;
        this.f = a.Pa(d);
        a.render();
        Rg(e, c, this.f) }

    function Wh(a) { if (2 > this.l.length) { a = a.map.$();
            ag(a, 1, -1); var b = a.Qa(); if (this.s || b < a.f || b > a.a) { var c = this.f,
                    d = this.o;
                b = a.constrainResolution(b, 0, this.j - 1);
                Rg(a, b, c, d) } return !1 } return !0 }

    function Uh(a) { return 2 <= this.l.length ? (a = a.map, this.f = null, this.a = void 0, this.j = 1, this.D || ag(a.$(), 1, 1), !0) : !1 }
    Th.prototype.hd = Re;

    function Xh(a) {
        a = a ? a : {};
        var b = new A,
            c = new Eg(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new kh);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new Sg({ delta: a.zoomDelta, duration: a.zoomDuration }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new gh({ kinetic: c }));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new Ph);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new Th({ constrainResolution: a.constrainResolution, duration: a.zoomDuration }));
        if (void 0 !== a.keyboard ?
            a.keyboard : 1) b.push(new Bh), b.push(new Dh({ delta: a.zoomDelta, duration: a.zoomDuration }));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new Lh({ constrainResolution: a.constrainResolution, duration: a.zoomDuration }));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new Ah({ duration: a.zoomDuration }));
        return b
    };

    function Yh(a, b, c, d, e) { Qc.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e }
    v(Yh, Qc);

    function Zh(a) { Sc.call(this);
        this.highWaterMark = void 0 !== a ? a : 2048;
        this.i = 0;
        this.a = {};
        this.c = this.g = null }
    v(Zh, Sc);

    function $h(a) { return a.i > a.highWaterMark }
    k = Zh.prototype;
    k.clear = function() { this.i = 0;
        this.a = {};
        this.c = this.g = null;
        this.b("clear") };
    k.forEach = function(a, b) { for (var c = this.g; c;) a.call(b, c.Nc, c.ic, this), c = c.hb };
    k.get = function(a) { a = this.a[a];
        na(void 0 !== a, 15); if (a === this.c) return a.Nc;
        a === this.g ? (this.g = this.g.hb, this.g.Pb = null) : (a.hb.Pb = a.Pb, a.Pb.hb = a.hb);
        a.hb = null;
        a.Pb = this.c;
        this.c = this.c.hb = a; return a.Nc };
    k.remove = function(a) { var b = this.a[a];
        na(void 0 !== b, 15); if (b === this.c) { if (this.c = b.Pb) this.c.hb = null } else if (b === this.g) { if (this.g = b.hb) this.g.Pb = null } else b.hb.Pb = b.Pb, b.Pb.hb = b.hb;
        delete this.a[a];--this.i; return b.Nc };
    k.pop = function() { var a = this.g;
        delete this.a[a.ic];
        a.hb && (a.hb.Pb = null);
        this.g = a.hb;
        this.g || (this.c = null);--this.i; return a.Nc };
    k.replace = function(a, b) { this.get(a);
        this.a[a].Nc = b };
    k.set = function(a, b) { na(!(a in this.a), 16);
        b = { ic: a, hb: null, Pb: this.c, Nc: b };
        this.c ? this.c.hb = b : this.g = b;
        this.c = b;
        this.a[a] = b;++this.i };
    var ai = [0, 0, 0, 1],
        bi = [],
        ci = [0, 0, 0, 1],
        di = new Zh,
        ei = {},
        fi = function() {
            function a(a) { e || (e = gg(1, 1), e.font = "32px monospace", g = e.measureText("wmytzilWMYTZIL@#/&?$%10").width); var b = !0; "monospace" != a && (e.font = "32px " + a + ",monospace", b = e.measureText("wmytzilWMYTZIL@#/&?$%10").width != g, e.font = "32px monospace"); return b }

            function b() { var b = !0,
                    e; for (e in c) 60 > c[e] && (a(e) ? (c[e] = 60, d.clear()) : (++c[e], b = !1));
                b && (window.clearInterval(f), f = void 0) }
            var c = ei,
                d = di,
                e, f, g;
            return function(d) {
                if (d = ug(d))
                    for (var e = 0, g = d.length; e <
                        g; ++e) { var h = d[e];
                        h in c || (c[h] = 60, a(h) || (c[h] = 0, void 0 === f && (f = window.setInterval(b, 32)))) }
            }
        }();

    function gi(a, b, c, d) { 0 !== b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d)) }
    var hi = Ve();

    function ii(a, b, c, d, e, f, g, h, l, m, n) { if (1 != c) { var p = a.globalAlpha;
            a.globalAlpha = p * c }
        b && a.setTransform.apply(a, b);
        a.drawImage(d, e, f, g, h, l, m, g * n, h * n);
        p && (a.globalAlpha = p);
        b && a.setTransform.apply(a, hi) };
    var ji = /^#(?:[0-9a-f]{3,4}){1,2}$/i,
        ki = /^([a-z]*)$/i;

    function li(a) { return Array.isArray(a) ? a : mi(a) }

    function ni(a) { if ("string" !== typeof a) { var b = a[0];
            b != (b | 0) && (b = b + .5 | 0); var c = a[1];
            c != (c | 0) && (c = c + .5 | 0); var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")" } return a }
    var mi = function() {
        var a = {},
            b = 0;
        return function(c) {
            if (a.hasOwnProperty(c)) var d = a[c];
            else {
                if (1024 <= b) { d = 0; for (var e in a) 0 === (d++ & 3) && (delete a[e], --b) }
                d = c;
                ki.exec(d) && (e = document.createElement("div"), e.style.color = d, document.body.appendChild(e), d = getComputedStyle(e).color, document.body.removeChild(e));
                if (ji.exec(d)) {
                    e = d.length - 1;
                    var f = 4 >= e ? 1 : 2;
                    var g = 4 === e || 8 === e;
                    e = parseInt(d.substr(1 + 0 * f, f), 16);
                    var h = parseInt(d.substr(1 + 1 * f, f), 16);
                    var l = parseInt(d.substr(1 + 2 * f, f), 16);
                    d = g ? parseInt(d.substr(1 + 3 * f, f),
                        16) : 255;
                    1 == f && (e = (e << 4) + e, h = (h << 4) + h, l = (l << 4) + l, g && (d = (d << 4) + d));
                    f = [e, h, l, d / 255]
                } else 0 == d.indexOf("rgba(") ? (d = d.slice(5, -1).split(",").map(Number), f = oi(d)) : 0 == d.indexOf("rgb(") ? (d = d.slice(4, -1).split(",").map(Number), d.push(1), f = oi(d)) : na(!1, 14);
                d = f;
                a[c] = d;
                ++b
            }
            return d
        }
    }();

    function oi(a) { var b = [];
        b[0] = oa(a[0] + .5 | 0, 0, 255);
        b[1] = oa(a[1] + .5 | 0, 0, 255);
        b[2] = oa(a[2] + .5 | 0, 0, 255);
        b[3] = oa(a[3], 0, 1); return b };

    function pi(a) { return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : ni(a) };

    function qi() {}
    k = qi.prototype;
    k.Eh = function() {};
    k.Hb = function() {};
    k.Bd = function() {};
    k.cc = function() {};
    k.Be = function() {};
    k.Ce = function() {};
    k.tc = function() {};
    k.uc = function() {};
    k.vc = function() {};
    k.wc = function() {};
    k.xc = function() {};
    k.yc = function() {};
    k.Wb = function() {};
    k.Oa = function() {};
    k.Zb = function() {};
    k.kb = function() {};

    function ri(a, b, c, d, e) { this.g = a;
        this.f = b;
        this.c = c;
        this.P = d;
        this.xb = e;
        this.N = this.b = this.a = this.Va = this.O = this.G = null;
        this.aa = this.W = this.v = this.H = this.B = this.D = 0;
        this.ca = !1;
        this.i = this.mb = 0;
        this.ua = !1;
        this.oa = 0;
        this.sa = "";
        this.Ub = this.va = 0;
        this.ya = !1;
        this.s = this.Xa = 0;
        this.qa = this.l = this.j = null;
        this.o = [];
        this.nb = Ve() }
    v(ri, qi);

    function si(a, b, c) { if (a.N) { b = Se(b, 0, c, 2, a.P, a.o);
            c = a.g; var d = a.nb,
                e = c.globalAlpha;
            1 != a.v && (c.globalAlpha = e * a.v); var f = a.mb;
            a.ca && (f += a.xb); var g; var h = 0; for (g = b.length; h < g; h += 2) { var l = b[h] - a.D,
                    m = b[h + 1] - a.B;
                a.ua && (l = Math.round(l), m = Math.round(m)); if (0 !== f || 1 != a.i) { var n = l + a.D,
                        p = m + a.B;
                    df(d, n, p, a.i, a.i, f, -n, -p);
                    c.setTransform.apply(c, d) }
                c.drawImage(a.N, a.W, a.aa, a.oa, a.H, l, m, a.oa, a.H) }
            0 === f && 1 == a.i || c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.v && (c.globalAlpha = e) } }

    function ti(a, b, c, d) {
        var e = 0;
        if (a.qa && "" !== a.sa) {
            a.j && ui(a, a.j);
            a.l && vi(a, a.l);
            var f = a.qa,
                g = a.g,
                h = a.Va,
                l = f.textAlign ? f.textAlign : "center";
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != l && (h.textAlign = l), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, g.textAlign = l, g.textBaseline = f.textBaseline, a.Va = { font: f.font, textAlign: l, textBaseline: f.textBaseline });
            b = Se(b, e, c, d, a.P, a.o);
            f = a.g;
            g = a.Xa;
            for (a.ya && (g += a.xb); e < c; e += d) {
                h = b[e] + a.va;
                l = b[e + 1] + a.Ub;
                if (0 !== g || 1 != a.s) { var m = df(a.nb, h, l, a.s, a.s, g, -h, -l);
                    f.setTransform.apply(f, m) }
                a.l && f.strokeText(a.sa, h, l);
                a.j && f.fillText(a.sa, h, l)
            }
            0 === g && 1 == a.s || f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function wi(a, b, c, d, e, f) { var g = a.g;
        a = Se(b, c, d, e, a.P, a.o);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2); for (c = 2; c < b; c += 2) g.lineTo(a[c], a[c + 1]);
        f && g.closePath(); return d }

    function xi(a, b, c, d, e) { var f; var g = 0; for (f = d.length; g < f; ++g) c = wi(a, b, c, d[g], e, !0); return c }
    k = ri.prototype;
    k.cc = function(a) { if (fb(this.c, a.C())) { if (this.a || this.b) { this.a && ui(this, this.a);
                this.b && vi(this, this.b); var b = this.P; var c = this.o,
                    d = a.da();
                b = d ? Se(d, 0, d.length, a.pa(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.g;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke() } "" !== this.sa && ti(this, a.wa(), 2, 2) } };
    k.Bd = function(a) { this.Oa(a.Ea(), a.Fa());
        this.Zb(a.Y());
        this.kb(a.Ka()) };
    k.Hb = function(a) { switch (a.T()) {
            case "Point":
                this.xc(a); break;
            case "LineString":
                this.tc(a); break;
            case "Polygon":
                this.yc(a); break;
            case "MultiPoint":
                this.vc(a); break;
            case "MultiLineString":
                this.uc(a); break;
            case "MultiPolygon":
                this.wc(a); break;
            case "GeometryCollection":
                this.Ce(a); break;
            case "Circle":
                this.cc(a) } };
    k.Be = function(a, b) {
        (a = (0, b.ab)(a)) && fb(this.c, a.C()) && (this.Bd(b), this.Hb(a)) };
    k.Ce = function(a) { a = a.a; var b; var c = 0; for (b = a.length; c < b; ++c) this.Hb(a[c]) };
    k.xc = function(a) { var b = a.da();
        a = a.pa();
        this.N && si(this, b, b.length); "" !== this.sa && ti(this, b, b.length, a) };
    k.vc = function(a) { var b = a.da();
        a = a.pa();
        this.N && si(this, b, b.length); "" !== this.sa && ti(this, b, b.length, a) };
    k.tc = function(a) { if (fb(this.c, a.C())) { if (this.b) { vi(this, this.b); var b = this.g,
                    c = a.da();
                b.beginPath();
                wi(this, c, 0, c.length, a.pa(), !1);
                b.stroke() } "" !== this.sa && (a = a.Ee(), ti(this, a, 2, 2)) } };
    k.uc = function(a) { var b = a.C(); if (fb(this.c, b)) { if (this.b) { vi(this, this.b);
                b = this.g; var c = a.da(),
                    d = 0,
                    e = a.ob(),
                    f = a.pa();
                b.beginPath(); var g; var h = 0; for (g = e.length; h < g; ++h) d = wi(this, c, d, e[h], f, !1);
                b.stroke() } "" !== this.sa && (a = a.Fe(), ti(this, a, a.length, 2)) } };
    k.yc = function(a) { if (fb(this.c, a.C())) { if (this.b || this.a) { this.a && ui(this, this.a);
                this.b && vi(this, this.b); var b = this.g;
                b.beginPath();
                xi(this, a.Xb(), 0, a.ob(), a.pa());
                this.a && b.fill();
                this.b && b.stroke() } "" !== this.sa && (a = a.Sd(), ti(this, a, 2, 2)) } };
    k.wc = function(a) { if (fb(this.c, a.C())) { if (this.b || this.a) { this.a && ui(this, this.a);
                this.b && vi(this, this.b); var b = this.g,
                    c = yi(a),
                    d = 0,
                    e = a.rd(),
                    f = a.pa(),
                    g;
                b.beginPath(); var h = 0; for (g = e.length; h < g; ++h) d = xi(this, c, d, e[h], f);
                this.a && b.fill();
                this.b && b.stroke() } "" !== this.sa && (a = zi(a), ti(this, a, a.length, 2)) } };

    function ui(a, b) { var c = a.g,
            d = a.G;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, a.G = { fillStyle: b.fillStyle }) }

    function vi(a, b) {
        var c = a.g,
            d = a.O;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), od && (gc(d.lineDash, b.lineDash) || c.setLineDash(d.lineDash = b.lineDash), d.lineDashOffset != b.lineDashOffset && (d.lineDashOffset = c.lineDashOffset = b.lineDashOffset)), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) :
            (c.lineCap = b.lineCap, od && (c.setLineDash(b.lineDash), c.lineDashOffset = b.lineDashOffset), c.lineJoin = b.lineJoin, c.lineWidth = b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.O = { lineCap: b.lineCap, lineDash: b.lineDash, lineDashOffset: b.lineDashOffset, lineJoin: b.lineJoin, lineWidth: b.lineWidth, miterLimit: b.miterLimit, strokeStyle: b.strokeStyle })
    }
    k.Oa = function(a, b) { a ? (a = a.b, this.a = { fillStyle: pi(a ? a : ai) }) : this.a = null; if (b) { a = b.a; var c = b.f,
                d = b.g,
                e = b.i,
                f = b.j,
                g = b.c;
            b = b.l;
            this.b = { lineCap: void 0 !== c ? c : "round", lineDash: d ? d : bi, lineDashOffset: e ? e : 0, lineJoin: void 0 !== f ? f : "round", lineWidth: this.f * (void 0 !== g ? g : 1), miterLimit: void 0 !== b ? b : 10, strokeStyle: pi(a ? a : ci) } } else this.b = null };
    k.Zb = function(a) { if (a) { var b = a.Uc(),
                c = a.Y(1),
                d = a.ad(),
                e = a.nc();
            this.D = b[0];
            this.B = b[1];
            this.H = e[1];
            this.N = c;
            this.v = a.i;
            this.W = d[0];
            this.aa = d[1];
            this.ca = a.s;
            this.mb = a.f;
            this.i = a.a * this.f;
            this.ua = a.v;
            this.oa = e[0] } else this.N = null };
    k.kb = function(a) {
        if (a) {
            var b = a.Ea();
            b ? (b = b.b, this.j = { fillStyle: pi(b ? b : ai) }) : this.j = null;
            var c = a.Fa();
            if (c) { b = c.a; var d = c.f,
                    e = c.g,
                    f = c.i,
                    g = c.j,
                    h = c.c;
                c = c.l;
                this.l = { lineCap: void 0 !== d ? d : "round", lineDash: e ? e : bi, lineDashOffset: f ? f : 0, lineJoin: void 0 !== g ? g : "round", lineWidth: void 0 !== h ? h : 1, miterLimit: void 0 !== c ? c : 10, strokeStyle: pi(b ? b : ci) } } else this.l = null;
            b = a.a;
            d = a.g;
            e = a.c;
            f = a.l;
            g = a.i;
            h = a.b;
            c = a.Ka();
            var l = a.f;
            a = a.j;
            this.qa = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== l ? l : "center",
                textBaseline: void 0 !==
                    a ? a : "middle"
            };
            this.sa = void 0 !== c ? c : "";
            this.va = void 0 !== d ? this.f * d : 0;
            this.Ub = void 0 !== e ? this.f * e : 0;
            this.ya = void 0 !== f ? f : !1;
            this.Xa = void 0 !== g ? g : 0;
            this.s = this.f * (void 0 !== h ? h : 1)
        } else this.sa = ""
    };

    function Ai(a) { Uc.call(this);
        this.a = a }
    v(Ai, Uc);
    Ai.prototype.Ga = da;
    Ai.prototype.bf = Re;
    Ai.prototype.Pf = function(a, b, c) { return function(d, e) { return Bi(a, b, d, e, function(a) { c[d] || (c[d] = {});
                c[d][a.xa.toString()] = a }) } };
    Ai.prototype.aa = function(a) { 2 === a.target.getState() && Ci(this) };

    function Di(a, b) { var c = b.getState();
        2 != c && 3 != c && y(b, "change", a.aa, a);
        0 == c && (b.load(), c = b.getState()); return 2 == c }

    function Ci(a) { var b = a.a;
        b.Jb() && "ready" == b.fg() && a.u() }

    function Ei(a, b) { b.$i() && a.postRenderFunctions.push(function(a, b, e) { b = w(a).toString();
            b in e.usedTiles && a.qd(e.viewState.projection, e.usedTiles[b]) }.bind(null, b)) }

    function Fi(a, b) { b = b.H;
        void 0 !== b && ("string" === typeof b ? a.logos[b] = "" : b && (na("string" == typeof b.href, 44), na("string" == typeof b.src, 45), a.logos[b.src] = b.href)) }

    function Gi(a, b, c, d) { b = w(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.fa < a.fa && (a.fa = d.fa), d.la > a.la && (a.la = d.la), d.ea < a.ea && (a.ea = d.ea), d.ka > a.ka && (a.ka = d.ka)) : a[b][c] = d : (a[b] = {}, a[b][c] = d) }

    function Hi(a, b, c, d, e, f, g, h, l, m) { var n = w(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {}); var p = a.wantedTiles[n];
        a = a.tileQueue; var q, r, u; for (u = c.minZoom; u <= g; ++u) { var x = tc(c, f, u, x); var C = c.Sa(u); for (q = x.fa; q <= x.la; ++q)
                for (r = x.ea; r <= x.ka; ++r)
                    if (g - u <= h) { var z = b.$c(u, q, r, d, e);
                        0 == z.getState() && (p[z.ib()] = !0, z.ib() in a.a || a.i([z, n, yc(c, z.xa), C]));
                        void 0 !== l && l.call(m, z) } else b.jh(u, q, r, e) } };

    function Ii(a) { Ai.call(this, a);
        this.W = Ve() }
    v(Ii, Ai);

    function Oi(a, b, c) { var d = b.pixelRatio,
            e = b.size[0] * d,
            f = b.size[1] * d,
            g = b.viewState.rotation,
            h = Ya(c),
            l = Xa(c),
            m = Wa(c);
        c = Va(c);
        $e(b.coordinateToPixelTransform, h);
        $e(b.coordinateToPixelTransform, l);
        $e(b.coordinateToPixelTransform, m);
        $e(b.coordinateToPixelTransform, c);
        a.save();
        gi(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(m[0] * d, m[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        gi(a, g, e / 2, f / 2) }

    function Pi(a, b, c, d, e) { var f = a.a; if (Tc(f, b)) { var g = d.size[0] * d.pixelRatio,
                h = d.size[1] * d.pixelRatio,
                l = d.viewState.rotation;
            gi(c, -l, g / 2, h / 2);
            a = void 0 !== e ? e : Qi(a, d, 0);
            f.b(new Yh(b, new ri(c, d.pixelRatio, d.extent, a, d.viewState.rotation), d, c, null));
            gi(c, l, g / 2, h / 2) } }
    Ii.prototype.v = function(a, b, c, d) { if (this.Ga(a, b, 0, Qe, this)) return c.call(d, this.a, null) };
    Ii.prototype.mf = function(a, b, c, d) { Pi(this, "postcompose", a, b, d) };

    function Qi(a, b, c) { var d = b.viewState,
            e = b.pixelRatio,
            f = e / d.resolution; return df(a.W, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1]) };

    function Ri(a) { Ii.call(this, a);
        this.s = Ve();
        this.j = null }
    v(Ri, Ii);
    Ri.prototype.xg = function(a, b, c) { Pi(this, "precompose", c, a, void 0); var d = this.Y(); if (d) { var e = b.extent,
                f = void 0 !== e && !Ka(e, a.extent) && fb(e, a.extent);
            f && Oi(c, a, e);
            e = this.o(); var g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore() }
        this.mf(c, a, b) };
    Ri.prototype.Ga = function(a, b, c, d, e) { var f = this.a; return f.ia().Ga(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) { return d.call(e, a, f) }) };
    Ri.prototype.v = function(a, b, c, d) { if (this.Y()) { if (this.a.ia().Ga !== da) return Ii.prototype.v.apply(this, arguments); var e = $e(this.s, a.slice());
            Ge(e, b.viewState.resolution / this.i);
            this.j || (this.j = gg(1, 1));
            this.j.clearRect(0, 0, 1, 1);
            this.j.drawImage(this.Y(), e[0], e[1], 1, 1, 0, 0, 1, 1);
            e = this.j.getImageData(0, 0, 1, 1).data; if (0 < e[3]) return c.call(d, this.a, e) } };

    function Si(a) { Ri.call(this, a);
        this.N = null;
        this.c = Ve() }
    v(Si, Ri);
    Si.handles = function(a, b) { return "canvas" === a && "IMAGE" === b.T() };
    Si.create = function(a, b) { return new Si(b) };
    Si.prototype.Y = function() { return this.N ? this.N.Y() : null };
    Si.prototype.o = function() { return this.c };
    Si.prototype.Cd = function(a, b) { var c = a.pixelRatio,
            d = a.size,
            e = a.viewState,
            f = e.center,
            g = e.resolution,
            h = this.a.ia(); var l = a.viewHints; var m = a.extent;
        void 0 !== b.extent && (m = eb(m, b.extent));
        l[0] || l[1] || $a(m) || (l = h.Y(m, g, c, e.projection)) && Di(this, l) && (this.N = l);
        this.N && (l = this.N, e = l.C(), b = l.resolution, l = l.a, m = c * b / (g * l), e = df(this.c, c * d[0] / 2, c * d[1] / 2, m, m, 0, l * (e[0] - f[0]) / b, l * (f[1] - e[3]) / b), df(this.s, c * d[0] / 2 - e[4], c * d[1] / 2 - e[5], c / g, -c / g, 0, -f[0], -f[1]), Fi(a, h), this.i = b * c / l); return !!this.N };

    function Ti() { this.b = {};
        this.a = 0 }
    Ti.prototype.clear = function() { this.b = {};
        this.a = 0 };
    Ti.prototype.get = function(a, b, c) { a = b + ":" + a + ":" + (c ? ni(c) : "null"); return a in this.b ? this.b[a] : null };
    Ti.prototype.set = function(a, b, c, d) { this.b[b + ":" + a + ":" + (c ? ni(c) : "null")] = d;++this.a };
    var Ui = new Ti;

    function Vi(a, b) { this.l = b;
        this.c = {};
        this.v = {} }
    v(Vi, Oc);

    function Wi(a) { var b = a.viewState,
            c = a.coordinateToPixelTransform,
            d = a.pixelToCoordinateTransform;
        df(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        ef(Ze(d, c)) }
    k = Vi.prototype;
    k.ha = function() { for (var a in this.c) Pc(this.c[a]) };

    function Xi() { if (32 < Ui.a) { var a = 0,
                b; for (b in Ui.b) { var c = Ui.b[b];
                0 !== (a++ & 3) || Tc(c) || (delete Ui.b[b], --Ui.a) } } }
    k.Ga = function(a, b, c, d, e, f, g) {
        function h(a, c) { var f = w(a).toString(),
                g = b.layerStates[w(c)].Se; if (!(f in b.skippedFeatureUids) || g) return d.call(e, a, g ? c : null) } var l, m = b.viewState,
            n = m.resolution,
            p = m.projection;
        m = a; if (p.g) { p = p.C(); var q = ab(p),
                r = a[0]; if (r < p[0] || r > p[2]) m = [r + q * Math.ceil((p[0] - r) / q), a[1]] }
        p = b.layerStatesArray; for (q = p.length - 1; 0 <= q; --q) { var u = p[q];
            r = u.layer; if (wg(u, n) && f.call(g, r) && (u = Yi(this, r), r.ia() && (l = u.Ga(r.ia().D ? m : a, b, c, h, e)), l)) return l } };
    k.Ri = function(a, b, c, d, e) { return void 0 !== this.Ga(a, b, c, Qe, this, d, e) };

    function Yi(a, b) { var c = w(b).toString(); if (c in a.c) return a.c[c]; for (var d, e = a.T(), f = 0, g = og.length; f < g; ++f) { var h = og[f]; if (h.handles(e, b)) { d = h.create(a, b); break } } if (d) a.c[c] = d, a.v[c] = y(d, "change", a.Yl, a);
        else throw Error("Unable to create renderer for layer: " + b.T()); return d }
    k.Yl = function() { this.l.render() };
    k.ah = da;
    k.gq = function(a, b) { for (var c in this.c)
            if (!(b && c in b.layerStates)) { a = c; var d = this.c[a];
                delete this.c[a];
                Gc(this.v[a]);
                delete this.v[a];
                Pc(d) } };

    function Zi(a, b) { for (var c in a.c)
            if (!(c in b.layerStates)) { b.postRenderFunctions.push(a.gq.bind(a)); break } }

    function lc(a, b) { return a.zIndex - b.zIndex };

    function $i(a, b) { Vi.call(this, 0, b);
        this.g = gg();
        this.b = this.g.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0;
        this.i = Ve() }
    v($i, Vi);
    $i.handles = function(a) { return "canvas" === a };
    $i.create = function(a, b) { return new $i(a, b) };

    function aj(a, b, c) { var d = a.l,
            e = a.g; if (Tc(d, b)) { var f = c.extent,
                g = c.pixelRatio,
                h = c.viewState.rotation,
                l = c.viewState,
                m = c.pixelRatio / l.resolution;
            a = df(a.i, a.b.width / 2, a.b.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
            d.b(new Yh(b, new ri(e, g, f, a, h), c, e, null)) } }
    $i.prototype.T = function() { return "canvas" };
    $i.prototype.ah = function(a) {
        if (a) {
            var b = this.g,
                c = a.pixelRatio,
                d = Math.round(a.size[0] * c),
                e = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != e ? (this.b.width = d, this.b.height = e) : b.clearRect(0, 0, d, e);
            c = a.viewState.rotation;
            Wi(a);
            aj(this, "precompose", a);
            var f = a.layerStatesArray;
            ic(f);
            c && (b.save(), gi(b, c, d / 2, e / 2));
            d = a.viewState.resolution;
            var g;
            e = 0;
            for (g = f.length; e < g; ++e) { var h = f[e]; var l = h.layer;
                l = Yi(this, l);
                wg(h, d) && "ready" == h.Qj && l.Cd(a, h) && l.xg(a, h, b) }
            c && b.restore();
            aj(this, "postcompose", a);
            this.a ||
                (this.b.style.display = "", this.a = !0);
            Zi(this, a);
            a.postRenderFunctions.push(Xi)
        } else this.a && (this.b.style.display = "none", this.a = !1)
    };
    $i.prototype.Qi = function(a, b, c, d, e, f) { var g = b.viewState.resolution,
            h = b.layerStatesArray,
            l = h.length;
        a = $e(b.pixelToCoordinateTransform, a.slice()); for (--l; 0 <= l; --l) { var m = h[l]; var n = m.layer; if (wg(m, g) && e.call(f, n) && (m = Yi(this, n).v(a, b, c, d))) return m } };

    function bj(a) { Ri.call(this, a);
        this.context = null === this.context ? null : gg();
        this.c = null;
        this.f = [];
        this.G = Ca();
        this.ua = new ia(0, 0, 0, 0);
        this.P = Ve();
        this.O = 0 }
    v(bj, Ri);
    bj.handles = function(a, b) { return "canvas" === a && "TILE" === b.T() };
    bj.create = function(a, b) { return new bj(b) };

    function cj(a, b) { b = b.getState();
        a = a.a.i(); return 2 == b || 4 == b || 3 == b && !a }
    bj.prototype.Cd = function(a, b) {
        var c = a.pixelRatio,
            d = a.size,
            e = a.viewState,
            f = e.projection,
            g = e.resolution;
        e = e.center;
        var h = this.a,
            l = h.ia(),
            m = l.g,
            n = l.bb(f),
            p = n.Bc(g, this.O),
            q = n.Sa(p),
            r = Math.round(g / q) || 1,
            u = a.extent;
        void 0 !== b.extent && (u = eb(u, b.extent));
        if ($a(u)) return !1;
        var x = tc(n, u, p),
            C = wc(n, p, x),
            z = l.Xc(c),
            E = {};
        E[p] = {};
        var V = this.Pf(l, f, E),
            ya = this.G,
            fa = this.ua,
            pa = !1,
            Ja, ma;
        for (Ja = x.fa; Ja <= x.la; ++Ja)
            for (ma = x.ea; ma <= x.ka; ++ma) {
                var Sa = l.$c(p, Ja, ma, c, f);
                3 == Sa.getState() && (h.i() ? 0 < h.c() && (pa = !0) : dj(Sa, 2));
                cj(this, Sa) || (Sa = ej(Sa));
                if (cj(this, Sa)) { var N = w(this); if (2 == Sa.getState()) { E[p][Sa.xa.toString()] = Sa; var hc = Sa.j ? -1 !== Sa.s[N] : !1;
                        pa || !hc && -1 !== this.f.indexOf(Sa) || (pa = !0) } if (1 === fj(Sa, N, a.time)) continue }
                N = vc(n, Sa.xa, fa, ya);
                hc = !1;
                N && (hc = V(p + 1, N));
                hc || uc(n, Sa.xa, V, fa, ya)
            }
        Sa = a.viewHints;
        Sa = Sa[0] || Sa[1];
        if (!(this.i && 16 < Date.now() - a.time && Sa || !pa && this.c && Ka(this.c, u) && this.uf == m && r == this.B && (Sa || q * c / z * r == this.i))) {
            if (Sa = this.context) ma = l.Yd(p, c, f), Ja = Math.round((x.la - x.fa + 1) * ma[0] / r), ma = Math.round((x.ka -
                x.ea + 1) * ma[1] / r), pa = Sa.canvas, pa.width != Ja || pa.height != ma ? (this.B = r, pa.width = Ja, pa.height = ma) : (this.c && !Ra(C, this.c) && Sa.clearRect(0, 0, Ja, ma), r = this.B);
            this.f.length = 0;
            pa = Object.keys(E).map(Number);
            pa.sort(function(a, b) { return a === p ? 1 : b === p ? -1 : a > b ? 1 : a < b ? -1 : 0 });
            N = 0;
            for (hc = pa.length; N < hc; ++N) {
                fa = pa[N];
                V = l.Yd(fa, c, f);
                Sa = n.Sa(fa);
                var ib = Sa / q;
                var jc = z * l.Xf(f);
                var kc = E[fa];
                for (var pf in kc) {
                    Sa = kc[pf];
                    ma = n.La(Sa.xa, ya);
                    Ja = (ma[0] - C[0]) / q * z / r;
                    ma = (C[3] - ma[3]) / q * z / r;
                    var Jg = V[0] * ib / r;
                    var Qd = V[1] * ib / r;
                    this.Qf(Sa,
                        a, b, Ja, ma, Jg, Qd, jc, p === fa);
                    this.f.push(Sa)
                }
            }
            this.uf = m;
            this.i = q * c / z * r;
            this.c = C
        }
        b = this.i / g;
        b = df(this.P, c * d[0] / 2, c * d[1] / 2, b, b, 0, (this.c[0] - e[0]) / this.i * c, (e[1] - this.c[3]) / this.i * c);
        df(this.s, c * d[0] / 2 - b[4], c * d[1] / 2 - b[5], c / g, -c / g, 0, -e[0], -e[1]);
        Gi(a.usedTiles, l, p, x);
        Hi(a, l, n, c, f, u, p, h.c());
        Ei(a, l);
        Fi(a, l);
        return 0 < this.f.length
    };
    bj.prototype.Qf = function(a, b, c, d, e, f, g, h, l) { if (c = a.Y(this.a)) { var m = w(this),
                n = l ? fj(a, m, b.time) : 1;
            1 !== n || this.a.ia().cg(b.viewState.projection) || this.context.clearRect(d, e, f, g); var p = n !== this.context.globalAlpha;
            p && (this.context.save(), this.context.globalAlpha = n);
            this.context.drawImage(c, h, h, c.width - 2 * h, c.height - 2 * h, d, e, f, g);
            p && this.context.restore();
            1 !== n ? b.animate = !0 : l && a.j && (a.s[m] = -1) } };
    bj.prototype.Y = function() { var a = this.context; return a ? a.canvas : null };
    bj.prototype.o = function() { return this.P };
    var gj = { Hc: function() {} };
    (function(a) {
        function b(a, e, f, g, h) { f = f || 0;
            g = g || a.length - 1; for (h = h || d; g > f;) { if (600 < g - f) { var l = g - f + 1,
                        m = e - f + 1,
                        n = Math.log(l),
                        p = .5 * Math.exp(2 * n / 3);
                    n = .5 * Math.sqrt(n * p * (l - p) / l) * (0 > m - l / 2 ? -1 : 1);
                    b(a, e, Math.max(f, Math.floor(e - m * p / l + n)), Math.min(g, Math.floor(e + (l - m) * p / l + n)), h) }
                l = a[e];
                m = f;
                p = g;
                c(a, f, e); for (0 < h(a[g], l) && c(a, f, g); m < p;) { c(a, m, p);
                    m++; for (p--; 0 > h(a[m], l);) m++; for (; 0 < h(a[p], l);) p-- }
                0 === h(a[f], l) ? c(a, f, p) : (p++, c(a, p, g));
                p <= e && (f = p + 1);
                e <= p && (g = p - 1) } }

        function c(a, b, c) { var d = a[b];
            a[b] = a[c];
            a[c] = d }

        function d(a,
            b) { return a < b ? -1 : a > b ? 1 : 0 }

        function e(a, b) { if (!(this instanceof e)) return new e(a, b);
            this.Jf = Math.max(4, a || 9);
            this.vh = Math.max(2, Math.ceil(.4 * this.Jf));
            b && this.vk(b);
            this.clear() }

        function f(a, b) { g(a, 0, a.children.length, b, a) }

        function g(a, b, c, d, e) { e || (e = u(null));
            e.fa = Infinity;
            e.ea = Infinity;
            e.la = -Infinity;
            e.ka = -Infinity; for (var f; b < c; b++) f = a.children[b], h(e, a.cb ? d(f) : f); return e }

        function h(a, b) { a.fa = Math.min(a.fa, b.fa);
            a.ea = Math.min(a.ea, b.ea);
            a.la = Math.max(a.la, b.la);
            a.ka = Math.max(a.ka, b.ka) }

        function l(a,
            b) { return a.fa - b.fa }

        function m(a, b) { return a.ea - b.ea }

        function n(a) { return (a.la - a.fa) * (a.ka - a.ea) }

        function p(a) { return a.la - a.fa + (a.ka - a.ea) }

        function q(a, b) { return a.fa <= b.fa && a.ea <= b.ea && b.la <= a.la && b.ka <= a.ka }

        function r(a, b) { return b.fa <= a.la && b.ea <= a.ka && b.la >= a.fa && b.ka >= a.ea }

        function u(a) { return { children: a, height: 1, cb: !0, fa: Infinity, ea: Infinity, la: -Infinity, ka: -Infinity } }

        function x(a, b, c, d, e) {
            for (var f = [b, c], g; f.length;) c = f.pop(), b = f.pop(), c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d, C(a, g, b, c, e), f.push(b,
                g, g, c))
        }
        var C = b;
        e.prototype = {
            all: function() { return this.qh(this.data, []) },
            search: function(a) { var b = this.data,
                    c = [],
                    d = this.wb; if (!r(a, b)) return c; for (var e = [], f, g, h, l; b;) { f = 0; for (g = b.children.length; f < g; f++) h = b.children[f], l = b.cb ? d(h) : h, r(a, l) && (b.cb ? c.push(h) : q(a, l) ? this.qh(h, c) : e.push(h));
                    b = e.pop() } return c },
            Jk: function(a) {
                var b = this.data,
                    c = this.wb;
                if (!r(a, b)) return !1;
                for (var d = [], e, f, g, h; b;) {
                    e = 0;
                    for (f = b.children.length; e < f; e++)
                        if (g = b.children[e], h = b.cb ? c(g) : g, r(a, h)) { if (b.cb || q(a, h)) return !0;
                            d.push(g) }
                    b =
                        d.pop()
                }
                return !1
            },
            load: function(a) { if (!a || !a.length) return this; if (a.length < this.vh) { for (var b = 0, c = a.length; b < c; b++) this.Ca(a[b]); return this }
                a = this.sh(a.slice(), 0, a.length - 1, 0);
                this.data.children.length ? this.data.height === a.height ? this.xh(this.data, a) : (this.data.height < a.height && (b = this.data, this.data = a, a = b), this.uh(a, this.data.height - a.height - 1, !0)) : this.data = a; return this },
            Ca: function(a) { a && this.uh(a, this.data.height - 1); return this },
            clear: function() { this.data = u([]); return this },
            remove: function(a,
                b) { if (!a) return this; for (var c = this.data, d = this.wb(a), e = [], f = [], g, h, l, m; c || e.length;) { c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0); if (c.cb) { a: { l = a; var n = c.children,
                                p = b; if (p) { for (var r = 0; r < n.length; r++)
                                    if (p(l, n[r])) { l = r; break a }
                                l = -1 } else l = n.indexOf(l) } if (-1 !== l) { c.children.splice(l, 1);
                            e.push(c);
                            this.tk(e); break } }
                    m || c.cb || !q(c, d) ? h ? (g++, c = h.children[g], m = !1) : c = null : (e.push(c), f.push(g), g = 0, h = c, c = c.children[0]) } return this },
            wb: function(a) { return a },
            Nf: l,
            Of: m,
            toJSON: function() { return this.data },
            qh: function(a,
                b) { for (var c = []; a;) a.cb ? b.push.apply(b, a.children) : c.push.apply(c, a.children), a = c.pop(); return b },
            sh: function(a, b, c, d) {
                var e = c - b + 1,
                    g = this.Jf;
                if (e <= g) { var h = u(a.slice(b, c + 1));
                    f(h, this.wb); return h }
                d || (d = Math.ceil(Math.log(e) / Math.log(g)), g = Math.ceil(e / Math.pow(g, d - 1)));
                h = u([]);
                h.cb = !1;
                h.height = d;
                e = Math.ceil(e / g);
                g = e * Math.ceil(Math.sqrt(g));
                var l;
                for (x(a, b, c, g, this.Nf); b <= c; b += g) { var m = Math.min(b + g - 1, c);
                    x(a, b, m, e, this.Of); for (l = b; l <= m; l += e) { var n = Math.min(l + e - 1, m);
                        h.children.push(this.sh(a, l, n, d - 1)) } }
                f(h,
                    this.wb);
                return h
            },
            sk: function(a, b, c, d) { for (var e, f, g, h, l, m, p, q;;) { d.push(b); if (b.cb || d.length - 1 === c) break;
                    p = q = Infinity;
                    e = 0; for (f = b.children.length; e < f; e++) g = b.children[e], l = n(g), m = (Math.max(g.la, a.la) - Math.min(g.fa, a.fa)) * (Math.max(g.ka, a.ka) - Math.min(g.ea, a.ea)) - l, m < q ? (q = m, p = l < p ? l : p, h = g) : m === q && l < p && (p = l, h = g);
                    b = h || b.children[0] } return b },
            uh: function(a, b, c) {
                var d = this.wb;
                c = c ? a : d(a);
                d = [];
                var e = this.sk(c, this.data, b, d);
                e.children.push(a);
                for (h(e, c); 0 <= b;)
                    if (d[b].children.length > this.Jf) this.yk(d, b),
                        b--;
                    else break;
                this.pk(c, d, b)
            },
            yk: function(a, b) { var c = a[b],
                    d = c.children.length,
                    e = this.vh;
                this.qk(c, e, d);
                d = this.rk(c, e, d);
                d = u(c.children.splice(d, c.children.length - d));
                d.height = c.height;
                d.cb = c.cb;
                f(c, this.wb);
                f(d, this.wb);
                b ? a[b - 1].children.push(d) : this.xh(c, d) },
            xh: function(a, b) { this.data = u([a, b]);
                this.data.height = a.height + 1;
                this.data.cb = !1;
                f(this.data, this.wb) },
            rk: function(a, b, c) {
                var d, e;
                var f = e = Infinity;
                for (d = b; d <= c - b; d++) {
                    var h = g(a, 0, d, this.wb);
                    var l = g(a, d, c, this.wb);
                    var m = Math.max(0, Math.min(h.la,
                        l.la) - Math.max(h.fa, l.fa)) * Math.max(0, Math.min(h.ka, l.ka) - Math.max(h.ea, l.ea));
                    h = n(h) + n(l);
                    if (m < f) { f = m; var p = d;
                        e = h < e ? h : e } else m === f && h < e && (e = h, p = d)
                }
                return p
            },
            qk: function(a, b, c) { var d = a.cb ? this.Nf : l,
                    e = a.cb ? this.Of : m,
                    f = this.rh(a, b, c, d);
                b = this.rh(a, b, c, e);
                f < b && a.children.sort(d) },
            rh: function(a, b, c, d) { a.children.sort(d);
                d = this.wb; var e = g(a, 0, b, d),
                    f = g(a, c - b, c, d),
                    l = p(e) + p(f),
                    m; for (m = b; m < c - b; m++) { var n = a.children[m];
                    h(e, a.cb ? d(n) : n);
                    l += p(e) } for (m = c - b - 1; m >= b; m--) n = a.children[m], h(f, a.cb ? d(n) : n), l += p(f); return l },
            pk: function(a, b, c) { for (; 0 <= c; c--) h(b[c], a) },
            tk: function(a) { for (var b = a.length - 1, c; 0 <= b; b--) 0 === a[b].children.length ? 0 < b ? (c = a[b - 1].children, c.splice(c.indexOf(a[b]), 1)) : this.clear() : f(a[b], this.wb) },
            vk: function(a) { var b = ["return a", " - b", ";"];
                this.Nf = new Function("a", "b", b.join(a[0]));
                this.Of = new Function("a", "b", b.join(a[1]));
                this.wb = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};") }
        };
        a["default"] = e
    })(gj.Hc = gj.Hc || {});
    gj.Hc = gj.Hc.default;

    function hj() {};

    function ij(a, b, c, d) { var e = a[b],
            f = a[b + 1],
            g = 0; for (b += d; b < c; b += d) { var h = a[b],
                l = a[b + 1];
            g += Math.sqrt((h - e) * (h - e) + (l - f) * (l - f));
            e = h;
            f = l } return g };

    function jj(a, b, c, d, e, f) { this.ca = f;
        this.va = Ca();
        this.ya = a;
        this.ua = b;
        this.overlaps = e;
        this.pixelRatio = d;
        this.O = 0;
        this.resolution = c;
        this.i = this.G = this.qa = null;
        this.a = [];
        this.coordinates = [];
        this.mb = {};
        this.aa = Ve();
        this.b = [];
        this.oa = null;
        this.state = {};
        this.Ub = Ve() }
    v(jj, qi);

    function kj(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u, x) {
        var C = a.Ub;
        f *= r;
        g *= r;
        c -= f;
        d -= g;
        u && (c = Math.round(c), d = Math.round(d));
        u = x + n > e.width ? e.width - n : x;
        l = l + p > e.height ? e.height - p : l;
        a = a.va;
        x = null;
        0 !== q ? (f = c + f, g = d + g, x = df(C, f, g, 1, 1, q, -f, -g), Na(a), Da(a, $e(C, [c, d])), Da(a, $e(C, [c + u, d])), Da(a, $e(C, [c + u, d + l])), Da(a, $e(C, [c, d + u]))) : Ma(c, d, c + u * r, d + l * r, a);
        q = b.canvas;
        q = a[0] <= q.width && 0 <= a[2] && a[1] <= q.height && 0 <= a[3];
        if (h) { if (q || 1 != h[4]) Ta(h, a), h.push(q ? [b, x ? x.slice(0) : null, m, e, n, p, u, l, c, d, r] : null) } else q && ii(b, x, m, e, n, p, u,
            l, c, d, r)
    }

    function lj(a, b) { var c = a.pixelRatio; return 1 == c ? b : b.map(function(a) { return a * c }) }

    function mj(a, b, c, d, e, f, g) { var h = a.coordinates.length,
            l = nj(a);
        g && (c += e);
        g = [b[c], b[c + 1]]; var m = [NaN, NaN],
            n = !0,
            p; for (p = c + e; p < d; p += e) { m[0] = b[p];
            m[1] = b[p + 1]; var q = La(l, m);
            q !== r ? (n && (a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]), a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : 1 === q ? (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : n = !0;
            g[0] = m[0];
            g[1] = m[1]; var r = q } if (f && n || p === c + e) a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]; return h }

    function oj(a, b, c, d, e, f) { for (var g = 0, h = d.length; g < h; ++g) { var l = d[g];
            c = mj(a, b, c, l, e, !1, !1);
            f.push(c);
            c = l } return c }
    k = jj.prototype;
    k.Eh = function(a, b, c) {
        pj(this, b);
        var d = a.T(),
            e = a.pa(),
            f = this.coordinates.length,
            g;
        if ("MultiPolygon" == d) { d = yi(a); var h = []; for (var l = a.rd(), m = g = 0, n = l.length; m < n; ++m) { var p = [];
                g = oj(this, d, g, l[m], e, p);
                h.push(p) }
            this.a.push([4, f, h, a, c, Bf]) } else "Polygon" == d || "MultiLineString" == d ? (h = [], d = "Polygon" == d ? a.Xb() : a.da(), oj(this, d, 0, a.ob(), e, h), this.a.push([4, f, h, a, c, Af])) : "LineString" == d || "MultiPoint" == d ? (d = a.da(), e = mj(this, d, 0, d.length, e, !1, !1), this.a.push([4, f, e, a, c, zf])) : "Point" == d && (d = a.da(), this.coordinates.push(d[0],
            d[1]), e = this.coordinates.length, this.a.push([4, f, e, a, c]));
        qj(this, b)
    };

    function pj(a, b) { a.qa = [0, b, 0];
        a.a.push(a.qa);
        a.G = [0, b, 0];
        a.b.push(a.G) }
    k.Ya = function(a, b) { if (this.W) { var c = $e(this.aa, this.W.slice());
            a.translate(c[0], c[1]);
            a.rotate(b) }
        a.fill();
        this.W && a.setTransform.apply(a, hi) };

    function rj(a, b) { if (b && 5 < b.length) { var c = b[4]; if (1 == c || c == b.length - 5) { c = { fa: b[0], ea: b[1], la: b[2], ka: b[3] }; if (!a.ca.Jk(c))
                    for (a.ca.Ca(c), a = 5, c = b.length; a < c; ++a) b[a] && ii.apply(void 0, b[a]);
                b.length = 5;
                Na(b) } } }

    function sj(a, b, c, d, e, f, g, h) {
        if (a.oa && gc(c, a.aa)) var l = a.oa;
        else a.oa || (a.oa = []), l = Se(a.coordinates, 0, a.coordinates.length, 2, c, a.oa), Ze(a.aa, c);
        for (var m = !mb(e), n = 0, p = f.length, q, r, u, x, C, z, E, V, ya, fa = 0, pa = 0, Ja = a.mb, ma = { context: b, pixelRatio: a.pixelRatio, resolution: a.resolution, rotation: d }, Sa = a.a != f || a.overlaps ? 0 : 200; n < p;) {
            var N = f[n];
            switch (N[0]) {
                case 0:
                    var hc = N[1];
                    m && e[w(hc).toString()] || !hc.V() ? n = N[2] : void 0 === h || fb(h, hc.V().C()) ? ++n : n = N[2] + 1;
                    break;
                case 1:
                    fa > Sa && (a.Ya(b, d), fa = 0);
                    pa > Sa && (b.stroke(),
                        pa = 0);
                    fa || pa || (b.beginPath(), C = z = NaN);
                    ++n;
                    break;
                case 2:
                    q = N[1];
                    var ib = l[q],
                        jc = l[q + 1],
                        kc = l[q + 2] - ib,
                        pf = l[q + 3] - jc,
                        Jg = Math.sqrt(kc * kc + pf * pf);
                    b.moveTo(ib + Jg, jc);
                    b.arc(ib, jc, Jg, 0, 2 * Math.PI, !0);
                    ++n;
                    break;
                case 3:
                    b.closePath();
                    ++n;
                    break;
                case 4:
                    q = N[1];
                    r = N[2];
                    var Qd = N[4],
                        se = 6 == N.length ? N[5] : void 0;
                    ma.geometry = N[3];
                    ma.feature = hc;
                    n in Ja || (Ja[n] = []);
                    var of = Ja[n];
                    se ? se(l, q, r, 2, of) : (of[0] = l[q], of[1] = l[q + 1], of.length = 2);
                    Qd(of, ma);
                    ++n;
                    break;
                case 6:
                    q = N[1];
                    r = N[2];
                    var Kg = N[3];
                    u = N[4];
                    x = N[5];
                    ya = N[6];
                    var Eh = N[7],
                        Gk = N[8],
                        rf = N[9],
                        hu = N[10],
                        ap = N[12],
                        iu = N[13],
                        ju = N[14],
                        ku = N[15];
                    for (N[11] && (ap += d); q < r; q += 2) kj(a, b, l[q], l[q + 1], Kg, u, x, ya, Eh, Gk, rf, hu, ap, iu, ju, ku);
                    rj(a, ya);
                    ++n;
                    break;
                case 5:
                    var bp = N[1],
                        cp = N[2],
                        Hk = N[3];
                    ya = N[4];
                    var lu = N[5],
                        mu = N[6],
                        nu = N[7],
                        dp = N[8],
                        ep = N[9],
                        ou = N[10],
                        fp = N[11],
                        gp = N[12],
                        pu = N[13],
                        hp = N[14],
                        ip = ij(l, bp, cp, 2),
                        jp = dp(gp);
                    if (lu || jp <= ip) {
                        a: {
                            var Ji = void 0,
                                Uf = void 0,
                                sf = l,
                                ue = bp,
                                kp = cp,
                                lp = gp,
                                qu = dp,
                                mp = (ip - jp) * pu,
                                ru = nu,
                                Ik = [],
                                Fh = sf[ue] > sf[kp - 2],
                                np = lp.length,
                                Gh = sf[ue],
                                Hh = sf[ue + 1];ue += 2;
                            for (var Lg = sf[ue], Mg = sf[ue + 1], Jk =
                                    0, Ki = Math.sqrt(Math.pow(Lg - Gh, 2) + Math.pow(Mg - Hh, 2)), Vf = "", Kk = 0, Li = 0; Li < np; ++Li) {
                                var su = Fh ? np - Li - 1 : Li;
                                var Lk = lp.charAt(su);
                                Vf = Fh ? Lk + Vf : Vf + Lk;
                                var Ng = qu(Vf) - Kk;
                                Kk += Ng;
                                for (var op = mp + Ng / 2; ue < kp - 2 && Jk + Ki < op;) Gh = Lg, Hh = Mg, ue += 2, Lg = sf[ue], Mg = sf[ue + 1], Jk += Ki, Ki = Math.sqrt(Math.pow(Lg - Gh, 2) + Math.pow(Mg - Hh, 2));
                                var tu = op - Jk,
                                    Og = Math.atan2(Mg - Hh, Lg - Gh);
                                Fh && (Og += 0 < Og ? -Math.PI : Math.PI);
                                if (void 0 !== Ji) { var Mi = Og - Ji;
                                    Mi += Mi > Math.PI ? -2 * Math.PI : Mi < -Math.PI ? 2 * Math.PI : 0; if (Math.abs(Mi) > ru) { var Pg = null; break a } }
                                var pp = tu /
                                    Ki,
                                    qp = wa(Gh, Lg, pp),
                                    rp = wa(Hh, Mg, pp);
                                Ji == Og ? (Fh && (Uf[0] = qp, Uf[1] = rp, Uf[2] = Ng / 2), Uf[4] = Vf) : (Vf = Lk, Kk = Ng, Uf = [qp, rp, Ng / 2, Og, Vf], Fh ? Ik.unshift(Uf) : Ik.push(Uf), Ji = Og);
                                mp += Ng
                            }
                            Pg = Ik
                        }
                        if (Pg) {
                            var Ni;
                            if (ou) { var Wf = 0; for (Ni = Pg.length; Wf < Ni; ++Wf) { var ce = Pg[Wf]; var Mk = ce[4]; var Me = a.Y(Mk, !1, !0);
                                    u = ce[2] + fp;
                                    x = Hk * Me.height + 2 * (.5 - Hk) * fp - ep;
                                    kj(a, b, ce[0], ce[1], Me, u, x, ya, Me.height, 1, 0, 0, ce[3], hp, !1, Me.width) } }
                            if (mu)
                                for (Wf = 0, Ni = Pg.length; Wf < Ni; ++Wf) ce = Pg[Wf], Mk = ce[4], Me = a.Y(Mk, !0, !1), u = ce[2], x = Hk * Me.height - ep, kj(a, b, ce[0],
                                    ce[1], Me, u, x, ya, Me.height, 1, 0, 0, ce[3], hp, !1, Me.width)
                        }
                    }
                    rj(a, ya);
                    ++n;
                    break;
                case 7:
                    if (void 0 !== g) { hc = N[1]; var sp = g(hc); if (sp) return sp }++n;
                    break;
                case 8:
                    Sa ? fa++ : a.Ya(b, d);
                    ++n;
                    break;
                case 9:
                    q = N[1];
                    r = N[2];
                    var Ih = l[q];
                    var Jh = l[q + 1];
                    E = Ih + .5 | 0;
                    V = Jh + .5 | 0;
                    if (E !== C || V !== z) b.moveTo(Ih, Jh), C = E, z = V;
                    for (q += 2; q < r; q += 2)
                        if (Ih = l[q], Jh = l[q + 1], E = Ih + .5 | 0, V = Jh + .5 | 0, q == r - 2 || E !== C || V !== z) b.lineTo(Ih, Jh), C = E, z = V;
                        ++n;
                    break;
                case 10:
                    a.W = N[2];
                    fa && (a.Ya(b, d), fa = 0, pa && (b.stroke(), pa = 0));
                    b.fillStyle = N[1];
                    ++n;
                    break;
                case 11:
                    pa && (b.stroke(),
                        pa = 0);
                    b.strokeStyle = N[1];
                    b.lineWidth = N[2];
                    b.lineCap = N[3];
                    b.lineJoin = N[4];
                    b.miterLimit = N[5];
                    od && (b.lineDashOffset = N[7], b.setLineDash(N[6]));
                    ++n;
                    break;
                case 12:
                    Sa ? pa++ : b.stroke();
                    ++n;
                    break;
                default:
                    ++n
            }
        }
        fa && a.Ya(b, d);
        pa && b.stroke()
    }
    k.Ma = function(a, b, c, d) { sj(this, a, b, c, d, this.a, void 0, void 0) };

    function tj(a) { var b = a.b;
        b.reverse(); var c, d = b.length,
            e = -1; for (c = 0; c < d; ++c) { var f = b[c]; var g = f[0]; if (7 == g) e = c;
            else if (0 == g) { f[2] = c;
                f = a.b; for (g = c; e < g;) { var h = f[e];
                    f[e] = f[g];
                    f[g] = h;++e;--g }
                e = -1 } } }
    k.Oa = function(a, b) {
        var c = this.state;
        a ? (a = a.b, c.fillStyle = pi(a ? a : ai)) : c.fillStyle = void 0;
        b ? (a = b.a, c.strokeStyle = pi(a ? a : ci), a = b.f, c.lineCap = void 0 !== a ? a : "round", a = b.g, c.lineDash = a ? a.slice() : bi, a = b.i, c.lineDashOffset = a ? a : 0, a = b.j, c.lineJoin = void 0 !== a ? a : "round", a = b.c, c.lineWidth = void 0 !== a ? a : 1, b = b.l, c.miterLimit = void 0 !== b ? b : 10, c.lineWidth > this.O && (this.O = c.lineWidth, this.i = null)) : (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineDashOffset = void 0, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit =
            void 0)
    };

    function uj(a, b, c) { var d = b.strokeStyle,
            e = b.lineCap,
            f = b.lineDash,
            g = b.lineDashOffset,
            h = b.lineJoin,
            l = b.lineWidth,
            m = b.miterLimit;
        b.Rk == d && b.Lk == e && gc(b.Mk, f) && b.Nk == g && b.Ok == h && b.Pk == l && b.Qk == m || (c && (void 0 != b.Zd && b.Zd != a.coordinates.length && (a.a.push([12]), b.Zd = a.coordinates.length), b.Zd = 0), a.a.push([11, d, l * a.pixelRatio, e, h, m, lj(a, f), g * a.pixelRatio]), c && a.a.push([1]), b.Rk = d, b.Lk = e, b.Mk = f, b.Nk = g, b.Ok = h, b.Pk = l, b.Qk = m) }

    function qj(a, b) { a.qa[2] = a.a.length;
        a.qa = null;
        a.G[2] = a.b.length;
        a.G = null;
        b = [7, b];
        a.a.push(b);
        a.b.push(b) }
    k.af = da;

    function nj(a) { a.i || (a.i = Fa(a.ua), 0 < a.O && Ea(a.i, a.resolution * (a.O + 1) / 2, a.i)); return a.i };

    function vj(a, b, c, d, e, f) { jj.call(this, a, b, c, d, e, f);
        this.N = this.Va = this.H = null;
        this.P = this.o = this.v = this.s = this.l = this.B = this.D = this.j = this.f = this.c = this.g = void 0 }
    v(vj, jj);
    vj.prototype.xc = function(a, b) { if (this.N) { pj(this, b); var c = a.da(),
                d = this.coordinates.length;
            a = mj(this, c, 0, c.length, a.pa(), !1, !1);
            this.a.push([6, d, a, this.N, this.g, this.c, this.H, this.f, this.j, this.D, this.B, this.l, this.s, this.v * this.pixelRatio, this.o, this.P]);
            this.b.push([6, d, a, this.Va, this.g, this.c, this.H, this.f, this.j, this.D, this.B, this.l, this.s, this.v, this.o, this.P]);
            qj(this, b) } };
    vj.prototype.vc = function(a, b) { if (this.N) { pj(this, b); var c = a.da(),
                d = this.coordinates.length;
            a = mj(this, c, 0, c.length, a.pa(), !1, !1);
            this.a.push([6, d, a, this.N, this.g, this.c, this.H, this.f, this.j, this.D, this.B, this.l, this.s, this.v * this.pixelRatio, this.o, this.P]);
            this.b.push([6, d, a, this.Va, this.g, this.c, this.H, this.f, this.j, this.D, this.B, this.l, this.s, this.v, this.o, this.P]);
            qj(this, b) } };
    vj.prototype.af = function() { tj(this);
        this.c = this.g = void 0;
        this.N = this.Va = null;
        this.P = this.o = this.s = this.l = this.B = this.D = this.j = this.v = this.f = void 0 };
    vj.prototype.Zb = function(a, b) { var c = a.Uc(),
            d = a.nc(),
            e = a.Dg(1),
            f = a.Y(1),
            g = a.ad();
        this.g = c[0];
        this.c = c[1];
        this.H = b;
        this.Va = e;
        this.N = f;
        this.f = d[1];
        this.j = a.i;
        this.D = g[0];
        this.B = g[1];
        this.l = a.s;
        this.s = a.f;
        this.v = a.a;
        this.o = a.v;
        this.P = d[0] };

    function wj(a, b, c, d, e, f) { jj.call(this, a, b, c, d, e, f) }
    v(wj, jj);

    function xj(a, b, c, d, e) { var f = a.coordinates.length;
        b = mj(a, b, c, d, e, !1, !1);
        f = [9, f, b];
        a.a.push(f);
        a.b.push(f); return d }
    wj.prototype.tc = function(a, b) { var c = this.state,
            d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (uj(this, c, !0), pj(this, b), this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset], [1]), c = a.da(), xj(this, c, 0, c.length, a.pa()), this.b.push([12]), qj(this, b)) };
    wj.prototype.uc = function(a, b) { var c = this.state,
            d = c.lineWidth; if (void 0 !== c.strokeStyle && void 0 !== d) { uj(this, c, !0);
            pj(this, b);
            this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset], [1]);
            c = a.ob();
            d = a.da();
            a = a.pa(); var e = 0,
                f; var g = 0; for (f = c.length; g < f; ++g) e = xj(this, d, e, c[g], a);
            this.b.push([12]);
            qj(this, b) } };
    wj.prototype.af = function() { var a = this.state;
        void 0 != a.Zd && a.Zd != this.coordinates.length && this.a.push([12]);
        tj(this);
        this.state = null };

    function yj(a, b, c, d, e, f) { jj.call(this, a, b, c, d, e, f) }
    v(yj, jj);

    function zj(a, b, c, d, e) { var f = a.state,
            g = void 0 !== f.fillStyle;
        f = void 0 != f.strokeStyle; var h = d.length,
            l = [1];
        a.a.push(l);
        a.b.push(l); for (l = 0; l < h; ++l) { var m = d[l],
                n = a.coordinates.length;
            c = mj(a, b, c, m, e, !0, !f);
            c = [9, n, c];
            a.a.push(c);
            a.b.push(c);
            f && (c = [3], a.a.push(c), a.b.push(c));
            c = m }
        b = [8];
        a.b.push(b);
        g && a.a.push(b);
        f && (g = [12], a.a.push(g), a.b.push(g)); return c }
    yj.prototype.cc = function(a, b) {
        var c = this.state,
            d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            Aj(this, a);
            pj(this, b);
            this.b.push([10, ni(ai)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
            var e = a.da();
            d = this.coordinates.length;
            mj(this, e, 0, e.length, a.pa(), !1, !1);
            a = [1];
            d = [2, d];
            this.a.push(a, d);
            this.b.push(a, d);
            a = [8];
            this.b.push(a);
            void 0 !== c.fillStyle && this.a.push(a);
            void 0 !== c.strokeStyle && (c = [12], this.a.push(c),
                this.b.push(c));
            qj(this, b)
        }
    };
    yj.prototype.yc = function(a, b) { var c = this.state;
        Aj(this, a);
        pj(this, b);
        this.b.push([10, ni(ai)]);
        void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
        c = a.ob(); var d = a.Xb();
        zj(this, d, 0, c, a.pa());
        qj(this, b) };
    yj.prototype.wc = function(a, b) { var c = this.state,
            d = c.strokeStyle; if (void 0 !== c.fillStyle || void 0 !== d) { Aj(this, a);
            pj(this, b);
            this.b.push([10, ni(ai)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
            c = a.rd();
            d = yi(a);
            a = a.pa(); var e = 0,
                f; var g = 0; for (f = c.length; g < f; ++g) e = zj(this, d, e, c[g], a);
            qj(this, b) } };
    yj.prototype.af = function() { tj(this);
        this.state = null; var a = this.ya; if (0 !== a) { var b = this.coordinates,
                c; var d = 0; for (c = b.length; d < c; ++d) b[d] = a * Math.round(b[d] / a) } };

    function Aj(a, b) { var c = a.state,
            d = c.fillStyle; if (void 0 !== d && ("string" !== typeof d || c.Kk != d)) { var e = [10, d]; "string" !== typeof d && (b = b.C(), e.push([b[0], b[3]]));
            a.a.push(e);
            c.Kk = c.fillStyle }
        void 0 !== c.strokeStyle && uj(a, c, !1) };
    var Bj = "Polygon Circle LineString Image Text Default".split(" "),
        Cj = { left: 0, end: 0, center: .5, right: 1, start: 1, top: 0, middle: .5, hanging: .2, alphabetic: .8, ideographic: .8, bottom: 1 };

    function Dj(a, b, c, d, e, f) { jj.call(this, a, b, c, d, e, f);
        this.sa = "";
        this.j = this.s = 0;
        this.v = void 0;
        this.o = 0;
        this.g = this.c = null;
        this.f = {};
        this.D = this.P = this.B = "";
        this.H = {} }
    v(Dj, jj);
    var Ej = function() { var a, b = {}; return function(c) { var d = b[c];
                void 0 == d && (a || (a = document.createElement("span"), a.textContent = "M", a.style.margin = a.style.padding = "0 !important", a.style.position = "absolute !important", a.style.left = "-99999px !important"), a.style.font = c, document.body.appendChild(a), d = b[c] = a.offsetHeight, document.body.removeChild(a)); return d } }(),
        Fj = function() { var a, b; return function(c, d) { a || (a = gg(1, 1));
                c != b && (b = a.font = c); return a.measureText(d).width } }();
    Dj.prototype.Wb = function(a, b) {
        var c = this.c,
            d = this.g,
            e = this.f;
        if ("" !== this.sa && e && (c || d)) {
            c = this.coordinates.length;
            var f = a.T();
            d = null;
            var g = 2,
                h = 2;
            if ("line" === e.placement) {
                if (!fb(nj(this), a.C())) return;
                d = a.da();
                h = a.pa();
                if ("LineString" == f) var l = [d.length];
                else if ("MultiLineString" == f) l = a.ob();
                else if ("Polygon" == f) l = a.ob().slice(0, 1);
                else if ("MultiPolygon" == f) { var m = a.rd();
                    l = [];
                    g = 0; for (a = m.length; g < a; ++g) l.push(m[g][0]) }
                pj(this, b);
                a = e.textAlign;
                var n = 0,
                    p;
                m = 0;
                for (f = l.length; m < f; ++m) {
                    if (void 0 == a) {
                        for (var q,
                                r, u = void 0, x = void 0, C = g = r = q = void 0, z = p = n, E = 0, V = 0, ya = n; n < l[m]; n += h) { var fa = d[n],
                                pa = d[n + 1];
                            void 0 !== r && (r = fa - r, q = pa - q, g = Math.sqrt(r * r + q * q), void 0 !== x && (V += C, u = Math.acos((x * r + u * q) / (C * g)), u > e.maxAngle && (V > E && (E = V, p = ya, z = n), V = 0, ya = n - h)), C = g, x = r, u = q);
                            r = fa;
                            q = pa }
                        g = V + g > E ? [ya, n] : [p, z];
                        n = g[0];
                        p = g[1]
                    } else p = l[m];
                    for (g = n; g < p; g += h) this.coordinates.push(d[g], d[g + 1]);
                    g = this.coordinates.length;
                    n = l[m];
                    Gj(this, c, g, this.l);
                    c = g
                }
            } else {
                l = this.Y(this.sa, !!this.c, !!this.g);
                m = l.width / this.pixelRatio;
                switch (f) {
                    case "Point":
                    case "MultiPoint":
                        d =
                            a.da();
                        g = d.length;
                        break;
                    case "LineString":
                        d = a.Ee();
                        break;
                    case "Circle":
                        d = a.wa();
                        break;
                    case "MultiLineString":
                        d = a.Fe();
                        g = d.length;
                        break;
                    case "Polygon":
                        d = a.Sd();
                        if (!e.exceedLength && d[2] / this.resolution < m) return;
                        h = 3;
                        break;
                    case "MultiPolygon":
                        f = zi(a);
                        d = [];
                        g = 0;
                        for (a = f.length; g < a; g += 3)(e.exceedLength || f[g + 2] / this.resolution >= m) && d.push(f[g], f[g + 1]);
                        g = d.length;
                        if (0 == g) return
                }
                g = mj(this, d, 0, g, h, !1, !1);
                pj(this, b);
                e = c;
                c = g;
                a = this.f;
                m = this.g;
                d = this.pixelRatio;
                h = Cj[a.textAlign || "center"];
                a = Cj[a.textBaseline];
                m =
                    m && m.lineWidth ? m.lineWidth : 0;
                h = h * l.width / d + 2 * (.5 - h) * m;
                a = a * l.height / d + 2 * (.5 - a) * m;
                this.a.push([6, e, c, l, (h - this.s) * d, (a - this.j) * d, this.l, l.height, 1, 0, 0, this.v, this.o, 1, !0, l.width]);
                this.b.push([6, e, c, l, (h - this.s) * d, (a - this.j) * d, this.l, l.height, 1, 0, 0, this.v, this.o, 1 / d, !0, l.width])
            }
            qj(this, b)
        }
    };
    Dj.prototype.Y = function(a, b, c) {
        var d = (c ? this.D : "") + this.B + a + (b ? this.P : "");
        if (!di.a.hasOwnProperty(d)) {
            var e = this.g,
                f = this.c,
                g = this.f,
                h = g.scale * this.pixelRatio,
                l = Cj[g.textAlign || "center"],
                m = c && e.lineWidth ? e.lineWidth : 0;
            a = a.split("\n");
            var n = a.length,
                p = [],
                q = g.font;
            var r = a.length;
            var u = 0;
            var x;
            for (x = 0; x < r; ++x) { var C = Fj(q, a[x]);
                u = Math.max(u, C);
                p.push(C) }
            r = u;
            q = Ej(g.font);
            r = gg(Math.ceil((r + m) * h), Math.ceil((q * n + m) * h));
            for (u = r.canvas; $h(di);) di.pop();
            di.set(d, u);
            1 != h && r.scale(h, h);
            r.font = g.font;
            c && (r.strokeStyle =
                e.strokeStyle, r.lineWidth = m * (kd ? h : 1), r.lineCap = e.lineCap, r.lineJoin = e.lineJoin, r.miterLimit = e.miterLimit, od && e.lineDash.length && (r.setLineDash(e.lineDash), r.lineDashOffset = e.lineDashOffset));
            b && (r.fillStyle = f.fillStyle);
            r.textBaseline = "top";
            r.textAlign = "center";
            e = .5 - l;
            h = l * u.width / h + e * m;
            if (c)
                for (c = 0; c < n; ++c) r.strokeText(a[c], h + e * p[c], .5 * m + c * q);
            if (b)
                for (c = 0; c < n; ++c) r.fillText(a[c], h + e * p[c], .5 * m + c * q)
        }
        return di.get(d)
    };

    function Gj(a, b, c, d) { var e = a.pixelRatio,
            f = a.g,
            g = !!a.c,
            h = !!f,
            l = a.f,
            m = Cj[l.textBaseline],
            n = a.j * e,
            p = Cj[l.textAlign || "center"],
            q = a.sa,
            r = l.font,
            u = l.scale;
        f = f ? f.lineWidth * u / 2 : 0; var x = a.H;
        a.a.push([5, b, c, m, d, l.exceedLength, g, l.maxAngle, function(a) { var b = x[a];
            b || (b = x[a] = Fj(r, a)); return b * u * e }, n, h, f * e, q, p, 1]);
        a.b.push([5, b, c, m, d, l.exceedLength, g, l.maxAngle, function(a) { var b = x[a];
            b || (b = x[a] = Fj(r, a)); return b * u }, n, h, f, q, p, 1 / e]) }
    Dj.prototype.kb = function(a, b) {
        var c, d;
        if (a) {
            this.l = b;
            (d = a.Ea()) ? (b = this.c, b || (b = this.c = {}), b.fillStyle = pi(d.b || ai)) : b = this.c = null;
            if (c = a.Fa()) { d = this.g;
                d || (d = this.g = {}); var e = c.g,
                    f = c.i,
                    g = c.c,
                    h = c.l;
                d.lineCap = c.f || "round";
                d.lineDash = e ? e.slice() : bi;
                d.lineDashOffset = void 0 === f ? 0 : f;
                d.lineJoin = c.j || "round";
                d.lineWidth = void 0 === g ? 1 : g;
                d.miterLimit = void 0 === h ? 10 : h;
                d.strokeStyle = pi(c.a || ci) } else d = this.g = null;
            c = this.f;
            e = a.a || "10px sans-serif";
            fi(e);
            f = a.b;
            c.exceedLength = a.s;
            c.font = e;
            c.maxAngle = a.v;
            c.placement =
                a.o;
            c.textAlign = a.f;
            c.textBaseline = a.j || "middle";
            c.scale = void 0 === f ? 1 : f;
            e = a.g;
            f = a.c;
            g = a.l;
            h = a.i;
            this.sa = a.Ka() || "";
            this.s = void 0 === e ? 0 : e;
            this.j = void 0 === f ? 0 : f;
            this.v = void 0 === g ? !1 : g;
            this.o = void 0 === h ? 0 : h;
            this.D = d ? ("string" == typeof d.strokeStyle ? d.strokeStyle : w(d.strokeStyle)) + d.lineCap + d.lineDashOffset + "|" + d.lineWidth + d.lineJoin + d.miterLimit + "[" + d.lineDash.join() + "]" : "";
            this.B = c.font + (c.textAlign || "?") + c.scale;
            this.P = b ? "string" == typeof b.fillStyle ? b.fillStyle : "|" + w(b.fillStyle) : ""
        } else this.sa = ""
    };

    function Hj(a, b, c, d, e, f, g) { this.g = f;
        this.a = null;
        this.o = a;
        this.c = b;
        this.l = e;
        this.s = d;
        this.v = c;
        this.i = g;
        this.b = {};
        this.f = gg(1, 1);
        this.j = Ve() }
    v(Hj, hj);
    var Ij = { 0: [
            [!0]
        ] };

    function Jj(a, b, c) { var d, e = Math.floor(a.length / 2); if (b >= e)
            for (d = e; d < b; d++) a[d][c] = !0;
        else if (b < e)
            for (d = b + 1; d < e; d++) a[d][c] = !0 }

    function Kj(a) { if (void 0 !== Ij[a]) return Ij[a]; for (var b = 2 * a + 1, c = Array(b), d = 0; d < b; d++) c[d] = Array(b);
        b = a; for (var e = d = 0; b >= d;) Jj(c, a + b, a + d), Jj(c, a + d, a + b), Jj(c, a - d, a + b), Jj(c, a - b, a + d), Jj(c, a - b, a - d), Jj(c, a - d, a - b), Jj(c, a + d, a - b), Jj(c, a + b, a - d), d++, e += 1 + 2 * d, 0 < 2 * (e - b) + 1 && (--b, e += 1 - 2 * b); return Ij[a] = c }

    function Lj(a, b, c, d, e) { for (var f = Object.keys(a).map(Number).sort(bc), g = 0, h = f.length; g < h; ++g)
            for (var l = a[f[g].toString()], m = l.length - 1; 0 <= m;) { var n = l[m--],
                    p = l[m--]; if (n = sj(p, b, n, c, {}, p.b, d, e)) return n } }
    k = Hj.prototype;
    k.Vb = function(a) { var b = null;
        this.g && (a ? (b = this.a, b[4]++) : (b = this.a = Ca(), b.push(1))); return b };

    function Mj(a) { for (var b in a.b) { var c = a.b[b],
                d; for (d in c) c[d].af() } }
    k.Ga = function(a, b, c, d, e, f, g) {
        function h(a) { for (var b = n.getImageData(0, 0, l, l).data, c = 0; c < l; c++)
                for (var d = 0; d < l; d++)
                    if (q[c][d] && 0 < b[4 * (d * l + c) + 3]) { if (a = f(a)) return a;
                        n.clearRect(0, 0, l, l); return } }
        d = Math.round(d); var l = 2 * d + 1,
            m = df(this.j, d + .5, d + .5, 1 / b, -1 / b, -c, -a[0], -a[1]),
            n = this.f;
        n.canvas.width !== l || n.canvas.height !== l ? (n.canvas.width = l, n.canvas.height = l) : n.clearRect(0, 0, l, l); if (void 0 !== this.i) { var p = Ca();
            Da(p, a);
            Ea(p, b * (this.i + d), p) } var q = Kj(d);
        a = Nj(this, n, m, c, e, h, p, g);!a && g && (a = Lj(g, n, c, h, p)); return a };

    function Oj(a, b) { var c = a.c;
        a = c[0]; var d = c[1],
            e = c[2];
        c = c[3];
        a = [a, d, a, c, e, c, e, d];
        Se(a, 0, 8, 2, b, a); return a }
    k.Ja = function(a, b) { var c = void 0 !== a ? a.toString() : "0";
        a = this.b[c];
        void 0 === a && (a = {}, this.b[c] = a);
        c = a[b];
        void 0 === c && (c = new Pj[b](this.o, this.c, this.v, this.s, this.l, this.g), a[b] = c); return c };
    k.wg = function() { return mb(this.b) };
    k.Ma = function(a, b, c, d, e, f) { var g = Object.keys(this.b).map(Number);
        g.sort(bc);
        a.save(); var h = Oj(this, b);
        a.beginPath();
        a.moveTo(h[0], h[1]);
        a.lineTo(h[2], h[3]);
        a.lineTo(h[4], h[5]);
        a.lineTo(h[6], h[7]);
        a.clip();
        e = e ? e : Bj; var l, m;
        h = 0; for (l = g.length; h < l; ++h) { var n = g[h].toString(); var p = this.b[n]; var q = 0; for (m = e.length; q < m; ++q) { var r = e[q]; var u = p[r];
                void 0 !== u && (!f || "Image" != r && "Text" != r ? u.Ma(a, b, c, d) : (r = f[n]) ? r.push(u, b.slice(0)) : f[n] = [u, b.slice(0)]) } }
        a.restore() };

    function Nj(a, b, c, d, e, f, g, h) { var l = Object.keys(a.b).map(Number);
        l.sort(bc); var m, n; for (m = l.length - 1; 0 <= m; --m) { var p = l[m].toString(); var q = a.b[p]; for (n = Bj.length - 1; 0 <= n; --n) { var r = Bj[n]; var u = q[r]; if (void 0 !== u)
                    if (!h || "Image" != r && "Text" != r) { if (u = sj(u, b, c, d, e, u.b, f, g)) return u } else(r = h[p]) ? r.push(u, c.slice(0)) : h[p] = [u, c.slice(0)] } } }
    var Pj = { Circle: yj, Default: jj, Image: vj, LineString: wj, Polygon: yj, Text: Dj };

    function Qj(a, b) { return w(a) - w(b) }

    function Rj(a, b) { a = .5 * a / b; return a * a }

    function Sj(a, b, c, d, e, f) { var g = !1,
            h; if (h = c.Y()) { var l = h.ef();
            2 == l || 3 == l ? h.Tj(e, f) : (0 == l && h.load(), h.di(e, f), g = !0) } if (e = (0, c.ab)(b))
            if (d = e.Vd(d), c.He()) Tj(a, d, c, b);
            else(0, Uj[d.T()])(a, d, c, b);
        return g }

    function Tj(a, b, c, d) { if ("GeometryCollection" == b.T()) { b = b.td(); for (var e = 0, f = b.length; e < f; ++e) Tj(a, b[e], c, d) } else a.Ja(c.Ba(), "Default").Eh(b, d, c.He()) }
    var Uj = {
        Point: function(a, b, c, d) { var e = c.Y(); if (e) { if (2 != e.ef()) return; var f = a.Ja(c.Ba(), "Image");
                f.Zb(e, a.Vb(!1));
                f.xc(b, d) } if (f = c.Ka()) c = a.Ja(c.Ba(), "Text"), c.kb(f, a.Vb(!!e)), c.Wb(b, d) },
        LineString: function(a, b, c, d) { var e = c.Fa(); if (e) { var f = a.Ja(c.Ba(), "LineString");
                f.Oa(null, e);
                f.tc(b, d) } if (e = c.Ka()) c = a.Ja(c.Ba(), "Text"), c.kb(e, a.Vb(!1)), c.Wb(b, d) },
        Polygon: function(a, b, c, d) {
            var e = c.Ea(),
                f = c.Fa();
            if (e || f) { var g = a.Ja(c.Ba(), "Polygon");
                g.Oa(e, f);
                g.yc(b, d) }
            if (e = c.Ka()) c = a.Ja(c.Ba(), "Text"), c.kb(e, a.Vb(!1)),
                c.Wb(b, d)
        },
        MultiPoint: function(a, b, c, d) { var e = c.Y(); if (e) { if (2 != e.ef()) return; var f = a.Ja(c.Ba(), "Image");
                f.Zb(e, a.Vb(!1));
                f.vc(b, d) } if (f = c.Ka()) c = a.Ja(c.Ba(), "Text"), c.kb(f, a.Vb(!!e)), c.Wb(b, d) },
        MultiLineString: function(a, b, c, d) { var e = c.Fa(); if (e) { var f = a.Ja(c.Ba(), "LineString");
                f.Oa(null, e);
                f.uc(b, d) } if (e = c.Ka()) c = a.Ja(c.Ba(), "Text"), c.kb(e, a.Vb(!1)), c.Wb(b, d) },
        MultiPolygon: function(a, b, c, d) {
            var e = c.Ea(),
                f = c.Fa();
            if (f || e) { var g = a.Ja(c.Ba(), "Polygon");
                g.Oa(e, f);
                g.wc(b, d) }
            if (e = c.Ka()) c = a.Ja(c.Ba(),
                "Text"), c.kb(e, a.Vb(!1)), c.Wb(b, d)
        },
        GeometryCollection: function(a, b, c, d) { b = b.a; var e; var f = 0; for (e = b.length; f < e; ++f)(0, Uj[b[f].T()])(a, b[f], c, d) },
        Circle: function(a, b, c, d) { var e = c.Ea(),
                f = c.Fa(); if (e || f) { var g = a.Ja(c.Ba(), "Circle");
                g.Oa(e, f);
                g.cc(b, d) } if (e = c.Ka()) c = a.Ja(c.Ba(), "Text"), c.kb(e, a.Vb(!1)), c.Wb(b, d) }
    };

    function Vj(a) { Ii.call(this, a);
        this.i = a.j ? gj.Hc(9) : null;
        this.f = !1;
        this.P = -1;
        this.o = NaN;
        this.l = Ca();
        this.c = this.s = null;
        this.j = gg();
        y(di, "clear", this.Si, this) }
    v(Vj, Ii);
    Vj.handles = function(a, b) { return "canvas" === a && "VECTOR" === b.T() };
    Vj.create = function(a, b) { return new Vj(b) };
    k = Vj.prototype;
    k.ha = function() { Mc(di, "clear", this.Si, this);
        Ii.prototype.ha.call(this) };
    k.xg = function(a, b, c) {
        var d = a.extent,
            e = a.pixelRatio,
            f = b.Se ? a.skippedFeatureUids : {},
            g = a.viewState,
            h = g.projection,
            l = g.rotation,
            m = h.C(),
            n = this.a.ia(),
            p = Qi(this, a, 0);
        Pi(this, "precompose", c, a, p);
        var q = b.extent;
        (g = void 0 !== q) && Oi(c, a, q);
        var r = this.c;
        if (r && !r.wg()) {
            var u = q = 0,
                x = 1 !== b.opacity,
                C = Tc(this.a, "render");
            if (x || C) { var z = c.canvas.width; var E = c.canvas.height; if (l) { var V = Math.round(Math.sqrt(z * z + E * E));
                    q = (V - z) / 2;
                    u = (V - E) / 2;
                    z = E = V }
                this.j.canvas.width = z;
                this.j.canvas.height = E;
                z = this.j } else z = c;
            E = z.globalAlpha;
            x || (z.globalAlpha = b.opacity);
            z != c && z.translate(q, u);
            V = a.size[0] * e;
            e *= a.size[1];
            gi(z, -l, V / 2, e / 2);
            r.Ma(z, p, l, f);
            if (n.D && h.g && !Ka(m, d)) { h = d[0];
                n = ab(m); for (var ya = 0; h < m[0];) --ya, p = n * ya, p = Qi(this, a, p), r.Ma(z, p, l, f), h += n;
                ya = 0; for (h = d[2]; h > m[2];) ++ya, p = n * ya, p = Qi(this, a, p), r.Ma(z, p, l, f), h -= n;
                p = Qi(this, a, 0) }
            gi(z, l, V / 2, e / 2);
            z != c && (C && Pi(this, "render", z, a, p), x ? (d = c.globalAlpha, c.globalAlpha = b.opacity, c.drawImage(z.canvas, -q, -u), c.globalAlpha = d) : c.drawImage(z.canvas, -q, -u), z.translate(-q, -u));
            x || (z.globalAlpha =
                E)
        }
        g && c.restore();
        this.i && this.i.clear();
        this.mf(c, a, b, p)
    };
    k.Ga = function(a, b, c, d, e) { if (this.c) { var f = this.a,
                g = {};
            a = this.c.Ga(a, b.viewState.resolution, b.viewState.rotation, c, {}, function(a) { var b = w(a).toString(); if (!(b in g)) return g[b] = !0, d.call(e, a, f) }, f.j ? {} : null);
            this.i && this.i.clear(); return a } };
    k.Si = function() { var a = this.a;
        a.Jb() && this.c && a.u() };
    k.Ti = function() { Ci(this) };
    k.Cd = function(a) {
        var b = this.a,
            c = b.ia();
        Fi(a, c);
        var d = a.viewHints[0],
            e = a.viewHints[1],
            f = b.aa,
            g = b.ca;
        if (!this.f && !f && d || !g && e) return !0;
        f = a.extent;
        var h = a.viewState;
        g = h.projection;
        var l = h.resolution,
            m = a.pixelRatio;
        d = b.g;
        var n = b.f;
        e = b.get(Wj);
        void 0 === e && (e = Qj);
        f = Ea(f, n * l);
        n = h.projection.C();
        c.D && h.projection.g && !Ka(n, a.extent) && (a = Math.max(ab(f) / 2, ab(n)), f[0] = n[0] - a, f[2] = n[2] + a);
        if (!this.f && this.o == l && this.P == d && this.s == e && Ka(this.l, f)) return !0;
        this.c = null;
        this.f = !1;
        var p = new Hj(.5 * l / m, f, l, m, c.aa, this.i,
            b.f);
        c.$d(f, l, g);
        a = function(a) { var c = a.fb(); if (c) var d = c.call(a, l);
            else(c = b.fb()) && (d = c(a, l)); if (d) { if (d) { c = !1; if (Array.isArray(d))
                        for (var e = 0, f = d.length; e < f; ++e) c = Sj(p, a, d[e], Rj(l, m), this.Ti, this) || c;
                    else c = Sj(p, a, d, Rj(l, m), this.Ti, this);
                    a = c } else a = !1;
                this.f = this.f || a } }.bind(this);
        if (e) { var q = [];
            c.dc(f, function(a) { q.push(a) }, this);
            q.sort(e);
            c = 0; for (g = q.length; c < g; ++c) a(q[c]) } else c.dc(f, a, this);
        Mj(p);
        this.o = l;
        this.P = d;
        this.s = e;
        this.l = f;
        this.c = p;
        return !0
    };

    function Xj(a) { this.context = null;
        bj.call(this, a);
        this.l = a.j ? gj.Hc(9) : null;
        this.D = !1;
        this.ca = Ve();
        this.O = "vector" == a.o ? 1 : 0;
        y(di, "clear", this.Ui, this) }
    v(Xj, bj);
    Xj.handles = function(a, b) { return "canvas" === a && "VECTOR_TILE" === b.T() };
    Xj.create = function(a, b) { return new Xj(b) };
    var Yj = { image: ["Polygon", "Circle", "LineString", "Image", "Text"], hybrid: ["Polygon", "LineString"] },
        Zj = { image: ["Default"], hybrid: ["Image", "Text", "Default"], vector: Bj };
    k = Xj.prototype;
    k.ha = function() { Mc(di, "clear", this.Ui, this);
        bj.prototype.ha.call(this) };
    k.Cd = function(a, b) { var c = this.a,
            d = c.g;
        this.H != d && (this.f.length = 0, c = c.o, this.context || "vector" == c || (this.context = gg()), this.context && "vector" == c && (this.context = null));
        this.H = d; return bj.prototype.Cd.apply(this, arguments) };
    k.Qf = function(a, b, c, d, e, f, g, h, l) {
        var m = a,
            n = this.a,
            p = b.pixelRatio,
            q = b.viewState.projection,
            r = n.g,
            u = n.get(Wj) || null,
            x = ak(m, n);
        if (x.Ae || x.uf != r || x.dh != u) {
            var C = n.ia(),
                z = C.tileGrid,
                E = C.bb(q),
                V = E.Sa(m.xa[0]);
            E = E.La(m.l);
            for (var ya = 0, fa = m.a.length; ya < fa; ++ya) {
                var pa = m.c[m.a[ya]];
                if (3 != pa.getState()) {
                    var Ja = z.La(pa.xa),
                        ma = eb(E, Ja),
                        Sa = Ra(Ja, ma) ? null : Ea(ma, n.f * V),
                        N = pa.o,
                        hc = !1;
                    Wb(q, N) || (hc = !0, pa.tg(q));
                    x.Ae = !1;
                    ma = new Hj(0, ma, V, p, C.s, this.l, n.f);
                    var ib = Rj(V, p),
                        jc = pa.a;
                    u && u !== x.dh && jc.sort(u);
                    for (var kc, pf = 0,
                            Jg = jc.length; pf < Jg; ++pf)
                        if (kc = jc[pf], hc && ("tile-pixels" == N.a && (N.Nj(Ja), N.Pi(pa.C())), kc.V().jb(N, q)), !Sa || fb(Sa, kc.C())) { var Qd = void 0,
                                se = kc.fb();
                            se ? Qd = se.call(kc, V) : (se = n.fb()) && (Qd = se(kc, V)); if (Qd) { se = ib; var of = ma; if (Qd) { var Kg = !1; if (Array.isArray(Qd))
                                        for (var Eh = 0, Gk = Qd.length; Eh < Gk; ++Eh) Kg = Sj(of, kc, Qd[Eh], se, this.Vi, this) || Kg;
                                    else Kg = Sj(of, kc, Qd, se, this.Vi, this);
                                    kc = Kg } else kc = !1;
                                this.D = this.D || kc;
                                x.Ae = x.Ae || kc } }
                    Mj(ma);
                    for (var rf in ma.b);
                    Ja = m.xa.toString();
                    Sa = ma;
                    pa.f[w(n) + "," + Ja] = Sa
                }
            }
            x.uf = r;
            x.dh =
                u
        }
        if (this.context) { x = b;
            n = this.a;
            q = ak(m, n);
            r = n.g; if ((p = Yj[n.o]) && q.eh !== r)
                for (q.eh = r, C = m.l, V = C[0], q = x.pixelRatio, rf = n.ia(), z = rf.bb(x.viewState.projection), r = z.Sa(V), u = bk(m, n), x = rf.Yd(V, q, x.viewState.projection), u.canvas.width = x[0], u.canvas.height = x[1], x = z.La(C), C = 0, z = m.a.length; C < z; ++C) V = m.c[m.a[C]], 3 != V.getState() && (rf = q / r, E = We(this.ca), bf(E, rf, -rf), cf(E, -x[0], -x[3]), ck(V, n, m.xa.toString()).Ma(u, E, 0, {}, p));
            bj.prototype.Qf.apply(this, arguments) }
    };
    k.Ga = function(a, b, c, d, e) {
        var f = b.viewState.resolution,
            g = b.viewState.rotation;
        c = void 0 == c ? 0 : c;
        var h = this.a,
            l = h.j ? {} : null,
            m = {},
            n = this.f;
        b = h.ia().bb(b.viewState.projection);
        var p;
        var q = 0;
        for (p = n.length; q < p; ++q) { var r = n[q]; var u = r.l;
            u = b.La(u, this.G); var x = Ea(u, c * f, x); if (Ha(x, a)) { u = 0; for (var C = r.a.length; u < C; ++u) { var z = r.c[r.a[u]]; if (3 != z.getState()) { z = ck(z, h, r.xa.toString()); var E = E || z.Ga(a, f, g, c, {}, function(a) { var b = w(a).toString(); if (!(b in m)) return m[b] = !0, d.call(e, a, h) }, l) } } } }
        this.l && this.l.clear();
        return E
    };
    k.Ui = function() { var a = this.a;
        a.Jb() && void 0 !== this.H && a.u() };
    k.Vi = function() { Ci(this) };
    k.mf = function(a, b, c) {
        var d = this.a,
            e = d.j ? {} : null,
            f = d.ia(),
            g = d.o,
            h = Zj[g],
            l = b.pixelRatio,
            m = b.viewState.rotation,
            n = b.size;
        gi(a, -m, Math.round(l * n[0] / 2), Math.round(l * n[1] / 2));
        l = this.f;
        f = f.bb(b.viewState.projection);
        n = [];
        for (var p = [], q = l.length - 1; 0 <= q; --q) {
            var r = l[q];
            if (5 != r.getState())
                for (var u = r.xa, x = f.La(u)[0] - f.La(r.l)[0], C = void 0, z = 0, E = r.a.length; z < E; ++z) {
                    var V = r.c[r.a[z]];
                    if (3 != V.getState()) {
                        var ya = ck(V, d, u.toString()),
                            fa;
                        if (!(fa = "vector" == g)) a: {
                            fa = void 0;
                            for (fa in ya.b)
                                for (var pa = ya.b[fa], Ja = 0, ma =
                                        h.length; Ja < ma; ++Ja)
                                    if (h[Ja] in pa) { fa = !0; break a }
                            fa = !1
                        }
                        if (fa) { C || (C = Qi(this, b, x));
                            V = V.xa[0];
                            fa = Oj(ya, C);
                            a.save();
                            a.globalAlpha = c.opacity;
                            pa = 0; for (Ja = n.length; pa < Ja; ++pa) ma = n[pa], V < p[pa] && (a.beginPath(), a.moveTo(fa[0], fa[1]), a.lineTo(fa[2], fa[3]), a.lineTo(fa[4], fa[5]), a.lineTo(fa[6], fa[7]), a.moveTo(ma[6], ma[7]), a.lineTo(ma[4], ma[5]), a.lineTo(ma[2], ma[3]), a.lineTo(ma[0], ma[1]), a.clip());
                            ya.Ma(a, C, m, {}, h, e);
                            a.restore();
                            n.push(fa);
                            p.push(V) }
                    }
                }
        }
        if (e) {
            d = a;
            g = Object.keys(e).map(Number).sort(bc);
            h = 0;
            for (l =
                g.length; h < l; ++h)
                for (f = e[g[h].toString()], n = 0, p = f.length; n < p;) q = f[n++], r = f[n++], q.Ma(d, r, m, {});
            this.l.clear()
        }
        bj.prototype.mf.apply(this, arguments)
    };
    pg("MAP_RENDERER", $i);
    qg([Si, bj, Vj, Xj]);

    function H(a) { a = jb({}, a);
        delete a.renderer;
        a.controls || (a.controls = Dg());
        a.interactions || (a.interactions = Xh());
        G.call(this, a) }
    v(H, G);

    function dk(a) { Vc.call(this);
        a = a ? a : {};
        this.a = null;
        y(this, Xc(ek), this.Rm, this);
        this.pg(void 0 !== a.tracking ? a.tracking : !1) }
    v(dk, Vc);
    k = dk.prototype;
    k.ha = function() { this.pg(!1);
        Vc.prototype.ha.call(this) };
    k.up = function(a) { if (null !== a.alpha) { var b = ua(a.alpha);
            this.set(fk, b); "boolean" === typeof a.absolute && a.absolute ? this.set(gk, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(gk, ua(a.webkitCompassHeading)) }
        null !== a.beta && this.set(hk, ua(a.beta));
        null !== a.gamma && this.set(ik, ua(a.gamma));
        this.u() };
    k.Pm = function() { return this.get(fk) };
    k.dl = function() { return this.get(hk) };
    k.jl = function() { return this.get(ik) };
    k.Qm = function() { return this.get(gk) };
    k.ii = function() { return this.get(ek) };
    k.Rm = function() { if (qd) { var a = this.ii();
            a && !this.a ? this.a = y(window, "deviceorientation", this.up, this) : a || null === this.a || (Gc(this.a), this.a = null) } };
    k.pg = function(a) { this.set(ek, a) };
    var fk = "alpha",
        hk = "beta",
        ik = "gamma",
        gk = "heading",
        ek = "tracking";

    function jk(a) { this.i = a.opacity;
        this.s = a.rotateWithView;
        this.f = a.rotation;
        this.a = a.scale;
        this.v = a.snapToPixel }
    k = jk.prototype;
    k.ff = function() { return this.i };
    k.gf = function() { return this.s };
    k.hf = function() { return this.f };
    k.jf = function() { return this.a };
    k.Je = function() { return this.v };
    k.Dd = function(a) { this.i = a };
    k.kf = function(a) { this.f = a };
    k.Ed = function(a) { this.a = a };

    function kk(a) { this.D = this.o = this.c = null;
        this.Ya = void 0 !== a.fill ? a.fill : null;
        this.oa = [0, 0];
        this.l = a.points;
        this.b = void 0 !== a.radius ? a.radius : a.radius1;
        this.g = a.radius2;
        this.j = void 0 !== a.angle ? a.angle : 0;
        this.Wa = void 0 !== a.stroke ? a.stroke : null;
        this.H = this.qa = this.B = null;
        this.P = a.atlasManager;
        lk(this, this.P);
        jk.call(this, { opacity: 1, rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1, rotation: void 0 !== a.rotation ? a.rotation : 0, scale: 1, snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0 }) }
    v(kk, jk);
    k = kk.prototype;
    k.clone = function() { var a = new kk({ fill: this.Ea() ? this.Ea().clone() : void 0, points: this.l, radius: this.b, radius2: this.g, angle: this.j, snapToPixel: this.v, stroke: this.Fa() ? this.Fa().clone() : void 0, rotation: this.f, rotateWithView: this.s, atlasManager: this.P });
        a.Dd(this.i);
        a.Ed(this.a); return a };
    k.Uc = function() { return this.B };
    k.fj = function() { return this.j };
    k.Ea = function() { return this.Ya };
    k.Dg = function() { return this.D };
    k.Y = function() { return this.o };
    k.Ge = function() { return this.H };
    k.ef = function() { return 2 };
    k.ad = function() { return this.oa };
    k.gj = function() { return this.l };
    k.hj = function() { return this.b };
    k.Wh = function() { return this.g };
    k.nc = function() { return this.qa };
    k.Fa = function() { return this.Wa };
    k.di = function() {};
    k.load = function() {};
    k.Tj = function() {};

    function lk(a, b) {
        var c = "",
            d = "",
            e = 0,
            f = null,
            g = 0,
            h = 0;
        if (a.Wa) { var l = a.Wa.a;
            null === l && (l = ci);
            l = pi(l);
            h = a.Wa.c;
            void 0 === h && (h = 1);
            f = a.Wa.g;
            g = a.Wa.i;
            od || (f = null, g = 0);
            d = a.Wa.j;
            void 0 === d && (d = "round");
            c = a.Wa.f;
            void 0 === c && (c = "round");
            e = a.Wa.l;
            void 0 === e && (e = 10) }
        var m = 2 * (a.b + h) + 1;
        c = { strokeStyle: l, Rj: h, size: m, lineCap: c, lineDash: f, lineDashOffset: g, lineJoin: d, miterLimit: e };
        if (void 0 === b) { var n = gg(m, m);
            a.o = n.canvas;
            b = m = a.o.width;
            a.Gh(c, n, 0, 0);
            a.Ya ? a.D = a.o : (n = gg(c.size, c.size), a.D = n.canvas, a.Fh(c, n, 0, 0)) } else m =
            Math.round(m), (d = !a.Ya) && (n = a.Fh.bind(a, c)), a.Wa ? (e = a.Wa, void 0 === e.b && (e.b = "s", e.b = e.a ? "string" === typeof e.a ? e.b + e.a : e.b + w(e.a).toString() : e.b + "-", e.b += "," + (void 0 !== e.f ? e.f.toString() : "-") + "," + (e.g ? e.g.toString() : "-") + "," + (void 0 !== e.i ? e.i : "-") + "," + (void 0 !== e.j ? e.j : "-") + "," + (void 0 !== e.l ? e.l.toString() : "-") + "," + (void 0 !== e.c ? e.c.toString() : "-")), e = e.b) : e = "-", a.Ya ? (f = a.Ya, void 0 === f.a && (f.a = f.b instanceof CanvasPattern || f.b instanceof CanvasGradient ? w(f.b).toString() : "f" + (f.b ? ni(f.b) : "-")), f = f.a) :
            f = "-", a.c && e == a.c[1] && f == a.c[2] && a.b == a.c[3] && a.g == a.c[4] && a.j == a.c[5] && a.l == a.c[6] || (a.c = ["r" + e + f + (void 0 !== a.b ? a.b.toString() : "-") + (void 0 !== a.g ? a.g.toString() : "-") + (void 0 !== a.j ? a.j.toString() : "-") + (void 0 !== a.l ? a.l.toString() : "-"), e, f, a.b, a.g, a.j, a.l]), n = b.add(a.c[0], m, m, a.Gh.bind(a, c), n), a.o = n.image, a.oa = [n.offsetX, n.offsetY], b = n.image.width, a.D = d ? n.sm : a.o;
        a.B = [m / 2, m / 2];
        a.qa = [m, m];
        a.H = [b, b]
    }
    k.Gh = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        var e = this.l;
        if (Infinity === e) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0);
        else { var f = void 0 !== this.g ? this.g : this.b;
            f !== this.b && (e *= 2); for (c = 0; c <= e; c++) { d = 2 * c * Math.PI / e - Math.PI / 2 + this.j; var g = 0 === c % 2 ? this.b : f;
                b.lineTo(a.size / 2 + g * Math.cos(d), a.size / 2 + g * Math.sin(d)) } }
        this.Ya && (c = this.Ya.b, null === c && (c = ai), b.fillStyle = pi(c), b.fill());
        this.Wa && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Rj, a.lineDash && (b.setLineDash(a.lineDash),
            b.lineDashOffset = a.lineDashOffset), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.miterLimit = a.miterLimit, b.stroke());
        b.closePath()
    };
    k.Fh = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        c = this.l;
        if (Infinity === c) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0);
        else { d = void 0 !== this.g ? this.g : this.b;
            d !== this.b && (c *= 2); var e; for (e = 0; e <= c; e++) { var f = 2 * e * Math.PI / c - Math.PI / 2 + this.j; var g = 0 === e % 2 ? this.b : d;
                b.lineTo(a.size / 2 + g * Math.cos(f), a.size / 2 + g * Math.sin(f)) } }
        b.fillStyle = ai;
        b.fill();
        this.Wa && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Rj, a.lineDash && (b.setLineDash(a.lineDash), b.lineDashOffset = a.lineDashOffset),
            b.stroke());
        b.closePath()
    };

    function mk(a) { a = a || {};
        kk.call(this, { points: Infinity, fill: a.fill, radius: a.radius, snapToPixel: a.snapToPixel, stroke: a.stroke, atlasManager: a.atlasManager }) }
    v(mk, kk);
    mk.prototype.clone = function() { var a = new mk({ fill: this.Ea() ? this.Ea().clone() : void 0, stroke: this.Fa() ? this.Fa().clone() : void 0, radius: this.b, snapToPixel: this.v, atlasManager: this.P });
        a.Dd(this.i);
        a.Ed(this.a); return a };
    mk.prototype.ed = function(a) { this.b = a;
        lk(this, this.P) };

    function nk(a) { a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0 }
    nk.prototype.clone = function() { var a = this.b; return new nk({ color: a && a.slice ? a.slice() : a || void 0 }) };
    nk.prototype.g = function() { return this.b };
    nk.prototype.c = function(a) { this.b = a;
        this.a = void 0 };

    function ok(a) { a = a || {};
        this.a = void 0 !== a.color ? a.color : null;
        this.f = a.lineCap;
        this.g = void 0 !== a.lineDash ? a.lineDash : null;
        this.i = a.lineDashOffset;
        this.j = a.lineJoin;
        this.l = a.miterLimit;
        this.c = a.width;
        this.b = void 0 }
    k = ok.prototype;
    k.clone = function() { var a = this.a; return new ok({ color: a && a.slice ? a.slice() : a || void 0, lineCap: this.f, lineDash: this.g ? this.g.slice() : void 0, lineDashOffset: this.i, lineJoin: this.j, miterLimit: this.l, width: this.c }) };
    k.gp = function() { return this.a };
    k.ol = function() { return this.f };
    k.hp = function() { return this.g };
    k.pl = function() { return this.i };
    k.ql = function() { return this.j };
    k.wl = function() { return this.l };
    k.ip = function() { return this.c };
    k.jp = function(a) { this.a = a;
        this.b = void 0 };
    k.pq = function(a) { this.f = a;
        this.b = void 0 };
    k.setLineDash = function(a) { this.g = a;
        this.b = void 0 };
    k.qq = function(a) { this.i = a;
        this.b = void 0 };
    k.rq = function(a) { this.j = a;
        this.b = void 0 };
    k.vq = function(a) { this.l = a;
        this.b = void 0 };
    k.zq = function(a) { this.c = a;
        this.b = void 0 };

    function pk(a) { a = a || {};
        this.Tc = null;
        this.ab = qk;
        void 0 !== a.geometry && this.Ua(a.geometry);
        this.Ya = void 0 !== a.fill ? a.fill : null;
        this.N = void 0 !== a.image ? a.image : null;
        this.oc = void 0 !== a.renderer ? a.renderer : null;
        this.Wa = void 0 !== a.stroke ? a.stroke : null;
        this.sa = void 0 !== a.text ? a.text : null;
        this.Xj = a.zIndex }
    k = pk.prototype;
    k.clone = function() { var a = this.V();
        a && a.clone && (a = a.clone()); return new pk({ geometry: a, fill: this.Ea() ? this.Ea().clone() : void 0, image: this.Y() ? this.Y().clone() : void 0, stroke: this.Fa() ? this.Fa().clone() : void 0, text: this.Ka() ? this.Ka().clone() : void 0, zIndex: this.Ba() }) };
    k.He = function() { return this.oc };
    k.xq = function(a) { this.oc = a };
    k.V = function() { return this.Tc };
    k.kl = function() { return this.ab };
    k.Ea = function() { return this.Ya };
    k.wf = function(a) { this.Ya = a };
    k.Y = function() { return this.N };
    k.hh = function(a) { this.N = a };
    k.Fa = function() { return this.Wa };
    k.yf = function(a) { this.Wa = a };
    k.Ka = function() { return this.sa };
    k.Gd = function(a) { this.sa = a };
    k.Ba = function() { return this.Xj };
    k.Ua = function(a) { "function" === typeof a ? this.ab = a : "string" === typeof a ? this.ab = function(b) { return b.get(a) } : a ? void 0 !== a && (this.ab = function() { return a }) : this.ab = qk;
        this.Tc = a };
    k.$b = function(a) { this.Xj = a };

    function rk(a) { if ("function" !== typeof a) { if (Array.isArray(a)) var b = a;
            else na(a instanceof pk, 41), b = [a];
            a = function() { return b } } return a }
    var sk = null;

    function tk() { if (!sk) { var a = new nk({ color: "rgba(255,255,255,0.4)" }),
                b = new ok({ color: "#3399CC", width: 1.25 });
            sk = [new pk({ image: new mk({ fill: a, stroke: b, radius: 5 }), fill: a, stroke: b })] } return sk }

    function uk() {
        var a = {},
            b = [255, 255, 255, 1],
            c = [0, 153, 255, 1];
        a.Polygon = [new pk({ fill: new nk({ color: [255, 255, 255, .5] }) })];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new pk({ stroke: new ok({ color: b, width: 5 }) }), new pk({ stroke: new ok({ color: c, width: 3 }) })];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new pk({ image: new mk({ radius: 6, fill: new nk({ color: c }), stroke: new ok({ color: b, width: 1.5 }) }), zIndex: Infinity })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function qk(a) { return a.V() };

    function vk(a) { Vc.call(this);
        this.c = void 0;
        this.a = "geometry";
        this.f = null;
        this.j = void 0;
        this.i = null;
        y(this, Xc(this.a), this.Ne, this);
        void 0 !== a && (a instanceof ff || !a ? this.Ua(a) : this.I(a)) }
    v(vk, Vc);
    k = vk.prototype;
    k.clone = function() { var a = new vk(this.M());
        a.Jc(this.a); var b = this.V();
        b && a.Ua(b.clone());
        (b = this.f) && a.qg(b); return a };
    k.V = function() { return this.get(this.a) };
    k.Sm = function() { return this.c };
    k.ll = function() { return this.a };
    k.Tm = function() { return this.f };
    k.fb = function() { return this.j };
    k.Tl = function() { this.u() };
    k.Ne = function() { this.i && (Gc(this.i), this.i = null); var a = this.V();
        a && (this.i = y(a, "change", this.Tl, this));
        this.u() };
    k.Ua = function(a) { this.set(this.a, a) };
    k.qg = function(a) { this.j = (this.f = a) ? wk(a) : void 0;
        this.u() };
    k.pc = function(a) { this.c = a;
        this.u() };
    k.Jc = function(a) { Mc(this, Xc(this.a), this.Ne, this);
        this.a = a;
        y(this, Xc(this.a), this.Ne, this);
        this.Ne() };

    function wk(a) { var b; if ("function" === typeof a) 2 == a.length ? b = function(b) { return a(this, b) } : b = a;
        else { if (Array.isArray(a)) var c = a;
            else na(a instanceof pk, 41), c = [a];
            b = function() { return c } } return b };

    function xk(a) { Vc.call(this);
        a = a || {};
        this.a = null;
        this.i = Yb;
        this.f = new nb(6378137);
        this.c = void 0;
        y(this, Xc("projection"), this.Wm, this);
        y(this, Xc("tracking"), this.Xm, this);
        void 0 !== a.projection && this.li(a.projection);
        void 0 !== a.trackingOptions && this.Mj(a.trackingOptions);
        this.Te(void 0 !== a.tracking ? a.tracking : !1) }
    v(xk, Vc);
    k = xk.prototype;
    k.ha = function() { this.Te(!1);
        Vc.prototype.ha.call(this) };
    k.Wm = function() { var a = this.ji();
        a && (this.i = Ob(Nb("EPSG:4326"), a), this.a && this.set("position", this.i(this.a))) };
    k.Xm = function() { if (rd) { var a = this.ki();
            a && void 0 === this.c ? this.c = navigator.geolocation.watchPosition(this.Gp.bind(this), this.Hp.bind(this), this.Yh()) : a || void 0 === this.c || (navigator.geolocation.clearWatch(this.c), this.c = void 0) } };
    k.Gp = function(a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : ua(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var b = this.i(this.a);
        this.set("position", b);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = Rf(this.f, this.a, a.accuracy);
        a.Pc(this.i);
        this.set("accuracyGeometry",
            a);
        this.u()
    };
    k.Hp = function(a) { a.type = "error";
        this.Te(!1);
        this.b(a) };
    k.$k = function() { return this.get("accuracy") };
    k.al = function() { return this.get("accuracyGeometry") || null };
    k.bl = function() { return this.get("altitude") };
    k.cl = function() { return this.get("altitudeAccuracy") };
    k.Um = function() { return this.get("heading") };
    k.Vm = function() { return this.get("position") };
    k.ji = function() { return this.get("projection") };
    k.Fl = function() { return this.get("speed") };
    k.ki = function() { return this.get("tracking") };
    k.Yh = function() { return this.get("trackingOptions") };
    k.li = function(a) { this.set("projection", Nb(a)) };
    k.Te = function(a) { this.set("tracking", a) };
    k.Mj = function(a) { this.set("trackingOptions", a) };

    function yk(a, b, c, d, e, f) {
        var g = NaN,
            h = NaN,
            l = (c - b) / d;
        if (1 === l) g = a[b], h = a[b + 1];
        else if (2 == l) g = (1 - e) * a[b] + e * a[b + d], h = (1 - e) * a[b + 1] + e * a[b + d + 1];
        else if (0 !== l) { h = a[b];
            l = a[b + 1]; var m = 0;
            g = [0]; var n; for (n = b + d; n < c; n += d) { var p = a[n],
                    q = a[n + 1];
                m += Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q }
            c = e * m;
            l = 0;
            m = g.length; for (n = !1; l < m;) e = l + (m - l >> 1), h = +bc(g[e], c), 0 > h ? l = e + 1 : (m = e, n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]), b += (-e - 2) * d, g = wa(a[b], a[b + d], c), h = wa(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d], h = a[b + e * d + 1]) }
        return f ?
            (f[0] = g, f[1] = h, f) : [g, h]
    }

    function zk(a, b, c, d, e, f) { if (c == b) return null; if (e < a[b + d - 1]) return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null; if (a[c - 1] < e) return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null; if (e == a[b + d - 1]) return a.slice(b, b + d);
        b /= d; for (c /= d; b < c;) f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1]; if (e == c) return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = []; var g; for (g = 0; g < d - 1; ++g) c.push(wa(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e); return c }

    function Ak(a, b, c, d, e, f) { var g = 0; if (f) return zk(a, g, b[b.length - 1], c, d, e); if (d < a[c - 1]) return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null; if (a[a.length - 1] < d) return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
        e = 0; for (f = b.length; e < f; ++e) { var h = b[e]; if (g != h) { if (d < a[g + c - 1]) break;
                else if (d <= a[h - 1]) return zk(a, g, h, c, d, !1);
                g = h } } return null };

    function I(a, b) { gf.call(this);
        this.c = null;
        this.o = this.D = this.j = -1;
        this.na(a, b) }
    v(I, gf);
    k = I.prototype;
    k.Ak = function(a) { this.A ? ec(this.A, a) : this.A = a.slice();
        this.u() };
    k.clone = function() { var a = new I(null);
        a.ba(this.ja, this.A.slice()); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d;
        this.o != this.g && (this.D = Math.sqrt(qf(this.A, 0, this.A.length, this.a, 0)), this.o = this.g); return uf(this.A, 0, this.A.length, this.a, this.D, !1, a, b, c, d) };
    k.Zk = function(a, b) { return Kf(this.A, 0, this.A.length, this.a, a, b) };
    k.Kn = function(a, b) { return "XYM" != this.ja && "XYZM" != this.ja ? null : zk(this.A, 0, this.A.length, this.a, a, void 0 !== b ? b : !1) };
    k.U = function() { return zf(this.A, 0, this.A.length, this.a) };
    k.Mh = function(a, b) { return yk(this.A, 0, this.A.length, this.a, a, b) };
    k.Ln = function() { return ij(this.A, 0, this.A.length, this.a) };
    k.Ee = function() { this.j != this.g && (this.c = this.Mh(.5, this.c), this.j = this.g); return this.c };
    k.vd = function(a) { var b = [];
        b.length = Cf(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new I(null);
        a.ba("XY", b); return a };
    k.T = function() { return "LineString" };
    k.$a = function(a) { return Lf(this.A, 0, this.A.length, this.a, a) };
    k.na = function(a, b) { a ? (kf(this, b, a, 1), this.A || (this.A = []), this.A.length = xf(this.A, 0, a, this.a), this.u()) : this.ba("XY", null) };
    k.ba = function(a, b) { jf(this, a, b);
        this.u() };

    function Bk(a, b, c) { for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, r, u, x, C, z; 0 < --q && 0 < n.length;) x = n.pop(), e = l.pop(), g = m.pop(), f = x.toString(), f in p || (d.push(g[0], g[1]), p[f] = !0), C = n.pop(), f = l.pop(), h = m.pop(), z = (x + C) / 2, r = a(z), u = b(r), sa(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]), f = C.toString(), p[f] = !0) : (n.push(C, z, z, x), m.push(h, u, u, g), l.push(f, r, r, e)); return d }

    function Ck(a, b, c, d, e) { var f = Nb("EPSG:4326"); return Bk(function(d) { return [a, b + (c - b) * d] }, Xb(f, d), e) }

    function Dk(a, b, c, d, e) { var f = Nb("EPSG:4326"); return Bk(function(d) { return [b + (c - b) * d, a] }, Xb(f, d), e) };

    function Ek(a) { a = a || {};
        this.a = a.font;
        this.i = a.rotation;
        this.l = a.rotateWithView;
        this.b = a.scale;
        this.sa = a.text;
        this.f = a.textAlign;
        this.j = a.textBaseline;
        this.Ya = void 0 !== a.fill ? a.fill : new nk({ color: "#333" });
        this.v = void 0 !== a.maxAngle ? a.maxAngle : Math.PI / 4;
        this.o = void 0 !== a.placement ? a.placement : "point";
        this.s = void 0 !== a.exceedLength ? a.exceedLength : !1;
        this.Wa = void 0 !== a.stroke ? a.stroke : null;
        this.g = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0 }
    k = Ek.prototype;
    k.clone = function() { return new Ek({ font: this.a, placement: this.o, maxAngle: this.v, exceedLength: this.s, rotation: this.i, rotateWithView: this.l, scale: this.b, text: this.Ka(), textAlign: this.f, textBaseline: this.j, fill: this.Ea() ? this.Ea().clone() : void 0, stroke: this.Fa() ? this.Fa().clone() : void 0, offsetX: this.g, offsetY: this.c }) };
    k.hl = function() { return this.s };
    k.il = function() { return this.a };
    k.ul = function() { return this.v };
    k.Bl = function() { return this.o };
    k.xl = function() { return this.g };
    k.yl = function() { return this.c };
    k.Ea = function() { return this.Ya };
    k.kp = function() { return this.l };
    k.lp = function() { return this.i };
    k.mp = function() { return this.b };
    k.Fa = function() { return this.Wa };
    k.Ka = function() { return this.sa };
    k.Hl = function() { return this.f };
    k.Il = function() { return this.j };
    k.mq = function(a) { this.s = a };
    k.Ej = function(a) { this.a = a };
    k.sq = function(a) { this.v = a };
    k.Ij = function(a) { this.g = a };
    k.Jj = function(a) { this.c = a };
    k.wq = function(a) { this.o = a };
    k.wf = function(a) { this.Ya = a };
    k.np = function(a) { this.i = a };
    k.ij = function(a) { this.b = a };
    k.yf = function(a) { this.Wa = a };
    k.Gd = function(a) { this.sa = a };
    k.Lj = function(a) { this.f = a };
    k.yq = function(a) { this.j = a };

    function Fk(a) {
        a = a || {};
        this.i = this.v = null;
        this.j = this.f = Infinity;
        this.s = this.l = -Infinity;
        this.qa = this.oa = Infinity;
        this.O = this.G = -Infinity;
        this.va = void 0 !== a.targetSize ? a.targetSize : 100;
        this.mb = void 0 !== a.maxLines ? a.maxLines : 100;
        this.g = [];
        this.c = [];
        this.ua = void 0 !== a.strokeStyle ? a.strokeStyle : Nk;
        this.D = this.o = void 0;
        this.a = this.b = this.P = null;
        1 == a.showLabels && (this.aa = void 0 == a.lonLabelFormatter ? Ce.bind(this, "EW") : a.lonLabelFormatter, this.Va = void 0 == a.latLabelFormatter ? Ce.bind(this, "NS") : a.latLabelFormatter,
            this.ca = void 0 == a.lonLabelPosition ? 0 : a.lonLabelPosition, this.W = void 0 == a.latLabelPosition ? 1 : a.latLabelPosition, this.H = void 0 !== a.lonLabelStyle ? a.lonLabelStyle : new Ek({ font: "12px Calibri,sans-serif", textBaseline: "bottom", fill: new nk({ color: "rgba(0,0,0,1)" }), stroke: new ok({ color: "rgba(255,255,255,1)", width: 3 }) }), this.B = void 0 !== a.latLabelStyle ? a.latLabelStyle : new Ek({ font: "12px Calibri,sans-serif", textAlign: "end", fill: new nk({ color: "rgba(0,0,0,1)" }), stroke: new ok({ color: "rgba(255,255,255,1)", width: 3 }) }),
            this.b = [], this.a = []);
        this.setMap(void 0 !== a.map ? a.map : null)
    }
    var Nk = new ok({ color: "rgba(0,0,0,0.2)" }),
        Ok = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function Pk(a, b, c, d, e, f, g) { var h = g;
        c = Ck(b, c, d, a.i, e);
        h = void 0 !== a.g[h] ? a.g[h] : new I(null);
        h.ba("XY", c);
        fb(h.C(), f) && (a.b && (c = g, d = h.da(), f = [d[0], oa(f[1] + Math.abs(f[1] - f[3]) * a.ca, Math.max(f[1], d[1]), Math.min(f[3], d[d.length - 1]))], c = void 0 !== a.b[c] ? a.b[c].Pd : new B(null), c.na(f), a.b[g] = { Pd: c, text: a.aa(b) }), a.g[g++] = h); return g }

    function Qk(a, b, c, d, e, f, g) { var h = g;
        c = Dk(b, c, d, a.i, e);
        h = void 0 !== a.c[h] ? a.c[h] : new I(null);
        h.ba("XY", c);
        fb(h.C(), f) && (a.a && (c = g, d = h.da(), f = [oa(f[0] + Math.abs(f[0] - f[2]) * a.W, Math.max(f[0], d[0]), Math.min(f[2], d[d.length - 2])), d[1]], c = void 0 !== a.a[c] ? a.a[c].Pd : new B(null), c.na(f), a.a[g] = { Pd: c, text: a.Va(b) }), a.c[g++] = h); return g }
    k = Fk.prototype;
    k.Ym = function() { return this.v };
    k.vl = function() { return this.g };
    k.Al = function() { return this.c };
    k.ai = function(a) {
        var b = a.vectorContext,
            c = a.frameState;
        a = c.extent;
        var d = c.viewState,
            e = d.center,
            f = d.projection;
        d = d.resolution;
        c = c.pixelRatio;
        c = d * d / (4 * c * c);
        if (!this.i || !Wb(this.i, f)) { var g = Nb("EPSG:4326"),
                h = f.C(),
                l = f.ne,
                m = $b(l, g, f),
                n = l[2],
                p = l[1],
                q = l[0],
                r = m[3],
                u = m[2],
                x = m[1];
            m = m[0];
            this.f = l[3];
            this.j = n;
            this.l = p;
            this.s = q;
            this.oa = r;
            this.qa = u;
            this.G = x;
            this.O = m;
            this.o = Xb(g, f);
            this.D = Xb(f, g);
            this.P = this.D(cb(h));
            this.i = f }
        f = this.P[0];
        g = this.P[1];
        h = -1;
        n = Math.pow(this.va * d, 2);
        p = [];
        q = [];
        d = 0;
        for (l = Ok.length; d < l; ++d) {
            r =
                Ok[d] / 2;
            p[0] = f - r;
            p[1] = g - r;
            q[0] = f + r;
            q[1] = g + r;
            this.o(p, p);
            this.o(q, q);
            r = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (r <= n) break;
            h = Ok[d]
        }
        d = h;
        if (-1 == d) this.g.length = this.c.length = 0, this.b && (this.b.length = 0), this.a && (this.a.length = 0);
        else {
            f = this.D(e);
            e = f[0];
            f = f[1];
            g = this.mb;
            l = [Math.max(a[0], this.O), Math.max(a[1], this.G), Math.min(a[2], this.qa), Math.min(a[3], this.oa)];
            l = $b(l, this.i, "EPSG:4326");
            p = l[3];
            h = l[2];
            q = l[1];
            r = l[0];
            e = Math.floor(e / d) * d;
            u = oa(e, this.s, this.j);
            n = Pk(this, u, q, p, c, a, 0);
            for (l = 0; u != this.s &&
                l++ < g;) u = Math.max(u - d, this.s), n = Pk(this, u, q, p, c, a, n);
            u = oa(e, this.s, this.j);
            for (l = 0; u != this.j && l++ < g;) u = Math.min(u + d, this.j), n = Pk(this, u, q, p, c, a, n);
            this.g.length = n;
            this.b && (this.b.length = n);
            f = Math.floor(f / d) * d;
            e = oa(f, this.l, this.f);
            n = Qk(this, e, r, h, c, a, 0);
            for (l = 0; e != this.l && l++ < g;) e = Math.max(e - d, this.l), n = Qk(this, e, r, h, c, a, n);
            e = oa(f, this.l, this.f);
            for (l = 0; e != this.f && l++ < g;) e = Math.min(e + d, this.f), n = Qk(this, e, r, h, c, a, n);
            this.c.length = n;
            this.a && (this.a.length = n)
        }
        b.Oa(null, this.ua);
        a = 0;
        for (c = this.g.length; a <
            c; ++a) e = this.g[a], b.Hb(e);
        a = 0;
        for (c = this.c.length; a < c; ++a) e = this.c[a], b.Hb(e);
        if (this.b)
            for (a = 0, c = this.b.length; a < c; ++a) e = this.b[a], this.H.Gd(e.text), b.kb(this.H), b.Hb(e.Pd);
        if (this.a)
            for (a = 0, c = this.a.length; a < c; ++a) e = this.a[a], this.B.Gd(e.text), b.kb(this.B), b.Hb(e.Pd)
    };
    k.setMap = function(a) { this.v && (this.v.K("postcompose", this.ai, this), this.v.render());
        a && (a.J("postcompose", this.ai, this), a.render());
        this.v = a };

    function Rk(a, b, c, d) { Sc.call(this);
        this.extent = a;
        this.a = c;
        this.resolution = b;
        this.state = d }
    v(Rk, Sc);
    Rk.prototype.u = function() { this.b("change") };
    Rk.prototype.C = function() { return this.extent };
    Rk.prototype.getState = function() { return this.state };

    function Sk(a, b, c, d, e, f) { Rk.call(this, a, b, c, 0);
        this.i = d;
        this.N = new Image;
        null !== e && (this.N.crossOrigin = e);
        this.g = null;
        this.state = 0;
        this.c = f }
    v(Sk, Rk);
    k = Sk.prototype;
    k.Y = function() { return this.N };
    k.an = function() { this.state = 3;
        this.g.forEach(Gc);
        this.g = null;
        this.u() };
    k.bn = function() { void 0 === this.resolution && (this.resolution = bb(this.extent) / this.N.height);
        this.state = 2;
        this.g.forEach(Gc);
        this.g = null;
        this.u() };
    k.load = function() { if (0 == this.state || 3 == this.state) this.state = 1, this.u(), this.g = [Lc(this.N, "error", this.an, this), Lc(this.N, "load", this.bn, this)], this.c(this, this.i) };
    k.hh = function(a) { this.N = a };

    function Tk(a, b, c) { Sc.call(this);
        c = c ? c : {};
        this.xa = a;
        this.state = b;
        this.g = null;
        this.key = "";
        this.j = void 0 === c.transition ? 250 : c.transition;
        this.s = {} }
    v(Tk, Sc);
    Tk.prototype.u = function() { this.b("change") };
    Tk.prototype.ib = function() { return this.key + "/" + this.xa };

    function ej(a) { if (!a.g) return a; var b = a.g;
        do { if (2 == b.getState()) return b;
            b = b.g } while (b); return a }

    function Uk(a) { if (a.g) { var b = a.g;
            do { if (2 == b.getState()) { b.g = null; break } else 1 == b.getState() ? a = b : 0 == b.getState() ? a.g = b.g : a = b;
                b = a.g } while (b) } }
    Tk.prototype.i = function() { return this.xa };
    Tk.prototype.getState = function() { return this.state };

    function dj(a, b) { a.state = b;
        a.u() }

    function fj(a, b, c) { if (!a.j) return 1; var d = a.s[b]; if (!d) d = c, a.s[b] = d;
        else if (-1 === d) return 1;
        b = c - d + 1E3 / 60; return b >= a.j ? 1 : Le(b / a.j) };

    function Vk(a, b, c, d, e, f) { Tk.call(this, a, b, f);
        this.f = c;
        this.N = new Image;
        null !== d && (this.N.crossOrigin = d);
        this.c = null;
        this.l = e }
    v(Vk, Tk);
    k = Vk.prototype;
    k.ha = function() { 1 == this.state && (Wk(this), this.N = Xk());
        this.g && Pc(this.g);
        this.state = 5;
        this.u();
        Tk.prototype.ha.call(this) };
    k.Y = function() { return this.N };
    k.ib = function() { return this.f };
    k.Zm = function() { this.state = 3;
        Wk(this);
        this.N = Xk();
        this.u() };
    k.$m = function() { this.state = this.N.naturalWidth && this.N.naturalHeight ? 2 : 4;
        Wk(this);
        this.u() };
    k.load = function() { if (0 == this.state || 3 == this.state) this.state = 1, this.u(), this.c = [Lc(this.N, "error", this.Zm, this), Lc(this.N, "load", this.$m, this)], this.l(this, this.f) };

    function Wk(a) { a.c.forEach(Gc);
        a.c = null }

    function Xk() { var a = gg(1, 1);
        a.fillStyle = "rgba(0,0,0,0)";
        a.fillRect(0, 0, 1, 1); return a.canvas };

    function Yk(a) { this.b = a };

    function Zk(a) { this.b = a }
    v(Zk, Yk);
    Zk.prototype.T = function() { return 35632 };

    function $k(a) { this.b = a }
    v($k, Yk);
    $k.prototype.T = function() { return 35633 };
    var al = new Zk("precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"),
        bl = new $k("varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;//Until we get gl_VertexID in WebGL,we store an instruction.if(f==0.0){//Offsetting the edges of the triangle by lineWidth/2 is necessary,however//we should also leave some space for the antialiasing,thus we offset by lineWidth.offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}");

    function cl(a, b) { this.g = a.getUniformLocation(b, "h");
        this.i = a.getUniformLocation(b, "i");
        this.c = a.getUniformLocation(b, "j");
        this.oa = a.getUniformLocation(b, "k");
        this.qa = a.getUniformLocation(b, "l");
        this.a = a.getUniformLocation(b, "m");
        this.B = a.getUniformLocation(b, "n");
        this.O = a.getUniformLocation(b, "o");
        this.G = a.getUniformLocation(b, "p");
        this.b = a.getAttribLocation(b, "e");
        this.j = a.getAttribLocation(b, "f");
        this.P = a.getAttribLocation(b, "g") };

    function dl() { return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }

    function el(a, b) { a[0] = b[0];
        a[1] = b[1];
        a[4] = b[2];
        a[5] = b[3];
        a[12] = b[4];
        a[13] = b[5]; return a };

    function fl(a, b) { this.origin = cb(b);
        this.nb = Ve();
        this.ya = Ve();
        this.Xa = Ve();
        this.W = dl();
        this.b = [];
        this.j = null;
        this.g = [];
        this.i = [];
        this.a = [];
        this.s = null;
        this.f = void 0 }
    v(fl, qi);
    fl.prototype.Ma = function(a, b, c, d, e, f, g, h, l, m, n) {
        var p = a.b;
        if (this.f) {
            var q = p.isEnabled(p.STENCIL_TEST);
            var r = p.getParameter(p.STENCIL_FUNC);
            var u = p.getParameter(p.STENCIL_VALUE_MASK);
            var x = p.getParameter(p.STENCIL_REF);
            var C = p.getParameter(p.STENCIL_WRITEMASK);
            var z = p.getParameter(p.STENCIL_FAIL);
            var E = p.getParameter(p.STENCIL_PASS_DEPTH_PASS);
            var V = p.getParameter(p.STENCIL_PASS_DEPTH_FAIL);
            p.enable(p.STENCIL_TEST);
            p.clear(p.STENCIL_BUFFER_BIT);
            p.stencilMask(255);
            p.stencilFunc(p.ALWAYS, 1, 255);
            p.stencilOp(p.KEEP,
                p.KEEP, p.REPLACE);
            this.f.Ma(a, b, c, d, e, f, g, h, l, m, n);
            p.stencilMask(0);
            p.stencilFunc(p.NOTEQUAL, 1, 255)
        }
        gl(a, 34962, this.s);
        gl(a, 34963, this.j);
        f = this.zf(p, a, e, f);
        var ya = We(this.nb);
        bf(ya, 2 / (c * e[0]), 2 / (c * e[1]));
        af(ya, -d);
        cf(ya, -(b[0] - this.origin[0]), -(b[1] - this.origin[1]));
        b = We(this.Xa);
        bf(b, 2 / e[0], 2 / e[1]);
        e = We(this.ya);
        0 !== d && af(e, -d);
        p.uniformMatrix4fv(f.g, !1, el(this.W, ya));
        p.uniformMatrix4fv(f.i, !1, el(this.W, b));
        p.uniformMatrix4fv(f.c, !1, el(this.W, e));
        p.uniform1f(f.a, g);
        if (void 0 === l) this.Nd(p, a, h, !1);
        else { m ? a = this.De(p, a, h, l, n) : (p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), this.Nd(p, a, h, !0), a = (a = l(null)) ? a : void 0); var fa = a }
        this.Af(p, f);
        this.f && (q || p.disable(p.STENCIL_TEST), p.clear(p.STENCIL_BUFFER_BIT), p.stencilFunc(r, x, u), p.stencilMask(C), p.stencilOp(z, V, E));
        return fa
    };

    function hl(a, b, c, d) { a.drawElements(4, d - c, b.f ? 5125 : 5123, c * (b.f ? 4 : 2)) };
    var il = [0, 0, 0, 1],
        jl = [],
        kl = [0, 0, 0, 1];

    function ll(a, b, c, d, e, f) { a = (c - a) * (f - b) - (e - a) * (d - b); return a <= ml && a >= -ml ? void 0 : 0 < a }
    var ml = Number.EPSILON || 2.220446049250313E-16;

    function nl(a) { this.b = void 0 !== a ? a : [];
        this.a = pl }
    var pl = 35044;

    function ql(a, b) { fl.call(this, 0, b);
        this.v = null;
        this.l = [];
        this.o = [];
        this.P = 0;
        this.c = { fillColor: null, strokeColor: null, lineDash: null, lineDashOffset: void 0, lineWidth: void 0, u: !1 } }
    v(ql, fl);
    k = ql.prototype;
    k.cc = function(a, b) {
        var c = a.zd(),
            d = a.pa();
        if (c) {
            this.g.push(this.b.length);
            this.i.push(b);
            this.c.u && (this.o.push(this.b.length), this.c.u = !1);
            this.P = c;
            a = a.da();
            a = Te(a, 0, 2, d, -this.origin[0], -this.origin[1]);
            b = this.a.length;
            c = this.b.length;
            var e = b / 4,
                f;
            for (f = 0; 2 > f; f += d) this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 0, this.a[b++] = this.P, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 1, this.a[b++] = this.P, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 2, this.a[b++] = this.P, this.a[b++] = a[f], this.a[b++] =
                a[f + 1], this.a[b++] = 3, this.a[b++] = this.P, this.b[c++] = e, this.b[c++] = e + 1, this.b[c++] = e + 2, this.b[c++] = e + 2, this.b[c++] = e + 3, this.b[c++] = e, e += 4
        } else this.c.u && (this.l.pop(), this.l.length && (d = this.l[this.l.length - 1], this.c.fillColor = d[0], this.c.strokeColor = d[1], this.c.lineWidth = d[2], this.c.u = !1))
    };
    k.eb = function() { this.s = new nl(this.a);
        this.j = new nl(this.b);
        this.g.push(this.b.length);
        0 === this.o.length && 0 < this.l.length && (this.l = []);
        this.b = this.a = null };
    k.Db = function(a) { var b = this.s,
            c = this.j; return function() { rl(a, b);
            rl(a, c) } };
    k.zf = function(a, b, c, d) { var e = sl(b, al, bl); if (this.v) var f = this.v;
        else this.v = f = new cl(a, e);
        b.bd(e);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0);
        a.enableVertexAttribArray(f.j);
        a.vertexAttribPointer(f.j, 1, 5126, !1, 16, 8);
        a.enableVertexAttribArray(f.P);
        a.vertexAttribPointer(f.P, 1, 5126, !1, 16, 12);
        a.uniform2fv(f.G, c);
        a.uniform1f(f.qa, d); return f };
    k.Af = function(a, b) { a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.j);
        a.disableVertexAttribArray(b.P) };
    k.Nd = function(a, b, c) { if (mb(c)) { var d = this.g[this.g.length - 1]; for (c = this.o.length - 1; 0 <= c; --c) { var e = this.o[c]; var f = this.l[c];
                a.uniform4fv(this.v.B, f[0]);
                tl(this, a, f[1], f[2]);
                hl(a, b, e, d);
                d = e } } else { var g = this.g.length - 2;
            f = d = this.g[g + 1]; for (e = this.o.length - 1; 0 <= e; --e) { var h = this.l[e];
                a.uniform4fv(this.v.B, h[0]);
                tl(this, a, h[1], h[2]); for (h = this.o[e]; 0 <= g && this.g[g] >= h;) { var l = this.g[g]; var m = this.i[g];
                    m = w(m).toString();
                    c[m] && (d !== f && hl(a, b, d, f), f = l);
                    g--;
                    d = l }
                d !== f && hl(a, b, d, f);
                d = f = h } } };
    k.De = function(a, b, c, d, e) { var f, g; var h = this.g.length - 2; var l = this.g[h + 1]; for (f = this.o.length - 1; 0 <= f; --f) { var m = this.l[f];
            a.uniform4fv(this.v.B, m[0]);
            tl(this, a, m[1], m[2]); for (g = this.o[f]; 0 <= h && this.g[h] >= g;) { m = this.g[h]; var n = this.i[h]; var p = w(n).toString(); if (void 0 === c[p] && n.V() && (void 0 === e || fb(e, n.V().C())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), hl(a, b, m, l), l = d(n))) return l;
                h--;
                l = m } } };

    function tl(a, b, c, d) { b.uniform4fv(a.v.O, c);
        b.uniform1f(a.v.oa, d) }
    k.Oa = function(a, b) {
        if (b) { var c = b.g;
            this.c.lineDash = c ? c : jl;
            c = b.i;
            this.c.lineDashOffset = c ? c : 0;
            c = b.a;
            c instanceof CanvasGradient || c instanceof CanvasPattern ? c = kl : c = li(c).map(function(a, b) { return 3 != b ? a / 255 : a }) || kl;
            b = b.c;
            b = void 0 !== b ? b : 1 } else c = [0, 0, 0, 0], b = 0;
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = il : a = li(a).map(function(a, b) { return 3 != b ? a / 255 : a }) || il;
        this.c.strokeColor && gc(this.c.strokeColor, c) && this.c.fillColor && gc(this.c.fillColor, a) && this.c.lineWidth === b || (this.c.u = !0, this.c.fillColor = a, this.c.strokeColor = c, this.c.lineWidth = b, this.l.push([a, c, b]))
    };
    var ul = new Zk("precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"),
        vl = new $k("varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}");

    function wl(a, b) { this.g = a.getUniformLocation(b, "h");
        this.i = a.getUniformLocation(b, "i");
        this.c = a.getUniformLocation(b, "j");
        this.a = a.getUniformLocation(b, "k");
        this.b = a.getAttribLocation(b, "c");
        this.H = a.getAttribLocation(b, "d");
        this.v = a.getAttribLocation(b, "e");
        this.o = a.getAttribLocation(b, "f");
        this.D = a.getAttribLocation(b, "g") };

    function xl(a, b) { this.j = a;
        this.b = b;
        this.a = {};
        this.c = {};
        this.g = {};
        this.s = this.v = this.i = this.l = null;
        (this.f = cc(ca, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        y(this.j, "webglcontextlost", this.qp, this);
        y(this.j, "webglcontextrestored", this.rp, this) }
    v(xl, Oc);

    function gl(a, b, c) { var d = a.b,
            e = c.b,
            f = String(w(c)); if (f in a.a) d.bindBuffer(b, a.a[f].buffer);
        else { var g = d.createBuffer();
            d.bindBuffer(b, g); var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.f ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, c.a);
            a.a[f] = { sc: c, buffer: g } } }

    function rl(a, b) { var c = a.b;
        b = String(w(b)); var d = a.a[b];
        c.isContextLost() || c.deleteBuffer(d.buffer);
        delete a.a[b] }
    k = xl.prototype;
    k.ha = function() { Nc(this.j); var a = this.b; if (!a.isContextLost()) { for (var b in this.a) a.deleteBuffer(this.a[b].buffer); for (b in this.g) a.deleteProgram(this.g[b]); for (b in this.c) a.deleteShader(this.c[b]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.s);
            a.deleteTexture(this.v) } };
    k.pp = function() { return this.b };

    function yl(a) {
        if (!a.i) {
            var b = a.b,
                c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = zl(b, 1, 1),
                e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.i = c;
            a.v = d;
            a.s = e
        }
        return a.i
    }

    function Al(a, b) { var c = String(w(b)); if (c in a.c) return a.c[c]; var d = a.b,
            e = d.createShader(b.T());
        d.shaderSource(e, b.b);
        d.compileShader(e); return a.c[c] = e }

    function sl(a, b, c) { var d = w(b) + "/" + w(c); if (d in a.g) return a.g[d]; var e = a.b,
            f = e.createProgram();
        e.attachShader(f, Al(a, b));
        e.attachShader(f, Al(a, c));
        e.linkProgram(f); return a.g[d] = f }
    k.qp = function() { kb(this.a);
        kb(this.c);
        kb(this.g);
        this.s = this.v = this.i = this.l = null };
    k.rp = function() {};
    k.bd = function(a) { if (a == this.l) return !1;
        this.b.useProgram(a);
        this.l = a; return !0 };

    function Bl(a, b, c) { var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c); return d }

    function zl(a, b, c) { var d = Bl(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null); return d }

    function Cl(a, b) { var c = Bl(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b); return c };

    function Dl(a, b) { fl.call(this, 0, b);
        this.B = this.D = void 0;
        this.v = [];
        this.o = [];
        this.qa = this.oa = this.height = void 0;
        this.Va = null;
        this.width = this.scale = this.rotation = this.rotateWithView = this.O = this.G = this.opacity = void 0 }
    v(Dl, fl);
    k = Dl.prototype;
    k.Db = function(a) { var b = this.s,
            c = this.j,
            d = this.gg(!0),
            e = a.b; return function() { if (!e.isContextLost()) { var f; var g = 0; for (f = d.length; g < f; ++g) e.deleteTexture(d[g]) }
            rl(a, b);
            rl(a, c) } };

    function El(a, b, c, d) {
        var e = a.D,
            f = a.B,
            g = a.height,
            h = a.oa,
            l = a.qa,
            m = a.opacity,
            n = a.G,
            p = a.O,
            q = a.rotateWithView ? 1 : 0,
            r = -a.rotation,
            u = a.scale,
            x = a.width,
            C = Math.cos(r);
        r = Math.sin(r);
        var z = a.b.length,
            E = a.a.length,
            V;
        for (V = 0; V < c; V += d) {
            var ya = b[V] - a.origin[0];
            var fa = b[V + 1] - a.origin[1];
            var pa = E / 8;
            var Ja = -u * e;
            var ma = -u * (g - f);
            a.a[E++] = ya;
            a.a[E++] = fa;
            a.a[E++] = Ja * C - ma * r;
            a.a[E++] = Ja * r + ma * C;
            a.a[E++] = n / l;
            a.a[E++] = (p + g) / h;
            a.a[E++] = m;
            a.a[E++] = q;
            Ja = u * (x - e);
            ma = -u * (g - f);
            a.a[E++] = ya;
            a.a[E++] = fa;
            a.a[E++] = Ja * C - ma * r;
            a.a[E++] = Ja *
                r + ma * C;
            a.a[E++] = (n + x) / l;
            a.a[E++] = (p + g) / h;
            a.a[E++] = m;
            a.a[E++] = q;
            Ja = u * (x - e);
            ma = u * f;
            a.a[E++] = ya;
            a.a[E++] = fa;
            a.a[E++] = Ja * C - ma * r;
            a.a[E++] = Ja * r + ma * C;
            a.a[E++] = (n + x) / l;
            a.a[E++] = p / h;
            a.a[E++] = m;
            a.a[E++] = q;
            Ja = -u * e;
            ma = u * f;
            a.a[E++] = ya;
            a.a[E++] = fa;
            a.a[E++] = Ja * C - ma * r;
            a.a[E++] = Ja * r + ma * C;
            a.a[E++] = n / l;
            a.a[E++] = p / h;
            a.a[E++] = m;
            a.a[E++] = q;
            a.b[z++] = pa;
            a.b[z++] = pa + 1;
            a.b[z++] = pa + 2;
            a.b[z++] = pa;
            a.b[z++] = pa + 2;
            a.b[z++] = pa + 3
        }
    }

    function Fl(a, b, c, d) { var e, f = b.length; for (e = 0; e < f; ++e) { var g = b[e]; var h = w(g).toString();
            h in c ? g = c[h] : (g = Cl(d, g), c[h] = g);
            a[e] = g } }
    k.zf = function(a, b) { var c = sl(b, ul, vl); if (this.Va) var d = this.Va;
        else this.Va = d = new wl(a, c);
        b.bd(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 32, 0);
        a.enableVertexAttribArray(d.v);
        a.vertexAttribPointer(d.v, 2, 5126, !1, 32, 8);
        a.enableVertexAttribArray(d.H);
        a.vertexAttribPointer(d.H, 2, 5126, !1, 32, 16);
        a.enableVertexAttribArray(d.o);
        a.vertexAttribPointer(d.o, 1, 5126, !1, 32, 24);
        a.enableVertexAttribArray(d.D);
        a.vertexAttribPointer(d.D, 1, 5126, !1, 32, 28); return d };
    k.Af = function(a, b) { a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.v);
        a.disableVertexAttribArray(b.H);
        a.disableVertexAttribArray(b.o);
        a.disableVertexAttribArray(b.D) };
    k.Nd = function(a, b, c, d) { var e = d ? this.Zf() : this.gg();
        d = d ? this.o : this.v; if (mb(c)) { var f;
            c = 0; var g = e.length; for (f = 0; c < g; ++c) { a.bindTexture(3553, e[c]); var h = d[c];
                hl(a, b, f, h);
                f = h } } else
            for (f = g = 0, h = e.length; f < h; ++f) { a.bindTexture(3553, e[f]); for (var l = 0 < f ? d[f - 1] : 0, m = d[f], n = l; g < this.g.length && this.g[g] <= m;) { var p = w(this.i[g]).toString();
                    void 0 !== c[p] ? (n !== l && hl(a, b, n, l), l = n = g === this.g.length - 1 ? m : this.g[g + 1]) : l = g === this.g.length - 1 ? m : this.g[g + 1];
                    g++ }
                n !== l && hl(a, b, n, l) } };
    k.De = function(a, b, c, d, e) { var f, g, h = this.g.length - 1,
            l = this.Zf(); for (f = l.length - 1; 0 <= f; --f) { a.bindTexture(3553, l[f]); var m = 0 < f ? this.o[f - 1] : 0; for (g = this.o[f]; 0 <= h && this.g[h] >= m;) { var n = this.g[h]; var p = this.i[h]; var q = w(p).toString(); if (void 0 === c[q] && p.V() && (void 0 === e || fb(e, p.V().C())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), hl(a, b, n, g), g = d(p))) return g;
                g = n;
                h-- } } };
    k.eb = function() { this.qa = this.oa = this.height = this.B = this.D = void 0;
        this.b = null;
        this.scale = this.rotation = this.rotateWithView = this.O = this.G = this.opacity = void 0;
        this.a = null;
        this.width = void 0 };

    function Gl(a, b) { Dl.call(this, 0, b);
        this.l = [];
        this.c = [];
        this.H = [];
        this.P = [] }
    v(Gl, Dl);
    k = Gl.prototype;
    k.vc = function(a, b) { this.g.push(this.b.length);
        this.i.push(b);
        b = a.da();
        El(this, b, b.length, a.pa()) };
    k.xc = function(a, b) { this.g.push(this.b.length);
        this.i.push(b);
        b = a.da();
        El(this, b, b.length, a.pa()) };
    k.eb = function(a) { var b = a.b;
        this.v.push(this.b.length);
        this.o.push(this.b.length);
        this.s = new nl(this.a);
        this.j = new nl(this.b); var c = {};
        Fl(this.H, this.l, c, b);
        Fl(this.P, this.c, c, b);
        this.c = this.l = null;
        Dl.prototype.eb.call(this, a) };
    k.Zb = function(a) {
        var b = a.Uc(),
            c = a.Y(1),
            d = a.Ge(),
            e = a.Dg(1),
            f = a.i,
            g = a.ad(),
            h = a.s,
            l = a.f,
            m = a.nc();
        a = a.a;
        if (0 === this.l.length) this.l.push(c);
        else { var n = this.l[this.l.length - 1];
            w(n) != w(c) && (this.v.push(this.b.length), this.l.push(c)) }
        0 === this.c.length ? this.c.push(e) : (n = this.c[this.c.length - 1], w(n) != w(e) && (this.o.push(this.b.length), this.c.push(e)));
        this.D = b[0];
        this.B = b[1];
        this.height = m[1];
        this.oa = d[1];
        this.qa = d[0];
        this.opacity = f;
        this.G = g[0];
        this.O = g[1];
        this.rotation = l;
        this.rotateWithView = h;
        this.scale = a;
        this.width = m[0]
    };
    k.gg = function(a) { return a ? this.H.concat(this.P) : this.H };
    k.Zf = function() { return this.P };

    function Hl(a, b, c) { var d = b - c; return a[0] === a[d] && a[1] === a[d + 1] && 3 < (b - 0) / c ? !!lf(a, 0, b, c) : !1 };
    var Il = new Zk("precision mediump float;varying float a;varying vec2 aVertex;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((aVertex.x+1.0)/2.0*o.x*p,(aVertex.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"),
        Jl = new $k("varying float a;varying vec2 aVertex;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;aVertex=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}");

    function Kl(a, b) { this.g = a.getUniformLocation(b, "h");
        this.i = a.getUniformLocation(b, "i");
        this.c = a.getUniformLocation(b, "j");
        this.oa = a.getUniformLocation(b, "k");
        this.O = a.getUniformLocation(b, "l");
        this.a = a.getUniformLocation(b, "m");
        this.B = a.getUniformLocation(b, "n");
        this.G = a.getUniformLocation(b, "o");
        this.qa = a.getUniformLocation(b, "p");
        this.l = a.getAttribLocation(b, "d");
        this.b = a.getAttribLocation(b, "e");
        this.s = a.getAttribLocation(b, "f");
        this.f = a.getAttribLocation(b, "g") };

    function Ll(a, b) { fl.call(this, 0, b);
        this.v = null;
        this.o = [];
        this.l = [];
        this.c = { strokeColor: null, lineCap: void 0, lineDash: null, lineDashOffset: void 0, lineJoin: void 0, lineWidth: void 0, miterLimit: void 0, u: !1 } }
    v(Ll, fl);

    function Ml(a, b, c, d) {
        var e, f = a.a.length,
            g = a.b.length,
            h = "bevel" === a.c.lineJoin ? 0 : "miter" === a.c.lineJoin ? 1 : 2,
            l = "butt" === a.c.lineCap ? 0 : "square" === a.c.lineCap ? 1 : 2,
            m = Hl(b, c, d),
            n = g,
            p = 1;
        for (e = 0; e < c; e += d) {
            var q = f / 7;
            var r = u;
            var u = x || [b[e], b[e + 1]];
            if (0 === e) {
                var x = [b[e + d], b[e + d + 1]];
                if (c - 0 === 2 * d && gc(u, x)) break;
                if (m) { r = [b[c - 2 * d], b[c - 2 * d + 1]]; var C = x } else {
                    l && (f = Nl(a, [0, 0], u, x, p * Ol * l, f), f = Nl(a, [0, 0], u, x, -p * Ol * l, f), a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2);
                    f = Nl(a, [0, 0], u, x, p * Pl *
                        (l || 1), f);
                    f = Nl(a, [0, 0], u, x, -p * Pl * (l || 1), f);
                    n = f / 7 - 1;
                    continue
                }
            } else if (e === c - d) { m ? x = C : (r = r || [0, 0], f = Nl(a, r, u, [0, 0], p * Ql * (l || 1), f), f = Nl(a, r, u, [0, 0], -p * Ql * (l || 1), f), a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, l && (f = Nl(a, r, u, [0, 0], p * Rl * l, f), f = Nl(a, r, u, [0, 0], -p * Rl * l, f), a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2)); break } else x = [b[e + d], b[e + d + 1]];
            var z = ll(r[0], r[1], u[0], u[1], x[0], x[1]) ? -1 : 1;
            f = Nl(a, r, u, x, z * Sl * (h || 1), f);
            f = Nl(a, r, u, x, z * Tl * (h || 1), f);
            f =
                Nl(a, r, u, x, -z * Ul * (h || 1), f);
            0 < e && (a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = 0 < p * z ? n : n - 1);
            a.b[g++] = q;
            a.b[g++] = q + 2;
            a.b[g++] = q + 1;
            n = q + 2;
            p = z;
            h && (f = Nl(a, r, u, x, z * Vl * h, f), a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q)
        }
        m && (q = q || f / 7, z = Nf([r[0], r[1], u[0], u[1], x[0], x[1]], 0, 6, 2) ? 1 : -1, f = Nl(a, r, u, x, z * Sl * (h || 1), f), Nl(a, r, u, x, -z * Ul * (h || 1), f), a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, a.b[g++] = 0 < p * z ? n : n - 1)
    }

    function Nl(a, b, c, d, e, f) { a.a[f++] = b[0];
        a.a[f++] = b[1];
        a.a[f++] = c[0];
        a.a[f++] = c[1];
        a.a[f++] = d[0];
        a.a[f++] = d[1];
        a.a[f++] = e; return f }

    function Wl(a, b, c, d) { c -= b; return c < 2 * d ? !1 : c === 2 * d ? !gc([a[b], a[b + 1]], [a[b + d], a[b + d + 1]]) : !0 }
    k = Ll.prototype;
    k.tc = function(a, b) { var c = a.da();
        a = a.pa();
        Wl(c, 0, c.length, a) && (c = Te(c, 0, c.length, a, -this.origin[0], -this.origin[1]), this.c.u && (this.l.push(this.b.length), this.c.u = !1), this.g.push(this.b.length), this.i.push(b), Ml(this, c, c.length, a)) };
    k.uc = function(a, b) { var c = this.b.length,
            d = a.ob();
        d.unshift(0); var e = a.da();
        a = a.pa(); var f; if (1 < d.length) { var g = 1; for (f = d.length; g < f; ++g)
                if (Wl(e, d[g - 1], d[g], a)) { var h = Te(e, d[g - 1], d[g], a, -this.origin[0], -this.origin[1]);
                    Ml(this, h, h.length, a) } }
        this.b.length > c && (this.g.push(c), this.i.push(b), this.c.u && (this.l.push(c), this.c.u = !1)) };

    function Xl(a, b, c, d) { Hl(b, b.length, d) || (b.push(b[0]), b.push(b[1]));
        Ml(a, b, b.length, d); if (c.length) { var e;
            b = 0; for (e = c.length; b < e; ++b) Hl(c[b], c[b].length, d) || (c[b].push(c[b][0]), c[b].push(c[b][1])), Ml(a, c[b], c[b].length, d) } }

    function Yl(a, b, c) { c = void 0 === c ? a.b.length : c;
        a.g.push(c);
        a.i.push(b);
        a.c.u && (a.l.push(c), a.c.u = !1) }
    k.eb = function() { this.s = new nl(this.a);
        this.j = new nl(this.b);
        this.g.push(this.b.length);
        0 === this.l.length && 0 < this.o.length && (this.o = []);
        this.b = this.a = null };
    k.Db = function(a) { var b = this.s,
            c = this.j; return function() { rl(a, b);
            rl(a, c) } };
    k.zf = function(a, b, c, d) { var e = sl(b, Il, Jl); if (this.v) var f = this.v;
        else this.v = f = new Kl(a, e);
        b.bd(e);
        a.enableVertexAttribArray(f.l);
        a.vertexAttribPointer(f.l, 2, 5126, !1, 28, 0);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 28, 8);
        a.enableVertexAttribArray(f.s);
        a.vertexAttribPointer(f.s, 2, 5126, !1, 28, 16);
        a.enableVertexAttribArray(f.f);
        a.vertexAttribPointer(f.f, 1, 5126, !1, 28, 24);
        a.uniform2fv(f.G, c);
        a.uniform1f(f.qa, d); return f };
    k.Af = function(a, b) { a.disableVertexAttribArray(b.l);
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.s);
        a.disableVertexAttribArray(b.f) };
    k.Nd = function(a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC),
            f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (mb(c)) { var g = this.g[this.g.length - 1]; for (c = this.l.length - 1; 0 <= c; --c) { var h = this.l[c]; var l = this.o[c];
                Zl(this, a, l[0], l[1], l[2]);
                hl(a, b, h, g);
                a.clear(a.DEPTH_BUFFER_BIT);
                g = h } } else {
            var m = this.g.length - 2;
            l = g = this.g[m + 1];
            for (h = this.l.length - 1; 0 <= h; --h) {
                var n = this.o[h];
                Zl(this, a, n[0], n[1], n[2]);
                for (n = this.l[h]; 0 <= m && this.g[m] >= n;) {
                    var p = this.g[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (hl(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p
                }
                g !== l && (hl(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e))
    };
    k.De = function(a, b, c, d, e) { var f, g; var h = this.g.length - 2; var l = this.g[h + 1]; for (f = this.l.length - 1; 0 <= f; --f) { var m = this.o[f];
            Zl(this, a, m[0], m[1], m[2]); for (g = this.l[f]; 0 <= h && this.g[h] >= g;) { m = this.g[h]; var n = this.i[h]; var p = w(n).toString(); if (void 0 === c[p] && n.V() && (void 0 === e || fb(e, n.V().C())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), hl(a, b, m, l), l = d(n))) return l;
                h--;
                l = m } } };

    function Zl(a, b, c, d, e) { b.uniform4fv(a.v.B, c);
        b.uniform1f(a.v.oa, d);
        b.uniform1f(a.v.O, e) }
    k.Oa = function(a, b) {
        a = b.f;
        this.c.lineCap = void 0 !== a ? a : "round";
        a = b.g;
        this.c.lineDash = a ? a : jl;
        a = b.i;
        this.c.lineDashOffset = a ? a : 0;
        a = b.j;
        this.c.lineJoin = void 0 !== a ? a : "round";
        a = b.a;
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = kl : a = li(a).map(function(a, b) { return 3 != b ? a / 255 : a }) || kl;
        var c = b.c;
        c = void 0 !== c ? c : 1;
        b = b.l;
        b = void 0 !== b ? b : 10;
        this.c.strokeColor && gc(this.c.strokeColor, a) && this.c.lineWidth === c && this.c.miterLimit === b || (this.c.u = !0, this.c.strokeColor = a, this.c.lineWidth = c, this.c.miterLimit = b,
            this.o.push([a, c, b]))
    };
    var Pl = 3,
        Ql = 5,
        Ol = 7,
        Rl = 11,
        Sl = 13,
        Tl = 17,
        Ul = 19,
        Vl = 23;
    var $l = new Zk("precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"),
        am = new $k("attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}");

    function bm(a, b) { this.g = a.getUniformLocation(b, "b");
        this.i = a.getUniformLocation(b, "c");
        this.c = a.getUniformLocation(b, "d");
        this.B = a.getUniformLocation(b, "e");
        this.a = a.getUniformLocation(b, "f");
        this.b = a.getAttribLocation(b, "a") };

    function cm(a) { this.b = this.a = this.g = void 0;
        this.i = void 0 === a ? !0 : a;
        this.c = 0 }

    function dm(a) { var b = a.b; if (b) { var c = b.next,
                d = b.Eb;
            c && (c.Eb = d);
            d && (d.next = c);
            a.b = c || d;
            a.g === a.a ? (a.b = void 0, a.g = void 0, a.a = void 0) : a.g === b ? a.g = a.b : a.a === b && (a.a = d ? a.b.Eb : a.b);
            a.c-- } }

    function em(a) { a.b = a.g; if (a.b) return a.b.data }

    function fm(a) { if (a.b && a.b.next) return a.b = a.b.next, a.b.data }

    function gm(a) { if (a.b && a.b.next) return a.b.next.data }

    function hm(a) { if (a.b && a.b.Eb) return a.b = a.b.Eb, a.b.data }

    function im(a) { if (a.b && a.b.Eb) return a.b.Eb.data }

    function jm(a) { if (a.b) return a.b.data }
    cm.prototype.concat = function(a) { if (a.b) { if (this.b) { var b = this.b.next;
                this.b.next = a.g;
                a.g.Eb = this.b;
                b.Eb = a.a;
                a.a.next = b;
                this.c += a.c } else this.b = a.b, this.g = a.g, this.a = a.a, this.c = a.c;
            a.b = void 0;
            a.g = void 0;
            a.a = void 0;
            a.c = 0 } };

    function km(a) { this.a = gj.Hc(a);
        this.b = {} }
    k = km.prototype;
    k.Ca = function(a, b) { a = { fa: a[0], ea: a[1], la: a[2], ka: a[3], value: b };
        this.a.Ca(a);
        this.b[w(b)] = a };
    k.load = function(a, b) { for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) { var f = a[d],
                g = b[d];
            f = { fa: f[0], ea: f[1], la: f[2], ka: f[3], value: g };
            c[d] = f;
            this.b[w(g)] = f }
        this.a.load(c) };
    k.remove = function(a) { a = w(a); var b = this.b[a];
        delete this.b[a]; return null !== this.a.remove(b) };

    function lm(a, b, c) { var d = a.b[w(c)];
        Ra([d.fa, d.ea, d.la, d.ka], b) || (a.remove(c), a.Ca(b, c)) }

    function mm(a) { return a.a.all().map(function(a) { return a.value }) }

    function nm(a, b) { return a.a.search({ fa: b[0], ea: b[1], la: b[2], ka: b[3] }).map(function(a) { return a.value }) }
    k.forEach = function(a, b) { return om(mm(this), a, b) };

    function pm(a, b, c, d) { return om(nm(a, b), c, d) }

    function om(a, b, c) { for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++); return d }
    k.clear = function() { this.a.clear();
        this.b = {} };
    k.C = function(a) { var b = this.a.data; return Ma(b.fa, b.ea, b.la, b.ka, a) };
    k.concat = function(a) { this.a.load(a.a.all()); for (var b in a.b) this.b[b | 0] = a.b[b | 0] };

    function qm(a, b) { fl.call(this, 0, b);
        this.f = new Ll(0, b);
        this.v = null;
        this.o = [];
        this.c = [];
        this.l = { fillColor: null, u: !1 } }
    v(qm, fl);

    function rm(a, b, c, d) {
        var e = new cm,
            f = new km;
        sm(a, b, d, e, f, !0);
        b = tm(e);
        if (c.length) { var g, h = []; var l = 0; for (g = c.length; l < g; ++l) { var m = { list: new cm, Cc: void 0, fh: new km };
                h.push(m);
                sm(a, c[l], d, m.list, m.fh, !1);
                um(m.list, m.fh, !0);
                m.Cc = tm(m.list) }
            h.sort(function(a, b) { return b.Cc[0] === a.Cc[0] ? a.Cc[1] - b.Cc[1] : b.Cc[0] - a.Cc[0] }); for (l = 0; l < h.length; ++l) { c = h[l].list;
                g = d = em(c);
                do { if (vm(g, f).length) { var n = !0; break }
                    g = fm(c) } while (d !== g);!n && wm(c, h[l].Cc[0], e, b[0], f) && (f.concat(h[l].fh), um(e, f, !1)) } } else um(e, f, !1);
        xm(a,
            e, f)
    }

    function sm(a, b, c, d, e, f) {
        var g, h = a.a.length / 2,
            l = [],
            m = [];
        if (f === Nf(b, 0, b.length, c)) { var n = f = ym(a, b[0], b[1], h++); var p = c; for (g = b.length; p < g; p += c) { var q = ym(a, b[p], b[p + 1], h++);
                m.push(zm(n, q, d));
                l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
                n = q } } else
            for (p = b.length - c, n = f = ym(a, b[p], b[p + 1], h++), p -= c, g = 0; p >= g; p -= c) q = ym(a, b[p], b[p + 1], h++), m.push(zm(n, q, d)), l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]), n = q;
        m.push(zm(q, f, d));
        l.push([Math.min(n.x, q.x),
            Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)
        ]);
        e.load(l, m)
    }

    function tm(a) { var b = em(a),
            c = b,
            d = [c.Z.x, c.Z.y];
        do c = fm(a), c.Z.x > d[0] && (d = [c.Z.x, c.Z.y]); while (c !== b); return d }

    function um(a, b, c) { var d = em(a),
            e = d,
            f = fm(a),
            g = !1;
        do { var h = c ? ll(f.X.x, f.X.y, e.X.x, e.X.y, e.Z.x, e.Z.y) : ll(e.Z.x, e.Z.y, e.X.x, e.X.y, f.X.x, f.X.y);
            void 0 === h ? (Am(e, f, a, b), g = !0, f === d && (d = gm(a)), f = e, hm(a)) : e.X.Kb !== h && (e.X.Kb = h, g = !0);
            e = f;
            f = fm(a) } while (e !== d); return g }

    function wm(a, b, c, d, e) {
        for (var f = em(a); f.X.x !== b;) f = fm(a);
        b = f.X;
        d = { x: d, y: b.y, pb: -1 };
        var g = Infinity,
            h;
        var l = vm({ Z: b, X: d }, e, !0);
        var m = 0;
        for (h = l.length; m < h; ++m) { var n = l[m],
                p = Bm(b, d, n.Z, n.X, !0),
                q = Math.abs(b.x - p[0]); if (q < g && void 0 !== ll(b.x, b.y, n.Z.x, n.Z.y, n.X.x, n.X.y)) { g = q; var r = { x: p[0], y: p[1], pb: -1 };
                f = n } }
        if (Infinity === g) return !1;
        l = f.X;
        if (0 < g && (f = Cm(b, r, f.X, e), f.length))
            for (r = Infinity, m = 0, h = f.length; m < h; ++m)
                if (g = f[m], n = Math.atan2(b.y - g.y, d.x - g.x), n < r || n === r && g.x < l.x) r = n, l = g;
        for (f = em(c); f.X.x !== l.x || f.X.y !==
            l.y;) f = fm(c);
        d = { x: b.x, y: b.y, pb: b.pb, Kb: void 0 };
        m = { x: f.X.x, y: f.X.y, pb: f.X.pb, Kb: void 0 };
        gm(a).Z = d;
        zm(b, f.X, a, e);
        zm(m, d, a, e);
        f.X = m;
        a.i && a.b && (a.g = a.b, a.a = a.b.Eb);
        c.concat(a);
        return !0
    }

    function xm(a, b, c) {
        for (var d = !1, e = Dm(b, c); 3 < b.c;)
            if (e) { if (!Em(a, b, c, e, d) && !um(b, c, d) && !Fm(a, b, c, !0)) break } else if (!Em(a, b, c, e, d) && !um(b, c, d) && !Fm(a, b, c))
            if (e = Dm(b, c)) { d = b; var f = 2 * d.c,
                    g = Array(f),
                    h = em(d),
                    l = h,
                    m = 0;
                do g[m++] = l.Z.x, g[m++] = l.Z.y, l = fm(d); while (l !== h);
                d = !Nf(g, 0, f, 2);
                um(b, c, d) } else {
                e = a;
                d = b;
                f = g = em(d);
                do {
                    h = vm(f, c);
                    if (h.length) {
                        g = h[0];
                        h = Bm(f.Z, f.X, g.Z, g.X);
                        h = ym(e, h[0], h[1], e.a.length / 2);
                        l = new cm;
                        m = new km;
                        zm(h, f.X, l, m);
                        f.X = h;
                        lm(c, [Math.min(f.Z.x, h.x), Math.min(f.Z.y, h.y), Math.max(f.Z.x, h.x), Math.max(f.Z.y,
                            h.y)], f);
                        for (f = fm(d); f !== g;) zm(f.Z, f.X, l, m), c.remove(f), dm(d), f = jm(d);
                        zm(g.Z, h, l, m);
                        g.Z = h;
                        lm(c, [Math.min(g.X.x, h.x), Math.min(g.X.y, h.y), Math.max(g.X.x, h.x), Math.max(g.X.y, h.y)], g);
                        um(d, c, !1);
                        xm(e, d, c);
                        um(l, m, !1);
                        xm(e, l, m);
                        break
                    }
                    f = fm(d)
                } while (f !== g);
                break
            }
        3 === b.c && (e = a.b.length, a.b[e++] = im(b).Z.pb, a.b[e++] = jm(b).Z.pb, a.b[e++] = gm(b).Z.pb)
    }

    function Em(a, b, c, d, e) { var f = a.b.length,
            g = em(b),
            h = im(b),
            l = g,
            m = fm(b),
            n = gm(b),
            p = !1;
        do { var q = l.Z; var r = l.X; var u = m.X; if (!1 === r.Kb) { var x = d ? 0 === Cm(q, r, u, c, !0).length : e ? Gm(n.X, u, r, q, h.Z) : Gm(h.Z, q, r, u, n.X);!d && 0 !== vm({ Z: q, X: u }, c).length || !x || !d && !1 !== q.Kb && !1 !== u.Kb && Nf([h.Z.x, h.Z.y, q.x, q.y, r.x, r.y, u.x, u.y, n.X.x, n.X.y], 0, 10, 2) !== !e || (a.b[f++] = q.pb, a.b[f++] = r.pb, a.b[f++] = u.pb, Am(l, m, b, c), m === g && (g = n), p = !0) }
            h = im(b);
            l = jm(b);
            m = fm(b);
            n = gm(b) } while (l !== g && 3 < b.c); return p }

    function Fm(a, b, c, d) {
        var e = em(b);
        fm(b);
        var f = e,
            g = fm(b),
            h = !1;
        do {
            var l = Bm(f.Z, f.X, g.Z, g.X, d);
            if (l) {
                h = a.b.length;
                var m = a.a.length / 2,
                    n = hm(b);
                dm(b);
                c.remove(n);
                var p = n === e;
                d ? (l[0] === f.Z.x && l[1] === f.Z.y ? (hm(b), l = f.Z, g.Z = l, c.remove(f), p = p || f === e) : (l = g.X, f.X = l, c.remove(g), p = p || g === e), dm(b)) : (l = ym(a, l[0], l[1], m), f.X = l, g.Z = l, lm(c, [Math.min(f.Z.x, f.X.x), Math.min(f.Z.y, f.X.y), Math.max(f.Z.x, f.X.x), Math.max(f.Z.y, f.X.y)], f), lm(c, [Math.min(g.Z.x, g.X.x), Math.min(g.Z.y, g.X.y), Math.max(g.Z.x, g.X.x), Math.max(g.Z.y,
                    g.X.y)], g));
                a.b[h++] = n.Z.pb;
                a.b[h++] = n.X.pb;
                a.b[h++] = l.pb;
                h = !0;
                if (p) break
            }
            f = im(b);
            g = fm(b)
        } while (f !== e);
        return h
    }

    function Dm(a, b) { var c = em(a),
            d = c;
        do { if (vm(d, b).length) return !1;
            d = fm(a) } while (d !== c); return !0 }

    function ym(a, b, c, d) { var e = a.a.length;
        a.a[e++] = b;
        a.a[e++] = c; return { x: b, y: c, pb: d, Kb: void 0 } }

    function zm(a, b, c, d) { var e = { Z: a, X: b },
            f = { Eb: void 0, next: void 0, data: e },
            g = c.b; if (g) { var h = g.next;
            f.Eb = g;
            f.next = h;
            g.next = f;
            h && (h.Eb = f);
            g === c.a && (c.a = f) } else c.g = f, c.a = f, c.i && (f.next = f, f.Eb = f);
        c.b = f;
        c.c++;
        d && d.Ca([Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.x, b.x), Math.max(a.y, b.y)], e); return e }

    function Am(a, b, c, d) { jm(c) === b && (dm(c), a.X = b.X, d.remove(b), lm(d, [Math.min(a.Z.x, a.X.x), Math.min(a.Z.y, a.X.y), Math.max(a.Z.x, a.X.x), Math.max(a.Z.y, a.X.y)], a)) }

    function Cm(a, b, c, d, e) { var f, g, h = [],
            l = nm(d, [Math.min(a.x, b.x, c.x), Math.min(a.y, b.y, c.y), Math.max(a.x, b.x, c.x), Math.max(a.y, b.y, c.y)]);
        d = 0; for (f = l.length; d < f; ++d)
            for (g in l[d]) { var m = l[d][g]; "object" !== typeof m || e && !m.Kb || m.x === a.x && m.y === a.y || m.x === b.x && m.y === b.y || m.x === c.x && m.y === c.y || -1 !== h.indexOf(m) || !Hf([a.x, a.y, b.x, b.y, c.x, c.y], 0, 6, 2, m.x, m.y) || h.push(m) }
        return h }

    function vm(a, b, c) { var d = a.Z,
            e = a.X;
        b = nm(b, [Math.min(d.x, e.x), Math.min(d.y, e.y), Math.max(d.x, e.x), Math.max(d.y, e.y)]); var f = [],
            g; var h = 0; for (g = b.length; h < g; ++h) { var l = b[h];
            a !== l && (c || l.Z !== e || l.X !== d) && Bm(d, e, l.Z, l.X, c) && f.push(l) } return f }

    function Bm(a, b, c, d, e) { var f = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y); if (0 !== f && (d = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / f, c = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / f, !e && d > ml && d < 1 - ml && c > ml && c < 1 - ml || e && 0 <= d && 1 >= d && 0 <= c && 1 >= c)) return [a.x + d * (b.x - a.x), a.y + d * (b.y - a.y)] }

    function Gm(a, b, c, d, e) { if (void 0 === b.Kb || void 0 === d.Kb) return !1; var f = (c.x - d.x) * (b.y - d.y) > (c.y - d.y) * (b.x - d.x);
        e = (e.x - d.x) * (b.y - d.y) < (e.y - d.y) * (b.x - d.x);
        a = (a.x - b.x) * (d.y - b.y) > (a.y - b.y) * (d.x - b.x);
        c = (c.x - b.x) * (d.y - b.y) < (c.y - b.y) * (d.x - b.x);
        b = b.Kb ? c || a : c && a; return (d.Kb ? e || f : e && f) && b }
    k = qm.prototype;
    k.wc = function(a, b) {
        var c = a.rd(),
            d = a.pa(),
            e = this.b.length,
            f = this.f.b.length;
        a = a.da();
        var g, h, l;
        var m = h = 0;
        for (g = c.length; m < g; ++m) { var n = c[m]; if (0 < n.length) { var p = Te(a, h, n[0], d, -this.origin[0], -this.origin[1]); if (p.length) { var q = [];
                    h = 1; for (l = n.length; h < l; ++h)
                        if (n[h] !== n[h - 1]) { var r = Te(a, n[h - 1], n[h], d, -this.origin[0], -this.origin[1]);
                            q.push(r) }
                    Xl(this.f, p, q, d);
                    rm(this, p, q, d) } }
            h = n[n.length - 1] }
        this.b.length > e && (this.g.push(e), this.i.push(b), this.l.u && (this.c.push(e), this.l.u = !1));
        this.f.b.length > f && Yl(this.f,
            b, f)
    };
    k.yc = function(a, b) { var c = a.ob(),
            d = a.pa(); if (0 < c.length) { a = a.da().map(Number); var e = Te(a, 0, c[0], d, -this.origin[0], -this.origin[1]); if (e.length) { var f = [],
                    g; var h = 1; for (g = c.length; h < g; ++h)
                    if (c[h] !== c[h - 1]) { var l = Te(a, c[h - 1], c[h], d, -this.origin[0], -this.origin[1]);
                        f.push(l) }
                this.g.push(this.b.length);
                this.i.push(b);
                this.l.u && (this.c.push(this.b.length), this.l.u = !1);
                Yl(this.f, b);
                Xl(this.f, e, f, d);
                rm(this, e, f, d) } } };
    k.eb = function(a) { this.s = new nl(this.a);
        this.j = new nl(this.b);
        this.g.push(this.b.length);
        this.f.eb(a);
        0 === this.c.length && 0 < this.o.length && (this.o = []);
        this.b = this.a = null };
    k.Db = function(a) { var b = this.s,
            c = this.j,
            d = this.f.Db(a); return function() { rl(a, b);
            rl(a, c);
            d() } };
    k.zf = function(a, b) { var c = sl(b, $l, am); if (this.v) var d = this.v;
        else this.v = d = new bm(a, c);
        b.bd(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 8, 0); return d };
    k.Af = function(a, b) { a.disableVertexAttribArray(b.b) };
    k.Nd = function(a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC),
            f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (mb(c)) { var g = this.g[this.g.length - 1]; for (c = this.c.length - 1; 0 <= c; --c) { var h = this.c[c]; var l = this.o[c];
                a.uniform4fv(this.v.B, l);
                hl(a, b, h, g);
                g = h } } else {
            var m = this.g.length - 2;
            l = g = this.g[m + 1];
            for (h = this.c.length - 1; 0 <= h; --h) {
                var n = this.o[h];
                a.uniform4fv(this.v.B, n);
                for (n = this.c[h]; 0 <= m && this.g[m] >= n;) {
                    var p = this.g[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (hl(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p
                }
                g !== l && (hl(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e))
    };
    k.De = function(a, b, c, d, e) { var f, g; var h = this.g.length - 2; var l = this.g[h + 1]; for (f = this.c.length - 1; 0 <= f; --f) { var m = this.o[f];
            a.uniform4fv(this.v.B, m); for (g = this.c[f]; 0 <= h && this.g[h] >= g;) { m = this.g[h]; var n = this.i[h]; var p = w(n).toString(); if (void 0 === c[p] && n.V() && (void 0 === e || fb(e, n.V().C())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), hl(a, b, m, l), l = d(n))) return l;
                h--;
                l = m } } };
    k.Oa = function(a, b) { a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = il : a = li(a).map(function(a, b) { return 3 != b ? a / 255 : a }) || il;
        this.l.fillColor && gc(a, this.l.fillColor) || (this.l.fillColor = a, this.l.u = !0, this.o.push(a));
        b ? this.f.Oa(null, b) : this.f.Oa(null, new ok({ color: [0, 0, 0, 0], lineWidth: 0 })) };

    function Hm(a, b) { this.b = b;
        this.a = [{ x: 0, y: 0, width: a, height: a }];
        this.c = {};
        this.g = gg(a, a);
        this.i = this.g.canvas }
    Hm.prototype.get = function(a) { return this.c[a] || null };
    Hm.prototype.add = function(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = this.a.length; g < f; ++g) {
            var h = this.a[g];
            if (h.width >= b + this.b && h.height >= c + this.b) return f = { offsetX: h.x + this.b, offsetY: h.y + this.b, image: this.i }, this.c[a] = f, d.call(e, this.g, h.x + this.b, h.y + this.b), a = g, b += this.b, d = c + this.b, h.width - b > h.height - d ? (c = { x: h.x + b, y: h.y, width: h.width - b, height: h.height }, b = { x: h.x, y: h.y + d, width: b, height: h.height - d }, Im(this, a, c, b)) : (c = { x: h.x + b, y: h.y, width: h.width - b, height: d }, b = { x: h.x, y: h.y + d, width: h.width, height: h.height - d },
                Im(this, a, c, b)), f
        }
        return null
    };

    function Im(a, b, c, d) { b = [b, 1];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.a.splice.apply(a.a, b) };

    function Jm(a) { a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.g = void 0 !== a.maxSize ? a.maxSize : void 0 !== ba ? ba : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.f = [new Hm(this.a, this.b)];
        this.c = this.a;
        this.i = [new Hm(this.c, this.b)] }

    function Km(a, b) { var c; var d = 0; for (c = a.length; d < c; ++d) { var e = a[d]; if (e = e.get(b)) return e } return null }

    function Lm(a, b) { return { offsetX: a.offsetX, offsetY: a.offsetY, image: a.image, sm: b.image } }
    Jm.prototype.add = function(a, b, c, d, e, f) { if (b + this.b > this.g || c + this.b > this.g) return null;
        d = Mm(this, !1, a, b, c, d, f); if (!d) return null;
        a = Mm(this, !0, a, b, c, void 0 !== e ? e : da, f); return Lm(d, a) };

    function Mm(a, b, c, d, e, f, g) { var h = b ? a.i : a.f,
            l; var m = 0; for (l = h.length; m < l; ++m) { var n = h[m]; if (n = n.add(c, d, e, f, g)) return n;
            n || m !== l - 1 || (b ? (n = Math.min(2 * a.c, a.g), a.c = n) : (n = Math.min(2 * a.a, a.g), a.a = n), n = new Hm(n, a.b), h.push(n), ++l) } return null };

    function Nm(a, b) { Dl.call(this, 0, b);
        this.c = [];
        this.va = [];
        this.Ub = gg(0, 0).canvas;
        this.P = { strokeColor: null, lineCap: void 0, lineDash: null, lineDashOffset: void 0, lineJoin: void 0, lineWidth: 0, miterLimit: void 0, fillColor: null, font: void 0, scale: void 0 };
        this.sa = "";
        this.ca = this.aa = this.ua = this.mb = void 0;
        this.H = {};
        this.l = void 0;
        this.opacity = this.scale = 1 }
    v(Nm, Dl);
    k = Nm.prototype;
    k.Wb = function(a, b) {
        if (this.sa) {
            var c = null,
                d = 2,
                e = 2;
            switch (a.T()) {
                case "Point":
                case "MultiPoint":
                    c = a.da();
                    d = c.length;
                    e = a.pa(); break;
                case "Circle":
                    c = a.wa(); break;
                case "LineString":
                    c = a.Ee(); break;
                case "MultiLineString":
                    c = a.Fe();
                    d = c.length; break;
                case "Polygon":
                    c = a.Sd(); break;
                case "MultiPolygon":
                    c = zi(a), d = c.length }
            this.g.push(this.b.length);
            this.i.push(b);
            a = this.l;
            b = this.sa.split("\n");
            var f = Om(this, b),
                g, h, l = Math.round(f[0] * this.mb - this.aa),
                m = Math.round(f[1] * this.ua - this.ca),
                n = this.P.lineWidth / 2 * this.P.scale;
            f = 0;
            for (g = b.length; f < g; ++f) {
                var p = 0;
                var q = a.height * f;
                var r = b[f].split("");
                var u = 0;
                for (h = r.length; u < h; ++u) {
                    var x = a.zh;
                    var C = r[u],
                        z = Km(x.f, C);
                    z ? (x = Km(x.i, C), x = Lm(z, x)) : x = null;
                    if (x) {
                        z = x.image;
                        this.D = l - p;
                        this.B = m - q;
                        this.G = 0 === u ? x.offsetX - n : x.offsetX;
                        this.O = x.offsetY;
                        this.height = a.height;
                        this.width = 0 === u || u === r.length - 1 ? a.width[r[u]] + n : a.width[r[u]];
                        this.oa = z.height;
                        this.qa = z.width;
                        0 === this.c.length ? this.c.push(z) : (x = this.c[this.c.length - 1], w(x) != w(z) && (this.v.push(this.b.length), this.c.push(z)));
                        x = c;
                        C = d;
                        var E = e;
                        for (z = 0; z < C; z += E) El(this, x, C, E)
                    }
                    p += this.width
                }
            }
        }
    };

    function Om(a, b) { var c = a.l,
            d = b.length * c.height; return [b.map(function(b) { var d = 0,
                e; var h = 0; for (e = b.length; h < e; ++h) { var l = b[h];
                c.width[l] || Pm(a, l);
                d += c.width[l] ? c.width[l] : 0 } return d }).reduce(function(a, b) { return Math.max(a, b) }), d] }

    function Pm(a, b) {
        if (1 === b.length) {
            var c = a.l,
                d = a.P;
            a = a.Ub.getContext("2d");
            a.font = d.font;
            a = Math.ceil(a.measureText(b).width * d.scale);
            c.zh.add(b, a, c.height, function(a, c, g) {
                a.font = d.font;
                a.fillStyle = d.fillColor;
                a.strokeStyle = d.strokeColor;
                a.lineWidth = d.lineWidth;
                a.lineCap = d.lineCap;
                a.lineJoin = d.lineJoin;
                a.miterLimit = d.miterLimit;
                a.textAlign = "left";
                a.textBaseline = "top";
                od && d.lineDash && (a.setLineDash(d.lineDash), a.lineDashOffset = d.lineDashOffset);
                1 !== d.scale && a.setTransform(d.scale, 0, 0, d.scale, 0, 0);
                d.strokeColor &&
                    a.strokeText(b, c, g);
                d.fillColor && a.fillText(b, c, g)
            }) && (c.width[b] = a)
        }
    }
    k.eb = function(a) { var b = a.b;
        this.v.push(this.b.length);
        this.o = this.v;
        this.s = new nl(this.a);
        this.j = new nl(this.b);
        Fl(this.va, this.c, {}, b);
        this.P = { strokeColor: null, lineCap: void 0, lineDash: null, lineDashOffset: void 0, lineJoin: void 0, lineWidth: 0, miterLimit: void 0, fillColor: null, font: void 0, scale: void 0 };
        this.sa = "";
        this.ca = this.aa = this.ua = this.mb = void 0;
        this.c = null;
        this.H = {};
        this.l = void 0;
        Dl.prototype.eb.call(this, a) };
    k.kb = function(a) {
        var b = this.P,
            c = a.Ea(),
            d = a.Fa();
        if (a && a.Ka() && (c || d)) {
            c ? (c = c.b, b.fillColor = pi(c ? c : il)) : b.fillColor = null;
            d ? (c = d.a, b.strokeColor = pi(c ? c : kl), b.lineWidth = d.c || 1, b.lineCap = d.f || "round", b.lineDashOffset = d.i || 0, b.lineJoin = d.j || "round", b.miterLimit = d.l || 10, d = d.g, b.lineDash = d ? d.slice() : jl) : (b.strokeColor = null, b.lineWidth = 0);
            b.font = a.a || "10px sans-serif";
            b.scale = a.b || 1;
            this.sa = a.Ka();
            d = Cj[a.f];
            c = Cj[a.j];
            this.mb = void 0 === d ? .5 : d;
            this.ua = void 0 === c ? .5 : c;
            this.aa = a.g || 0;
            this.ca = a.c || 0;
            this.rotateWithView = !!a.l;
            this.rotation = a.i || 0;
            a = [];
            for (var e in b)
                if (b[e] || 0 === b[e]) Array.isArray(b[e]) ? a = a.concat(b[e]) : a.push(b[e]);
            c = "";
            e = 0;
            for (d = a.length; e < d; ++e) c += a[e];
            e = c;
            this.H[e] || (a = this.Ub.getContext("2d"), a.font = b.font, a = Math.ceil((1.5 * a.measureText("M").width + b.lineWidth / 2) * b.scale), this.H[e] = { zh: new Jm({ space: b.lineWidth + 1 }), width: {}, height: a });
            this.l = this.H[e]
        } else this.sa = ""
    };
    k.gg = function() { return this.va };
    k.Zf = function() { return this.va };

    function Qm(a, b, c) { this.c = b;
        this.i = a;
        this.g = c;
        this.a = {} }
    v(Qm, hj);
    k = Qm.prototype;
    k.Vb = function() {};

    function Rm(a, b) { var c = [],
            d; for (d in a.a) { var e = a.a[d],
                f; for (f in e) c.push(e[f].Db(b)) } return function() { for (var a = c.length, b, d = 0; d < a; d++) b = c[d].apply(this, arguments); return b } }

    function Sm(a, b) { for (var c in a.a) { var d = a.a[c],
                e; for (e in d) d[e].eb(b) } }
    k.Ja = function(a, b) { var c = void 0 !== a ? a.toString() : "0";
        a = this.a[c];
        void 0 === a && (a = {}, this.a[c] = a);
        c = a[b];
        void 0 === c && (c = new Tm[b](this.i, this.c), a[b] = c); return c };
    k.wg = function() { return mb(this.a) };
    k.Ma = function(a, b, c, d, e, f, g, h) { var l = Object.keys(this.a).map(Number);
        l.sort(bc); var m, n; var p = 0; for (m = l.length; p < m; ++p) { var q = this.a[l[p].toString()]; var r = 0; for (n = Bj.length; r < n; ++r) { var u = q[Bj[r]];
                void 0 !== u && u.Ma(a, b, c, d, e, f, g, h, void 0, !1) } } };

    function Um(a, b, c, d, e, f, g, h, l, m, n) { var p = Vm,
            q = Object.keys(a.a).map(Number);
        q.sort(function(a, b) { return b - a }); var r, u; var x = 0; for (r = q.length; x < r; ++x) { var C = a.a[q[x].toString()]; for (u = Bj.length - 1; 0 <= u; --u) { var z = C[Bj[u]]; if (void 0 !== z && (z = z.Ma(b, c, d, e, p, f, g, h, l, m, n))) return z } } }
    k.Ga = function(a, b, c, d, e, f, g, h, l, m) { var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, yl(b)); var p;
        void 0 !== this.g && (p = Ea(Oa(a), d * this.g)); return Um(this, b, a, d, e, g, h, l, function(a) { var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b); if (0 < b[3] && (a = m(a))) return a }, !0, p) };

    function Wm(a, b, c, d, e, f, g, h) { var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, yl(c)); return void 0 !== Um(a, c, b, d, e, f, g, h, function() { var a = new Uint8Array(4);
            l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a); return 0 < a[3] }, !1) }
    var Vm = [1, 1],
        Tm = { Circle: ql, Image: Gl, LineString: Ll, Polygon: qm, Text: Nm };

    function Xm(a, b, c, d, e, f, g) { this.b = a;
        this.g = b;
        this.c = f;
        this.i = g;
        this.l = e;
        this.j = d;
        this.f = c;
        this.a = this.s = this.v = this.o = null }
    v(Xm, qi);

    function Ym(a, b, c) { var d = a.b;
        b = b.Ja(0, "Text");
        b.kb(a.a);
        b.Wb(c, null);
        b.eb(d);
        b.Ma(a.b, a.g, a.f, a.j, a.l, a.i, 1, {}, void 0, !1);
        b.Db(d)() }
    k = Xm.prototype;
    k.Bd = function(a) { this.Oa(a.Ea(), a.Fa());
        this.Zb(a.Y());
        this.kb(a.Ka()) };
    k.Hb = function(a) { switch (a.T()) {
            case "Point":
                this.xc(a, null); break;
            case "LineString":
                this.tc(a, null); break;
            case "Polygon":
                this.yc(a, null); break;
            case "MultiPoint":
                this.vc(a, null); break;
            case "MultiLineString":
                this.uc(a, null); break;
            case "MultiPolygon":
                this.wc(a, null); break;
            case "GeometryCollection":
                this.Ce(a, null); break;
            case "Circle":
                this.cc(a, null) } };
    k.Be = function(a, b) {
        (a = (0, b.ab)(a)) && fb(this.c, a.C()) && (this.Bd(b), this.Hb(a)) };
    k.Ce = function(a) { a = a.a; var b; var c = 0; for (b = a.length; c < b; ++c) this.Hb(a[c]) };
    k.xc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "Image");
        e.Zb(this.o);
        e.xc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.vc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "Image");
        e.Zb(this.o);
        e.vc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.tc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "LineString");
        e.Oa(null, this.s);
        e.tc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.uc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "LineString");
        e.Oa(null, this.s);
        e.uc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.yc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "Polygon");
        e.Oa(this.v, this.s);
        e.yc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.wc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "Polygon");
        e.Oa(this.v, this.s);
        e.wc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.cc = function(a, b) { var c = this.b,
            d = new Qm(1, this.c),
            e = d.Ja(0, "Circle");
        e.Oa(this.v, this.s);
        e.cc(a, b);
        e.eb(c);
        e.Ma(this.b, this.g, this.f, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Db(c)();
        this.a && Ym(this, d, a) };
    k.Zb = function(a) { this.o = a };
    k.Oa = function(a, b) { this.v = a;
        this.s = b };
    k.kb = function(a) { this.a = a };
    var Zm = new Zk("precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"),
        $m = new $k("varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}");

    function an(a, b) { this.f = a.getUniformLocation(b, "d");
        this.c = a.getUniformLocation(b, "e");
        this.g = a.getUniformLocation(b, "f");
        this.i = a.getUniformLocation(b, "g");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c") };

    function bn(a, b) { Ai.call(this, b);
        this.c = a;
        this.W = new nl([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.f = this.Mb = null;
        this.j = void 0;
        this.v = Ve();
        this.P = Ve();
        this.B = dl();
        this.o = null }
    v(bn, Ai);

    function cn(a, b, c) { var d = a.c.g; if (void 0 === a.j || a.j != c) { b.postRenderFunctions.push(function(a, b, c) { a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c)) }.bind(null, d, a.f, a.Mb));
            b = zl(d, c, c); var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.Mb = b;
            a.f = e;
            a.j = c } else d.bindFramebuffer(36160, a.f) }
    bn.prototype.Wi = function(a, b, c) {
        dn(this, "precompose", c, a);
        gl(c, 34962, this.W);
        var d = c.b,
            e = sl(c, Zm, $m);
        if (this.o) var f = this.o;
        else this.o = f = new an(d, e);
        c.bd(e) && (d.enableVertexAttribArray(f.b), d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0), d.enableVertexAttribArray(f.a), d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8), d.uniform1i(f.i, 0));
        d.uniformMatrix4fv(f.f, !1, el(this.B, this.v));
        d.uniformMatrix4fv(f.c, !1, el(this.B, this.P));
        d.uniform1f(f.g, b.opacity);
        d.bindTexture(3553, this.Mb);
        d.drawArrays(5, 0, 4);
        dn(this, "postcompose",
            c, a)
    };

    function dn(a, b, c, d) { a = a.a; if (Tc(a, b)) { var e = d.viewState;
            a.b(new Yh(b, new Xm(c, e.center, e.resolution, e.rotation, d.size, d.extent, d.pixelRatio), d, null, c)) } }
    bn.prototype.zg = function() { this.f = this.Mb = null;
        this.j = void 0 };

    function en(a, b, c, d, e) { this.c = void 0 !== e ? e : null;
        Rk.call(this, a, b, c, void 0 !== e ? 0 : 2);
        this.g = d }
    v(en, Rk);
    en.prototype.i = function(a) { this.state = a ? 3 : 2;
        this.u() };
    en.prototype.load = function() { 0 == this.state && (this.state = 1, this.u(), this.c(this.i.bind(this))) };
    en.prototype.Y = function() { return this.g };

    function fn(a, b, c, d) { var e = Zb(c, b, a);
        c = Mb(b, d, c);
        b = b.Wc();
        void 0 !== b && (c *= b);
        b = a.Wc();
        void 0 !== b && (c /= b);
        b = a.C(); if (!b || Ha(b, e)) a = Mb(a, c, e) / c, isFinite(a) && 0 < a && (c /= a); return c }

    function gn(a, b, c, d) { a = c - a;
        b = d - b; var e = Math.sqrt(a * a + b * b); return [Math.round(c + a / e), Math.round(d + b / e)] }

    function hn(a, b, c, d, e, f, g, h, l, m, n) {
        var p = gg(Math.round(c * a), Math.round(c * b));
        if (0 === l.length) return p.canvas;
        p.scale(c, c);
        var q = Ca();
        l.forEach(function(a) { Ta(q, a.extent) });
        var r = gg(Math.round(c * ab(q) / d), Math.round(c * bb(q) / d)),
            u = c / d;
        l.forEach(function(a) { r.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, ab(a.extent) * u, bb(a.extent) * u) });
        var x = Ya(g);
        h.c.forEach(function(a) {
            var b = a.source,
                e = a.target,
                g = b[1][0],
                h = b[1][1],
                l = b[2][0],
                m = b[2][1];
            a = (e[0][0] -
                x[0]) / f;
            var n = -(e[0][1] - x[1]) / f,
                u = (e[1][0] - x[0]) / f,
                C = -(e[1][1] - x[1]) / f,
                N = (e[2][0] - x[0]) / f,
                hc = -(e[2][1] - x[1]) / f;
            e = b[0][0];
            b = b[0][1];
            g -= e;
            h -= b;
            l -= e;
            m -= b;
            a: {
                g = [
                    [g, h, 0, 0, u - a],
                    [l, m, 0, 0, N - a],
                    [0, 0, g, h, C - n],
                    [0, 0, l, m, hc - n]
                ];h = g.length;
                for (l = 0; l < h; l++) { m = l; for (var ib = Math.abs(g[l][l]), jc = l + 1; jc < h; jc++) { var kc = Math.abs(g[jc][l]);
                        kc > ib && (ib = kc, m = jc) } if (0 === ib) { g = null; break a }
                    ib = g[m];
                    g[m] = g[l];
                    g[l] = ib; for (m = l + 1; m < h; m++)
                        for (ib = -g[m][l] / g[l][l], jc = l; jc < h + 1; jc++) g[m][jc] = l == jc ? 0 : g[m][jc] + ib * g[l][jc] }
                l = Array(h);
                for (m =
                    h - 1; 0 <= m; m--)
                    for (l[m] = g[m][h] / g[m][m], ib = m - 1; 0 <= ib; ib--) g[ib][h] -= g[ib][m] * l[m];g = l
            }
            g && (p.save(), p.beginPath(), l = (a + u + N) / 3, m = (n + C + hc) / 3, h = gn(l, m, a, n), u = gn(l, m, u, C), N = gn(l, m, N, hc), p.moveTo(u[0], u[1]), p.lineTo(h[0], h[1]), p.lineTo(N[0], N[1]), p.clip(), p.transform(g[0], g[2], g[1], g[3], a, n), p.translate(q[0] - e, q[3] - b), p.scale(d / c, -d / c), p.drawImage(r.canvas, 0, 0), p.restore())
        });
        n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, h.c.forEach(function(a) {
            var b = a.target;
            a = (b[0][0] - x[0]) / f;
            var c = -(b[0][1] - x[1]) / f,
                d = (b[1][0] - x[0]) / f,
                e = -(b[1][1] - x[1]) / f,
                g = (b[2][0] - x[0]) / f;
            b = -(b[2][1] - x[1]) / f;
            p.beginPath();
            p.moveTo(d, e);
            p.lineTo(a, c);
            p.lineTo(g, b);
            p.closePath();
            p.stroke()
        }), p.restore());
        return p.canvas
    };

    function jn(a, b, c, d, e) {
        this.g = a;
        this.i = b;
        var f = {},
            g = Xb(this.i, this.g);
        this.a = function(a) { var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a)); return f[b] };
        this.f = d;
        this.v = e * e;
        this.c = [];
        this.l = !1;
        this.s = this.g.g && !!d && !!this.g.C() && ab(d) == ab(this.g.C());
        this.b = this.g.C() ? ab(this.g.C()) : null;
        this.j = this.i.C() ? ab(this.i.C()) : null;
        a = Ya(c);
        b = Xa(c);
        d = Wa(c);
        c = Va(c);
        e = this.a(a);
        var h = this.a(b),
            l = this.a(d),
            m = this.a(c);
        kn(this, a, b, d, c, e, h, l, m, 10);
        if (this.l) {
            var n = Infinity;
            this.c.forEach(function(a) {
                n = Math.min(n, a.source[0][0],
                    a.source[1][0], a.source[2][0])
            });
            this.c.forEach(function(a) { if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) { var b = [
                        [a.source[0][0], a.source[0][1]],
                        [a.source[1][0], a.source[1][1]],
                        [a.source[2][0], a.source[2][1]]
                    ];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b) } }, this)
        }
        f = {}
    }

    function kn(a, b, c, d, e, f, g, h, l, m) {
        var n = Ba([f, g, h, l]),
            p = a.b ? ab(n) / a.b : null,
            q = a.b,
            r = a.g.g && .5 < p && 1 > p,
            u = !1;
        if (0 < m) { if (a.i.c && a.j) { var x = Ba([b, c, d, e]);
                u |= .25 < ab(x) / a.j }!r && a.g.c && p && (u |= .25 < p) }
        if (u || !a.f || fb(n, a.f)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))
                if (0 < m) u = !0;
                else return;
            if (0 < m && (u || (n = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]), q = r ? (va(f[0], q) + va(h[0], q)) / 2 - va(n[0], q) : (f[0] + h[0]) / 2 - n[0], n = (f[1] + h[1]) / 2 - n[1],
                    u = q * q + n * n > a.v), u)) { Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], q = a.a(r), n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2], p = a.a(n), kn(a, b, c, r, n, f, g, q, p, m - 1), kn(a, n, r, d, e, p, q, h, l, m - 1)) : (r = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], q = a.a(r), n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(n), kn(a, b, r, n, e, f, q, p, l, m - 1), kn(a, r, c, d, n, q, g, h, p, m - 1)); return }
            if (r) { if (!a.s) return;
                a.l = !0 }
            a.c.push({ source: [f, h, l], target: [b, d, e] });
            a.c.push({ source: [f, g, h], target: [b, c, d] })
        }
    }

    function ln(a) { var b = Ca();
        a.c.forEach(function(a) { a = a.source;
            Da(b, a[0]);
            Da(b, a[1]);
            Da(b, a[2]) }); return b };

    function mn(a, b, c, d, e, f) { this.s = b;
        this.l = a.C(); var g = b.C(),
            h = g ? eb(c, g) : c;
        g = fn(a, b, cb(h), d);
        this.f = new jn(a, b, h, this.l, .5 * g);
        this.c = d;
        this.g = c;
        a = ln(this.f);
        this.j = (this.Tb = f(a, g, e)) ? this.Tb.a : 1;
        this.ie = this.i = null;
        e = 2;
        this.Tb && (e = 0);
        Rk.call(this, c, d, this.j, e) }
    v(mn, Rk);
    mn.prototype.ha = function() { 1 == this.state && (Gc(this.ie), this.ie = null);
        Rk.prototype.ha.call(this) };
    mn.prototype.Y = function() { return this.i };
    mn.prototype.fe = function() { var a = this.Tb.getState();
        2 == a && (this.i = hn(ab(this.g) / this.c, bb(this.g) / this.c, this.j, this.Tb.resolution, 0, this.c, this.g, this.f, [{ extent: this.Tb.C(), image: this.Tb.Y() }], 0));
        this.state = a;
        this.u() };
    mn.prototype.load = function() { if (0 == this.state) { this.state = 1;
            this.u(); var a = this.Tb.getState();
            2 == a || 3 == a ? this.fe() : (this.ie = y(this.Tb, "change", function() { var a = this.Tb.getState(); if (2 == a || 3 == a) Gc(this.ie), this.ie = null, this.fe() }, this), this.Tb.load()) } };

    function nn(a) { Vc.call(this);
        this.c = Nb(a.projection);
        this.v = null;
        this.B = on(this, a.attributions);
        this.H = a.logo;
        this.ua = void 0 !== a.state ? a.state : "ready";
        this.D = void 0 !== a.wrapX ? a.wrapX : !1 }
    v(nn, Vc);

    function on(a, b) { if (!b) return null; if (b instanceof Ec) return a.v = [b],
            function() { return [b.mg] }; if (Array.isArray(b)) { if (b[0] instanceof Ec) { a.v = b; var c = b.map(function(a) { return a.mg }); return function() { return c } }
            a.v = b.map(function(a) { return new Ec({ html: a }) }); return function() { return b } } if ("function" === typeof b) return b;
        a.v = [new Ec({ html: b })]; return function() { return [b] } }
    k = nn.prototype;
    k.Ga = da;
    k.za = function() { return this.v };
    k.Aa = function() { return this.H };
    k.Da = function() { return this.c };
    k.getState = function() { return this.ua };
    k.ra = function() { this.u() };
    k.ta = function(a) { this.B = on(this, a);
        this.u() };

    function pn(a, b) { a.ua = b;
        a.u() };

    function qn(a) { nn.call(this, { attributions: a.attributions, extent: a.extent, logo: a.logo, projection: a.projection, state: a.state });
        this.o = void 0 !== a.resolutions ? a.resolutions : null;
        this.i = null;
        this.va = 0 }
    v(qn, nn);

    function rn(a, b) { a.o && (b = a.o[dc(a.o, b, 0)]); return b }
    qn.prototype.Y = function(a, b, c, d) { var e = this.c; if (e && d && !Wb(e, d)) { if (this.i) { if (this.va == this.g && Wb(this.i.s, d) && this.i.resolution == b && Ra(this.i.C(), a)) return this.i;
                Pc(this.i);
                this.i = null }
            this.i = new mn(e, d, a, b, c, function(a, b, c) { return this.Vc(a, b, c, e) }.bind(this));
            this.va = this.g; return this.i }
        e && (d = e); return this.Vc(a, b, c, d) };
    qn.prototype.j = function(a) { a = a.target; switch (a.getState()) {
            case 1:
                this.b(new sn(tn, a)); break;
            case 2:
                this.b(new sn(un, a)); break;
            case 3:
                this.b(new sn(vn, a)) } };

    function wn(a, b) { a.Y().src = b }

    function sn(a, b) { Qc.call(this, a);
        this.image = b }
    v(sn, Qc);
    var tn = "imageloadstart",
        un = "imageloadend",
        vn = "imageloaderror";

    function xn(a) { qn.call(this, { attributions: a.attributions, logo: a.logo, projection: a.projection, resolutions: a.resolutions, state: a.state });
        this.ya = a.canvasFunction;
        this.aa = null;
        this.ca = 0;
        this.Xa = void 0 !== a.ratio ? a.ratio : 1.5 }
    v(xn, qn);
    xn.prototype.Vc = function(a, b, c, d) { b = rn(this, b); var e = this.aa; if (e && this.ca == this.g && e.resolution == b && e.a == c && Ka(e.C(), a)) return e;
        a = a.slice();
        gb(a, this.Xa);
        (d = this.ya(a, b, c, [ab(a) / b * c, bb(a) / b * c], d)) && (e = new en(a, b, c, d));
        this.aa = e;
        this.ca = this.g; return e };

    function yn(a) { this.a = a.source;
        this.xb = Ve();
        this.f = gg();
        this.l = [0, 0];
        this.G = gj.Hc(9);
        this.nb = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
        this.O = null;
        xn.call(this, { attributions: a.attributions, canvasFunction: this.Hk.bind(this), logo: a.logo, projection: a.projection, ratio: a.ratio, resolutions: a.resolutions, state: this.a.getState() });
        this.W = null;
        this.s = void 0;
        this.Yi(a.style);
        y(this.a, "change", this.Ko, this) }
    v(yn, xn);
    k = yn.prototype;
    k.Hk = function(a, b, c, d, e) {
        var f = new Hj(.5 * b / c, a, b, c, this.a.aa, this.G, this.nb);
        this.a.$d(a, b, e);
        var g = !1;
        this.a.dc(a, function(a) { var d; if (!(d = g)) { var e;
                (d = a.fb()) ? e = d.call(a, b): this.s && (e = this.s(a, b)); if (e) { var h, p = !1;
                    Array.isArray(e) || (e = [e]);
                    d = 0; for (h = e.length; d < h; ++d) p = Sj(f, a, e[d], Rj(b, c), this.Jo, this) || p;
                    d = p } else d = !1 }
            g = d }, this);
        Mj(f);
        if (g) return null;
        this.l[0] != d[0] || this.l[1] != d[1] ? (this.f.canvas.width = d[0], this.f.canvas.height = d[1], this.l[0] = d[0], this.l[1] = d[1]) : this.f.clearRect(0, 0, d[0], d[1]);
        a = zn(this, cb(a), b, c, d);
        f.Ma(this.f, a, 0, {});
        this.O = f;
        this.G.clear();
        return this.f.canvas
    };
    k.Ga = function(a, b, c, d, e, f) { if (this.O) { var g = {};
            a = this.O.Ga(a, b, 0, d, e, function(a) { var b = w(a).toString(); if (!(b in g)) return g[b] = !0, f(a) }, null);
            this.G.clear(); return a } };
    k.Ho = function() { return this.a };
    k.Io = function() { return this.W };
    k.fb = function() { return this.s };

    function zn(a, b, c, d, e) { c = d / c; return df(a.xb, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1]) }
    k.Jo = function() { this.u() };
    k.Ko = function() { pn(this, this.a.getState()) };
    k.Yi = function(a) { this.W = void 0 !== a ? a : tk;
        this.s = a ? rk(this.W) : void 0;
        this.u() };

    function An(a, b) { bn.call(this, a, b);
        this.l = this.i = this.N = null }
    v(An, bn);
    An.handles = function(a, b) { return "webgl" === a && "IMAGE" === b.T() };
    An.create = function(a, b) { return new An(a, b) };

    function Bn(a, b) { b = b.Y(); return Cl(a.c.g, b) }
    An.prototype.Ga = function(a, b, c, d, e) { var f = this.a; return f.ia().Ga(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) { return d.call(e, a, f) }) };
    An.prototype.Ag = function(a, b) {
        var c = this.c.g,
            d = a.pixelRatio,
            e = a.viewState,
            f = e.center,
            g = e.resolution,
            h = e.rotation,
            l = this.N,
            m = this.Mb,
            n = this.a.ia(),
            p = a.viewHints,
            q = a.extent;
        void 0 !== b.extent && (q = eb(q, b.extent));
        p[0] || p[1] || $a(q) || (b = n.Y(q, g, d, e.projection)) && Di(this, b) && (l = b, m = Bn(this, b), this.Mb && a.postRenderFunctions.push(function(a, b) { a.isContextLost() || a.deleteTexture(b) }.bind(null, c, this.Mb)));
        l && (c = this.c.i.j, Cn(this, c.width, c.height, d, f, g, h, l.C()), this.l = null, d = this.v, We(d), bf(d, 1, -1), cf(d, 0, -1), this.N = l, this.Mb = m, Fi(a, n));
        return !!l
    };

    function Cn(a, b, c, d, e, f, g, h) { b *= f;
        c *= f;
        a = a.P;
        We(a);
        bf(a, 2 * d / b, 2 * d / c);
        af(a, -g);
        cf(a, h[0] - e[0], h[1] - e[1]);
        bf(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        cf(a, 1, 1) }
    An.prototype.bf = function(a, b) { return void 0 !== this.Ga(a, b, 0, Qe, this) };
    An.prototype.yg = function(a, b, c, d) {
        if (this.N && this.N.Y())
            if (this.a.ia() instanceof yn) { var e = $e(b.pixelToCoordinateTransform, a.slice()); if (this.Ga(e, b, 0, Qe, this)) return c.call(d, this.a, null) } else {
                e = [this.N.Y().width, this.N.Y().height];
                if (!this.l) { var f = b.size;
                    b = Ve();
                    cf(b, -1, -1);
                    bf(b, 2 / f[0], 2 / f[1]);
                    cf(b, 0, f[1]);
                    bf(b, 1, -1);
                    f = ef(this.P.slice()); var g = Ve();
                    cf(g, 0, e[1]);
                    bf(g, 1, -1);
                    bf(g, e[0] / 2, e[1] / 2);
                    cf(g, 1, 1);
                    Ye(g, f);
                    Ye(g, b);
                    this.l = g }
                a = $e(this.l, a.slice());
                if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.i ||
                        (this.i = gg(1, 1)), this.i.clearRect(0, 0, 1, 1), this.i.drawImage(this.N.Y(), a[0], a[1], 1, 1, 0, 0, 1, 1), e = this.i.getImageData(0, 0, 1, 1).data, 0 < e[3])) return c.call(d, this.a, e)
            }
    };

    function Dn(a, b) {
        Vi.call(this, 0, b);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.P = this.D = 0;
        this.B = gg();
        this.s = !0;
        this.g = gd(this.b, { antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !1, stencil: !0 });
        this.i = new xl(this.b, this.g);
        y(this.b, "webglcontextlost", this.to, this);
        y(this.b, "webglcontextrestored", this.uo, this);
        this.a = new Zh;
        this.o = null;
        this.j = new ge(function(a) { var b = a[1];
            a = a[2]; var c = b[0] - this.o[0];
            b = b[1] - this.o[1]; return 65536 * Math.log(a) + Math.sqrt(c * c + b * b) / a }.bind(this), function(a) { return a[0].ib() });
        this.H = function() { if (0 !== this.j.b.length) { ke(this.j); var a = he(this.j);
                En(this, a[0], a[3], a[4]) } return !1 }.bind(this);
        this.f = 0;
        Fn(this)
    }
    v(Dn, Vi);
    Dn.handles = function(a) { return hd && "webgl" === a };
    Dn.create = function(a, b) { return new Dn(a, b) };

    function En(a, b, c, d) {
        var e = a.g,
            f = b.ib();
        if (a.a.a.hasOwnProperty(f)) a = a.a.get(f), e.bindTexture(3553, a.Mb), 9729 != a.ei && (e.texParameteri(3553, 10240, 9729), a.ei = 9729), 9729 != a.gi && (e.texParameteri(3553, 10241, 9729), a.gi = 9729);
        else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) { var h = a.B.canvas,
                    l = a.B;
                a.D !== c[0] || a.P !== c[1] ? (h.width = c[0], h.height = c[1], a.D = c[0], a.P = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.Y(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h) } else e.texImage2D(3553,
                0, 6408, 6408, 5121, b.Y());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.a.set(f, { Mb: g, ei: 9729, gi: 9729 })
        }
    }

    function Gn(a, b, c) { var d = a.l; if (Tc(d, b)) { a = a.i; var e = c.viewState;
            d.b(new Yh(b, new Xm(a, e.center, e.resolution, e.rotation, c.size, c.extent, c.pixelRatio), c, null, a)) } }
    k = Dn.prototype;
    k.ha = function() { var a = this.g;
        a.isContextLost() || this.a.forEach(function(b) { b && a.deleteTexture(b.Mb) });
        Pc(this.i);
        Vi.prototype.ha.call(this) };
    k.Uk = function(a, b) { a = this.g; for (var c; 1024 < this.a.i - this.f;) { if (c = this.a.g.Nc) a.deleteTexture(c.Mb);
            else if (+this.a.g.ic == b.index) break;
            else --this.f;
            this.a.pop() } };
    k.T = function() { return "webgl" };
    k.to = function(a) { a.preventDefault();
        this.a.clear();
        this.f = 0;
        a = this.c; for (var b in a) a[b].zg() };
    k.uo = function() { Fn(this);
        this.l.render() };

    function Fn(a) { a = a.g;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960) }
    k.ah = function(a) {
        var b = this.i,
            c = this.g;
        if (c.isContextLost()) return !1;
        if (!a) return this.s && (this.b.style.display = "none", this.s = !1), !1;
        this.o = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.f;
        Gn(this, "precompose", a);
        var d = [],
            e = a.layerStatesArray;
        ic(e);
        var f = a.viewState.resolution,
            g;
        var h = 0;
        for (g = e.length; h < g; ++h) { var l = e[h]; if (wg(l, f) && "ready" == l.Qj) { var m = Yi(this, l.layer);
                m.Ag(a, l, b) && d.push(l) } }
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.b.width != e || this.b.height != f) this.b.width =
            e, this.b.height = f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.b.width, this.b.height);
        h = 0;
        for (g = d.length; h < g; ++h) l = d[h], m = Yi(this, l.layer), m.Wi(a, l, b);
        this.s || (this.b.style.display = "", this.s = !0);
        Wi(a);
        1024 < this.a.i - this.f && a.postRenderFunctions.push(this.Uk.bind(this));
        0 !== this.j.b.length && (a.postRenderFunctions.push(this.H), a.animate = !0);
        Gn(this, "postcompose", a);
        Zi(this, a);
        a.postRenderFunctions.push(Xi)
    };
    k.Ga = function(a, b, c, d, e, f, g) { if (this.g.isContextLost()) return !1; var h = b.viewState,
            l = b.layerStatesArray,
            m; for (m = l.length - 1; 0 <= m; --m) { var n = l[m]; var p = n.layer; if (wg(n, h.resolution) && f.call(g, p) && (n = Yi(this, p).Ga(a, b, c, d, e))) return n } };
    k.Ri = function(a, b, c, d, e) { c = !1; if (this.g.isContextLost()) return !1; var f = b.viewState,
            g = b.layerStatesArray,
            h; for (h = g.length - 1; 0 <= h; --h) { var l = g[h],
                m = l.layer; if (wg(l, f.resolution) && d.call(e, m) && (c = Yi(this, m).bf(a, b))) return !0 } return c };
    k.Qi = function(a, b, c, d, e) { if (this.g.isContextLost()) return !1; var f = b.viewState,
            g = b.layerStatesArray,
            h; for (h = g.length - 1; 0 <= h; --h) { var l = g[h]; var m = l.layer; if (wg(l, f.resolution) && e.call(d, m) && (l = Yi(this, m).yg(a, b, c, d))) return l } };
    var Hn = new Zk("precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"),
        In = new $k("varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}");

    function Jn(a, b) { this.c = a.getUniformLocation(b, "d");
        this.g = a.getUniformLocation(b, "e");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c") };

    function Kn(a, b) { bn.call(this, a, b);
        this.G = Hn;
        this.ca = In;
        this.i = null;
        this.H = new nl([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.D = this.l = null;
        this.s = -1;
        this.O = [0, 0] }
    v(Kn, bn);
    Kn.handles = function(a, b) { return "webgl" === a && "TILE" === b.T() };
    Kn.create = function(a, b) { return new Kn(a, b) };
    k = Kn.prototype;
    k.ha = function() { rl(this.c.i, this.H);
        bn.prototype.ha.call(this) };
    k.Pf = function(a, b, c) { var d = this.c; return function(e, f) { return Bi(a, b, e, f, function(a) { var b = d.a.a.hasOwnProperty(a.ib());
                b && (c[e] || (c[e] = {}), c[e][a.xa.toString()] = a); return b }) } };
    k.zg = function() { bn.prototype.zg.call(this);
        this.i = null };
    k.Ag = function(a, b, c) {
        var d = this.c,
            e = c.b,
            f = a.viewState,
            g = f.projection,
            h = this.a,
            l = h.ia(),
            m = l.bb(g),
            n = m.Bc(f.resolution),
            p = m.Sa(n),
            q = l.Yd(n, a.pixelRatio, g),
            r = q[0] / Aa(m.Za(n), this.O)[0],
            u = p / r,
            x = l.Xc(r) * l.Xf(g),
            C = f.center,
            z = a.extent,
            E = tc(m, z, n);
        if (this.l && la(this.l, E) && this.s == l.g) u = this.D;
        else {
            var V = [E.la - E.fa + 1, E.ka - E.ea + 1],
                ya = ra(Math.max(V[0] * q[0], V[1] * q[1]));
            V = u * ya;
            var fa = m.Gc(n),
                pa = fa[0] + E.fa * q[0] * u;
            u = fa[1] + E.ea * q[1] * u;
            u = [pa, u, pa + V, u + V];
            cn(this, a, ya);
            e.viewport(0, 0, ya, ya);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            ya = sl(c, this.G, this.ca);
            c.bd(ya);
            this.i || (this.i = new Jn(e, ya));
            gl(c, 34962, this.H);
            e.enableVertexAttribArray(this.i.b);
            e.vertexAttribPointer(this.i.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.i.a);
            e.vertexAttribPointer(this.i.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.i.g, 0);
            c = {};
            c[n] = {};
            var Ja = this.Pf(l, g, c),
                ma = h.i();
            ya = !0;
            pa = Ca();
            var Sa = new ia(0, 0, 0, 0),
                N, hc;
            for (N = E.fa; N <= E.la; ++N)
                for (hc = E.ea; hc <= E.ka; ++hc) {
                    fa = l.$c(n, N, hc, r, g);
                    if (void 0 !== b.extent) { var ib = m.La(fa.xa, pa); if (!fb(ib, b.extent)) continue }
                    ib =
                        fa.getState();
                    (ib = 2 == ib || 4 == ib || 3 == ib && !ma) || (fa = ej(fa));
                    ib = fa.getState();
                    if (2 == ib) { if (d.a.a.hasOwnProperty(fa.ib())) { c[n][fa.xa.toString()] = fa; continue } } else if (4 == ib || 3 == ib && !ma) continue;
                    ya = !1;
                    ib = uc(m, fa.xa, Ja, Sa, pa);
                    ib || (fa = vc(m, fa.xa, Sa, pa)) && Ja(n + 1, fa)
                }
            b = Object.keys(c).map(Number);
            b.sort(bc);
            Ja = new Float32Array(4);
            var jc;
            ma = 0;
            for (Sa = b.length; ma < Sa; ++ma)
                for (jc in N = c[b[ma]], N) fa = N[jc], ib = m.La(fa.xa, pa), Ja[0] = 2 * (ib[2] - ib[0]) / V, Ja[1] = 2 * (ib[3] - ib[1]) / V, Ja[2] = 2 * (ib[0] - u[0]) / V - 1, Ja[3] = 2 * (ib[1] - u[1]) /
                    V - 1, e.uniform4fv(this.i.c, Ja), En(d, fa, q, x * r), e.drawArrays(5, 0, 4);
            ya ? (this.l = E, this.D = u, this.s = l.g) : (this.D = this.l = null, this.s = -1, a.animate = !0)
        }
        Gi(a.usedTiles, l, n, E);
        var kc = d.j;
        Hi(a, l, m, r, g, z, n, h.c(), function(a) { 2 != a.getState() || d.a.a.hasOwnProperty(a.ib()) || a.ib() in kc.a || kc.i([a, yc(m, a.xa), m.Sa(a.xa[0]), q, x * r]) }, this);
        Ei(a, l);
        Fi(a, l);
        e = this.v;
        We(e);
        cf(e, (Math.round(C[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(C[1] / p) * p - u[1]) / (u[3] - u[1]));
        0 !== f.rotation && af(e, f.rotation);
        bf(e, a.size[0] * f.resolution / (u[2] -
            u[0]), a.size[1] * f.resolution / (u[3] - u[1]));
        cf(e, -.5, -.5);
        return !0
    };
    k.yg = function(a, b, c, d) { if (this.f) { a = $e(this.v, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]].slice());
            a = [a[0] * this.j, a[1] * this.j];
            b = this.c.i.b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.f); var e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e); if (0 < e[3]) return c.call(d, this.a, e) } };

    function Ln(a, b) { bn.call(this, a, b);
        this.s = !1;
        this.O = -1;
        this.G = NaN;
        this.D = Ca();
        this.l = this.i = this.H = null }
    v(Ln, bn);
    Ln.handles = function(a, b) { return "webgl" === a && "VECTOR" === b.T() };
    Ln.create = function(a, b) { return new Ln(a, b) };
    k = Ln.prototype;
    k.Wi = function(a, b, c) { this.l = b; var d = a.viewState,
            e = this.i,
            f = a.size,
            g = a.pixelRatio,
            h = this.c.g;
        e && !e.wg() && (h.enable(h.SCISSOR_TEST), h.scissor(0, 0, f[0] * g, f[1] * g), e.Ma(c, d.center, d.resolution, d.rotation, f, g, b.opacity, b.Se ? a.skippedFeatureUids : {}), h.disable(h.SCISSOR_TEST)) };
    k.ha = function() { var a = this.i;
        a && (Rm(a, this.c.i)(), this.i = null);
        bn.prototype.ha.call(this) };
    k.Ga = function(a, b, c, d, e) { if (this.i && this.l) { c = b.viewState; var f = this.a,
                g = {}; return this.i.Ga(a, this.c.i, c.center, c.resolution, c.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function(a) { var b = w(a).toString(); if (!(b in g)) return g[b] = !0, d.call(e, a, f) }) } };
    k.bf = function(a, b) { if (this.i && this.l) { var c = b.viewState; return Wm(this.i, a, this.c.i, c.resolution, c.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids) } return !1 };
    k.yg = function(a, b, c, d) { a = $e(b.pixelToCoordinateTransform, a.slice()); if (this.bf(a, b)) return c.call(d, this.a, null) };
    k.Xi = function() { Ci(this) };
    k.Ag = function(a, b, c) {
        function d(a) { var b = a.fb(); if (b) var c = b.call(a, m);
            else(b = e.fb()) && (c = b(a, m)); if (c) { if (c) { b = !1; if (Array.isArray(c))
                        for (var d = c.length - 1; 0 <= d; --d) b = Sj(q, a, c[d], Rj(m, n), this.Xi, this) || b;
                    else b = Sj(q, a, c, Rj(m, n), this.Xi, this) || b;
                    a = b } else a = !1;
                this.s = this.s || a } }
        var e = this.a;
        b = e.ia();
        Fi(a, b);
        var f = a.viewHints[0],
            g = a.viewHints[1],
            h = e.aa,
            l = e.ca;
        if (!this.s && !h && f || !l && g) return !0;
        g = a.extent;
        h = a.viewState;
        f = h.projection;
        var m = h.resolution,
            n = a.pixelRatio;
        h = e.g;
        var p = e.f;
        l = e.get(Wj);
        void 0 ===
            l && (l = Qj);
        g = Ea(g, p * m);
        if (!this.s && this.G == m && this.O == h && this.H == l && Ka(this.D, g)) return !0;
        this.i && a.postRenderFunctions.push(Rm(this.i, c));
        this.s = !1;
        var q = new Qm(.5 * m / n, g, e.f);
        b.$d(g, m, f);
        if (l) { var r = [];
            b.dc(g, function(a) { r.push(a) }, this);
            r.sort(l);
            r.forEach(d, this) } else b.dc(g, d, this);
        Sm(q, c);
        this.G = m;
        this.O = h;
        this.H = l;
        this.D = g;
        this.i = q;
        return !0
    };
    pg("MAP_RENDERER", $i);
    qg([Si, bj, Vj, Xj]);
    pg("MAP_RENDERER", Dn);
    qg([An, Kn, Ln]);

    function J(a) { a = jb({}, a);
        a.controls || (a.controls = Dg());
        a.interactions || (a.interactions = Xh());
        G.call(this, a) }
    v(J, G);

    function Mn(a) {
        Vc.call(this);
        this.id = a.id;
        this.insertFirst = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.stopEvent = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.element = document.createElement("DIV");
        this.element.className = void 0 !== a.className ? a.className : "ol-overlay-container ol-selectable";
        this.element.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.autoPanAnimation = a.autoPanAnimation || {};
        this.autoPanMargin = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {
            ye: "",
            Re: "",
            vf: "",
            Cf: "",
            visible: !0
        };
        this.c = null;
        y(this, Xc(Nn), this.Sl, this);
        y(this, Xc(On), this.bm, this);
        y(this, Xc(Pn), this.fm, this);
        y(this, Xc(Qn), this.hm, this);
        y(this, Xc(Rn), this.im, this);
        void 0 !== a.element && this.Cj(a.element);
        this.Hj(void 0 !== a.offset ? a.offset : [0, 0]);
        this.Kj(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.Ve(a.position)
    }
    v(Mn, Vc);
    k = Mn.prototype;
    k.Qd = function() { return this.get(Nn) };
    k.dn = function() { return this.id };
    k.Ue = function() { return this.get(On) };
    k.Uh = function() { return this.get(Pn) };
    k.mi = function() { return this.get(Qn) };
    k.Vh = function() { return this.get(Rn) };
    k.Sl = function() { for (var a = this.element; a.lastChild;) a.removeChild(a.lastChild);
        (a = this.Qd()) && this.element.appendChild(a) };
    k.bm = function() { this.c && (ig(this.element), Gc(this.c), this.c = null); var a = this.Ue();
        a && (this.c = y(a, "postrender", this.render, this), Sn(this), a = this.stopEvent ? a.v : a.o, this.insertFirst ? a.insertBefore(this.element, a.childNodes[0] || null) : a.appendChild(this.element)) };
    k.render = function() { Sn(this) };
    k.fm = function() { Sn(this) };
    k.hm = function() {
        Sn(this);
        if (this.get(Qn) && this.autoPan) {
            var a = this.Ue();
            if (a && a.Ac()) {
                var b = Tn(a.Ac(), a.Cb()),
                    c = this.Qd(),
                    d = c.offsetWidth,
                    e = getComputedStyle(c);
                d += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10);
                e = c.offsetHeight;
                var f = getComputedStyle(c);
                e += parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10);
                var g = Tn(c, [d, e]);
                c = this.autoPanMargin;
                Ka(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], b = [0, 0], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c), 0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c), 0 ===
                    b[0] && 0 === b[1]) || (c = a.$().wa(), c = a.Ia(c), b = [c[0] + b[0], c[1] + b[1]], a.$().animate({ center: a.Pa(b), duration: this.autoPanAnimation.duration, easing: this.autoPanAnimation.easing }))
            }
        }
    };
    k.im = function() { Sn(this) };
    k.Cj = function(a) { this.set(Nn, a) };
    k.setMap = function(a) { this.set(On, a) };
    k.Hj = function(a) { this.set(Pn, a) };
    k.Ve = function(a) { this.set(Qn, a) };

    function Tn(a, b) { var c = a.getBoundingClientRect();
        a = c.left + window.pageXOffset;
        c = c.top + window.pageYOffset; return [a, c, a + b[0], c + b[1]] }
    k.Kj = function(a) { this.set(Rn, a) };

    function Un(a, b) { a.a.visible !== b && (a.element.style.display = b ? "" : "none", a.a.visible = b) }

    function Sn(a) {
        var b = a.Ue(),
            c = a.mi();
        if (b && b.c && c) {
            c = b.Ia(c);
            var d = b.Cb();
            b = a.element.style;
            var e = a.Uh(),
                f = a.Vh();
            Un(a, !0);
            var g = e[0];
            e = e[1];
            if ("bottom-right" == f || "center-right" == f || "top-right" == f) "" !== a.a.Re && (a.a.Re = b.left = ""), g = Math.round(d[0] - c[0] - g) + "px", a.a.vf != g && (a.a.vf = b.right = g);
            else { "" !== a.a.vf && (a.a.vf = b.right = ""); if ("bottom-center" == f || "center-center" == f || "top-center" == f) g -= a.element.offsetWidth / 2;
                g = Math.round(c[0] + g) + "px";
                a.a.Re != g && (a.a.Re = b.left = g) }
            if ("bottom-left" == f || "bottom-center" ==
                f || "bottom-right" == f) "" !== a.a.Cf && (a.a.Cf = b.top = ""), c = Math.round(d[1] - c[1] - e) + "px", a.a.ye != c && (a.a.ye = b.bottom = c);
            else { "" !== a.a.ye && (a.a.ye = b.bottom = ""); if ("center-left" == f || "center-center" == f || "center-right" == f) e -= a.element.offsetHeight / 2;
                c = Math.round(c[1] + e) + "px";
                a.a.Cf != c && (a.a.Cf = b.top = c) }
        } else Un(a, !1)
    }
    var Nn = "element",
        On = "map",
        Pn = "offset",
        Qn = "position",
        Rn = "positioning";

    function Vn(a, b, c, d, e, f) { Tk.call(this, a, b, f);
        this.c = 0;
        this.l = null;
        this.v = d;
        this.a = null;
        this.f = {};
        this.B = e;
        this.P = c }
    v(Vn, Tk);
    k = Vn.prototype;
    k.ha = function() { this.a = null;
        this.f = {};
        this.state = 5;
        this.u();
        Tk.prototype.ha.call(this) };
    k.C = function() { return this.l || Wn };
    k.fn = function() { return this.v };
    k.en = function() { return this.a };
    k.ib = function() { return this.P };
    k.gn = function() { return this.o };

    function ck(a, b, c) { return a.f[w(b) + "," + c] }
    k.load = function() { 0 == this.state && (dj(this, 1), this.B(this, this.P), this.D(null, NaN, null)) };
    k.tp = function(a, b, c) { this.tg(b);
        this.Dj(a);
        this.ni(c) };
    k.sp = function() { dj(this, 3) };
    k.ni = function(a) { this.l = a };
    k.Dj = function(a) { this.a = a;
        dj(this, 2) };
    k.tg = function(a) { this.o = a };
    k.sg = function(a) { this.D = a };
    var Wn = [0, 0, 4096, 4096];

    function Xn(a) {
        a = a ? a : {};
        this.c = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "\u2922";
        this.l = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.v = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
        b = document.createElement("button");
        b.className = this.c + "-" + Yn();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.l);
        y(b, "click", this.B, this);
        c = document.createElement("div");
        c.className = this.c + " ol-unselectable ol-control " + (Zn() ? "" : "ol-unsupported");
        c.appendChild(b);
        tg.call(this, { element: c, target: a.target });
        this.D = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source
    }
    v(Xn, tg);
    Xn.prototype.B = function(a) {
        a.preventDefault();
        Zn() && (a = this.a) && (Yn() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.Ac(), this.D ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) :
            $n(a) : $n(a)))
    };
    Xn.prototype.o = function() { var a = this.element.firstElementChild,
            b = this.a;
        Yn() ? (a.className = this.c + "-true", hg(this.v, this.l)) : (a.className = this.c + "-false", hg(this.l, this.v));
        b && b.Mc() };
    Xn.prototype.setMap = function(a) { tg.prototype.setMap.call(this, a);
        a && this.s.push(y(document, ao(), this.o, this)) };

    function Zn() { var a = document.body; return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled) }

    function Yn() { return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement) }

    function $n(a) { a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen() }
    var ao = function() { var a; return function() { if (!a) { var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange") } return a } }();

    function bo(a) { a = a ? a : {}; var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        tg.call(this, { element: b, render: a.render ? a.render : co, target: a.target });
        y(this, Xc(eo), this.vn, this);
        a.coordinateFormat && this.Bj(a.coordinateFormat);
        a.projection && this.pi(a.projection);
        this.o = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.v = b.innerHTML;
        this.l = this.j = this.c = null }
    v(bo, tg);

    function co(a) { a = a.frameState;
        a ? this.c != a.viewState.projection && (this.c = a.viewState.projection, this.j = null) : this.c = null;
        fo(this, this.l) }
    k = bo.prototype;
    k.vn = function() { this.j = null };
    k.Nh = function() { return this.get(go) };
    k.oi = function() { return this.get(eo) };
    k.dm = function(a) { this.l = this.a.sd(a);
        fo(this, this.l) };
    k.em = function() { fo(this, null);
        this.l = null };
    k.setMap = function(a) { tg.prototype.setMap.call(this, a);
        a && (a = a.a, this.s.push(y(a, "mousemove", this.dm, this), y(a, "mouseout", this.em, this))) };
    k.Bj = function(a) { this.set(go, a) };
    k.pi = function(a) { this.set(eo, Nb(a)) };

    function fo(a, b) { var c = a.o; if (b && a.c) { if (!a.j) { var d = a.oi();
                a.j = d ? Ob(a.c, d) : Yb } if (b = a.a.Pa(b)) a.j(b, b), c = (c = a.Nh()) ? c(b) : b.toString() }
        a.v && c == a.v || (a.element.innerHTML = c, a.v = c) }
    var eo = "projection",
        go = "coordinateFormat";

    function ho(a) {
        function b(a) { a = h.Rd(a);
            l.a.$().tb(a);
            window.removeEventListener("mousemove", c);
            window.removeEventListener("mouseup", b) }

        function c(a) { a = h.Rd({ clientX: a.clientX - n.offsetWidth / 2, clientY: a.clientY + n.offsetHeight / 2 });
            m.Ve(a) }
        a = a ? a : {};
        this.j = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.j = !1);
        var d = void 0 !== a.className ? a.className : "ol-overviewmap",
            e = void 0 !== a.tipLabel ? a.tipLabel : "Overview map",
            f = void 0 !== a.collapseLabel ? a.collapseLabel :
            "\u00ab";
        "string" === typeof f ? (this.o = document.createElement("span"), this.o.textContent = f) : this.o = f;
        f = void 0 !== a.label ? a.label : "\u00bb";
        "string" === typeof f ? (this.D = document.createElement("span"), this.D.textContent = f) : this.D = f;
        var g = this.l && !this.j ? this.o : this.D;
        f = document.createElement("button");
        f.setAttribute("type", "button");
        f.title = e;
        f.appendChild(g);
        y(f, "click", this.yn, this);
        this.B = document.createElement("DIV");
        this.B.className = "ol-overviewmap-map";
        var h = this.c = new G({
            controls: new A,
            interactions: new A,
            view: a.view
        });
        a.layers && a.layers.forEach(function(a) { h.we(a) }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.v = new Mn({ position: [0, 0], positioning: "bottom-left", element: e });
        this.c.xe(this.v);
        e = document.createElement("div");
        e.className = d + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        e.appendChild(this.B);
        e.appendChild(f);
        tg.call(this, { element: e, render: a.render ? a.render : io, target: a.target });
        var l = this,
            m = this.v,
            n = this.v.Qd();
        n.addEventListener("mousedown", function() { window.addEventListener("mousemove", c);
            window.addEventListener("mouseup", b) })
    }
    v(ho, tg);
    k = ho.prototype;
    k.setMap = function(a) { var b = this.a;
        a !== b && (b && ((b = b.$()) && Mc(b, Xc("rotation"), this.Pe, this), this.c.yd(null)), tg.prototype.setMap.call(this, a), a && (this.c.yd(this.B), this.s.push(y(a, "propertychange", this.cm, this)), 0 === this.c.We().jc() && this.c.xf(a.gc()), a = a.$())) && (y(a, Xc("rotation"), this.Pe, this), $f(a) && (this.c.Mc(), jo(this))) };
    k.cm = function(a) { "view" === a.key && ((a = a.oldValue) && Mc(a, Xc("rotation"), this.Pe, this), a = this.a.$(), y(a, Xc("rotation"), this.Pe, this)) };
    k.Pe = function() { this.c.$().ae(this.a.$().Ra()) };

    function io() { var a = this.a,
            b = this.c; if (a.c && b.c) { var c = a.Cb();
            a = a.$().od(c); var d = b.Cb();
            c = b.$().od(d); var e = b.Ia(Ya(a)),
                f = b.Ia(Wa(a));
            b = Math.abs(e[0] - f[0]);
            e = Math.abs(e[1] - f[1]);
            f = d[0];
            d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? jo(this) : Ka(c, a) || (a = this.c, c = this.a.$(), a.$().tb(c.wa())) }
        ko(this) }

    function jo(a) { var b = a.a;
        a = a.c; var c = b.Cb();
        b = b.$().od(c);
        a = a.$();
        gb(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.Sf(b) }

    function ko(a) { var b = a.a,
            c = a.c; if (b.c && c.c) { var d = b.Cb(),
                e = b.$(),
                f = c.$();
            c = e.Ra();
            b = a.v; var g = a.v.Qd(),
                h = e.od(d);
            d = f.Qa();
            e = Va(h);
            f = Xa(h); if (a = a.a.$().wa()) { var l = [e[0] - a[0], e[1] - a[1]];
                Fe(l, c);
                ze(l, a) }
            b.Ve(l);
            g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px", g.style.height = Math.abs((f[1] - e[1]) / d) + "px") } }
    k.yn = function(a) { a.preventDefault();
        lo(this) };

    function lo(a) { a.element.classList.toggle("ol-collapsed");
        a.j ? hg(a.o, a.D) : hg(a.D, a.o);
        a.j = !a.j; var b = a.c;
        a.j || b.c || (b.Mc(), jo(a), Lc(b, "postrender", function() { ko(this) }, a)) }
    k.xn = function() { return this.l };
    k.An = function(a) { this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.j && lo(this)) };
    k.zn = function(a) { this.l && this.j !== a && lo(this) };
    k.wn = function() { return this.j };
    k.zl = function() { return this.c };

    function mo(a) { a = a ? a : {}; var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.l = document.createElement("DIV");
        this.l.className = b + "-inner";
        this.c = document.createElement("DIV");
        this.c.className = b + " ol-unselectable";
        this.c.appendChild(this.l);
        this.o = null;
        this.v = void 0 !== a.minWidth ? a.minWidth : 64;
        this.j = !1;
        this.H = void 0;
        this.D = "";
        tg.call(this, { element: this.c, render: a.render ? a.render : no, target: a.target });
        y(this, Xc(oo), this.W, this);
        this.O(a.units || "metric") }
    v(mo, tg);
    var po = [1, 2, 5];
    mo.prototype.B = function() { return this.get(oo) };

    function no(a) {
        (a = a.frameState) ? this.o = a.viewState: this.o = null;
        qo(this) }
    mo.prototype.W = function() { qo(this) };
    mo.prototype.O = function(a) { this.set(oo, a) };

    function qo(a) {
        var b = a.o;
        if (b) {
            var c = b.center,
                d = b.projection,
                e = a.B();
            b = Mb(d, b.resolution, c, "degrees" == e ? "degrees" : "m");
            var f = a.v * b;
            c = "";
            "degrees" == e ? (c = tb.degrees, "degrees" == d.a ? f *= c : b /= c, f < c / 60 ? (c = "\u2033", b *= 3600) : f < c ? (c = "\u2032", b *= 60) : c = "\u00b0") : "imperial" == e ? .9144 > f ? (c = "in", b /= .0254) : 1609.344 > f ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : "nautical" == e ? (b /= 1852, c = "nm") : "metric" == e ? .001 > f ? (c = "\u03bcm", b *= 1E6) : 1 > f ? (c = "mm", b *= 1E3) : 1E3 > f ? c = "m" : (c = "km", b /= 1E3) : "us" == e ? .9144 > f ? (c = "in", b *= 39.37) : 1609.344 >
                f ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472) : na(!1, 33);
            for (e = 3 * Math.floor(Math.log(a.v * b) / Math.log(10));;) { f = po[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b); if (isNaN(d)) { a.c.style.display = "none";
                    a.j = !1; return } if (d >= a.v) break;++e }
            b = f + " " + c;
            a.D != b && (a.l.innerHTML = b, a.D = b);
            a.H != d && (a.l.style.width = d + "px", a.H = d);
            a.j || (a.c.style.display = "", a.j = !0)
        } else a.j && (a.c.style.display = "none", a.j = !1)
    }
    var oo = "units";

    function ro(a) {
        a = a ? a : {};
        this.c = void 0;
        this.j = so;
        this.D = this.v = 0;
        this.O = null;
        this.aa = !1;
        this.W = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider",
            c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.l = new Xd(d);
        y(this.l, "pointerdown", this.Rl, this);
        y(this.l, "pointermove", this.Pl, this);
        y(this.l, "pointerup", this.Ql,
            this);
        y(d, "click", this.Ol, this);
        y(c, "click", Rc);
        tg.call(this, { element: d, render: a.render ? a.render : to })
    }
    v(ro, tg);
    ro.prototype.ha = function() { Pc(this.l);
        tg.prototype.ha.call(this) };
    var so = 0;
    k = ro.prototype;
    k.setMap = function(a) { tg.prototype.setMap.call(this, a);
        a && a.render() };

    function to(a) { if (a.frameState) { if (!this.aa) { var b = this.element,
                    c = b.offsetWidth,
                    d = b.offsetHeight,
                    e = b.firstElementChild,
                    f = getComputedStyle(e);
                b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft);
                e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.O = [b, e];
                c > d ? (this.j = 1, this.D = c - b) : (this.j = so, this.v = d - e);
                this.aa = !0 }
            a = a.frameState.viewState.resolution;
            a !== this.c && (this.c = a, uo(this, a)) } }
    k.Ol = function(a) { var b = this.a.$();
        a = vo(this, oa(1 === this.j ? (a.offsetX - this.O[0] / 2) / this.D : (a.offsetY - this.O[1] / 2) / this.v, 0, 1));
        b.animate({ resolution: b.constrainResolution(a), duration: this.W, easing: Ne }) };
    k.Rl = function(a) { this.o || a.b.target !== this.element.firstElementChild || (ag(this.a.$(), 1, 1), this.B = a.clientX, this.H = a.clientY, this.o = !0) };
    k.Pl = function(a) { if (this.o) { var b = this.element.firstElementChild;
            this.c = vo(this, oa(1 === this.j ? (a.clientX - this.B + parseInt(b.style.left, 10)) / this.D : (a.clientY - this.H + parseInt(b.style.top, 10)) / this.v, 0, 1));
            this.a.$().fd(this.c);
            uo(this, this.c);
            this.B = a.clientX;
            this.H = a.clientY } };
    k.Ql = function() { if (this.o) { var a = this.a.$();
            ag(a, 1, -1);
            a.animate({ resolution: a.constrainResolution(this.c), duration: this.W, easing: Ne });
            this.o = !1;
            this.H = this.B = void 0 } };

    function uo(a, b) { b = 1 - fg(a.a.$())(b); var c = a.element.firstElementChild;
        1 == a.j ? c.style.left = a.D * b + "px" : c.style.top = a.v * b + "px" }

    function vo(a, b) { return eg(a.a.$())(1 - b) };

    function wo(a) { a = a ? a : {};
        this.c = a.extent ? a.extent : null; var b = void 0 !== a.className ? a.className : "ol-zoom-extent",
            c = void 0 !== a.label ? a.label : "E",
            d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent",
            e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        y(e, "click", this.j, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        tg.call(this, { element: c, target: a.target }) }
    v(wo, tg);
    wo.prototype.j = function(a) { a.preventDefault();
        a = this.a.$(); var b = this.c ? this.c : a.v.C();
        a.Sf(b) };
    var xo = document.implementation.createDocument("", "", null);

    function yo(a, b) { return xo.createElementNS(a, b) }

    function zo(a, b) { return Ao(a, b, []).join("") }

    function Ao(a, b, c) { if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
        else
            for (a = a.firstChild; a; a = a.nextSibling) Ao(a, b, c); return c }

    function Bo(a) { return a instanceof Document }

    function Co(a) { return a instanceof Node }

    function Do(a) { return (new DOMParser).parseFromString(a, "application/xml") }

    function Eo(a, b) { return function(c, d) { c = a.call(b, c, d);
            void 0 !== c && ec(d[d.length - 1], c) } }

    function Fo(a, b) { return function(c, d) { c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && d[d.length - 1].push(c) } }

    function Go(a, b) { return function(c, d) { c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && (d[d.length - 1] = c) } }

    function Ho(a) { return function(b, c) { var d = a.call(this, b, c); if (void 0 !== d) { c = c[c.length - 1];
                b = b.localName; var e;
                b in c ? e = c[b] : e = c[b] = [];
                e.push(d) } } }

    function K(a, b) { return function(c, d) { var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e) } }

    function L(a, b) { return function(c, d, e) { a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c) } }

    function Io(a) { var b, c; return function(d, e, f) { if (void 0 === b) { b = {}; var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Jo(d.localName) }
            Ko(b, c, e, f) } }

    function Jo(a, b) { return function(c, d, e) { c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI); return yo(e, d) } }
    var Lo = Jo();

    function Mo(a, b) { for (var c = b.length, d = Array(c), e = 0; e < c; ++e) d[e] = a[b[e]]; return d }

    function M(a, b, c) { c = void 0 !== c ? c : {}; var d; var e = 0; for (d = a.length; e < d; ++e) c[a[e]] = b; return c }

    function No(a, b, c, d) { for (b = b.firstElementChild; b; b = b.nextElementSibling) { var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName], void 0 !== e && e.call(d, b, c)) } }

    function O(a, b, c, d, e) { d.push(a);
        No(b, c, d, e); return d.pop() }

    function Ko(a, b, c, d, e, f) { for (var g = (void 0 !== e ? e : c).length, h, l, m = 0; m < g; ++m) h = c[m], void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0), void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d)) }

    function Oo(a, b, c, d, e, f, g) { e.push(a);
        Ko(b, c, d, e, f, g);
        e.pop() };

    function Po(a, b, c, d) {
        return function(e, f, g) {
            var h = new XMLHttpRequest;
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.T() && (h.responseType = "arraybuffer");
            h.onload = function() { if (!h.status || 200 <= h.status && 300 > h.status) { var a = b.T(); if ("json" == a || "text" == a) var e = h.responseText;
                    else "xml" == a ? (e = h.responseXML) || (e = Do(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e ? c.call(this, b.Na(e, { featureProjection: g }), b.rb(e), b.ag()) : d.call(this) } else d.call(this) }.bind(this);
            h.onerror = function() { d.call(this) }.bind(this);
            h.send()
        }
    }

    function Qo(a, b) { return Po(a, b, function(a) { this.Oc(a) }, da) };

    function Ro() { this.i = this.defaultDataProjection = null }

    function So(a, b, c) { var d;
        c && (d = { dataProjection: c.dataProjection ? c.dataProjection : a.rb(b), featureProjection: c.featureProjection }); return To(a, d) }

    function To(a, b) { return jb({ dataProjection: a.defaultDataProjection, featureProjection: a.i }, b) }
    Ro.prototype.ag = function() { return null };

    function Uo(a, b, c) { var d = c ? Nb(c.featureProjection) : null,
            e = c ? Nb(c.dataProjection) : null,
            f;
        d && e && !Wb(d, e) ? a instanceof ff ? f = (b ? a.clone() : a).jb(b ? d : e, b ? e : d) : f = $b(a, e, d) : f = a; if (b && c && void 0 !== c.decimals) { var g = Math.pow(10, c.decimals);
            f === a && (f = f.clone());
            f.Pc(function(a) { for (var b = 0, c = a.length; b < c; ++b) a[b] = Math.round(a[b] * g) / g; return a }) } return f };

    function Vo() { Ro.call(this) }
    v(Vo, Ro);

    function Wo(a) { return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null }
    k = Vo.prototype;
    k.T = function() { return "json" };
    k.Yb = function(a, b) { return this.cd(Wo(a), So(this, a, b)) };
    k.Na = function(a, b) { return this.Lg(Wo(a), So(this, a, b)) };
    k.dd = function(a, b) { return this.Pg(Wo(a), So(this, a, b)) };
    k.rb = function(a) { return this.Sg(Wo(a)) };
    k.Id = function(a, b) { return JSON.stringify(this.kd(a, b)) };
    k.ac = function(a, b) { return JSON.stringify(this.pe(a, b)) };
    k.ld = function(a, b) { return JSON.stringify(this.re(a, b)) };

    function P(a, b) { gf.call(this);
        this.c = [];
        this.j = this.o = -1;
        this.na(a, b) }
    v(P, gf);
    k = P.prototype;
    k.Bk = function(a) { this.A ? ec(this.A, a.da().slice()) : this.A = a.da().slice();
        this.c.push(this.A.length);
        this.u() };
    k.clone = function() { var a = new P(null);
        a.ba(this.ja, this.A.slice(), this.c.slice()); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d;
        this.j != this.g && (this.o = Math.sqrt(tf(this.A, 0, this.c, this.a, 0)), this.j = this.g); return vf(this.A, 0, this.c, this.a, this.o, !1, a, b, c, d) };
    k.Nn = function(a, b, c) { return "XYM" != this.ja && "XYZM" != this.ja || 0 === this.A.length ? null : Ak(this.A, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1) };
    k.U = function() { return Af(this.A, 0, this.c, this.a) };
    k.ob = function() { return this.c };
    k.rl = function(a) { if (0 > a || this.c.length <= a) return null; var b = new I(null);
        b.ba(this.ja, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a])); return b };
    k.ud = function() { var a = this.A,
            b = this.c,
            c = this.ja,
            d = [],
            e = 0,
            f; var g = 0; for (f = b.length; g < f; ++g) { var h = b[g],
                l = new I(null);
            l.ba(c, a.slice(e, h));
            d.push(l);
            e = h } return d };
    k.Fe = function() { var a = [],
            b = this.A,
            c = 0,
            d = this.c,
            e = this.a,
            f; var g = 0; for (f = d.length; g < f; ++g) { var h = d[g];
            c = yk(b, c, h, e, .5);
            ec(a, c);
            c = h } return a };
    k.vd = function(a) { var b = [],
            c = [],
            d = this.A,
            e = this.c,
            f = this.a,
            g = 0,
            h = 0,
            l; var m = 0; for (l = e.length; m < l; ++m) { var n = e[m];
            h = Cf(d, g, n, f, a, b, h);
            c.push(h);
            g = n }
        b.length = h;
        a = new P(null);
        a.ba("XY", b, c); return a };
    k.T = function() { return "MultiLineString" };
    k.$a = function(a) { a: { var b = this.A,
                c = this.c,
                d = this.a,
                e = 0,
                f; var g = 0; for (f = c.length; g < f; ++g) { if (Lf(b, e, c[g], d, a)) { a = !0; break a }
                e = c[g] }
            a = !1 } return a };
    k.na = function(a, b) { a ? (kf(this, b, a, 2), this.A || (this.A = []), a = yf(this.A, 0, a, this.a, this.c), this.A.length = 0 === a.length ? 0 : a[a.length - 1], this.u()) : this.ba("XY", null, this.c) };
    k.ba = function(a, b, c) { jf(this, a, b);
        this.c = c;
        this.u() };

    function Xo(a, b) { var c = a.ja,
            d = [],
            e = [],
            f; var g = 0; for (f = b.length; g < f; ++g) { var h = b[g];
            0 === g && (c = h.ja);
            ec(d, h.da());
            e.push(d.length) }
        a.ba(c, d, e) };

    function Q(a, b) { gf.call(this);
        this.na(a, b) }
    v(Q, gf);
    k = Q.prototype;
    k.Dk = function(a) { this.A ? ec(this.A, a.da()) : this.A = a.da().slice();
        this.u() };
    k.clone = function() { var a = new Q(null);
        a.ba(this.ja, this.A.slice()); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d; var e = this.A,
            f = this.a,
            g; var h = 0; for (g = e.length; h < g; h += f) { var l = ta(a, b, e[h], e[h + 1]); if (l < d) { d = l; for (l = 0; l < f; ++l) c[l] = e[h + l];
                c.length = f } } return d };
    k.U = function() { return zf(this.A, 0, this.A.length, this.a) };
    k.Cl = function(a) { var b = this.A ? this.A.length / this.a : 0; if (0 > a || b <= a) return null;
        b = new B(null);
        b.ba(this.ja, this.A.slice(a * this.a, (a + 1) * this.a)); return b };
    k.be = function() { var a = this.A,
            b = this.ja,
            c = this.a,
            d = [],
            e; var f = 0; for (e = a.length; f < e; f += c) { var g = new B(null);
            g.ba(b, a.slice(f, f + c));
            d.push(g) } return d };
    k.T = function() { return "MultiPoint" };
    k.$a = function(a) { var b = this.A,
            c = this.a,
            d; var e = 0; for (d = b.length; e < d; e += c) { var f = b[e]; var g = b[e + 1]; if (Ia(a, f, g)) return !0 } return !1 };
    k.na = function(a, b) { a ? (kf(this, b, a, 1), this.A || (this.A = []), this.A.length = xf(this.A, 0, a, this.a), this.u()) : this.ba("XY", null) };
    k.ba = function(a, b) { jf(this, a, b);
        this.u() };

    function R(a, b) { gf.call(this);
        this.c = [];
        this.o = -1;
        this.D = null;
        this.G = this.B = this.H = -1;
        this.j = null;
        this.na(a, b) }
    v(R, gf);
    k = R.prototype;
    k.Ek = function(a) { if (this.A) { var b = this.A.length;
            ec(this.A, a.da());
            a = a.ob().slice(); var c; var d = 0; for (c = a.length; d < c; ++d) a[d] += b } else this.A = a.da().slice(), a = a.ob().slice(), this.c.push();
        this.c.push(a);
        this.u() };
    k.clone = function() { for (var a = new R(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d) c[d] = this.c[d].slice();
        a.ba(this.ja, this.A.slice(), c); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d; if (this.B != this.g) { var e = this.c,
                f = 0,
                g = 0,
                h; var l = 0; for (h = e.length; l < h; ++l) { var m = e[l];
                g = tf(this.A, f, m, this.a, g);
                f = m[m.length - 1] }
            this.H = Math.sqrt(g);
            this.B = this.g }
        e = yi(this);
        f = this.c;
        g = this.a;
        l = this.H;
        h = 0;
        m = [NaN, NaN]; var n; var p = 0; for (n = f.length; p < n; ++p) { var q = f[p];
            d = vf(e, h, q, g, l, !0, a, b, c, d, m);
            h = q[q.length - 1] } return d };
    k.Zc = function(a, b) { a: { var c = yi(this),
                d = this.c,
                e = 0; if (0 !== d.length) { var f; var g = 0; for (f = d.length; g < f; ++g) { var h = d[g]; if (If(c, e, h, this.a, a, b)) { a = !0; break a }
                    e = h[h.length - 1] } }
            a = !1 } return a };
    k.On = function() { var a = yi(this),
            b = this.c,
            c = 0,
            d = 0,
            e; var f = 0; for (e = b.length; f < e; ++f) { var g = b[f];
            d += mf(a, c, g, this.a);
            c = g[g.length - 1] } return d };
    k.U = function(a) { if (void 0 !== a) { var b = yi(this).slice();
            Qf(b, this.c, this.a, a) } else b = this.A; return Bf(b, 0, this.c, this.a) };
    k.rd = function() { return this.c };

    function zi(a) { if (a.o != a.g) { var b = a.A,
                c = a.c,
                d = a.a,
                e = 0,
                f = [],
                g; var h = 0; for (g = c.length; h < g; ++h) { var l = c[h];
                e = Pa(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1] }
            b = yi(a);
            c = a.c;
            d = a.a;
            h = 0;
            g = [];
            l = 0; for (e = c.length; l < e; ++l) { var m = c[l];
                g = Jf(b, h, m, d, f, 2 * l, g);
                h = m[m.length - 1] }
            a.D = g;
            a.o = a.g } return a.D }
    k.nl = function() { var a = new Q(null);
        a.ba("XYM", zi(this).slice()); return a };

    function yi(a) { if (a.G != a.g) { var b = a.A;
            a: { var c = a.c; var d; var e = 0; for (d = c.length; e < d; ++e)
                    if (!Of(b, c[e], a.a, void 0)) { c = !1; break a }
                c = !0 }
            c ? a.j = b : (a.j = b.slice(), a.j.length = Qf(a.j, a.c, a.a));
            a.G = a.g } return a.j }
    k.vd = function(a) { var b = [],
            c = [],
            d = this.A,
            e = this.c,
            f = this.a;
        a = Math.sqrt(a); var g = 0,
            h = 0,
            l; var m = 0; for (l = e.length; m < l; ++m) { var n = e[m],
                p = [];
            h = Df(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1] }
        b.length = h;
        d = new R(null);
        d.ba("XY", b, c); return d };
    k.Dl = function(a) { if (0 > a || this.c.length <= a) return null; if (0 === a) var b = 0;
        else b = this.c[a - 1], b = b[b.length - 1];
        a = this.c[a].slice(); var c = a[a.length - 1]; if (0 !== b) { var d; var e = 0; for (d = a.length; e < d; ++e) a[e] -= b }
        e = new D(null);
        e.ba(this.ja, this.A.slice(b, c), a); return e };
    k.Ud = function() { var a = this.ja,
            b = this.A,
            c = this.c,
            d = [],
            e = 0,
            f, g; var h = 0; for (f = c.length; h < f; ++h) { var l = c[h].slice(),
                m = l[l.length - 1]; if (0 !== e) { var n = 0; for (g = l.length; n < g; ++n) l[n] -= e }
            n = new D(null);
            n.ba(a, b.slice(e, m), l);
            d.push(n);
            e = m } return d };
    k.T = function() { return "MultiPolygon" };
    k.$a = function(a) { a: { var b = yi(this),
                c = this.c,
                d = this.a,
                e = 0,
                f; var g = 0; for (f = c.length; g < f; ++g) { var h = c[g]; if (Mf(b, e, h, d, a)) { a = !0; break a }
                e = h[h.length - 1] }
            a = !1 } return a };
    k.na = function(a, b) { if (a) { kf(this, b, a, 3);
            this.A || (this.A = []);
            b = this.A; var c = this.a,
                d = this.c,
                e = 0;
            d = d ? d : []; var f = 0,
                g; var h = 0; for (g = a.length; h < g; ++h) e = yf(b, e, a[h], c, d[f]), d[f++] = e, e = e[e.length - 1];
            d.length = f;
            0 === d.length ? this.A.length = 0 : (a = d[d.length - 1], this.A.length = 0 === a.length ? 0 : a[a.length - 1]);
            this.u() } else this.ba("XY", null, this.c) };
    k.ba = function(a, b, c) { jf(this, a, b);
        this.c = c;
        this.u() };

    function Yo(a, b) { var c = a.ja,
            d = [],
            e = [],
            f; var g = 0; for (f = b.length; g < f; ++g) { var h = b[g];
            0 === g && (c = h.ja); var l = d.length; var m = h.ob(); var n; var p = 0; for (n = m.length; p < n; ++p) m[p] += l;
            ec(d, h.da());
            e.push(m) }
        a.ba(c, d, e) };

    function Zo(a) { a = a ? a : {};
        Ro.call(this);
        this.b = a.geometryName }
    v(Zo, Vo);

    function $o(a, b) {
        if (!a) return null;
        if ("number" === typeof a.x && "number" === typeof a.y) var c = "Point";
        else if (a.points) c = "MultiPoint";
        else if (a.paths) c = 1 === a.paths.length ? "LineString" : "MultiLineString";
        else if (a.rings) {
            var d = a.rings,
                e = tp(a),
                f = [],
                g = [];
            c = [];
            var h;
            var l = 0;
            for (h = d.length; l < h; ++l) f.length = 0, xf(f, 0, d[l], e.length), Nf(f, 0, f.length, e.length) ? g.push([d[l]]) : c.push(d[l]);
            for (; c.length;) {
                d = c.shift();
                e = !1;
                for (l = g.length - 1; 0 <= l; l--)
                    if (Ka((new Ef(g[l][0])).C(), (new Ef(d)).C())) { g[l].push(d);
                        e = !0; break }
                e ||
                    g.push([d.reverse()])
            }
            a = jb({}, a);
            1 === g.length ? (c = "Polygon", a.rings = g[0]) : (c = "MultiPolygon", a.rings = g)
        }
        return Uo((0, up[c])(a), !1, b)
    }

    function tp(a) { var b = "XY";!0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM"); return b }

    function vp(a) { a = a.ja; return { hasZ: "XYZ" === a || "XYZM" === a, hasM: "XYM" === a || "XYZM" === a } }
    var up = { Point: function(a) { return void 0 !== a.m && void 0 !== a.z ? new B([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new B([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new B([a.x, a.y, a.m], "XYM") : new B([a.x, a.y]) }, LineString: function(a) { return new I(a.paths[0], tp(a)) }, Polygon: function(a) { return new D(a.rings, tp(a)) }, MultiPoint: function(a) { return new Q(a.points, tp(a)) }, MultiLineString: function(a) { return new P(a.paths, tp(a)) }, MultiPolygon: function(a) { return new R(a.rings, tp(a)) } },
        wp = {
            Point: function(a) {
                var b = a.U(),
                    c;
                a = a.ja;
                "XYZ" === a ? c = { x: b[0], y: b[1], z: b[2] } : "XYM" === a ? c = { x: b[0], y: b[1], m: b[2] } : "XYZM" === a ? c = { x: b[0], y: b[1], z: b[2], m: b[3] } : "XY" === a ? c = { x: b[0], y: b[1] } : na(!1, 34);
                return c
            },
            LineString: function(a) { var b = vp(a); return { hasZ: b.hasZ, hasM: b.hasM, paths: [a.U()] } },
            Polygon: function(a) { var b = vp(a); return { hasZ: b.hasZ, hasM: b.hasM, rings: a.U(!1) } },
            MultiPoint: function(a) { var b = vp(a); return { hasZ: b.hasZ, hasM: b.hasM, points: a.U() } },
            MultiLineString: function(a) { var b = vp(a); return { hasZ: b.hasZ, hasM: b.hasM, paths: a.U() } },
            MultiPolygon: function(a) {
                var b =
                    vp(a);
                a = a.U(!1);
                for (var c = [], d = 0; d < a.length; d++)
                    for (var e = a[d].length - 1; 0 <= e; e--) c.push(a[d][e]);
                return { hasZ: b.hasZ, hasM: b.hasM, rings: c }
            }
        };
    k = Zo.prototype;
    k.cd = function(a, b) { var c = $o(a.geometry, b),
            d = new vk;
        this.b && d.Jc(this.b);
        d.Ua(c);
        b && b.ng && a.attributes[b.ng] && d.pc(a.attributes[b.ng]);
        a.attributes && d.I(a.attributes); return d };
    k.Lg = function(a, b) { b = b ? b : {}; if (a.features) { var c = [],
                d = a.features,
                e;
            b.ng = a.objectIdFieldName;
            a = 0; for (e = d.length; a < e; ++a) c.push(this.cd(d[a], b)); return c } return [this.cd(a, b)] };
    k.Pg = function(a, b) { return $o(a, b) };
    k.Sg = function(a) { return a.spatialReference && a.spatialReference.wkid ? Nb("EPSG:" + a.spatialReference.wkid) : null };

    function xp(a, b) { return (0, wp[a.T()])(Uo(a, !0, b), b) }
    k.re = function(a, b) { return xp(a, To(this, b)) };
    k.kd = function(a, b) { b = To(this, b); var c = {},
            d = a.V();
        d && (c.geometry = xp(d, b), b && b.featureProjection && (c.geometry.spatialReference = { wkid: Nb(b.featureProjection).ub.split(":").pop() }));
        b = a.M();
        delete b[a.a];
        c.attributes = mb(b) ? {} : b; return c };
    k.pe = function(a, b) { b = To(this, b); var c = [],
            d; var e = 0; for (d = a.length; e < d; ++e) c.push(this.kd(a[e], b)); return { features: c } };

    function yp() { this.g = new XMLSerializer;
        Ro.call(this) }
    v(yp, Ro);
    k = yp.prototype;
    k.T = function() { return "xml" };
    k.Yb = function(a, b) { return Bo(a) ? zp(this, a, b) : Co(a) ? this.Kg(a, b) : "string" === typeof a ? (a = Do(a), zp(this, a, b)) : null };

    function zp(a, b, c) { a = Ap(a, b, c); return 0 < a.length ? a[0] : null }
    k.Kg = function() { return null };
    k.Na = function(a, b) { return Bo(a) ? Ap(this, a, b) : Co(a) ? this.Ic(a, b) : "string" === typeof a ? (a = Do(a), Ap(this, a, b)) : [] };

    function Ap(a, b, c) { var d = []; for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && ec(d, a.Ic(b, c)); return d }
    k.dd = function(a, b) { if (Bo(a)) return null; if (Co(a)) return this.rj(a, b); "string" === typeof a && Do(a); return null };
    k.rj = function() { return null };
    k.rb = function(a) { return Bo(a) ? this.Rg(a) : Co(a) ? this.sf(a) : "string" === typeof a ? (a = Do(a), this.Rg(a)) : null };
    k.Rg = function() { return this.defaultDataProjection };
    k.sf = function() { return this.defaultDataProjection };
    k.Id = function(a, b) { return this.g.serializeToString(this.lh(a, b)) };
    k.lh = function() { return null };
    k.ac = function(a, b) { a = this.bc(a, b); return this.g.serializeToString(a) };
    k.bc = function() { return null };
    k.ld = function(a, b) { a = this.qe(a, b); return this.g.serializeToString(a) };
    k.qe = function() { return null };

    function Bp(a) { a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = { featureMember: Go(Bp.prototype.ee), featureMembers: Go(Bp.prototype.ee) };
        yp.call(this) }
    v(Bp, yp);
    var Cp = /^[\s\xa0]*$/;
    k = Bp.prototype;
    k.ee = function(a, b) {
        var c = a.localName,
            d = null;
        if ("FeatureCollection" == c) "http://www.opengis.net/wfs" === a.namespaceURI ? d = O([], this.b, a, b, this) : d = O(null, this.b, a, b, this);
        else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0],
                f = e.featureType,
                g = e.featureNS,
                h;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                var l = 0;
                for (h = a.childNodes.length; l < h; ++l) {
                    var m = a.childNodes[l];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = "",
                                q = 0;
                            m = m.namespaceURI;
                            for (var r in g) { if (g[r] === m) { p = r; break }++q }
                            p ||
                                (p = "p" + q, g[p] = m);
                            f.push(p + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g)
            }
            "string" === typeof g && (l = g, g = {}, g.p0 = l);
            e = {};
            f = Array.isArray(f) ? f : [f];
            for (var u in g) { n = {};
                l = 0; for (h = f.length; l < h; ++l)(-1 === f[l].indexOf(":") ? "p0" : f[l].split(":")[0]) === u && (n[f[l].split(":").pop()] = "featureMembers" == c ? Fo(this.Jg, this) : Go(this.Jg, this));
                e[g[u]] = n }
            "featureMember" == c ? d = O(void 0, e, a, b) : d = O([], e, a, b)
        }
        null === d && (d = []);
        return d
    };
    k.pf = function(a, b) { var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        c.srsDimension = a.firstElementChild.getAttribute("srsDimension"); if (a = O(null, this.ph, a, b, this)) return Uo(a, !1, c) };
    k.Jg = function(a, b) { var c;
        (c = a.getAttribute("fid")) || (c = a.getAttributeNS("http://www.opengis.net/gml", "id") || ""); var d = {},
            e; for (a = a.firstElementChild; a; a = a.nextElementSibling) { var f = a.localName; if (0 === a.childNodes.length || 1 === a.childNodes.length && (3 === a.firstChild.nodeType || 4 === a.firstChild.nodeType)) { var g = zo(a, !1);
                Cp.test(g) && (g = void 0);
                d[f] = g } else "boundedBy" !== f && (e = f), d[f] = this.pf(a, b) }
        b = new vk(d);
        e && b.Jc(e);
        c && b.pc(c); return b };
    k.wj = function(a, b) { if (a = this.nf(a, b)) return b = new B(null), b.ba("XYZ", a), b };
    k.uj = function(a, b) { if (a = O([], this.fk, a, b, this)) return new Q(a) };
    k.tj = function(a, b) { if (a = O([], this.ek, a, b, this)) return b = new P(null), Xo(b, a), b };
    k.vj = function(a, b) { if (a = O([], this.gk, a, b, this)) return b = new R(null), Yo(b, a), b };
    k.nj = function(a, b) { No(this.jk, a, b, this) };
    k.ci = function(a, b) { No(this.ck, a, b, this) };
    k.oj = function(a, b) { No(this.kk, a, b, this) };
    k.qf = function(a, b) { if (a = this.nf(a, b)) return b = new I(null), b.ba("XYZ", a), b };
    k.Pp = function(a, b) { if (a = O(null, this.se, a, b, this)) return a };
    k.sj = function(a, b) { if (a = this.nf(a, b)) return b = new Ef(null), Ff(b, "XYZ", a), b };
    k.rf = function(a, b) { if ((a = O([null], this.Ef, a, b, this)) && a[0]) { b = new D(null); var c = a[0],
                d = [c.length],
                e; var f = 1; for (e = a.length; f < e; ++f) ec(c, a[f]), d.push(c.length);
            b.ba("XYZ", c, d); return b } };
    k.nf = function(a, b) { return O(null, this.se, a, b, this) };
    k.fk = { "http://www.opengis.net/gml": { pointMember: Fo(Bp.prototype.nj), pointMembers: Fo(Bp.prototype.nj) } };
    k.ek = { "http://www.opengis.net/gml": { lineStringMember: Fo(Bp.prototype.ci), lineStringMembers: Fo(Bp.prototype.ci) } };
    k.gk = { "http://www.opengis.net/gml": { polygonMember: Fo(Bp.prototype.oj), polygonMembers: Fo(Bp.prototype.oj) } };
    k.jk = { "http://www.opengis.net/gml": { Point: Fo(Bp.prototype.nf) } };
    k.ck = { "http://www.opengis.net/gml": { LineString: Fo(Bp.prototype.qf) } };
    k.kk = { "http://www.opengis.net/gml": { Polygon: Fo(Bp.prototype.rf) } };
    k.te = { "http://www.opengis.net/gml": { LinearRing: Go(Bp.prototype.Pp) } };
    k.rj = function(a, b) { return (a = this.pf(a, [So(this, a, b ? b : {})])) ? a : null };
    k.Ic = function(a, b) { var c = { featureType: this.featureType, featureNS: this.featureNS };
        b && jb(c, So(this, a, b)); return this.ee(a, [c]) || [] };
    k.sf = function(a) { return Nb(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName")) };

    function Dp(a) { a = zo(a, !1); return Ep(a) }

    function Ep(a) { if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a)) return void 0 !== a[1] || !1 }

    function Fp(a) { a = zo(a, !1);
        a = Date.parse(a); return isNaN(a) ? void 0 : a / 1E3 }

    function Gp(a) { a = zo(a, !1); return Hp(a) }

    function Hp(a) { if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a)) return parseFloat(a[1]) }

    function Ip(a) { a = zo(a, !1); return Jp(a) }

    function Jp(a) { if (a = /^\s*(\d+)\s*$/.exec(a)) return parseInt(a[1], 10) }

    function S(a) { return zo(a, !1).trim() }

    function Kp(a, b) { Lp(a, b ? "1" : "0") }

    function Mp(a, b) { a.appendChild(xo.createTextNode(b.toPrecision())) }

    function Np(a, b) { a.appendChild(xo.createTextNode(b.toString())) }

    function Lp(a, b) { a.appendChild(xo.createTextNode(b)) };

    function Op(a) { a = a ? a : {};
        Bp.call(this, a);
        this.s = void 0 !== a.surface ? a.surface : !1;
        this.c = void 0 !== a.curve ? a.curve : !1;
        this.f = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
        this.hasZ = void 0 !== a.hasZ ? a.hasZ : !1 }
    v(Op, Bp);
    k = Op.prototype;
    k.Tp = function(a, b) { if (a = O([], this.dk, a, b, this)) return b = new P(null), Xo(b, a), b };
    k.Up = function(a, b) { if (a = O([], this.hk, a, b, this)) return b = new R(null), Yo(b, a), b };
    k.Dh = function(a, b) { No(this.$j, a, b, this) };
    k.Sj = function(a, b) { No(this.mk, a, b, this) };
    k.Xp = function(a, b) { return O([null], this.ik, a, b, this) };
    k.$p = function(a, b) { return O([null], this.lk, a, b, this) };
    k.Yp = function(a, b) { return O([null], this.Ef, a, b, this) };
    k.Sp = function(a, b) { return O([null], this.se, a, b, this) };
    k.wm = function(a, b) {
        (a = O(void 0, this.te, a, b, this)) && b[b.length - 1].push(a) };
    k.Vk = function(a, b) {
        (a = O(void 0, this.te, a, b, this)) && (b[b.length - 1][0] = a) };
    k.xj = function(a, b) { if ((a = O([null], this.nk, a, b, this)) && a[0]) { b = new D(null); var c = a[0],
                d = [c.length],
                e; var f = 1; for (e = a.length; f < e; ++f) ec(c, a[f]), d.push(c.length);
            b.ba("XYZ", c, d); return b } };
    k.pj = function(a, b) { if (a = O([null], this.ak, a, b, this)) return b = new I(null), b.ba("XYZ", a), b };
    k.Op = function(a, b) { a = O([null], this.bk, a, b, this); return Ma(a[1][0], a[1][1], a[2][0], a[2][1]) };
    k.Qp = function(a, b) { var c = zo(a, !1),
            d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/;
        a = []; for (var e; e = d.exec(c);) a.push(parseFloat(e[1])), c = c.substr(e[0].length); if ("" === c) { b = b[0].srsName;
            c = "enu";
            b && (c = Nb(b).b); if ("neu" === c)
                for (b = 0, c = a.length; b < c; b += 3) d = a[b], a[b] = a[b + 1], a[b + 1] = d;
            b = a.length;
            2 == b && a.push(0); if (0 !== b) return a } };
    k.Og = function(a, b) {
        var c = zo(a, !1).replace(/^\s*|\s*$/g, "");
        b = b[0];
        var d = b.srsName,
            e = b.srsDimension;
        b = "enu";
        d && (b = Nb(d).b);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = Jp(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = Jp(a.getAttribute("dimension")) : a.parentNode.getAttribute("srsDimension") ? d = Jp(a.parentNode.getAttribute("srsDimension")) : e && (d = Jp(e));
        for (var f, g = [], h = 0, l = c.length; h < l; h += d) a = parseFloat(c[h]), e = parseFloat(c[h + 1]), f = 3 === d ? parseFloat(c[h + 2]) : 0, "en" === b.substr(0,
            2) ? g.push(a, e, f) : g.push(e, a, f);
        return g
    };
    k.se = { "http://www.opengis.net/gml": { pos: Go(Op.prototype.Qp), posList: Go(Op.prototype.Og) } };
    k.Ef = { "http://www.opengis.net/gml": { interior: Op.prototype.wm, exterior: Op.prototype.Vk } };
    k.ph = { "http://www.opengis.net/gml": { Point: Go(Bp.prototype.wj), MultiPoint: Go(Bp.prototype.uj), LineString: Go(Bp.prototype.qf), MultiLineString: Go(Bp.prototype.tj), LinearRing: Go(Bp.prototype.sj), Polygon: Go(Bp.prototype.rf), MultiPolygon: Go(Bp.prototype.vj), Surface: Go(Op.prototype.xj), MultiSurface: Go(Op.prototype.Up), Curve: Go(Op.prototype.pj), MultiCurve: Go(Op.prototype.Tp), Envelope: Go(Op.prototype.Op) } };
    k.dk = { "http://www.opengis.net/gml": { curveMember: Fo(Op.prototype.Dh), curveMembers: Fo(Op.prototype.Dh) } };
    k.hk = { "http://www.opengis.net/gml": { surfaceMember: Fo(Op.prototype.Sj), surfaceMembers: Fo(Op.prototype.Sj) } };
    k.$j = { "http://www.opengis.net/gml": { LineString: Fo(Bp.prototype.qf), Curve: Fo(Op.prototype.pj) } };
    k.mk = { "http://www.opengis.net/gml": { Polygon: Fo(Bp.prototype.rf), Surface: Fo(Op.prototype.xj) } };
    k.nk = { "http://www.opengis.net/gml": { patches: Go(Op.prototype.Xp) } };
    k.ak = { "http://www.opengis.net/gml": { segments: Go(Op.prototype.$p) } };
    k.bk = { "http://www.opengis.net/gml": { lowerCorner: Fo(Op.prototype.Og), upperCorner: Fo(Op.prototype.Og) } };
    k.ik = { "http://www.opengis.net/gml": { PolygonPatch: Go(Op.prototype.Yp) } };
    k.lk = { "http://www.opengis.net/gml": { LineStringSegment: Go(Op.prototype.Sp) } };

    function Pp(a, b, c) { var d = c[c.length - 1];
        c = d.hasZ;
        a.setAttribute("srsDimension", c ? 3 : 2);
        d = d.srsName;
        b = b.U(); for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) { g = b[h]; var l = h,
                m = c,
                n = "enu";
            d && (n = Nb(d).b);
            n = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
            m && (n += " " + (g[2] || 0));
            f[l] = n }
        Lp(a, f.join(" ")) }
    k.Ei = function(a, b, c) { var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = yo(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1];
        a = c.hasZ;
        d.setAttribute("srsDimension", a ? 3 : 2); var e = c.srsName;
        c = "enu";
        e && (c = Nb(e).b);
        b = b.U();
        c = "en" === c.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0];
        a && (c += " " + (b[2] || 0));
        Lp(d, c) };
    var Qp = { "http://www.opengis.net/gml": { lowerCorner: L(Lp), upperCorner: L(Lp) } };
    k = Op.prototype;
    k.Gn = function(a, b, c) { var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Oo({ node: a }, Qp, Lo, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this) };
    k.Bi = function(a, b, c) { var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = yo(a.namespaceURI, "posList");
        a.appendChild(d);
        Pp(d, b, c) };
    k.Fn = function(a, b) { a = b[b.length - 1];
        b = a.node; var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0); return yo(b.namespaceURI, void 0 !== c ? "interior" : "exterior") };
    k.$e = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ;
        d = d.srsName; "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d); "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Td(), Oo({ node: a, hasZ: e, srsName: d }, Rp, this.Fn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = yo(a.namespaceURI, "patches"), a.appendChild(e), a = yo(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.$e(a, b, c)) };
    k.Ze = function(a, b, c) { var d = c[c.length - 1].srsName; "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d); "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = yo(a.namespaceURI, "posList"), a.appendChild(d), Pp(d, b, c)) : "Curve" === a.nodeName && (d = yo(a.namespaceURI, "segments"), a.appendChild(d), a = yo(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.Ze(a, b, c)) };
    k.Di = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ,
            f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Ud();
        Oo({ node: a, hasZ: e, srsName: f, surface: d }, Sp, this.l, b, c, void 0, this) };
    k.Hn = function(a, b, c) { var d = c[c.length - 1],
            e = d.srsName;
        d = d.hasZ;
        e && a.setAttribute("srsName", e);
        b = b.be();
        Oo({ node: a, hasZ: d, srsName: e }, Tp, Jo("pointMember"), b, c, void 0, this) };
    k.Ci = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ,
            f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.ud();
        Oo({ node: a, hasZ: e, srsName: f, curve: d }, Up, this.l, b, c, void 0, this) };
    k.Fi = function(a, b, c) { var d = yo(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.Bi(d, b, c) };
    k.Gi = function(a, b, c) { var d = this.a(b, c);
        d && (a.appendChild(d), this.$e(d, b, c)) };
    k.In = function(a, b, c) { var d = yo(a.namespaceURI, "Point");
        a.appendChild(d);
        this.Ei(d, b, c) };
    k.Ai = function(a, b, c) { var d = this.a(b, c);
        d && (a.appendChild(d), this.Ze(d, b, c)) };
    k.Yc = function(a, b, c) { var d = c[c.length - 1],
            e = jb({}, d);
        e.node = a; var f;
        Array.isArray(b) ? d.dataProjection ? f = $b(b, d.featureProjection, d.dataProjection) : f = b : f = Uo(b, !0, d);
        Oo(e, Vp, this.a, [f], c, void 0, this) };
    k.zi = function(a, b, c) { var d = b.c;
        d && a.setAttribute("fid", d);
        d = c[c.length - 1]; var e = d.featureNS,
            f = b.a;
        d.sb || (d.sb = {}, d.sb[e] = {}); var g = b.M();
        b = []; var h = []; for (m in g) { var l = g[m];
            null !== l && (b.push(m), h.push(l), m == f || l instanceof ff ? m in d.sb[e] || (d.sb[e][m] = L(this.Yc, this)) : m in d.sb[e] || (d.sb[e][m] = L(Lp))) } var m = jb({}, d);
        m.node = a;
        Oo(m, d.sb, Jo(void 0, e), h, c, b) };
    var Sp = { "http://www.opengis.net/gml": { surfaceMember: L(Op.prototype.Gi), polygonMember: L(Op.prototype.Gi) } },
        Tp = { "http://www.opengis.net/gml": { pointMember: L(Op.prototype.In) } },
        Up = { "http://www.opengis.net/gml": { lineStringMember: L(Op.prototype.Ai), curveMember: L(Op.prototype.Ai) } },
        Rp = { "http://www.opengis.net/gml": { exterior: L(Op.prototype.Fi), interior: L(Op.prototype.Fi) } },
        Vp = {
            "http://www.opengis.net/gml": {
                Curve: L(Op.prototype.Ze),
                MultiCurve: L(Op.prototype.Ci),
                Point: L(Op.prototype.Ei),
                MultiPoint: L(Op.prototype.Hn),
                LineString: L(Op.prototype.Ze),
                MultiLineString: L(Op.prototype.Ci),
                LinearRing: L(Op.prototype.Bi),
                Polygon: L(Op.prototype.$e),
                MultiPolygon: L(Op.prototype.Di),
                Surface: L(Op.prototype.$e),
                MultiSurface: L(Op.prototype.Di),
                Envelope: L(Op.prototype.Gn)
            }
        },
        Wp = { MultiLineString: "lineStringMember", MultiCurve: "curveMember", MultiPolygon: "polygonMember", MultiSurface: "surfaceMember" };
    Op.prototype.l = function(a, b) { return yo("http://www.opengis.net/gml", Wp[b[b.length - 1].node.nodeName]) };
    Op.prototype.a = function(a, b) { var c = b[b.length - 1];
        b = c.multiSurface; var d = c.surface,
            e = c.curve;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.T(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "LineString" === a && !0 === e ? a = "Curve" : "MultiLineString" === a && !0 === c && (a = "MultiCurve")); return yo("http://www.opengis.net/gml", a) };
    Op.prototype.qe = function(a, b) { b = To(this, b); var c = yo("http://www.opengis.net/gml", "geom"),
            d = { node: c, hasZ: this.hasZ, srsName: this.srsName, curve: this.c, surface: this.s, multiSurface: this.j, multiCurve: this.f };
        b && jb(d, b);
        this.Yc(c, a, [d]); return c };
    Op.prototype.bc = function(a, b) {
        b = To(this, b);
        var c = yo("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = { srsName: this.srsName, hasZ: this.hasZ, curve: this.c, surface: this.s, multiSurface: this.j, multiCurve: this.f, featureNS: this.featureNS, featureType: this.featureType };
        b && jb(d, b);
        b = [d];
        var e = b[b.length - 1];
        d = e.featureType;
        var f = e.featureNS,
            g = {};
        g[f] = {};
        g[f][d] = L(this.zi, this);
        e = jb({}, e);
        e.node = c;
        Oo(e, g,
            Jo(d, f), a, b);
        return c
    };

    function Xp(a) { a = a ? a : {};
        Bp.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Fo(Bp.prototype.ee);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd" }
    v(Xp, Bp);
    k = Xp.prototype;
    k.qj = function(a, b) { a = zo(a, !1).replace(/^\s*|\s*$/g, ""); var c = b[0].srsName;
        b = "enu";
        c && (c = Nb(c)) && (b = c.b);
        a = a.trim().split(/\s+/); for (var d, e, f = [], g = 0, h = a.length; g < h; g++) e = a[g].split(/,+/), c = parseFloat(e[0]), d = parseFloat(e[1]), e = 3 === e.length ? parseFloat(e[2]) : 0, "en" === b.substr(0, 2) ? f.push(c, d, e) : f.push(d, c, e); return f };
    k.Mp = function(a, b) { a = O([null], this.Zj, a, b, this); return Ma(a[1][0], a[1][1], a[1][3], a[1][4]) };
    k.um = function(a, b) {
        (a = O(void 0, this.te, a, b, this)) && b[b.length - 1].push(a) };
    k.vp = function(a, b) {
        (a = O(void 0, this.te, a, b, this)) && (b[b.length - 1][0] = a) };
    k.se = { "http://www.opengis.net/gml": { coordinates: Go(Xp.prototype.qj) } };
    k.Ef = { "http://www.opengis.net/gml": { innerBoundaryIs: Xp.prototype.um, outerBoundaryIs: Xp.prototype.vp } };
    k.Zj = { "http://www.opengis.net/gml": { coordinates: Fo(Xp.prototype.qj) } };
    k.ph = { "http://www.opengis.net/gml": { Point: Go(Bp.prototype.wj), MultiPoint: Go(Bp.prototype.uj), LineString: Go(Bp.prototype.qf), MultiLineString: Go(Bp.prototype.tj), LinearRing: Go(Bp.prototype.sj), Polygon: Go(Bp.prototype.rf), MultiPolygon: Go(Bp.prototype.vj), Box: Go(Xp.prototype.Mp) } };
    k.ug = function(a, b) { var c = b[b.length - 1];
        b = c.multiSurface; var d = c.surface;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.T(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "MultiLineString" === a && !0 === c && (a = "MultiCurve")); return yo("http://www.opengis.net/gml", a) };
    k.ri = function(a, b, c) { var d = c[c.length - 1],
            e = jb({}, d);
        e.node = a; var f;
        Array.isArray(b) ? d.dataProjection ? f = $b(b, d.featureProjection, d.dataProjection) : f = b : f = Uo(b, !0, d);
        Oo(e, Yp, this.ug, [f], c, void 0, this) };
    k.Xe = function(a, b, c) { var d = c[c.length - 1].srsName; "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d); "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Zp(a.namespaceURI), a.appendChild(d), $p(d, b, c)) : "Curve" === a.nodeName && (d = yo(a.namespaceURI, "segments"), a.appendChild(d), a = yo(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.Xe(a, b, c)) };

    function Zp(a) { a = yo(a, "coordinates");
        a.setAttribute("decimal", ".");
        a.setAttribute("cs", ",");
        a.setAttribute("ts", " "); return a }

    function $p(a, b, c) { var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.U(); for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) g = b[h], f[h] = aq(g, d, c);
        Lp(a, f.join(" ")) }
    k.Ye = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ;
        d = d.srsName; "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d); "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Td(), Oo({ node: a, hasZ: e, srsName: d }, bq, this.Bn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = yo(a.namespaceURI, "patches"), a.appendChild(e), a = yo(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.Ye(a, b, c)) };
    k.Bn = function(a, b) { a = b[b.length - 1];
        b = a.node; var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0); return yo(b.namespaceURI, void 0 !== c ? "innerBoundaryIs" : "outerBoundaryIs") };
    k.xi = function(a, b, c) { var d = yo(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.ti(d, b, c) };

    function aq(a, b, c) { var d = "enu";
        b && (d = Nb(b).b);
        b = "en" === d.substr(0, 2) ? a[0] + "," + a[1] : a[1] + "," + a[0];
        c && (b += "," + (a[2] || 0)); return b }
    k.ui = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ,
            f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.ud();
        Oo({ node: a, hasZ: e, srsName: f, curve: d }, cq, this.a, b, c, void 0, this) };
    k.wi = function(a, b, c) { var d = c[c.length - 1];
        c = d.hasZ; var e = d.srsName;
        e && a.setAttribute("srsName", e);
        d = Zp(a.namespaceURI);
        a.appendChild(d);
        a = b.U();
        a = aq(a, e, c);
        Lp(d, a) };
    k.Dn = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ;
        (d = d.srsName) && a.setAttribute("srsName", d);
        b = b.be();
        Oo({ node: a, hasZ: e, srsName: d }, dq, Jo("pointMember"), b, c, void 0, this) };
    k.En = function(a, b, c) { var d = yo(a.namespaceURI, "Point");
        a.appendChild(d);
        this.wi(d, b, c) };
    k.si = function(a, b, c) { var d = this.ug(b, c);
        d && (a.appendChild(d), this.Xe(d, b, c)) };
    k.ti = function(a, b, c) { var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Zp(a.namespaceURI);
        a.appendChild(d);
        $p(d, b, c) };
    k.vi = function(a, b, c) { var d = c[c.length - 1],
            e = d.hasZ,
            f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Ud();
        Oo({ node: a, hasZ: e, srsName: f, surface: d }, eq, this.a, b, c, void 0, this) };
    k.yi = function(a, b, c) { var d = this.ug(b, c);
        d && (a.appendChild(d), this.Ye(d, b, c)) };
    k.Cn = function(a, b, c) { var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Oo({ node: a }, fq, Lo, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this) };
    var Yp = { "http://www.opengis.net/gml": { Curve: L(Xp.prototype.Xe), MultiCurve: L(Xp.prototype.ui), Point: L(Xp.prototype.wi), MultiPoint: L(Xp.prototype.Dn), LineString: L(Xp.prototype.Xe), MultiLineString: L(Xp.prototype.ui), LinearRing: L(Xp.prototype.ti), Polygon: L(Xp.prototype.Ye), MultiPolygon: L(Xp.prototype.vi), Surface: L(Xp.prototype.Ye), MultiSurface: L(Xp.prototype.vi), Envelope: L(Xp.prototype.Cn) } },
        bq = { "http://www.opengis.net/gml": { outerBoundaryIs: L(Xp.prototype.xi), innerBoundaryIs: L(Xp.prototype.xi) } },
        dq = { "http://www.opengis.net/gml": { pointMember: L(Xp.prototype.En) } },
        cq = { "http://www.opengis.net/gml": { lineStringMember: L(Xp.prototype.si), curveMember: L(Xp.prototype.si) } };
    Xp.prototype.a = function(a, b) { return yo("http://www.opengis.net/gml", gq[b[b.length - 1].node.nodeName]) };
    var gq = { MultiLineString: "lineStringMember", MultiCurve: "curveMember", MultiPolygon: "polygonMember", MultiSurface: "surfaceMember" },
        eq = { "http://www.opengis.net/gml": { surfaceMember: L(Xp.prototype.yi), polygonMember: L(Xp.prototype.yi) } },
        fq = { "http://www.opengis.net/gml": { lowerCorner: L(Lp), upperCorner: L(Lp) } };

    function hq(a) { a = a ? a : {};
        yp.call(this);
        this.defaultDataProjection = Nb("EPSG:4326");
        this.b = a.readExtensions }
    v(hq, yp);
    var iq = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function jq(a, b, c, d) { a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat"))); "ele" in d ? (a.push(d.ele), delete d.ele, b.hasZ = !0) : a.push(0); "time" in d ? (a.push(d.time), delete d.time, b.hasM = !0) : a.push(0); return a }

    function kq(a, b, c) { var d = "XY",
            e = 2;
        a.hasZ && a.hasM ? (d = "XYZM", e = 4) : a.hasZ ? (d = "XYZ", e = 3) : a.hasM && (d = "XYM", e = 3); if (4 !== e) { var f; var g = 0; for (f = b.length / 4; g < f; g++) b[g * e] = b[4 * g], b[g * e + 1] = b[4 * g + 1], a.hasZ && (b[g * e + 2] = b[4 * g + 2]), a.hasM && (b[g * e + 2] = b[4 * g + 3]);
            b.length = b.length / 4 * e; if (c)
                for (g = 0, f = c.length; g < f; g++) c[g] = c[g] / 4 * e } return d }

    function lq(a, b) { var c = b[b.length - 1],
            d = a.getAttribute("href");
        null !== d && (c.link = d);
        No(mq, a, b) }

    function nq(a, b) { b[b.length - 1].extensionsNode_ = a }

    function oq(a, b) { var c = b[0]; if (a = O({ flatCoordinates: [], layoutOptions: {} }, pq, a, b)) { b = a.flatCoordinates;
            delete a.flatCoordinates; var d = a.layoutOptions;
            delete a.layoutOptions;
            d = kq(d, b); var e = new I(null);
            e.ba(d, b);
            Uo(e, !1, c);
            c = new vk(e);
            c.I(a); return c } }

    function qq(a, b) { var c = b[0]; if (a = O({ flatCoordinates: [], ends: [], layoutOptions: {} }, rq, a, b)) { b = a.flatCoordinates;
            delete a.flatCoordinates; var d = a.ends;
            delete a.ends; var e = a.layoutOptions;
            delete a.layoutOptions;
            e = kq(e, b, d); var f = new P(null);
            f.ba(e, b, d);
            Uo(f, !1, c);
            c = new vk(f);
            c.I(a); return c } }

    function sq(a, b) { var c = b[0]; if (b = O({}, tq, a, b)) { var d = {};
            a = jq([], d, a, b);
            d = kq(d, a);
            a = new B(a, d);
            Uo(a, !1, c);
            c = new vk(a);
            c.I(b); return c } }
    var uq = { rte: oq, trk: qq, wpt: sq },
        vq = M(iq, { rte: Fo(oq), trk: Fo(qq), wpt: Fo(sq) }),
        mq = M(iq, { text: K(S, "linkText"), type: K(S, "linkType") }),
        pq = M(iq, { name: K(S), cmt: K(S), desc: K(S), src: K(S), link: lq, number: K(Ip), extensions: nq, type: K(S), rtept: function(a, b) { var c = O({}, wq, a, b);
                c && (b = b[b.length - 1], jq(b.flatCoordinates, b.layoutOptions, a, c)) } }),
        wq = M(iq, { ele: K(Gp), time: K(Fp) }),
        rq = M(iq, { name: K(S), cmt: K(S), desc: K(S), src: K(S), link: lq, number: K(Ip), type: K(S), extensions: nq, trkseg: function(a, b) { var c = b[b.length - 1];
                No(xq, a, b);
                c.ends.push(c.flatCoordinates.length) } }),
        xq = M(iq, { trkpt: function(a, b) { var c = O({}, yq, a, b);
                c && (b = b[b.length - 1], jq(b.flatCoordinates, b.layoutOptions, a, c)) } }),
        yq = M(iq, { ele: K(Gp), time: K(Fp) }),
        tq = M(iq, { ele: K(Gp), time: K(Fp), magvar: K(Gp), geoidheight: K(Gp), name: K(S), cmt: K(S), desc: K(S), src: K(S), link: lq, sym: K(S), type: K(S), fix: K(S), sat: K(Ip), hdop: K(Gp), vdop: K(Gp), pdop: K(Gp), ageofdgpsdata: K(Gp), dgpsid: K(Ip), extensions: nq });

    function zq(a, b) { b || (b = []); for (var c = 0, d = b.length; c < d; ++c) { var e = b[c]; if (a.b) { var f = e.get("extensionsNode_") || null;
                a.b(e, f) }
            e.set("extensionsNode_", void 0) } }
    hq.prototype.Kg = function(a, b) { if (!cc(iq, a.namespaceURI)) return null; var c = uq[a.localName]; if (!c) return null;
        a = c(a, [So(this, a, b)]); if (!a) return null;
        zq(this, [a]); return a };
    hq.prototype.Ic = function(a, b) { return cc(iq, a.namespaceURI) ? "gpx" == a.localName && (a = O([], vq, a, [So(this, a, b)])) ? (zq(this, a), a) : [] : [] };

    function Aq(a, b, c) { a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        Oo({ node: a }, Bq, Lo, [b.linkText, b.linkType], c, Cq) }

    function Dq(a, b, c) { var d = c[c.length - 1],
            e = d.node.namespaceURI,
            f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]); switch (d.geometryLayout) {
            case "XYZM":
                0 !== b[3] && (f.time = b[3]);
            case "XYZ":
                0 !== b[2] && (f.ele = b[2]); break;
            case "XYM":
                0 !== b[2] && (f.time = b[2]) }
        b = "rtept" == a.nodeName ? Eq[e] : Fq[e];
        d = Mo(f, b);
        Oo({ node: a, properties: f }, Gq, Lo, d, c, b) }
    var Cq = ["text", "type"],
        Bq = M(iq, { text: L(Lp), type: L(Lp) }),
        Hq = M(iq, "name cmt desc src link number type rtept".split(" ")),
        Iq = M(iq, { name: L(Lp), cmt: L(Lp), desc: L(Lp), src: L(Lp), link: L(Aq), number: L(Np), type: L(Lp), rtept: Io(L(Dq)) }),
        Eq = M(iq, ["ele", "time"]),
        Jq = M(iq, "name cmt desc src link number type trkseg".split(" ")),
        Mq = M(iq, { name: L(Lp), cmt: L(Lp), desc: L(Lp), src: L(Lp), link: L(Aq), number: L(Np), type: L(Lp), trkseg: Io(L(function(a, b, c) { Oo({ node: a, geometryLayout: b.ja, properties: {} }, Kq, Lq, b.U(), c) })) }),
        Lq = Jo("trkpt"),
        Kq = M(iq, { trkpt: L(Dq) }),
        Fq = M(iq, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
        Gq = M(iq, {
            ele: L(Mp),
            time: L(function(a, b) { b = new Date(1E3 * b);
                a.appendChild(xo.createTextNode(b.getUTCFullYear() + "-" + xe(b.getUTCMonth() + 1) + "-" + xe(b.getUTCDate()) + "T" + xe(b.getUTCHours()) + ":" + xe(b.getUTCMinutes()) + ":" + xe(b.getUTCSeconds()) + "Z")) }),
            magvar: L(Mp),
            geoidheight: L(Mp),
            name: L(Lp),
            cmt: L(Lp),
            desc: L(Lp),
            src: L(Lp),
            link: L(Aq),
            sym: L(Lp),
            type: L(Lp),
            fix: L(Lp),
            sat: L(Np),
            hdop: L(Mp),
            vdop: L(Mp),
            pdop: L(Mp),
            ageofdgpsdata: L(Mp),
            dgpsid: L(Np)
        }),
        Nq = { Point: "wpt", LineString: "rte", MultiLineString: "trk" };

    function Oq(a, b) { if (a = a.V())
            if (a = Nq[a.T()]) return yo(b[b.length - 1].node.namespaceURI, a) }
    var Pq = M(iq, {
        rte: L(function(a, b, c) { var d = c[0],
                e = b.M();
            a = { node: a, properties: e }; if (b = b.V()) b = Uo(b, !0, d), a.geometryLayout = b.ja, e.rtept = b.U();
            d = Hq[c[c.length - 1].node.namespaceURI];
            e = Mo(e, d);
            Oo(a, Iq, Lo, e, c, d) }),
        trk: L(function(a, b, c) { var d = c[0],
                e = b.M();
            a = { node: a, properties: e }; if (b = b.V()) b = Uo(b, !0, d), e.trkseg = b.ud();
            d = Jq[c[c.length - 1].node.namespaceURI];
            e = Mo(e, d);
            Oo(a, Mq, Lo, e, c, d) }),
        wpt: L(function(a, b, c) {
            var d = c[0],
                e = c[c.length - 1];
            e.properties = b.M();
            if (b = b.V()) b = Uo(b, !0, d), e.geometryLayout = b.ja, Dq(a, b.U(),
                c)
        })
    });
    hq.prototype.bc = function(a, b) { b = To(this, b); var c = yo("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers");
        Oo({ node: c }, Pq, Oq, a, [b]); return c };

    function Qq(a) { ff.call(this);
        this.a = a ? a : null;
        Rq(this) }
    v(Qq, ff);

    function Sq(a) { var b = [],
            c; var d = 0; for (c = a.length; d < c; ++d) b.push(a[d].clone()); return b }

    function Tq(a) { var b; if (a.a) { var c = 0; for (b = a.a.length; c < b; ++c) Mc(a.a[c], "change", a.u, a) } }

    function Rq(a) { var b; if (a.a) { var c = 0; for (b = a.a.length; c < b; ++c) y(a.a[c], "change", a.u, a) } }
    k = Qq.prototype;
    k.clone = function() { var a = new Qq(null);
        a.Fj(this.a); return a };
    k.Nb = function(a, b, c, d) { if (d < Ga(this.C(), a, b)) return d; var e = this.a,
            f; var g = 0; for (f = e.length; g < f; ++g) d = e[g].Nb(a, b, c, d); return d };
    k.Zc = function(a, b) { var c = this.a,
            d; var e = 0; for (d = c.length; e < d; ++e)
            if (c[e].Zc(a, b)) return !0;
        return !1 };
    k.ze = function(a) { Na(a); for (var b = this.a, c = 0, d = b.length; c < d; ++c) Ta(a, b[c].C()); return a };
    k.td = function() { return Sq(this.a) };
    k.Vd = function(a) { this.l != this.g && (kb(this.i), this.f = 0, this.l = this.g); if (0 > a || 0 !== this.f && a < this.f) return this; var b = a.toString(); if (this.i.hasOwnProperty(b)) return this.i[b]; var c = [],
            d = this.a,
            e = !1,
            f; var g = 0; for (f = d.length; g < f; ++g) { var h = d[g],
                l = h.Vd(a);
            c.push(l);
            l !== h && (e = !0) } if (e) return a = new Qq(null), Tq(a), a.a = c, Rq(a), a.u(), this.i[b] = a;
        this.f = a; return this };
    k.T = function() { return "GeometryCollection" };
    k.$a = function(a) { var b = this.a,
            c; var d = 0; for (c = b.length; d < c; ++d)
            if (b[d].$a(a)) return !0;
        return !1 };
    k.rotate = function(a, b) { for (var c = this.a, d = 0, e = c.length; d < e; ++d) c[d].rotate(a, b);
        this.u() };
    k.scale = function(a, b, c) { c || (c = cb(this.C())); for (var d = this.a, e = 0, f = d.length; e < f; ++e) d[e].scale(a, b, c);
        this.u() };
    k.Fj = function(a) { a = Sq(a);
        Tq(this);
        this.a = a;
        Rq(this);
        this.u() };
    k.Pc = function(a) { var b = this.a,
            c; var d = 0; for (c = b.length; d < c; ++d) b[d].Pc(a);
        this.u() };
    k.translate = function(a, b) { var c = this.a,
            d; var e = 0; for (d = c.length; e < d; ++e) c[e].translate(a, b);
        this.u() };
    k.ha = function() { Tq(this);
        ff.prototype.ha.call(this) };

    function Uq(a) { a = a ? a : {};
        Ro.call(this);
        this.defaultDataProjection = Nb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        a.featureProjection && (this.i = Nb(a.featureProjection));
        this.b = a.geometryName;
        this.a = a.extractGeometryName }
    v(Uq, Vo);

    function Vq(a, b) { return a ? Uo((0, Wq[a.type])(a), !1, b) : null }

    function Xq(a, b) { return (0, Yq[a.T()])(Uo(a, !0, b), b) }
    var Wq = { Point: function(a) { return new B(a.coordinates) }, LineString: function(a) { return new I(a.coordinates) }, Polygon: function(a) { return new D(a.coordinates) }, MultiPoint: function(a) { return new Q(a.coordinates) }, MultiLineString: function(a) { return new P(a.coordinates) }, MultiPolygon: function(a) { return new R(a.coordinates) }, GeometryCollection: function(a, b) { a = a.geometries.map(function(a) { return Vq(a, b) }); return new Qq(a) } },
        Yq = {
            Point: function(a) { return { type: "Point", coordinates: a.U() } },
            LineString: function(a) {
                return {
                    type: "LineString",
                    coordinates: a.U()
                }
            },
            Polygon: function(a, b) { if (b) var c = b.rightHanded; return { type: "Polygon", coordinates: a.U(c) } },
            MultiPoint: function(a) { return { type: "MultiPoint", coordinates: a.U() } },
            MultiLineString: function(a) { return { type: "MultiLineString", coordinates: a.U() } },
            MultiPolygon: function(a, b) { if (b) var c = b.rightHanded; return { type: "MultiPolygon", coordinates: a.U(c) } },
            GeometryCollection: function(a, b) {
                return {
                    type: "GeometryCollection",
                    geometries: a.a.map(function(a) {
                        var c = jb({}, b);
                        delete c.featureProjection;
                        return Xq(a,
                            c)
                    })
                }
            },
            Circle: function() { return { type: "GeometryCollection", geometries: [] } }
        };
    k = Uq.prototype;
    k.cd = function(a, b) { a = "Feature" === a.type ? a : { type: "Feature", geometry: a };
        b = Vq(a.geometry, b); var c = new vk;
        this.b ? c.Jc(this.b) : this.a && void 0 !== a.geometry_name && c.Jc(a.geometry_name);
        c.Ua(b);
        void 0 !== a.id && c.pc(a.id);
        a.properties && c.I(a.properties); return c };
    k.Lg = function(a, b) { if ("FeatureCollection" === a.type) { var c = [];
            a = a.features; var d; var e = 0; for (d = a.length; e < d; ++e) c.push(this.cd(a[e], b)) } else c = [this.cd(a, b)]; return c };
    k.Pg = function(a, b) { return Vq(a, b) };
    k.Sg = function(a) { a = a.crs; var b;
        a ? "name" == a.type ? b = Nb(a.properties.name) : na(!1, 36) : b = this.defaultDataProjection; return b };
    k.kd = function(a, b) { b = To(this, b); var c = { type: "Feature" },
            d = a.c;
        void 0 !== d && (c.id = d);
        (d = a.V()) ? c.geometry = Xq(d, b): c.geometry = null;
        b = a.M();
        delete b[a.a];
        mb(b) ? c.properties = null : c.properties = b; return c };
    k.pe = function(a, b) { b = To(this, b); var c = [],
            d; var e = 0; for (d = a.length; e < d; ++e) c.push(this.kd(a[e], b)); return { type: "FeatureCollection", features: c } };
    k.re = function(a, b) { return Xq(a, To(this, b)) };

    function Zq() { Ro.call(this) }
    v(Zq, Ro);

    function $q(a) { return "string" === typeof a ? a : "" }
    k = Zq.prototype;
    k.T = function() { return "text" };
    k.Yb = function(a, b) { return this.de($q(a), To(this, b)) };
    k.Na = function(a, b) { return this.Mg($q(a), To(this, b)) };
    k.dd = function(a, b) { return this.Fd($q(a), To(this, b)) };
    k.rb = function() { return this.defaultDataProjection };
    k.Id = function(a, b) { return this.oe(a, To(this, b)) };
    k.ac = function(a, b) { return this.mh(a, To(this, b)) };
    k.ld = function(a, b) { return this.Jd(a, To(this, b)) };

    function ar(a) { a = a ? a : {};
        Ro.call(this);
        this.defaultDataProjection = Nb("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none" }
    v(ar, Zq);
    var br = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        cr = /^H.([A-Z]{3}).*?:(.*)/,
        dr = /^HFDTE(\d{2})(\d{2})(\d{2})/,
        er = /\r\n|\r|\n/;
    k = ar.prototype;
    k.de = function(a, b) {
        var c = this.b,
            d = a.split(er);
        a = {};
        var e = [],
            f = 2E3,
            g = 0,
            h = 1,
            l = -1,
            m;
        var n = 0;
        for (m = d.length; n < m; ++n) {
            var p = d[n],
                q;
            if ("B" == p.charAt(0)) {
                if (q = br.exec(p)) {
                    p = parseInt(q[1], 10);
                    var r = parseInt(q[2], 10),
                        u = parseInt(q[3], 10),
                        x = parseInt(q[4], 10) + parseInt(q[5], 10) / 6E4;
                    "S" == q[6] && (x = -x);
                    var C = parseInt(q[7], 10) + parseInt(q[8], 10) / 6E4;
                    "W" == q[9] && (C = -C);
                    e.push(C, x);
                    "none" != c && e.push("gps" == c ? parseInt(q[11], 10) : "barometric" == c ? parseInt(q[12], 10) : 0);
                    q = Date.UTC(f, g, h, p, r, u);
                    q < l && (q = Date.UTC(f, g, h + 1, p, r,
                        u));
                    e.push(q / 1E3);
                    l = q
                }
            } else "H" == p.charAt(0) && ((q = dr.exec(p)) ? (h = parseInt(q[1], 10), g = parseInt(q[2], 10) - 1, f = 2E3 + parseInt(q[3], 10)) : (q = cr.exec(p)) && (a[q[1]] = q[2].trim()))
        }
        if (0 === e.length) return null;
        d = new I(null);
        d.ba("none" == c ? "XYM" : "XYZM", e);
        b = new vk(Uo(d, !1, b));
        b.I(a);
        return b
    };
    k.Mg = function(a, b) { return (a = this.de(a, b)) ? [a] : [] };
    k.oe = function() {};
    k.mh = function() {};
    k.Jd = function() {};
    k.Fd = function() {};

    function fr(a, b, c, d, e, f) { Sc.call(this);
        this.j = null;
        this.N = a ? a : new Image;
        null !== d && (this.N.crossOrigin = d);
        this.c = f ? document.createElement("CANVAS") : null;
        this.f = f;
        this.i = null;
        this.g = e;
        this.a = c;
        this.l = b;
        this.s = !1;
        2 == this.g && gr(this) }
    v(fr, Sc);

    function gr(a) { var b = gg(1, 1); try { b.drawImage(a.N, 0, 0), b.getImageData(0, 0, 1, 1) } catch (c) { a.s = !0 } }
    fr.prototype.v = function() { this.g = 3;
        this.i.forEach(Gc);
        this.i = null;
        this.b("change") };
    fr.prototype.o = function() { this.g = 2;
        this.a && (this.N.width = this.a[0], this.N.height = this.a[1]);
        this.a = [this.N.width, this.N.height];
        this.i.forEach(Gc);
        this.i = null;
        gr(this); if (!this.s && null !== this.f) { this.c.width = this.N.width;
            this.c.height = this.N.height; var a = this.c.getContext("2d");
            a.drawImage(this.N, 0, 0); for (var b = a.getImageData(0, 0, this.N.width, this.N.height), c = b.data, d = this.f[0] / 255, e = this.f[1] / 255, f = this.f[2] / 255, g = 0, h = c.length; g < h; g += 4) c[g] *= d, c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0) }
        this.b("change") };
    fr.prototype.Y = function() { return this.c ? this.c : this.N };
    fr.prototype.load = function() { if (0 == this.g) { this.g = 1;
            this.i = [Lc(this.N, "error", this.v, this), Lc(this.N, "load", this.o, this)]; try { this.N.src = this.l } catch (a) { this.v() } } };

    function hr(a) {
        a = a || {};
        this.l = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.o = null;
        this.g = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.B = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.H = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        this.qa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.img ? a.img : null,
            c = void 0 !== a.imgSize ? a.imgSize : null,
            d = a.src;
        na(!(void 0 !== d && b), 4);
        na(!b || b && c, 5);
        void 0 !== d && 0 !== d.length || !b || (d = b.src || w(b).toString());
        na(void 0 !== d && 0 < d.length, 6);
        var e =
            void 0 !== a.src ? 0 : 2;
        this.j = void 0 !== a.color ? li(a.color) : null;
        var f = this.qa,
            g = this.j,
            h = Ui.get(d, f, g);
        h || (h = new fr(b, d, c, f, e, g), Ui.set(d, f, g, h));
        this.b = h;
        this.oa = void 0 !== a.offset ? a.offset : [0, 0];
        this.c = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.P = null;
        this.D = void 0 !== a.size ? a.size : null;
        jk.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ?
                a.rotateWithView : !1
        })
    }
    v(hr, jk);
    k = hr.prototype;
    k.clone = function() { return new hr({ anchor: this.l.slice(), anchorOrigin: this.g, anchorXUnits: this.B, anchorYUnits: this.H, crossOrigin: this.qa, color: this.j && this.j.slice ? this.j.slice() : this.j || void 0, src: this.b.l, offset: this.oa.slice(), offsetOrigin: this.c, size: null !== this.D ? this.D.slice() : void 0, opacity: this.i, scale: this.a, snapToPixel: this.v, rotation: this.f, rotateWithView: this.s }) };
    k.Uc = function() { if (this.o) return this.o; var a = this.l,
            b = this.nc(); if ("fraction" == this.B || "fraction" == this.H) { if (!b) return null;
            a = this.l.slice(); "fraction" == this.B && (a[0] *= b[0]); "fraction" == this.H && (a[1] *= b[1]) } if ("top-left" != this.g) { if (!b) return null;
            a === this.l && (a = this.l.slice()); if ("top-right" == this.g || "bottom-right" == this.g) a[0] = -a[0] + b[0]; if ("bottom-left" == this.g || "bottom-right" == this.g) a[1] = -a[1] + b[1] } return this.o = a };
    k.ep = function() { return this.j };
    k.Y = function(a) { return this.b.Y(a) };
    k.Ge = function() { return this.b.a };
    k.ef = function() { return this.b.g };
    k.Dg = function() { var a = this.b; if (!a.j)
            if (a.s) { var b = a.a[0],
                    c = a.a[1],
                    d = gg(b, c);
                d.fillRect(0, 0, b, c);
                a.j = d.canvas } else a.j = a.N;
        return a.j };
    k.ad = function() { if (this.P) return this.P; var a = this.oa; if ("top-left" != this.c) { var b = this.nc(),
                c = this.b.a; if (!b || !c) return null;
            a = a.slice(); if ("top-right" == this.c || "bottom-right" == this.c) a[0] = c[0] - b[0] - a[0]; if ("bottom-left" == this.c || "bottom-right" == this.c) a[1] = c[1] - b[1] - a[1] } return this.P = a };
    k.fp = function() { return this.b.l };
    k.nc = function() { return this.D ? this.D : this.b.a };
    k.di = function(a, b) { return y(this.b, "change", a, b) };
    k.load = function() { this.b.load() };
    k.Tj = function(a, b) { Mc(this.b, "change", a, b) };

    function ir(a) {
        a = a ? a : {};
        yp.call(this);
        jr || (kr = [255, 255, 255, 1], lr = new nk({ color: kr }), mr = [20, 2], nr = or = "pixels", pr = [64, 64], qr = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", rr = .5, sr = new hr({ anchor: mr, anchorOrigin: "bottom-left", anchorXUnits: or, anchorYUnits: nr, crossOrigin: "anonymous", rotation: 0, scale: rr, size: pr, src: qr }), tr = "NO_IMAGE", ur = new ok({ color: kr, width: 1 }), vr = new ok({ color: [51, 51, 51, 1], width: 2 }), wr = new Ek({ font: "bold 16px Helvetica", fill: lr, stroke: vr, scale: .8 }), xr = new pk({
            fill: lr,
            image: sr,
            text: wr,
            stroke: ur,
            zIndex: 0
        }), jr = [xr]);
        this.defaultDataProjection = Nb("EPSG:4326");
        this.a = a.defaultStyle ? a.defaultStyle : jr;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.j = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.f = void 0 !== a.showPointNames ? a.showPointNames : !0
    }
    var jr, kr, lr, mr, or, nr, pr, qr, rr, sr, tr, ur, vr, wr, xr;
    v(ir, yp);
    var yr = ["http://www.google.com/kml/ext/2.2"],
        zr = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        Ar = { fraction: "fraction", pixels: "pixels", insetPixels: "pixels" };

    function Br(a, b) { var c = [0, 0],
            d = "start"; if (a.Y()) { var e = a.Y().Ge();
            null === e && (e = pr);
            2 == e.length && (d = a.Y().a, c[0] = d * e[0] / 2, c[1] = -d * e[1] / 2, d = "left") }
        null !== a.Ka() ? (e = a.Ka(), a = e.clone(), a.Ej(e.a || wr.a), a.ij(e.b || wr.b), a.wf(e.Ea() || wr.Ea()), a.yf(e.Fa() || vr)) : a = wr.clone();
        a.Gd(b);
        a.Ij(c[0]);
        a.Jj(c[1]);
        a.Lj(d); return new pk({ text: a }) }

    function Cr(a, b, c, d, e) { return function() { var f = e,
                g = "";
            f && this.V() && (f = "Point" === this.V().T());
            f && (g = this.get("name"), f = f && g); if (a) return f ? (f = Br(a[0], g), a.concat(f)) : a; if (b) { var h = Dr(b, c, d); return f ? (f = Br(h[0], g), h.concat(f)) : h } return f ? (f = Br(c[0], g), c.concat(f)) : c } }

    function Dr(a, b, c) { return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), Dr(c[a], b, c)) : b }

    function Er(a) { a = zo(a, !1); if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a)) return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255] }

    function Fr(a) { a = zo(a, !1); for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a);) b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length); if ("" === a) return b }

    function Gr(a) { var b = zo(a, !1).trim();
        a = a.baseURI;
        a && "about:blank" != a || (a = window.location.href); return a ? (new URL(b, a)).href : b }

    function Hr(a) { return Gp(a) }

    function Ir(a, b) { return O(null, Jr, a, b) }

    function Kr(a, b) { if (b = O({ A: [], Wj: [] }, Lr, a, b)) { a = b.A;
            b = b.Wj; var c; var d = 0; for (c = Math.min(a.length, b.length); d < c; ++d) a[4 * d + 3] = b[d];
            b = new I(null);
            b.ba("XYZM", a); return b } }

    function Mr(a, b) { var c = O({}, Nr, a, b); if (a = O(null, Or, a, b)) return b = new I(null), b.ba("XYZ", a), b.I(c), b }

    function Pr(a, b) { var c = O({}, Nr, a, b); if (a = O(null, Or, a, b)) return b = new D(null), b.ba("XYZ", a, [a.length]), b.I(c), b }

    function Qr(a, b) { a = O([], Rr, a, b); if (!a) return null; if (0 === a.length) return new Qq(a); var c = !0,
            d = a[0].T(),
            e; var f = 1; for (e = a.length; f < e; ++f)
            if (b = a[f], b.T() != d) { c = !1; break }
        if (c)
            if ("Point" == d) { var g = a[0];
                c = g.ja;
                d = g.da();
                f = 1; for (e = a.length; f < e; ++f) b = a[f], ec(d, b.da());
                g = new Q(null);
                g.ba(c, d);
                Sr(g, a) } else "LineString" == d ? (g = new P(null), Xo(g, a), Sr(g, a)) : "Polygon" == d ? (g = new R(null), Yo(g, a), Sr(g, a)) : "GeometryCollection" == d ? g = new Qq(a) : na(!1, 37);
        else g = new Qq(a); return g }

    function Tr(a, b) { var c = O({}, Nr, a, b); if (a = O(null, Or, a, b)) return b = new B(null), b.ba("XYZ", a), b.I(c), b }

    function Ur(a, b) { var c = O({}, Nr, a, b); if ((a = O([null], Vr, a, b)) && a[0]) { b = new D(null); var d = a[0],
                e = [d.length],
                f; var g = 1; for (f = a.length; g < f; ++g) ec(d, a[g]), e.push(d.length);
            b.ba("XYZ", d, e);
            b.I(c); return b } }

    function Wr(a, b) { b = O({}, Xr, a, b); if (!b) return null;
        a = "fillStyle" in b ? b.fillStyle : lr; var c = b.fill;
        void 0 === c || c || (a = null);
        c = "imageStyle" in b ? b.imageStyle : sr;
        c == tr && (c = void 0); var d = "textStyle" in b ? b.textStyle : wr,
            e = "strokeStyle" in b ? b.strokeStyle : ur;
        b = b.outline;
        void 0 === b || b || (e = null); return [new pk({ fill: a, image: c, stroke: e, text: d, zIndex: void 0 })] }

    function Sr(a, b) { var c = b.length,
            d = Array(b.length),
            e = Array(b.length),
            f = Array(b.length),
            g, h, l; var m = h = l = !1; for (g = 0; g < c; ++g) { var n = b[g];
            d[g] = n.get("extrude");
            e[g] = n.get("tessellate");
            f[g] = n.get("altitudeMode");
            m = m || void 0 !== d[g];
            h = h || void 0 !== e[g];
            l = l || f[g] }
        m && a.set("extrude", d);
        h && a.set("tessellate", e);
        l && a.set("altitudeMode", f) }

    function Yr(a, b) { No(Zr, a, b) }

    function $r(a, b) { No(as, a, b) }
    var bs = M(zr, { displayName: K(S), value: K(S) }),
        Zr = M(zr, { Data: function(a, b) { var c = a.getAttribute("name");
                No(bs, a, b);
                a = b[b.length - 1];
                null !== c ? a[c] = a.value : null !== a.displayName && (a[a.displayName] = a.value);
                delete a.value }, SchemaData: function(a, b) { No(cs, a, b) } }),
        as = M(zr, {
            LatLonAltBox: function(a, b) { if (a = O({}, ds, a, b)) b = b[b.length - 1], b.extent = [parseFloat(a.west), parseFloat(a.south), parseFloat(a.east), parseFloat(a.north)], b.altitudeMode = a.altitudeMode, b.minAltitude = parseFloat(a.minAltitude), b.maxAltitude = parseFloat(a.maxAltitude) },
            Lod: function(a, b) { if (a = O({}, es, a, b)) b = b[b.length - 1], b.minLodPixels = parseFloat(a.minLodPixels), b.maxLodPixels = parseFloat(a.maxLodPixels), b.minFadeExtent = parseFloat(a.minFadeExtent), b.maxFadeExtent = parseFloat(a.maxFadeExtent) }
        }),
        ds = M(zr, { altitudeMode: K(S), minAltitude: K(Gp), maxAltitude: K(Gp), north: K(Gp), south: K(Gp), east: K(Gp), west: K(Gp) }),
        es = M(zr, { minLodPixels: K(Gp), maxLodPixels: K(Gp), minFadeExtent: K(Gp), maxFadeExtent: K(Gp) }),
        Nr = M(zr, { extrude: K(Dp), tessellate: K(Dp), altitudeMode: K(S) }),
        Jr = M(zr, { coordinates: Go(Fr) }),
        Vr = M(zr, { innerBoundaryIs: function(a, b) {
                (a = O(void 0, fs, a, b)) && b[b.length - 1].push(a) }, outerBoundaryIs: function(a, b) {
                (a = O(void 0, gs, a, b)) && (b[b.length - 1][0] = a) } }),
        Lr = M(zr, { when: function(a, b) { b = b[b.length - 1].Wj;
                a = zo(a, !1);
                a = Date.parse(a);
                b.push(isNaN(a) ? 0 : a) } }, M(yr, {
            coord: function(a, b) {
                b = b[b.length - 1].A;
                a = zo(a, !1);
                (a = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(a)) ? b.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]),
                    0): b.push(0, 0, 0, 0)
            }
        })),
        Or = M(zr, { coordinates: Go(Fr) }),
        hs = M(zr, { href: K(Gr) }, M(yr, { x: K(Gp), y: K(Gp), w: K(Gp), h: K(Gp) })),
        is = M(zr, { Icon: K(function(a, b) { return (a = O({}, hs, a, b)) ? a : null }), heading: K(Gp), hotSpot: K(function(a) { var b = a.getAttribute("xunits"),
                    c = a.getAttribute("yunits"); var d = "insetPixels" !== b ? "insetPixels" !== c ? "bottom-left" : "top-left" : "insetPixels" !== c ? "bottom-right" : "top-right"; return { x: parseFloat(a.getAttribute("x")), nh: Ar[b], y: parseFloat(a.getAttribute("y")), oh: Ar[c], origin: d } }), scale: K(Hr) }),
        fs = M(zr, { LinearRing: Go(Ir) }),
        js = M(zr, { color: K(Er), scale: K(Hr) }),
        ks = M(zr, { color: K(Er), width: K(Gp) }),
        Rr = M(zr, { LineString: Fo(Mr), LinearRing: Fo(Pr), MultiGeometry: Fo(Qr), Point: Fo(Tr), Polygon: Fo(Ur) }),
        ls = M(yr, { Track: Fo(Kr) }),
        ns = M(zr, { ExtendedData: Yr, Region: $r, Link: function(a, b) { No(ms, a, b) }, address: K(S), description: K(S), name: K(S), open: K(Dp), phoneNumber: K(S), visibility: K(Dp) }),
        ms = M(zr, { href: K(Gr) }),
        gs = M(zr, { LinearRing: Go(Ir) }),
        os = M(zr, { Style: K(Wr), key: K(S), styleUrl: K(Gr) }),
        qs = M(zr, {
            ExtendedData: Yr,
            Region: $r,
            MultiGeometry: K(Qr, "geometry"),
            LineString: K(Mr, "geometry"),
            LinearRing: K(Pr, "geometry"),
            Point: K(Tr, "geometry"),
            Polygon: K(Ur, "geometry"),
            Style: K(Wr),
            StyleMap: function(a, b) { if (a = O(void 0, ps, a, b)) b = b[b.length - 1], Array.isArray(a) ? b.Style = a : "string" === typeof a ? b.styleUrl = a : na(!1, 38) },
            address: K(S),
            description: K(S),
            name: K(S),
            open: K(Dp),
            phoneNumber: K(S),
            styleUrl: K(Gr),
            visibility: K(Dp)
        }, M(yr, { MultiTrack: K(function(a, b) { if (a = O([], ls, a, b)) return b = new P(null), Xo(b, a), b }, "geometry"), Track: K(Kr, "geometry") })),
        rs = M(zr, { color: K(Er), fill: K(Dp), outline: K(Dp) }),
        cs = M(zr, { SimpleData: function(a, b) { var c = a.getAttribute("name");
                null !== c && (a = S(a), b[b.length - 1][c] = a) } }),
        Xr = M(zr, {
            IconStyle: function(a, b) {
                if (a = O({}, is, a, b)) {
                    b = b[b.length - 1];
                    var c = "Icon" in a ? a.Icon : {},
                        d = !("Icon" in a) || 0 < Object.keys(c).length,
                        e, f = c.href;
                    f ? e = f : d && (e = qr);
                    f = "bottom-left";
                    var g = a.hotSpot;
                    if (g) { var h = [g.x, g.y]; var l = g.nh; var m = g.oh;
                        f = g.origin } else e === qr ? (h = mr, l = or, m = nr) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (h = [.5, 0], m = l = "fraction");
                    var n;
                    g = c.x;
                    var p = c.y;
                    void 0 !== g && void 0 !== p && (n = [g, p]);
                    var q;
                    g = c.w;
                    c = c.h;
                    void 0 !== g && void 0 !== c && (q = [g, c]);
                    var r;
                    c = a.heading;
                    void 0 !== c && (r = ua(c));
                    a = a.scale;
                    d ? (e == qr && (q = pr, void 0 === a && (a = rr)), e = new hr({ anchor: h, anchorOrigin: f, anchorXUnits: l, anchorYUnits: m, crossOrigin: "anonymous", offset: n, offsetOrigin: "bottom-left", rotation: r, scale: a, size: q, src: e }), b.imageStyle = e) : b.imageStyle = tr
                }
            },
            LabelStyle: function(a, b) {
                (a = O({}, js, a, b)) && (b[b.length - 1].textStyle = new Ek({
                    fill: new nk({
                        color: "color" in a ? a.color : kr
                    }),
                    scale: a.scale
                }))
            },
            LineStyle: function(a, b) {
                (a = O({}, ks, a, b)) && (b[b.length - 1].strokeStyle = new ok({ color: "color" in a ? a.color : kr, width: "width" in a ? a.width : 1 })) },
            PolyStyle: function(a, b) { if (a = O({}, rs, a, b)) { b = b[b.length - 1];
                    b.fillStyle = new nk({ color: "color" in a ? a.color : kr }); var c = a.fill;
                    void 0 !== c && (b.fill = c);
                    a = a.outline;
                    void 0 !== a && (b.outline = a) } }
        }),
        ps = M(zr, { Pair: function(a, b) { if (a = O({}, os, a, b)) { var c = a.key;
                    c && "normal" == c && ((c = a.styleUrl) && (b[b.length - 1] = c), (a = a.Style) && (b[b.length - 1] = a)) } } });
    k = ir.prototype;
    k.Ig = function(a, b) { var c = M(zr, { Document: Eo(this.Ig, this), Folder: Eo(this.Ig, this), Placemark: Fo(this.Qg, this), Style: this.bq.bind(this), StyleMap: this.aq.bind(this) }); if (a = O([], c, a, b, this)) return a };
    k.Qg = function(a, b) { var c = O({ geometry: null }, qs, a, b); if (c) { var d = new vk;
            a = a.getAttribute("id");
            null !== a && d.pc(a);
            b = b[0];
            (a = c.geometry) && Uo(a, !1, b);
            d.Ua(a);
            delete c.geometry;
            this.c && d.qg(Cr(c.Style, c.styleUrl, this.a, this.b, this.f));
            delete c.Style;
            d.I(c); return d } };
    k.bq = function(a, b) { var c = a.getAttribute("id");
        null !== c && (b = Wr(a, b)) && (a = a.baseURI, a && "about:blank" != a || (a = window.location.href), c = a ? (new URL("#" + c, a)).href : "#" + c, this.b[c] = b) };
    k.aq = function(a, b) { var c = a.getAttribute("id");
        null !== c && (b = O(void 0, ps, a, b)) && (a = a.baseURI, a && "about:blank" != a || (a = window.location.href), c = a ? (new URL("#" + c, a)).href : "#" + c, this.b[c] = b) };
    k.Kg = function(a, b) { return cc(zr, a.namespaceURI) ? (a = this.Qg(a, [So(this, a, b)])) ? a : null : null };
    k.Ic = function(a, b) { if (!cc(zr, a.namespaceURI)) return []; var c = a.localName; if ("Document" == c || "Folder" == c) return (c = this.Ig(a, [So(this, a, b)])) ? c : []; if ("Placemark" == c) return (b = this.Qg(a, [So(this, a, b)])) ? [b] : []; if ("kml" == c) { c = []; for (a = a.firstElementChild; a; a = a.nextElementSibling) { var d = this.Ic(a, b);
                d && ec(c, d) } return c } return [] };
    k.Vp = function(a) { if (Bo(a)) return ss(this, a); if (Co(a)) return ts(this, a); if ("string" === typeof a) return a = Do(a), ss(this, a) };

    function ss(a, b) { for (b = b.firstChild; b; b = b.nextSibling)
            if (b.nodeType == Node.ELEMENT_NODE) { var c = ts(a, b); if (c) return c } }

    function ts(a, b) { var c; for (c = b.firstElementChild; c; c = c.nextElementSibling)
            if (cc(zr, c.namespaceURI) && "name" == c.localName) return S(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling)
            if (b = c.localName, cc(zr, c.namespaceURI) && ("Document" == b || "Folder" == b || "Placemark" == b || "kml" == b) && (b = ts(a, c))) return b }
    k.Wp = function(a) { var b = [];
        Bo(a) ? ec(b, us(this, a)) : Co(a) ? ec(b, vs(this, a)) : "string" === typeof a && (a = Do(a), ec(b, us(this, a))); return b };

    function us(a, b) { var c = []; for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && ec(c, vs(a, b)); return c }

    function vs(a, b) { var c, d = []; for (c = b.firstElementChild; c; c = c.nextElementSibling)
            if (cc(zr, c.namespaceURI) && "NetworkLink" == c.localName) { var e = O({}, ns, c, []);
                d.push(e) }
        for (c = b.firstElementChild; c; c = c.nextElementSibling) b = c.localName, !cc(zr, c.namespaceURI) || "Document" != b && "Folder" != b && "kml" != b || ec(d, vs(a, c)); return d }
    k.Zp = function(a) { var b = [];
        Bo(a) ? ec(b, ws(this, a)) : Co(a) ? ec(b, this.tf(a)) : "string" === typeof a && (a = Do(a), ec(b, ws(this, a))); return b };

    function ws(a, b) { var c = []; for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && ec(c, a.tf(b)); return c }
    k.tf = function(a) { var b, c = []; for (b = a.firstElementChild; b; b = b.nextElementSibling)
            if (cc(zr, b.namespaceURI) && "Region" == b.localName) { var d = O({}, as, b, []);
                c.push(d) }
        for (b = a.firstElementChild; b; b = b.nextElementSibling) a = b.localName, !cc(zr, b.namespaceURI) || "Document" != a && "Folder" != a && "kml" != a || ec(c, this.tf(b)); return c };

    function xs(a, b) { b = li(b);
        b = [255 * (4 == b.length ? b[3] : 1), b[2], b[1], b[0]]; var c; for (c = 0; 4 > c; ++c) { var d = parseInt(b[c], 10).toString(16);
            b[c] = 1 == d.length ? "0" + d : d }
        Lp(a, b.join("")) }

    function ys(a, b, c) { a = { node: a }; var d = b.T(); if ("GeometryCollection" == d) { var e = b.td(); var f = zs } else "MultiPoint" == d ? (e = b.be(), f = As) : "MultiLineString" == d ? (e = b.ud(), f = Bs) : "MultiPolygon" == d ? (e = b.Ud(), f = Cs) : na(!1, 39);
        Oo(a, Ds, f, e, c) }

    function Es(a, b, c) { Oo({ node: a }, Fs, Gs, [b], c) }

    function Hs(a, b, c) {
        var d = { node: a };
        b.c && a.setAttribute("id", b.c);
        a = b.M();
        var e = { address: 1, description: 1, name: 1, open: 1, phoneNumber: 1, styleUrl: 1, visibility: 1 };
        e[b.a] = 1;
        var f = Object.keys(a || {}).sort().filter(function(a) { return !e[a] });
        if (0 < f.length) { var g = Mo(a, f);
            Oo(d, Is, Js, [{ names: f, values: g }], c) }
        if (f = b.fb())
            if (f = f.call(b, 0)) f = Array.isArray(f) ? f[0] : f, this.j && (a.Style = f), (f = f.Ka()) && (a.name = f.Ka());
        f = Ks[c[c.length - 1].node.namespaceURI];
        a = Mo(a, f);
        Oo(d, Is, Lo, a, c, f);
        a = c[0];
        (b = b.V()) && (b = Uo(b, !0, a));
        Oo(d,
            Is, zs, [b], c)
    }

    function Ls(a, b, c) { var d = b.da();
        a = { node: a };
        a.layout = b.ja;
        a.stride = b.pa();
        b = b.M();
        b.coordinates = d;
        d = Ms[c[c.length - 1].node.namespaceURI];
        b = Mo(b, d);
        Oo(a, Ns, Lo, b, c, d) }

    function Os(a, b, c) { b = b.Td(); var d = b.shift();
        a = { node: a };
        Oo(a, Ps, Qs, b, c);
        Oo(a, Ps, Rs, [d], c) }

    function Ss(a, b) { Mp(a, Math.round(1E6 * b) / 1E6) }
    var Ts = M(zr, ["Document", "Placemark"]),
        Ws = M(zr, { Document: L(function(a, b, c) { Oo({ node: a }, Us, Vs, b, c, void 0, this) }), Placemark: L(Hs) }),
        Us = M(zr, { Placemark: L(Hs) }),
        Xs = M(zr, { Data: L(function(a, b, c) { a.setAttribute("name", b.name);
                a = { node: a };
                b = b.value; "object" == typeof b ? (null !== b && b.displayName && Oo(a, Xs, Lo, [b.displayName], c, ["displayName"]), null !== b && b.value && Oo(a, Xs, Lo, [b.value], c, ["value"])) : Oo(a, Xs, Lo, [b], c, ["value"]) }), value: L(function(a, b) { Lp(a, b) }), displayName: L(function(a, b) { a.appendChild(xo.createCDATASection(b)) }) }),
        Ys = { Point: "Point", LineString: "LineString", LinearRing: "LinearRing", Polygon: "Polygon", MultiPoint: "MultiGeometry", MultiLineString: "MultiGeometry", MultiPolygon: "MultiGeometry", GeometryCollection: "MultiGeometry" },
        Zs = M(zr, ["href"], M(yr, ["x", "y", "w", "h"])),
        $s = M(zr, { href: L(Lp) }, M(yr, { x: L(Mp), y: L(Mp), w: L(Mp), h: L(Mp) })),
        at = M(zr, ["scale", "heading", "Icon", "hotSpot"]),
        ct = M(zr, {
            Icon: L(function(a, b, c) {
                a = { node: a };
                var d = Zs[c[c.length - 1].node.namespaceURI],
                    e = Mo(b, d);
                Oo(a, $s, Lo, e, c, d);
                d = Zs[yr[0]];
                e = Mo(b, d);
                Oo(a, $s,
                    bt, e, c, d)
            }),
            heading: L(Mp),
            hotSpot: L(function(a, b) { a.setAttribute("x", b.x);
                a.setAttribute("y", b.y);
                a.setAttribute("xunits", b.nh);
                a.setAttribute("yunits", b.oh) }),
            scale: L(Ss)
        }),
        dt = M(zr, ["color", "scale"]),
        et = M(zr, { color: L(xs), scale: L(Ss) }),
        ft = M(zr, ["color", "width"]),
        gt = M(zr, { color: L(xs), width: L(Mp) }),
        Fs = M(zr, { LinearRing: L(Ls) }),
        Ds = M(zr, { LineString: L(Ls), Point: L(Ls), Polygon: L(Os), GeometryCollection: L(ys) }),
        Ks = M(zr, "name open visibility address phoneNumber description styleUrl Style".split(" ")),
        Is = M(zr, {
            ExtendedData: L(function(a, b, c) { a = { node: a }; var d = b.names;
                b = b.values; for (var e = d.length, f = 0; f < e; f++) Oo(a, Xs, ht, [{ name: d[f], value: b[f] }], c) }),
            MultiGeometry: L(ys),
            LineString: L(Ls),
            LinearRing: L(Ls),
            Point: L(Ls),
            Polygon: L(Os),
            Style: L(function(a, b, c) { a = { node: a }; var d = {},
                    e = b.Ea(),
                    f = b.Fa(),
                    g = b.Y();
                b = b.Ka();
                g instanceof hr && (d.IconStyle = g);
                b && (d.LabelStyle = b);
                f && (d.LineStyle = f);
                e && (d.PolyStyle = e);
                b = it[c[c.length - 1].node.namespaceURI];
                d = Mo(d, b);
                Oo(a, jt, Lo, d, c, b) }),
            address: L(Lp),
            description: L(Lp),
            name: L(Lp),
            open: L(Kp),
            phoneNumber: L(Lp),
            styleUrl: L(Lp),
            visibility: L(Kp)
        }),
        Ms = M(zr, ["extrude", "tessellate", "altitudeMode", "coordinates"]),
        Ns = M(zr, { extrude: L(Kp), tessellate: L(Kp), altitudeMode: L(Lp), coordinates: L(function(a, b, c) { c = c[c.length - 1]; var d = c.layout;
                c = c.stride; var e; "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : na(!1, 34); var f, g = b.length,
                    h = ""; if (0 < g) { h += b[0]; for (d = 1; d < e; ++d) h += "," + b[d]; for (f = c; f < g; f += c)
                        for (h += " " + b[f], d = 1; d < e; ++d) h += "," + b[f + d] }
                Lp(a, h) }) }),
        Ps = M(zr, { outerBoundaryIs: L(Es), innerBoundaryIs: L(Es) }),
        kt = M(zr, { color: L(xs) }),
        it = M(zr, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
        jt = M(zr, {
            IconStyle: L(function(a, b, c) { a = { node: a }; var d = {},
                    e = b.nc(),
                    f = b.Ge(),
                    g = { href: b.b.l }; if (e) { g.w = e[0];
                    g.h = e[1]; var h = b.Uc(),
                        l = b.ad();
                    l && f && 0 !== l[0] && l[1] !== e[1] && (g.x = l[0], g.y = f[1] - (l[1] + e[1]));!h || h[0] === e[0] / 2 && h[1] === e[1] / 2 || (d.hotSpot = { x: h[0], nh: "pixels", y: e[1] - h[1], oh: "pixels" }) }
                d.Icon = g;
                e = b.a;
                1 !== e && (d.scale = e);
                b = b.f;
                0 !== b && (d.heading = b);
                b = at[c[c.length - 1].node.namespaceURI];
                d = Mo(d, b);
                Oo(a, ct, Lo, d, c, b) }),
            LabelStyle: L(function(a,
                b, c) { a = { node: a }; var d = {},
                    e = b.Ea();
                e && (d.color = e.b);
                (b = b.b) && 1 !== b && (d.scale = b);
                b = dt[c[c.length - 1].node.namespaceURI];
                d = Mo(d, b);
                Oo(a, et, Lo, d, c, b) }),
            LineStyle: L(function(a, b, c) { a = { node: a }; var d = ft[c[c.length - 1].node.namespaceURI];
                b = Mo({ color: b.a, width: b.c }, d);
                Oo(a, gt, Lo, b, c, d) }),
            PolyStyle: L(function(a, b, c) { Oo({ node: a }, kt, lt, [b.b], c) })
        });

    function bt(a, b, c) { return yo(yr[0], "gx:" + c) }

    function Vs(a, b) { return yo(b[b.length - 1].node.namespaceURI, "Placemark") }

    function zs(a, b) { if (a) return yo(b[b.length - 1].node.namespaceURI, Ys[a.T()]) }
    var lt = Jo("color"),
        ht = Jo("Data"),
        Js = Jo("ExtendedData"),
        Qs = Jo("innerBoundaryIs"),
        As = Jo("Point"),
        Bs = Jo("LineString"),
        Gs = Jo("LinearRing"),
        Cs = Jo("Polygon"),
        Rs = Jo("outerBoundaryIs");
    ir.prototype.bc = function(a, b) {
        b = To(this, b);
        var c = yo(zr[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", yr[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = { node: c },
            e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        a = Ts[c.namespaceURI];
        e = Mo(e, a);
        Oo(d, Ws, Lo, e, [b], a, this);
        return c
    };
    gj.Kd = function() {};
    (function(a) {
        function b(a) { this.sc = ArrayBuffer.isView && ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
            this.type = this.ga = 0;
            this.length = this.sc.length }

        function c(a, b, c) {
            var e = c.sc;
            var f = e[c.ga++];
            var g = (f & 112) >> 4;
            if (128 > f) return d(a, g, b);
            f = e[c.ga++];
            g |= (f & 127) << 3;
            if (128 > f) return d(a, g, b);
            f = e[c.ga++];
            g |= (f & 127) << 10;
            if (128 > f) return d(a, g, b);
            f = e[c.ga++];
            g |= (f & 127) << 17;
            if (128 > f) return d(a, g, b);
            f = e[c.ga++];
            g |= (f & 127) << 24;
            if (128 > f) return d(a, g, b);
            f = e[c.ga++];
            if (128 > f) return d(a, g | (f & 1) << 31, b);
            throw Error("Expected varint not more than 10 bytes");
        }

        function d(a, b, c) { return c ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0) }
        var e = {
            read: function(a, b, c, d, e) { var f = 8 * e - d - 1; var g = (1 << f) - 1,
                    h = g >> 1,
                    l = -7;
                e = c ? e - 1 : 0; var m = c ? -1 : 1,
                    x = a[b + e];
                e += m;
                c = x & (1 << -l) - 1;
                x >>= -l; for (l += f; 0 < l; c = 256 * c + a[b + e], e += m, l -= 8);
                f = c & (1 << -l) - 1;
                c >>= -l; for (l += d; 0 < l; f = 256 * f + a[b + e], e += m, l -= 8); if (0 === c) c = 1 - h;
                else { if (c === g) return f ? NaN : Infinity * (x ? -1 : 1);
                    f += Math.pow(2, d);
                    c -= h } return (x ? -1 : 1) * f * Math.pow(2, c - d) },
            write: function(a, b, c, d, e, n) {
                var f, g = 8 * n - e - 1,
                    h = (1 << g) - 1,
                    l = h >> 1,
                    m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                n = d ? 0 : n - 1;
                var C = d ? 1 : -1,
                    z = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                b = Math.abs(b);
                isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = h) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (f = Math.pow(2, -d)) && (d--, f *= 2), b = 1 <= d + l ? b + m / f : b + m * Math.pow(2, 1 - l), 2 <= b * f && (d++, f /= 2), d + l >= h ? (b = 0, d = h) : 1 <= d + l ? (b = (b * f - 1) * Math.pow(2, e), d += l) : (b = b * Math.pow(2, l - 1) * Math.pow(2, e), d = 0));
                for (; 8 <= e; a[c + n] = b & 255, n += C, b /= 256, e -= 8);
                d = d << e | b;
                for (g += e; 0 < g; a[c + n] = d & 255, n += C, d /= 256, g -= 8);
                a[c + n - C] |= 128 * z
            }
        };
        b.c = 0;
        b.g = 1;
        b.b = 2;
        b.a = 5;
        b.prototype = {
            Ng: function(a,
                b, c) { for (c = c || this.length; this.ga < c;) { var d = this.Ta(),
                        e = d >> 3,
                        f = this.ga;
                    this.type = d & 7;
                    a(e, b, this);
                    this.ga === f && this.Aq(d) } return b },
            Rp: function() { var a = e.read(this.sc, this.ga, !0, 23, 4);
                this.ga += 4; return a },
            Np: function() { var a = e.read(this.sc, this.ga, !0, 52, 8);
                this.ga += 8; return a },
            Ta: function(a) {
                var b = this.sc;
                var d = b[this.ga++];
                var e = d & 127;
                if (128 > d) return e;
                d = b[this.ga++];
                e |= (d & 127) << 7;
                if (128 > d) return e;
                d = b[this.ga++];
                e |= (d & 127) << 14;
                if (128 > d) return e;
                d = b[this.ga++];
                e |= (d & 127) << 21;
                if (128 > d) return e;
                d = b[this.ga];
                return c(e | (d & 15) << 28, a, this)
            },
            cq: function() { return this.Ta(!0) },
            Tg: function() { var a = this.Ta(); return 1 === a % 2 ? (a + 1) / -2 : a / 2 },
            Lp: function() { return !!this.Ta() },
            Ug: function() {
                for (var a = this.Ta() + this.ga, b = this.sc, c = "", d = this.ga; d < a;) {
                    var e = b[d],
                        n = null,
                        p = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                    if (d + p > a) break;
                    if (1 === p) 128 > e && (n = e);
                    else if (2 === p) { var q = b[d + 1];
                        128 === (q & 192) && (n = (e & 31) << 6 | q & 63, 127 >= n && (n = null)) } else if (3 === p) {
                        q = b[d + 1];
                        var r = b[d + 2];
                        128 === (q & 192) && 128 === (r & 192) && (n = (e & 15) << 12 | (q & 63) << 6 | r & 63, 2047 >= n || 55296 <=
                            n && 57343 >= n) && (n = null)
                    } else if (4 === p) { q = b[d + 1];
                        r = b[d + 2]; var u = b[d + 3];
                        128 === (q & 192) && 128 === (r & 192) && 128 === (u & 192) && (n = (e & 15) << 18 | (q & 63) << 12 | (r & 63) << 6 | u & 63, 65535 >= n || 1114112 <= n) && (n = null) }
                    null === n ? (n = 65533, p = 1) : 65535 < n && (n -= 65536, c += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023);
                    c += String.fromCharCode(n);
                    d += p
                }
                this.ga = a;
                return c
            },
            Aq: function(a) {
                a &= 7;
                if (a === b.c)
                    for (; 127 < this.sc[this.ga++];);
                else if (a === b.b) this.ga = this.Ta() + this.ga;
                else if (a === b.a) this.ga += 4;
                else if (a === b.g) this.ga += 8;
                else throw Error("Unimplemented type: " +
                    a);
            }
        };
        a["default"] = b
    })(gj.Kd = gj.Kd || {});
    gj.Kd = gj.Kd.default;

    function mt(a, b, c, d, e) { this.l = e;
        this.f = a;
        this.b = b;
        this.a = this.c = null;
        this.g = c;
        this.j = d;
        this.s = Ve() }
    k = mt.prototype;
    k.get = function(a) { return this.j[a] };
    k.ob = mt.prototype.rd = function() { return this.g };
    k.C = function() { this.i || (this.i = "Point" === this.f ? Oa(this.b) : Pa(this.b, 0, this.b.length, 2)); return this.i };
    k.Sd = function() { if (!this.c) { var a = cb(this.C());
            this.c = Jf(this.b, 0, this.g, 2, a, 0) } return this.c };
    k.Ee = function() { this.a || (this.a = yk(this.b, 0, this.b.length, 2, .5)); return this.a };
    k.Fe = function() { if (!this.a) { this.a = []; for (var a = this.b, b = 0, c = this.g, d = 0, e = c.length; d < e; ++d) { var f = c[d];
                b = yk(a, b, f, 2, .5);
                ec(this.a, b);
                b = f } } return this.a };
    k.ro = function() { return this.l };
    k.Xb = function() { return this.b };
    k.da = mt.prototype.Xb;
    k.V = function() { return this };
    k.so = function() { return this.j };
    k.Vd = mt.prototype.V;
    k.pa = function() { return 2 };
    k.fb = da;
    k.T = function() { return this.f };
    k.jb = function(a) { var b = a.C();
        a = a.ne;
        b = bb(a) / bb(b); var c = this.s;
        df(c, a[0], a[3], b, -b, 0, 0, 0);
        Se(this.b, 0, this.b.length, 2, c, this.b) };

    function nt(a) { Ro.call(this);
        a = a ? a : {};
        this.defaultDataProjection = new vb({ code: "EPSG:3857", units: "tile-pixels" });
        this.b = a.featureClass ? a.featureClass : mt;
        this.g = a.geometryName;
        this.f = a.layerName ? a.layerName : "layer";
        this.c = a.layers ? a.layers : null;
        this.a = null }
    v(nt, Ro);

    function ot(a, b, c) { if (3 === a) { a = { keys: [], values: [], features: [] }; var d = c.Ta() + c.ga;
            c.Ng(pt, a, d);
            a.length = a.features.length;
            a.length && (b[a.name] = a) } }

    function pt(a, b, c) { if (15 === a) b.version = c.Ta();
        else if (1 === a) b.name = c.Ug();
        else if (5 === a) b.extent = c.Ta();
        else if (2 === a) b.features.push(c.ga);
        else if (3 === a) b.keys.push(c.Ug());
        else if (4 === a) { a = null; for (var d = c.Ta() + c.ga; c.ga < d;) a = c.Ta() >> 3, a = 1 === a ? c.Ug() : 2 === a ? c.Rp() : 3 === a ? c.Np() : 4 === a ? c.cq() : 5 === a ? c.Ta() : 6 === a ? c.Tg() : 7 === a ? c.Lp() : null;
            b.values.push(a) } }

    function qt(a, b, c) { if (1 == a) b.id = c.Ta();
        else if (2 == a)
            for (a = c.Ta() + c.ga; c.ga < a;) { var d = b.layer.keys[c.Ta()],
                    e = b.layer.values[c.Ta()];
                b.properties[d] = e } else 3 == a ? b.type = c.Ta() : 4 == a && (b.geometry = c.ga) }

    function rt(a, b, c) {
        var d = c.type;
        if (0 === d) return null;
        var e = c.id,
            f = c.properties;
        f[a.f] = c.layer.name;
        var g = [];
        var h = [],
            l = h;
        b.ga = c.geometry;
        c = b.Ta() + b.ga;
        for (var m = 1, n = 0, p = 0, q = 0, r = 0, u = 0; b.ga < c;) n || (n = b.Ta(), m = n & 7, n >>= 3), n--, 1 === m || 2 === m ? (p += b.Tg(), q += b.Tg(), 1 === m && r > u && (l.push(r), u = r), g.push(p, q), r += 2) : 7 === m ? r > u && (g.push(g[u], g[u + 1]), r += 2) : na(!1, 59);
        r > u && l.push(r);
        b = h.length;
        var x;
        1 === d ? x = 1 === b ? "Point" : "MultiPoint" : 2 === d ? x = 1 === b ? "LineString" : "MultiLineString" : 3 === d && (x = "Polygon");
        d = x;
        if (a.b === mt) g = new a.b(d,
            g, h, f, e);
        else { if ("Polygon" == d) { d = [];
                l = b = x = 0; for (c = h.length; l < c; ++l) m = h[l], Nf(g, x, m, 2) || (d.push(h.slice(b, l)), b = l), x = m;
                1 < d.length ? (h = d, d = new R(null)) : d = new D(null) } else d = "Point" === d ? new B(null) : "LineString" === d ? new I(null) : "Polygon" === d ? new D(null) : "MultiPoint" === d ? new Q(null) : "MultiLineString" === d ? new P(null) : null;
            d.ba("XY", g, h);
            g = new a.b;
            a.g && g.Jc(a.g);
            a = Uo(d, !1, To(a, void 0));
            g.Ua(a);
            g.pc(e);
            g.I(f) }
        return g
    }
    k = nt.prototype;
    k.ag = function() { return this.a };
    k.T = function() { return "arraybuffer" };
    k.Na = function(a) { var b = this.c;
        a = new gj.Kd(a); var c = a.Ng(ot, {}),
            d = [],
            e; for (e in c)
            if (!b || -1 != b.indexOf(e)) { var f = c[e]; for (var g, h = 0, l = f.length; h < l; ++h) { g = a; var m = f;
                    g.ga = m.features[h]; var n = g.Ta() + g.ga;
                    m = { layer: m, type: 0, properties: {} };
                    g.Ng(qt, m, n);
                    g = m;
                    d.push(rt(this, a, g)) }
                this.a = f ? [0, 0, f.extent, f.extent] : null }
        return d };
    k.rb = function() { return this.defaultDataProjection };
    k.Jn = function(a) { this.c = a };
    k.Yb = function() {};
    k.dd = function() {};
    k.Id = function() {};
    k.ld = function() {};
    k.ac = function() {};

    function st() { yp.call(this);
        this.defaultDataProjection = Nb("EPSG:4326") }
    v(st, yp);

    function tt(a, b) { b[b.length - 1].ke[a.getAttribute("k")] = a.getAttribute("v") }
    var ut = [null],
        vt = M(ut, { nd: function(a, b) { b[b.length - 1].xd.push(a.getAttribute("ref")) }, tag: tt }),
        xt = M(ut, { node: function(a, b) { var c = b[0],
                    d = b[b.length - 1],
                    e = a.getAttribute("id"),
                    f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
                d.hi[e] = f;
                a = O({ ke: {} }, wt, a, b);
                mb(a.ke) || (f = new B(f), Uo(f, !1, c), c = new vk(f), c.pc(e), c.I(a.ke), d.features.push(c)) }, way: function(a, b) { var c = a.getAttribute("id");
                a = O({ id: c, xd: [], ke: {} }, vt, a, b);
                b[b.length - 1].kh.push(a) } }),
        wt = M(ut, { tag: tt });
    st.prototype.Ic = function(a, b) { b = So(this, a, b); if ("osm" == a.localName) { a = O({ hi: {}, kh: [], features: [] }, xt, a, [b]); for (var c = 0; c < a.kh.length; c++) { for (var d = a.kh[c], e = [], f = 0, g = d.xd.length; f < g; f++) ec(e, a.hi[d.xd[f]]);
                d.xd[0] == d.xd[d.xd.length - 1] ? (f = new D(null), f.ba("XY", e, [e.length])) : (f = new I(null), f.ba("XY", e));
                Uo(f, !1, b);
                e = new vk(f);
                e.pc(d.id);
                e.I(d.ke);
                a.features.push(e) } if (a.features) return a.features } return [] };
    st.prototype.lh = function() {};
    st.prototype.bc = function() {};
    st.prototype.qe = function() {};

    function yt(a, b, c, d) { var e;
        void 0 !== d ? e = d : e = []; for (var f = d = 0; f < b;) { var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g; for (g = 2; g < c; ++g) e[d++] = a[f++] }
        e.length = d };

    function zt(a) { a = a ? a : {};
        Ro.call(this);
        this.defaultDataProjection = Nb("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY" }
    v(zt, Zq);

    function At(a, b, c) { var d, e = Array(b); for (d = 0; d < b; ++d) e[d] = 0; var f; var g = 0; for (f = a.length; g < f;)
            for (d = 0; d < b; ++d, ++g) { var h = a[g],
                    l = h - e[d];
                e[d] = h;
                a[g] = l }
        return Bt(a, c ? c : 1E5) }

    function Ct(a, b, c) { var d, e = Array(b); for (d = 0; d < b; ++d) e[d] = 0;
        a = Dt(a, c ? c : 1E5); var f;
        c = 0; for (f = a.length; c < f;)
            for (d = 0; d < b; ++d, ++c) e[d] += a[c], a[c] = e[d]; return a }

    function Bt(a, b) { b = b ? b : 1E5; var c; var d = 0; for (c = a.length; d < c; ++d) a[d] = Math.round(a[d] * b);
        b = 0; for (d = a.length; b < d; ++b) c = a[b], a[b] = 0 > c ? ~(c << 1) : c << 1;
        b = "";
        d = 0; for (c = a.length; d < c; ++d) { for (var e, f = a[d], g = ""; 32 <= f;) e = (32 | f & 31) + 63, g += String.fromCharCode(e), f >>= 5;
            g += String.fromCharCode(f + 63);
            b += g } return b }

    function Dt(a, b) { b = b ? b : 1E5; var c = [],
            d = 0,
            e = 0,
            f; var g = 0; for (f = a.length; g < f; ++g) { var h = a.charCodeAt(g) - 63;
            d |= (h & 31) << e;
            32 > h ? (c.push(d), e = d = 0) : e += 5 }
        a = 0; for (d = c.length; a < d; ++a) e = c[a], c[a] = e & 1 ? ~(e >> 1) : e >> 1;
        a = 0; for (d = c.length; a < d; ++a) c[a] /= b; return c }
    k = zt.prototype;
    k.de = function(a, b) { a = this.Fd(a, b); return new vk(a) };
    k.Mg = function(a, b) { return [this.de(a, b)] };
    k.Fd = function(a, b) { var c = hf(this.a);
        a = Ct(a, c, this.b);
        yt(a, a.length, c, a);
        c = zf(a, 0, a.length, c); return Uo(new I(c, this.a), !1, To(this, b)) };
    k.oe = function(a, b) { if (a = a.V()) return this.Jd(a, b);
        na(!1, 40); return "" };
    k.mh = function(a, b) { return this.oe(a[0], b) };
    k.Jd = function(a, b) { a = Uo(a, !0, To(this, b));
        b = a.da();
        a = a.pa();
        yt(b, b.length, a, b); return At(b, a, this.b) };

    function Et(a) { a = a ? a : {};
        Ro.call(this);
        this.a = a.layerName;
        this.b = a.layers ? a.layers : null;
        this.defaultDataProjection = Nb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326") }
    v(Et, Vo);

    function Ft(a, b) { var c = [],
            d, e; var f = 0; for (e = a.length; f < e; ++f) { var g = a[f];
            0 < f && c.pop();
            0 <= g ? d = b[g] : d = b[~g].slice().reverse();
            c.push.apply(c, d) }
        a = 0; for (b = c.length; a < b; ++a) c[a] = c[a].slice(); return c }

    function Gt(a, b, c, d, e, f, g) { a = a.geometries; var h = [],
            l; var m = 0; for (l = a.length; m < l; ++m) h[m] = Ht(a[m], b, c, d, e, f, g); return h }

    function Ht(a, b, c, d, e, f, g) { var h = a.type,
            l = It[h];
        c = "Point" === h || "MultiPoint" === h ? l(a, c, d) : l(a, b);
        b = new vk;
        b.Ua(Uo(c, !1, g));
        void 0 !== a.id && b.pc(a.id);
        a = a.properties;
        e && (a || (a = {}), a[e] = f);
        a && b.I(a); return b }
    Et.prototype.Lg = function(a, b) { if ("Topology" == a.type) { var c = null,
                d = null; if (a.transform) { var e = a.transform;
                c = e.scale;
                d = e.translate } var f = a.arcs; if (e) { e = c; var g = d,
                    h; var l = 0; for (h = f.length; l < h; ++l) { var m, n = f[l],
                        p = e,
                        q = g,
                        r = 0,
                        u = 0; var x = 0; for (m = n.length; x < m; ++x) { var C = n[x];
                        r += C[0];
                        u += C[1];
                        C[0] = r;
                        C[1] = u;
                        Jt(C, p, q) } } }
            e = [];
            a = a.objects;
            g = this.a; for (var z in a) this.b && -1 == this.b.indexOf(z) || ("GeometryCollection" === a[z].type ? (l = a[z], e.push.apply(e, Gt(l, f, c, d, g, z, b))) : (l = a[z], e.push(Ht(l, f, c, d, g, z, b)))); return e } return [] };

    function Jt(a, b, c) { a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1] }
    Et.prototype.Sg = function() { return this.defaultDataProjection };
    var It = {
        Point: function(a, b, c) { a = a.coordinates;
            b && c && Jt(a, b, c); return new B(a) },
        LineString: function(a, b) { a = Ft(a.arcs, b); return new I(a) },
        Polygon: function(a, b) { var c = [],
                d; var e = 0; for (d = a.arcs.length; e < d; ++e) c[e] = Ft(a.arcs[e], b); return new D(c) },
        MultiPoint: function(a, b, c) { a = a.coordinates; var d; if (b && c) { var e = 0; for (d = a.length; e < d; ++e) Jt(a[e], b, c) } return new Q(a) },
        MultiLineString: function(a, b) { var c = [],
                d; var e = 0; for (d = a.arcs.length; e < d; ++e) c[e] = Ft(a.arcs[e], b); return new P(c) },
        MultiPolygon: function(a,
            b) { var c = [],
                d, e; var f = 0; for (e = a.arcs.length; f < e; ++f) { var g = a.arcs[f]; var h = []; var l = 0; for (d = g.length; l < d; ++l) h[l] = Ft(g[l], b);
                c[f] = h } return new R(c) }
    };
    k = Et.prototype;
    k.kd = function() {};
    k.pe = function() {};
    k.re = function() {};
    k.Pg = function() {};
    k.cd = function() {};

    function Kt(a) { this.qc = a };

    function Lt(a, b) { this.qc = a;
        this.b = Array.prototype.slice.call(arguments, 1);
        na(2 <= this.b.length, 57) }
    v(Lt, Kt);

    function Mt(a) { var b = ["And"].concat(Array.prototype.slice.call(arguments));
        Lt.apply(this, b) }
    v(Mt, Lt);

    function Nt(a, b, c) { this.qc = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c }
    v(Nt, Kt);

    function Ot(a, b, c, d) { this.qc = a;
        this.geometryName = b || "the_geom";
        this.geometry = c;
        this.srsName = d }
    v(Ot, Kt);

    function Pt(a, b, c) { Ot.call(this, "Contains", a, b, c) }
    v(Pt, Ot);

    function Qt(a, b) { this.qc = a;
        this.b = b }
    v(Qt, Kt);

    function Rt(a, b, c) { Qt.call(this, "During", a);
        this.a = b;
        this.g = c }
    v(Rt, Qt);

    function St(a, b, c, d) { Qt.call(this, a, b);
        this.g = c;
        this.a = d }
    v(St, Qt);

    function Tt(a, b, c) { St.call(this, "PropertyIsEqualTo", a, b, c) }
    v(Tt, St);

    function Ut(a, b) { St.call(this, "PropertyIsGreaterThan", a, b) }
    v(Ut, St);

    function Vt(a, b) { St.call(this, "PropertyIsGreaterThanOrEqualTo", a, b) }
    v(Vt, St);

    function Wt(a, b, c) { Ot.call(this, "Intersects", a, b, c) }
    v(Wt, Ot);

    function Xt(a, b, c) { Qt.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.g = c }
    v(Xt, Qt);

    function Yt(a, b, c, d, e, f) { Qt.call(this, "PropertyIsLike", a);
        this.c = b;
        this.f = void 0 !== c ? c : "*";
        this.i = void 0 !== d ? d : ".";
        this.g = void 0 !== e ? e : "!";
        this.a = f }
    v(Yt, Qt);

    function Zt(a) { Qt.call(this, "PropertyIsNull", a) }
    v(Zt, Qt);

    function $t(a, b) { St.call(this, "PropertyIsLessThan", a, b) }
    v($t, St);

    function au(a, b) { St.call(this, "PropertyIsLessThanOrEqualTo", a, b) }
    v(au, St);

    function bu(a) { this.qc = "Not";
        this.condition = a }
    v(bu, Kt);

    function cu(a, b, c) { St.call(this, "PropertyIsNotEqualTo", a, b, c) }
    v(cu, St);

    function du(a) { var b = ["Or"].concat(Array.prototype.slice.call(arguments));
        Lt.apply(this, b) }
    v(du, Lt);

    function eu(a, b, c) { Ot.call(this, "Within", a, b, c) }
    v(eu, Ot);

    function fu(a) { var b = [null].concat(Array.prototype.slice.call(arguments)); return new(Function.prototype.bind.apply(Mt, b)) }

    function gu(a, b, c) { return new Nt(a, b, c) };

    function uu(a) { a = a ? a : {};
        this.c = a.featureType;
        this.a = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new Op;
        this.l = a.schemaLocation ? a.schemaLocation : vu["1.1.0"];
        yp.call(this) }
    v(uu, yp);
    var vu = { "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd", "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd" };
    uu.prototype.Ic = function(a, b) { var c = { featureType: this.c, featureNS: this.a };
        jb(c, So(this, a, b ? b : {}));
        b = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Fo(Bp.prototype.ee);
        (a = O([], this.b.b, a, b, this.b)) || (a = []); return a };
    uu.prototype.j = function(a) { if (Bo(a)) return wu(a); if (Co(a)) return O({}, xu, a, []); if ("string" === typeof a) return a = Do(a), wu(a) };
    uu.prototype.f = function(a) { if (Bo(a)) return yu(this, a); if (Co(a)) return zu(this, a); if ("string" === typeof a) return a = Do(a), yu(this, a) };

    function yu(a, b) { for (b = b.firstChild; b; b = b.nextSibling)
            if (b.nodeType == Node.ELEMENT_NODE) return zu(a, b) }
    var Au = { "http://www.opengis.net/gml": { boundedBy: K(Bp.prototype.pf, "bounds") } };

    function zu(a, b) { var c = {},
            d = Jp(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d; return O(c, Au, b, [], a.b) }
    var Bu = { "http://www.opengis.net/wfs": { totalInserted: K(Ip), totalUpdated: K(Ip), totalDeleted: K(Ip) } },
        Cu = { "http://www.opengis.net/ogc": { FeatureId: Fo(function(a) { return a.getAttribute("fid") }) } },
        Du = { "http://www.opengis.net/wfs": { Feature: function(a, b) { No(Cu, a, b) } } },
        xu = { "http://www.opengis.net/wfs": { TransactionSummary: K(function(a, b) { return O({}, Bu, a, b) }, "transactionSummary"), InsertResults: K(function(a, b) { return O([], Du, a, b) }, "insertIds") } };

    function wu(a) { for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return O({}, xu, a, []) }
    var Eu = { "http://www.opengis.net/wfs": { PropertyName: L(Lp) } };

    function Fu(a, b) { var c = yo("http://www.opengis.net/ogc", "Filter"),
            d = yo("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c) }

    function Gu(a, b) { a = (a ? a : "feature") + ":"; return 0 === b.indexOf(a) ? b : a + b }
    var Hu = {
        "http://www.opengis.net/wfs": {
            Insert: L(function(a, b, c) {
                var d = c[c.length - 1],
                    e = d.gmlVersion;
                d = yo(d.featureNS, d.featureType);
                a.appendChild(d);
                if (2 === e) { a = Xp.prototype;
                    (e = b.c) && d.setAttribute("fid", e);
                    e = c[c.length - 1]; var f = e.featureNS,
                        g = b.a;
                    e.sb || (e.sb = {}, e.sb[f] = {}); var h = b.M();
                    b = []; var l = []; for (n in h) { var m = h[n];
                        null !== m && (b.push(n), l.push(m), n == g || m instanceof ff ? n in e.sb[f] || (e.sb[f][n] = L(a.ri, a)) : n in e.sb[f] || (e.sb[f][n] = L(Lp))) } var n = jb({}, e);
                    n.node = d;
                    Oo(n, e.sb, Jo(void 0, f), l, c, b) } else Op.prototype.zi(d,
                    b, c)
            }),
            Update: L(function(a, b, c) { var d = c[c.length - 1];
                na(void 0 !== b.c, 27); var e = d.featurePrefix,
                    f = d.featureNS,
                    g = b.a;
                a.setAttribute("typeName", Gu(e, d.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                e = b.c; if (void 0 !== e) { f = b.R(); for (var h = [], l = 0, m = f.length; l < m; l++) { var n = b.get(f[l]); if (void 0 !== n) { var p = f[l];
                            n instanceof ff && (p = g);
                            h.push({ name: p, value: n }) } }
                    Oo({ gmlVersion: d.gmlVersion, node: a, hasZ: d.hasZ, srsName: d.srsName }, Hu, Jo("Property"), h, c);
                    Fu(a, e) } }),
            Delete: L(function(a,
                b, c) { c = c[c.length - 1];
                na(void 0 !== b.c, 26); var d = c.featurePrefix,
                    e = c.featureNS;
                a.setAttribute("typeName", Gu(d, c.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + d, e);
                b = b.c;
                void 0 !== b && Fu(a, b) }),
            Property: L(function(a, b, c) {
                var d = yo("http://www.opengis.net/wfs", "Name"),
                    e = c[c.length - 1].gmlVersion;
                a.appendChild(d);
                Lp(d, b.name);
                void 0 !== b.value && null !== b.value && (d = yo("http://www.opengis.net/wfs", "Value"), a.appendChild(d), b.value instanceof ff ? 2 === e ? Xp.prototype.ri(d, b.value, c) : Op.prototype.Yc(d,
                    b.value, c) : Lp(d, b.value))
            }),
            Native: L(function(a, b) { b.Jq && a.setAttribute("vendorId", b.Jq);
                void 0 !== b.iq && a.setAttribute("safeToIgnore", b.iq);
                void 0 !== b.value && Lp(a, b.value) })
        }
    };

    function Iu(a, b, c) { a = { node: a };
        b = b.b; for (var d = 0, e = b.length; d < e; ++d) { var f = b[d];
            Oo(a, Ju, Jo(f.qc), [f], c) } }

    function Ku(a, b) { void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        Lu(a, b.b);
        Mu(a, "" + b.g) }

    function Nu(a, b, c) { a = yo("http://www.opengis.net/ogc", a);
        Lp(a, c);
        b.appendChild(a) }

    function Lu(a, b) { Nu("PropertyName", a, b) }

    function Mu(a, b) { Nu("Literal", a, b) }

    function Ou(a, b) { var c = yo("http://www.opengis.net/gml", "TimeInstant");
        a.appendChild(c);
        a = yo("http://www.opengis.net/gml", "timePosition");
        c.appendChild(a);
        Lp(a, b) }
    var Ju = {
        "http://www.opengis.net/wfs": { Query: L(function(a, b, c) { var d = c[c.length - 1],
                    e = d.featurePrefix,
                    f = d.featureNS,
                    g = d.propertyNames,
                    h = d.srsName;
                a.setAttribute("typeName", e ? Gu(e, b) : b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = jb({}, d);
                b.node = a;
                Oo(b, Eu, Jo("PropertyName"), g, c); if (d = d.filter) g = yo("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), Oo({ node: g }, Ju, Jo(d.qc), [d], c) }) },
        "http://www.opengis.net/ogc": {
            During: L(function(a, b) {
                var c = yo("http://www.opengis.net/fes",
                    "ValueReference");
                Lp(c, b.b);
                a.appendChild(c);
                c = yo("http://www.opengis.net/gml", "TimePeriod");
                a.appendChild(c);
                a = yo("http://www.opengis.net/gml", "begin");
                c.appendChild(a);
                Ou(a, b.a);
                a = yo("http://www.opengis.net/gml", "end");
                c.appendChild(a);
                Ou(a, b.g)
            }),
            And: L(Iu),
            Or: L(Iu),
            Not: L(function(a, b, c) { b = b.condition;
                Oo({ node: a }, Ju, Jo(b.qc), [b], c) }),
            BBOX: L(function(a, b, c) { c[c.length - 1].srsName = b.srsName;
                Lu(a, b.geometryName);
                Op.prototype.Yc(a, b.extent, c) }),
            Contains: L(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Lu(a, b.geometryName);
                Op.prototype.Yc(a, b.geometry, c)
            }),
            Intersects: L(function(a, b, c) { c[c.length - 1].srsName = b.srsName;
                Lu(a, b.geometryName);
                Op.prototype.Yc(a, b.geometry, c) }),
            Within: L(function(a, b, c) { c[c.length - 1].srsName = b.srsName;
                Lu(a, b.geometryName);
                Op.prototype.Yc(a, b.geometry, c) }),
            PropertyIsEqualTo: L(Ku),
            PropertyIsNotEqualTo: L(Ku),
            PropertyIsLessThan: L(Ku),
            PropertyIsLessThanOrEqualTo: L(Ku),
            PropertyIsGreaterThan: L(Ku),
            PropertyIsGreaterThanOrEqualTo: L(Ku),
            PropertyIsNull: L(function(a, b) { Lu(a, b.b) }),
            PropertyIsBetween: L(function(a, b) { Lu(a, b.b); var c = yo("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                Mu(c, "" + b.a);
                c = yo("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                Mu(c, "" + b.g) }),
            PropertyIsLike: L(function(a, b) { a.setAttribute("wildCard", b.f);
                a.setAttribute("singleChar", b.i);
                a.setAttribute("escapeChar", b.g);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                Lu(a, b.b);
                Mu(a, "" + b.c) })
        }
    };
    uu.prototype.s = function(a) {
        var b = yo("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        if (a) {
            a.handle && b.setAttribute("handle", a.handle);
            a.outputFormat && b.setAttribute("outputFormat", a.outputFormat);
            void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures);
            a.resultType && b.setAttribute("resultType", a.resultType);
            void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex);
            void 0 !== a.count && b.setAttribute("count", a.count);
            var c =
                a.filter;
            if (a.bbox) { na(a.geometryName, 12); var d = gu(a.geometryName, a.bbox, a.srsName);
                c ? c = fu(c, d) : c = d }
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.l);
        c = { node: b, srsName: a.srsName, featureNS: a.featureNS ? a.featureNS : this.a, featurePrefix: a.featurePrefix, geometryName: a.geometryName, filter: c, propertyNames: a.propertyNames ? a.propertyNames : [] };
        na(Array.isArray(a.featureTypes), 11);
        a = a.featureTypes;
        c = [c];
        d = jb({}, c[c.length - 1]);
        d.node = b;
        Oo(d, Ju, Jo("Query"), a, c);
        return b
    };
    uu.prototype.v = function(a, b, c, d) {
        var e = [],
            f = yo("http://www.opengis.net/wfs", "Transaction"),
            g = d.version ? d.version : "1.1.0",
            h = "1.0.0" === g ? 2 : 3;
        f.setAttribute("service", "WFS");
        f.setAttribute("version", g);
        if (d) { var l = d.gmlOptions ? d.gmlOptions : {};
            d.handle && f.setAttribute("handle", d.handle) }
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", vu[g]);
        var m = d.featurePrefix ? d.featurePrefix : "feature";
        a && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        }, jb(g, l), Oo(g, Hu, Jo("Insert"), a, e));
        b && (g = { node: f, featureNS: d.featureNS, featureType: d.featureType, featurePrefix: m, gmlVersion: h, hasZ: d.hasZ, srsName: d.srsName }, jb(g, l), Oo(g, Hu, Jo("Update"), b, e));
        c && Oo({ node: f, featureNS: d.featureNS, featureType: d.featureType, featurePrefix: m, gmlVersion: h, srsName: d.srsName }, Hu, Jo("Delete"), c, e);
        d.nativeElements && Oo({ node: f, featureNS: d.featureNS, featureType: d.featureType, featurePrefix: m, gmlVersion: h, srsName: d.srsName }, Hu, Jo("Native"), d.nativeElements,
            e);
        return f
    };
    uu.prototype.Rg = function(a) { for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.sf(a);
        return null };
    uu.prototype.sf = function(a) { if (a.firstElementChild && a.firstElementChild.firstElementChild)
            for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)
                if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) { var b = [{}];
                    this.b.pf(a, b); return Nb(b.pop().srsName) }
        return null };

    function Pu(a) { a = a ? a : {};
        Ro.call(this);
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1 }
    v(Pu, Zq);

    function Qu(a) { a = a.U(); return 0 === a.length ? "" : a.join(" ") }

    function Ru(a) { a = a.U(); for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a[c].join(" ")); return b.join(",") }

    function Su(a) { var b = [];
        a = a.Td(); for (var c = 0, d = a.length; c < d; ++c) b.push("(" + Ru(a[c]) + ")"); return b.join(",") }

    function Tu(a) { var b = a.T(),
            c = (0, Uu[b])(a);
        b = b.toUpperCase(); if (a instanceof gf) { a = a.ja; var d = ""; if ("XYZ" === a || "XYZM" === a) d += "Z"; if ("XYM" === a || "XYZM" === a) d += "M";
            a = d;
            0 < a.length && (b += " " + a) } return 0 === c.length ? b + " EMPTY" : b + "(" + c + ")" }
    var Uu = { Point: Qu, LineString: Ru, Polygon: Su, MultiPoint: function(a) { var b = [];
            a = a.be(); for (var c = 0, d = a.length; c < d; ++c) b.push("(" + Qu(a[c]) + ")"); return b.join(",") }, MultiLineString: function(a) { var b = [];
            a = a.ud(); for (var c = 0, d = a.length; c < d; ++c) b.push("(" + Ru(a[c]) + ")"); return b.join(",") }, MultiPolygon: function(a) { var b = [];
            a = a.Ud(); for (var c = 0, d = a.length; c < d; ++c) b.push("(" + Su(a[c]) + ")"); return b.join(",") }, GeometryCollection: function(a) { var b = [];
            a = a.td(); for (var c = 0, d = a.length; c < d; ++c) b.push(Tu(a[c])); return b.join(",") } };
    k = Pu.prototype;
    k.de = function(a, b) { return (a = this.Fd(a, b)) ? (b = new vk, b.Ua(a), b) : null };
    k.Mg = function(a, b) { var c = [];
        a = this.Fd(a, b);
        this.b && "GeometryCollection" == a.T() ? c = a.a : c = [a];
        b = []; for (var d = 0, e = c.length; d < e; ++d) a = new vk, a.Ua(c[d]), b.push(a); return b };
    k.Fd = function(a, b) { a = new Vu(new Wu(a));
        Xu(a); return (a = Yu(a)) ? Uo(a, !1, b) : null };
    k.oe = function(a, b) { return (a = a.V()) ? this.Jd(a, b) : "" };
    k.mh = function(a, b) { if (1 == a.length) return this.oe(a[0], b); for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a[d].V());
        a = new Qq(c); return this.Jd(a, b) };
    k.Jd = function(a, b) { return Tu(Uo(a, !0, b)) };

    function Wu(a) { this.a = a;
        this.b = -1 }

    function Zu(a) {
        var b = a.a.charAt(++a.b),
            c = { position: a.b, value: b };
        if ("(" == b) c.type = 2;
        else if ("," == b) c.type = 5;
        else if (")" == b) c.type = 3;
        else if ("0" <= b && "9" >= b || "." == b || "-" == b) { c.type = 4;
            b = a.b; var d = !1,
                e = !1;
            do { if ("." == f) d = !0;
                else if ("e" == f || "E" == f) e = !0; var f = a.a.charAt(++a.b) } while ("0" <= f && "9" >= f || "." == f && (void 0 === d || !d) || !e && ("e" == f || "E" == f) || e && ("-" == f || "+" == f));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do f = a.a.charAt(++a.b); while ("a" <= f && "z" >=
                f || "A" <= f && "Z" >= f);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a
        } else { if (" " == b || "\t" == b || "\r" == b || "\n" == b) return Zu(a); if ("" === b) c.type = 6;
            else throw Error("Unexpected character: " + b); }
        return c
    }

    function Vu(a) { this.g = a;
        this.a = "XY" }

    function Xu(a) { a.b = Zu(a.g) }

    function $u(a, b) {
        (b = a.b.type == b) && Xu(a); return b }

    function Yu(a) { var b = a.b; if ($u(a, 1)) { b = b.value; var c = "XY",
                d = a.b;
            1 == a.b.type && (d = d.value, "Z" === d ? c = "XYZ" : "M" === d ? c = "XYM" : "ZM" === d && (c = "XYZM"), "XY" !== c && Xu(a));
            a.a = c; if ("GEOMETRYCOLLECTION" == b) { a: { if ($u(a, 2)) { b = [];
                        do b.push(Yu(a)); while ($u(a, 5)); if ($u(a, 3)) { a = b; break a } } else if (av(a)) { a = []; break a } throw Error(bv(a)); } return new Qq(a) }
            d = cv[b];
            c = dv[b]; if (!d || !c) throw Error("Invalid geometry type: " + b);
            b = d.call(a); return new c(b, a.a) } throw Error(bv(a)); }
    k = Vu.prototype;
    k.Gg = function() { if ($u(this, 2)) { var a = ev(this); if ($u(this, 3)) return a } else if (av(this)) return null; throw Error(bv(this)); };
    k.Fg = function() { if ($u(this, 2)) { var a = fv(this); if ($u(this, 3)) return a } else if (av(this)) return []; throw Error(bv(this)); };
    k.Hg = function() { if ($u(this, 2)) { var a = gv(this); if ($u(this, 3)) return a } else if (av(this)) return []; throw Error(bv(this)); };
    k.yp = function() { if ($u(this, 2)) { var a; if (2 == this.b.type)
                for (a = [this.Gg()]; $u(this, 5);) a.push(this.Gg());
            else a = fv(this); if ($u(this, 3)) return a } else if (av(this)) return []; throw Error(bv(this)); };
    k.xp = function() { if ($u(this, 2)) { var a = gv(this); if ($u(this, 3)) return a } else if (av(this)) return []; throw Error(bv(this)); };
    k.zp = function() { if ($u(this, 2)) { for (var a = [this.Hg()]; $u(this, 5);) a.push(this.Hg()); if ($u(this, 3)) return a } else if (av(this)) return []; throw Error(bv(this)); };

    function ev(a) { for (var b = [], c = a.a.length, d = 0; d < c; ++d) { var e = a.b; if ($u(a, 4)) b.push(e.value);
            else break } if (b.length == c) return b; throw Error(bv(a)); }

    function fv(a) { for (var b = [ev(a)]; $u(a, 5);) b.push(ev(a)); return b }

    function gv(a) { for (var b = [a.Fg()]; $u(a, 5);) b.push(a.Fg()); return b }

    function av(a) { var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && Xu(a); return b }

    function bv(a) { return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.g.a + "`" }
    var dv = { POINT: B, LINESTRING: I, POLYGON: D, MULTIPOINT: Q, MULTILINESTRING: P, MULTIPOLYGON: R },
        cv = { POINT: Vu.prototype.Gg, LINESTRING: Vu.prototype.Fg, POLYGON: Vu.prototype.Hg, MULTIPOINT: Vu.prototype.yp, MULTILINESTRING: Vu.prototype.xp, MULTIPOLYGON: Vu.prototype.zp };

    function hv(a) { return a.getAttributeNS("http://www.w3.org/1999/xlink", "href") };

    function iv() {}
    iv.prototype.read = function(a) { return Bo(a) ? this.a(a) : Co(a) ? this.b(a) : "string" === typeof a ? (a = Do(a), this.a(a)) : null };

    function jv() { this.version = void 0 }
    v(jv, iv);
    jv.prototype.a = function(a) { for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null };
    jv.prototype.b = function(a) { this.version = a.getAttribute("version").trim(); return (a = O({ version: this.version }, kv, a, [])) ? a : null };

    function lv(a, b) { return O({}, mv, a, b) }

    function nv(a, b) { return O({}, ov, a, b) }

    function pv(a, b) { if (b = lv(a, b)) return a = [Jp(a.getAttribute("width")), Jp(a.getAttribute("height"))], b.size = a, b }

    function qv(a, b) { return O([], rv, a, b) }
    var sv = [null, "http://www.opengis.net/wms"],
        kv = M(sv, { Service: K(function(a, b) { return O({}, tv, a, b) }), Capability: K(function(a, b) { return O({}, uv, a, b) }) }),
        uv = M(sv, { Request: K(function(a, b) { return O({}, vv, a, b) }), Exception: K(function(a, b) { return O([], wv, a, b) }), Layer: K(function(a, b) { return O({}, xv, a, b) }) }),
        tv = M(sv, {
            Name: K(S),
            Title: K(S),
            Abstract: K(S),
            KeywordList: K(qv),
            OnlineResource: K(hv),
            ContactInformation: K(function(a, b) { return O({}, yv, a, b) }),
            Fees: K(S),
            AccessConstraints: K(S),
            LayerLimit: K(Ip),
            MaxWidth: K(Ip),
            MaxHeight: K(Ip)
        }),
        yv = M(sv, { ContactPersonPrimary: K(function(a, b) { return O({}, zv, a, b) }), ContactPosition: K(S), ContactAddress: K(function(a, b) { return O({}, Av, a, b) }), ContactVoiceTelephone: K(S), ContactFacsimileTelephone: K(S), ContactElectronicMailAddress: K(S) }),
        zv = M(sv, { ContactPerson: K(S), ContactOrganization: K(S) }),
        Av = M(sv, { AddressType: K(S), Address: K(S), City: K(S), StateOrProvince: K(S), PostCode: K(S), Country: K(S) }),
        wv = M(sv, { Format: Fo(S) }),
        xv = M(sv, {
            Name: K(S),
            Title: K(S),
            Abstract: K(S),
            KeywordList: K(qv),
            CRS: Ho(S),
            EX_GeographicBoundingBox: K(function(a, b) { var c = O({}, Bv, a, b); if (c) { a = c.westBoundLongitude;
                    b = c.southBoundLatitude; var d = c.eastBoundLongitude;
                    c = c.northBoundLatitude; if (void 0 !== a && void 0 !== b && void 0 !== d && void 0 !== c) return [a, b, d, c] } }),
            BoundingBox: Ho(function(a) { var b = [Hp(a.getAttribute("minx")), Hp(a.getAttribute("miny")), Hp(a.getAttribute("maxx")), Hp(a.getAttribute("maxy"))],
                    c = [Hp(a.getAttribute("resx")), Hp(a.getAttribute("resy"))]; return { crs: a.getAttribute("CRS"), extent: b, res: c } }),
            Dimension: Ho(function(a) {
                return {
                    name: a.getAttribute("name"),
                    units: a.getAttribute("units"),
                    unitSymbol: a.getAttribute("unitSymbol"),
                    "default": a.getAttribute("default"),
                    multipleValues: Ep(a.getAttribute("multipleValues")),
                    nearestValue: Ep(a.getAttribute("nearestValue")),
                    current: Ep(a.getAttribute("current")),
                    values: S(a)
                }
            }),
            Attribution: K(function(a, b) { return O({}, Cv, a, b) }),
            AuthorityURL: Ho(function(a, b) { if (b = lv(a, b)) return b.name = a.getAttribute("name"), b }),
            Identifier: Ho(S),
            MetadataURL: Ho(function(a, b) { if (b = lv(a, b)) return b.type = a.getAttribute("type"), b }),
            DataURL: Ho(lv),
            FeatureListURL: Ho(lv),
            Style: Ho(function(a, b) { return O({}, Dv, a, b) }),
            MinScaleDenominator: K(Gp),
            MaxScaleDenominator: K(Gp),
            Layer: Ho(function(a, b) {
                var c = b[b.length - 1],
                    d = O({}, xv, a, b);
                if (d) return b = Ep(a.getAttribute("queryable")), void 0 === b && (b = c.queryable), d.queryable = void 0 !== b ? b : !1, b = Jp(a.getAttribute("cascaded")), void 0 === b && (b = c.cascaded), d.cascaded = b, b = Ep(a.getAttribute("opaque")), void 0 === b && (b = c.opaque), d.opaque = void 0 !== b ? b : !1, b = Ep(a.getAttribute("noSubsets")), void 0 === b && (b = c.noSubsets), d.noSubsets =
                    void 0 !== b ? b : !1, (b = Hp(a.getAttribute("fixedWidth"))) || (b = c.fixedWidth), d.fixedWidth = b, (a = Hp(a.getAttribute("fixedHeight"))) || (a = c.fixedHeight), d.fixedHeight = a, ["Style", "CRS", "AuthorityURL"].forEach(function(a) { a in c && (d[a] = (d[a] || []).concat(c[a])) }), "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) { a in d || (d[a] = c[a]) }), d
            })
        }),
        Cv = M(sv, { Title: K(S), OnlineResource: K(hv), LogoURL: K(pv) }),
        Bv = M(sv, {
            westBoundLongitude: K(Gp),
            eastBoundLongitude: K(Gp),
            southBoundLatitude: K(Gp),
            northBoundLatitude: K(Gp)
        }),
        vv = M(sv, { GetCapabilities: K(nv), GetMap: K(nv), GetFeatureInfo: K(nv) }),
        ov = M(sv, { Format: Ho(S), DCPType: Ho(function(a, b) { return O({}, Ev, a, b) }) }),
        Ev = M(sv, { HTTP: K(function(a, b) { return O({}, Fv, a, b) }) }),
        Fv = M(sv, { Get: K(lv), Post: K(lv) }),
        Dv = M(sv, { Name: K(S), Title: K(S), Abstract: K(S), LegendURL: Ho(pv), StyleSheetURL: K(lv), StyleURL: K(lv) }),
        mv = M(sv, { Format: K(S), OnlineResource: K(hv) }),
        rv = M(sv, { Keyword: Fo(S) });

    function Gv(a) { a = a ? a : {};
        this.a = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new Xp;
        this.c = a.layers ? a.layers : null;
        yp.call(this) }
    v(Gv, yp);
    Gv.prototype.Ic = function(a, b) {
        var c = {};
        b && jb(c, So(this, a, b));
        c = [c];
        a.setAttribute("namespaceURI", this.a);
        var d = a.localName;
        b = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == d)
                for (var e = 0, f = a.childNodes.length; e < f; e++) {
                    var g = a.childNodes[e];
                    if (g.nodeType === Node.ELEMENT_NODE) {
                        var h = c[0],
                            l = g.localName.replace("_layer", "");
                        if (!this.c || cc(this.c, l)) {
                            l += "_feature";
                            h.featureType = l;
                            h.featureNS = this.a;
                            var m = {};
                            m[l] = Fo(this.b.Jg, this.b);
                            h = M([h.featureNS, null], m);
                            g.setAttribute("namespaceURI", this.a);
                            (g = O([],
                                h, g, c, this.b)) && ec(b, g)
                        }
                    }
                }
            "FeatureCollection" == d && (a = O([], this.b.b, a, [{}], this.b)) && (b = a)
        }
        return b
    };
    Gv.prototype.lh = function() {};
    Gv.prototype.bc = function() {};
    Gv.prototype.qe = function() {};

    function Hv() {}
    v(Hv, iv);
    Hv.prototype.a = function(a) { for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null };
    Hv.prototype.b = function(a) { return (a = O({}, Iv, a, [])) ? a : null };
    var Jv = [null, "http://www.opengis.net/ows/1.1"],
        Iv = M(Jv, { ServiceIdentification: K(function(a, b) { return O({}, Kv, a, b) }), ServiceProvider: K(function(a, b) { return O({}, Lv, a, b) }), OperationsMetadata: K(function(a, b) { return O({}, Mv, a, b) }) }),
        Nv = M(Jv, { DeliveryPoint: K(S), City: K(S), AdministrativeArea: K(S), PostalCode: K(S), Country: K(S), ElectronicMailAddress: K(S) }),
        Ov = M(Jv, { Value: Ho(function(a) { return S(a) }) }),
        Pv = M(Jv, { AllowedValues: K(function(a, b) { return O({}, Ov, a, b) }) }),
        Rv = M(Jv, {
            Phone: K(function(a, b) {
                return O({},
                    Qv, a, b)
            }),
            Address: K(function(a, b) { return O({}, Nv, a, b) })
        }),
        Tv = M(Jv, { HTTP: K(function(a, b) { return O({}, Sv, a, b) }) }),
        Sv = M(Jv, { Get: Ho(function(a, b) { var c = hv(a); if (c) return O({ href: c }, Uv, a, b) }), Post: void 0 }),
        Vv = M(Jv, { DCP: K(function(a, b) { return O({}, Tv, a, b) }) }),
        Mv = M(Jv, { Operation: function(a, b) { var c = a.getAttribute("name");
                (a = O({}, Vv, a, b)) && (b[b.length - 1][c] = a) } }),
        Qv = M(Jv, { Voice: K(S), Facsimile: K(S) }),
        Uv = M(Jv, { Constraint: Ho(function(a, b) { var c = a.getAttribute("name"); if (c) return O({ name: c }, Pv, a, b) }) }),
        Wv = M(Jv, { IndividualName: K(S), PositionName: K(S), ContactInfo: K(function(a, b) { return O({}, Rv, a, b) }) }),
        Kv = M(Jv, { Abstract: K(S), AccessConstraints: K(S), Fees: K(S), Title: K(S), ServiceTypeVersion: K(S), ServiceType: K(S) }),
        Lv = M(Jv, { ProviderName: K(S), ProviderSite: K(hv), ServiceContact: K(function(a, b) { return O({}, Wv, a, b) }) });

    function Xv() { this.g = new Hv }
    v(Xv, iv);
    Xv.prototype.a = function(a) { for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null };
    Xv.prototype.b = function(a) { var b = a.getAttribute("version").trim(),
            c = this.g.b(a); if (!c) return null;
        c.version = b; return (c = O(c, Yv, a, [])) ? c : null };

    function Zv(a) { var b = S(a).split(" "); if (b && 2 == b.length && (a = +b[0], b = +b[1], !isNaN(a) && !isNaN(b))) return [a, b] }
    var $v = [null, "http://www.opengis.net/wmts/1.0"],
        aw = [null, "http://www.opengis.net/ows/1.1"],
        Yv = M($v, { Contents: K(function(a, b) { return O({}, bw, a, b) }) }),
        bw = M($v, { Layer: Ho(function(a, b) { return O({}, cw, a, b) }), TileMatrixSet: Ho(function(a, b) { return O({}, dw, a, b) }) }),
        cw = M($v, {
            Style: Ho(function(a, b) { if (b = O({}, ew, a, b)) return a = "true" === a.getAttribute("isDefault"), b.isDefault = a, b }),
            Format: Ho(S),
            TileMatrixSetLink: Ho(function(a, b) { return O({}, fw, a, b) }),
            Dimension: Ho(function(a, b) { return O({}, gw, a, b) }),
            ResourceURL: Ho(function(a) {
                var b =
                    a.getAttribute("format"),
                    c = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var d = {};
                b && (d.format = b);
                c && (d.template = c);
                a && (d.resourceType = a);
                return d
            })
        }, M(aw, { Title: K(S), Abstract: K(S), WGS84BoundingBox: K(function(a, b) { a = O([], hw, a, b); if (2 == a.length) return Ba(a) }), Identifier: K(S) })),
        ew = M($v, { LegendURL: Ho(function(a) { var b = {};
                b.format = a.getAttribute("format");
                b.href = hv(a); return b }) }, M(aw, { Title: K(S), Identifier: K(S) })),
        fw = M($v, {
            TileMatrixSet: K(S),
            TileMatrixSetLimits: K(function(a, b) {
                return O([],
                    iw, a, b)
            })
        }),
        iw = M($v, { TileMatrixLimits: Fo(function(a, b) { return O({}, jw, a, b) }) }),
        jw = M($v, { TileMatrix: K(S), MinTileRow: K(Ip), MaxTileRow: K(Ip), MinTileCol: K(Ip), MaxTileCol: K(Ip) }),
        gw = M($v, { Default: K(S), Value: Ho(S) }, M(aw, { Identifier: K(S) })),
        hw = M(aw, { LowerCorner: Fo(Zv), UpperCorner: Fo(Zv) }),
        dw = M($v, { WellKnownScaleSet: K(S), TileMatrix: Ho(function(a, b) { return O({}, kw, a, b) }) }, M(aw, { SupportedCRS: K(S), Identifier: K(S) })),
        kw = M($v, {
            TopLeftCorner: K(Zv),
            ScaleDenominator: K(Gp),
            TileWidth: K(Ip),
            TileHeight: K(Ip),
            MatrixWidth: K(Ip),
            MatrixHeight: K(Ip)
        }, M(aw, { Identifier: K(S) }));

    function lw(a, b, c) { gf.call(this);
        this.gh(a, b ? b : 0, c) }
    v(lw, gf);
    k = lw.prototype;
    k.clone = function() { var a = new lw(null);
        jf(a, this.ja, this.A.slice());
        a.u(); return a };
    k.Nb = function(a, b, c, d) { var e = this.A;
        a -= e[0]; var f = b - e[1];
        b = a * a + f * f; if (b < d) { if (0 === b)
                for (d = 0; d < this.a; ++d) c[d] = e[d];
            else
                for (d = this.zd() / Math.sqrt(b), c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d) c[d] = e[d];
            c.length = this.a; return b } return d };
    k.Zc = function(a, b) { var c = this.A;
        a -= c[0];
        b -= c[1]; return a * a + b * b <= mw(this) };
    k.wa = function() { return this.A.slice(0, this.a) };
    k.ze = function(a) { var b = this.A,
            c = b[this.a] - b[0]; return Ma(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a) };
    k.zd = function() { return Math.sqrt(mw(this)) };

    function mw(a) { var b = a.A[a.a] - a.A[0];
        a = a.A[a.a + 1] - a.A[1]; return b * b + a * a }
    k.T = function() { return "Circle" };
    k.$a = function(a) { var b = this.C(); return fb(a, b) ? (b = this.wa(), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : Ua(a, this.Bb, this)) : !1 };
    k.tb = function(a) { var b = this.a,
            c = a.slice();
        c[b] = c[0] + (this.A[b] - this.A[0]); var d; for (d = 1; d < b; ++d) c[b + d] = a[d];
        jf(this, this.ja, c);
        this.u() };
    k.gh = function(a, b, c) { if (a) { kf(this, c, a, 0);
            this.A || (this.A = []);
            c = this.A;
            a = wf(c, a);
            c[a++] = c[0] + b; var d;
            b = 1; for (d = this.a; b < d; ++b) c[a++] = c[b];
            c.length = a } else jf(this, "XY", null);
        this.u() };
    k.U = function() {};
    k.na = function() {};
    k.ed = function(a) { this.A[this.a] = this.A[0] + a;
        this.u() };

    function nw(a) { a = a ? a : {};
        Hg.call(this, { handleEvent: Qe });
        this.j = a.formatConstructors ? a.formatConstructors : [];
        this.s = a.projection ? Nb(a.projection) : null;
        this.a = null;
        this.f = a.source || null;
        this.target = a.target ? a.target : null }
    v(nw, Hg);

    function ow(a) { a = a.dataTransfer.files; var b; var c = 0; for (b = a.length; c < b; ++c) { var d = a.item(c); var e = new FileReader;
            e.addEventListener("load", this.l.bind(this, d));
            e.readAsText(d) } }

    function pw(a) { a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy" }
    nw.prototype.l = function(a, b) { b = b.target.result; var c = this.v,
            d = this.s;
        d || (d = c.$().v);
        c = this.j; var e = [],
            f; var g = 0; for (f = c.length; g < f; ++g) { var h = new c[g]; var l = { featureProjection: d }; try { e = h.Na(b, l) } catch (m) { e = null } if (e && 0 < e.length) break }
        this.f && (this.f.clear(), this.f.Oc(e));
        this.b(new qw(rw, a, e, d)) };

    function sw(a) { var b = a.v;
        b && (b = a.target ? a.target : b.a, a.a = [y(b, "drop", ow, a), y(b, "dragenter", pw, a), y(b, "dragover", pw, a), y(b, "drop", pw, a)]) }
    nw.prototype.Ha = function(a) { Hg.prototype.Ha.call(this, a);
        a ? sw(this) : tw(this) };
    nw.prototype.setMap = function(a) { tw(this);
        Hg.prototype.setMap.call(this, a);
        this.c() && sw(this) };

    function tw(a) { a.a && (a.a.forEach(Gc), a.a = null) }
    var rw = "addfeatures";

    function qw(a, b, c, d) { Qc.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d }
    v(qw, Qc);

    function uw(a) { a = a ? a : {};
        dh.call(this, { handleDownEvent: vw, handleDragEvent: ww, handleUpEvent: xw });
        this.s = a.condition ? a.condition : $g;
        this.a = this.f = void 0;
        this.j = 0;
        this.o = void 0 !== a.duration ? a.duration : 400 }
    v(uw, dh);

    function ww(a) { if (bh(a)) { var b = a.map,
                c = b.Cb(),
                d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            b = b.$();
            b.j.rotation !== re && void 0 !== this.f && (d = c - this.f, Ig(b, b.Ra() - d));
            this.f = c;
            void 0 !== this.a && (c = this.a * (b.Qa() / a), Rg(b, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a } }

    function xw(a) { if (!bh(a)) return !0;
        a = a.map.$();
        ag(a, 1, -1); var b = this.j - 1,
            c = a.Ra();
        c = a.constrainRotation(c, 0);
        Ig(a, c, void 0, void 0);
        c = a.Qa(); var d = this.o;
        c = a.constrainResolution(c, 0, b);
        Rg(a, c, void 0, d);
        this.j = 0; return !1 }

    function vw(a) { return bh(a) && this.s(a) ? (ag(a.map.$(), 1, 1), this.a = this.f = void 0, !0) : !1 };

    function T(a) { a = a ? a : {}; var b = jb({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        vg.call(this, b);
        this.j = void 0 !== a.declutter ? a.declutter : !1;
        this.f = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.B = null;
        this.O = void 0;
        this.l(a.style);
        this.aa = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.ca = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1;
        this.type = "VECTOR" }
    v(T, vg);
    T.prototype.H = function() { return this.B };
    T.prototype.fb = function() { return this.O };
    T.prototype.l = function(a) { this.B = void 0 !== a ? a : tk;
        this.O = null === a ? void 0 : rk(this.B);
        this.u() };
    var Wj = "renderOrder";

    function yw() { return [
            [-Infinity, -Infinity, Infinity, Infinity]
        ] };

    function U(a) {
        a = a || {};
        nn.call(this, { attributions: a.attributions, logo: a.logo, projection: void 0, state: "ready", wrapX: void 0 !== a.wrapX ? a.wrapX : !0 });
        this.o = da;
        this.G = a.format;
        this.aa = void 0 == a.overlaps ? !0 : a.overlaps;
        this.O = a.url;
        void 0 !== a.loader ? this.o = a.loader : void 0 !== this.O && (na(this.G, 7), this.o = Qo(this.O, this.G));
        this.ca = void 0 !== a.strategy ? a.strategy : yw;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new km : null;
        this.W = new km;
        this.f = {};
        this.j = {};
        this.l = {};
        this.s = {};
        this.i = null;
        if (a.features instanceof A) { var c = a.features; var d = c.a } else Array.isArray(a.features) && (d = a.features);
        b || void 0 !== c || (c = new A(d));
        void 0 !== d && zw(this, d);
        void 0 !== c && Aw(this, c)
    }
    v(U, nn);
    k = U.prototype;
    k.Gb = function(a) { var b = w(a).toString(); if (Bw(this, b, a)) { Cw(this, b, a); var c = a.V();
            c ? (b = c.C(), this.a && this.a.Ca(b, a)) : this.f[b] = a;
            this.b(new Dw("addfeature", a)) }
        this.u() };

    function Cw(a, b, c) { a.s[b] = [y(c, "change", a.dj, a), y(c, "propertychange", a.dj, a)] }

    function Bw(a, b, c) { var d = !0,
            e = c.c;
        void 0 !== e ? e.toString() in a.j ? d = !1 : a.j[e.toString()] = c : (na(!(b in a.l), 30), a.l[b] = c); return d }
    k.Oc = function(a) { zw(this, a);
        this.u() };

    function zw(a, b) { var c, d = [],
            e = [],
            f = []; var g = 0; for (c = b.length; g < c; g++) { var h = b[g]; var l = w(h).toString();
            Bw(a, l, h) && e.push(h) }
        g = 0; for (c = e.length; g < c; g++) h = e[g], l = w(h).toString(), Cw(a, l, h), (b = h.V()) ? (l = b.C(), d.push(l), f.push(h)) : a.f[l] = h;
        a.a && a.a.load(d, f);
        g = 0; for (c = e.length; g < c; g++) a.b(new Dw("addfeature", e[g])) }

    function Aw(a, b) { var c = !1;
        y(a, "addfeature", function(a) { c || (c = !0, b.push(a.feature), c = !1) });
        y(a, "removefeature", function(a) { c || (c = !0, b.remove(a.feature), c = !1) });
        y(b, "add", function(a) { c || (c = !0, this.Gb(a.element), c = !1) }, a);
        y(b, "remove", function(a) { c || (c = !0, this.Lb(a.element), c = !1) }, a);
        a.i = b }
    k.clear = function(a) { if (a) { for (var b in this.s) this.s[b].forEach(Gc);
            this.i || (this.s = {}, this.j = {}, this.l = {}) } else if (this.a) { this.a.forEach(this.Xg, this); for (var c in this.f) this.Xg(this.f[c]) }
        this.i && this.i.clear();
        this.a && this.a.clear();
        this.W.clear();
        this.f = {};
        this.b(new Dw("clear"));
        this.u() };
    k.Ih = function(a, b) { if (this.a) return this.a.forEach(a, b); if (this.i) return this.i.forEach(a, b) };

    function Ew(a, b, c) { a.dc([b[0], b[1], b[0], b[1]], function(a) { if (a.V().Bb(b)) return c.call(void 0, a) }) }
    k.dc = function(a, b, c) { if (this.a) return pm(this.a, a, b, c); if (this.i) return this.i.forEach(b, c) };
    k.Jh = function(a, b, c) { return this.dc(a, function(d) { if (d.V().$a(a) && (d = b.call(c, d))) return d }) };
    k.Qh = function() { return this.i };
    k.ce = function() { if (this.i) var a = this.i.a;
        else this.a && (a = mm(this.a), mb(this.f) || ec(a, lb(this.f))); return a };
    k.Ph = function(a) { var b = [];
        Ew(this, a, function(a) { b.push(a) }); return b };
    k.Wf = function(a) { return nm(this.a, a) };
    k.Lh = function(a, b) { var c = a[0],
            d = a[1],
            e = null,
            f = [NaN, NaN],
            g = Infinity,
            h = [-Infinity, -Infinity, Infinity, Infinity],
            l = b ? b : Qe;
        pm(this.a, h, function(a) { if (l(a)) { var b = a.V(),
                    m = g;
                g = b.Nb(c, d, f, g);
                g < m && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a) } }); return e };
    k.C = function(a) { return this.a.C(a) };
    k.Oh = function(a) { a = this.j[a.toString()]; return void 0 !== a ? a : null };
    k.bj = function() { return this.G };
    k.cj = function() { return this.O };
    k.dj = function(a) { a = a.target; var b = w(a).toString(),
            c = a.V();
        c ? (c = c.C(), b in this.f ? (delete this.f[b], this.a && this.a.Ca(c, a)) : this.a && lm(this.a, c, a)) : b in this.f || (this.a && this.a.remove(a), this.f[b] = a);
        c = a.c;
        void 0 !== c ? (c = c.toString(), b in this.l ? (delete this.l[b], this.j[c] = a) : this.j[c] !== a && (Fw(this, a), this.j[c] = a)) : b in this.l || (Fw(this, a), this.l[b] = a);
        this.u();
        this.b(new Dw("changefeature", a)) };
    k.$d = function(a, b, c) { var d = this.W;
        a = this.ca(a, b); var e; var f = 0; for (e = a.length; f < e; ++f) { var g = a[f];
            pm(d, g, function(a) { return Ka(a.extent, g) }) || (this.o.call(this, g, b, c), d.Ca(g, { extent: g.slice() })) } };
    k.Lb = function(a) { var b = w(a).toString();
        b in this.f ? delete this.f[b] : this.a && this.a.remove(a);
        this.Xg(a);
        this.u() };
    k.Xg = function(a) { var b = w(a).toString();
        this.s[b].forEach(Gc);
        delete this.s[b]; var c = a.c;
        void 0 !== c ? delete this.j[c.toString()] : delete this.l[b];
        this.b(new Dw("removefeature", a)) };

    function Fw(a, b) { for (var c in a.j)
            if (a.j[c] === b) { delete a.j[c]; break } }
    k.ej = function(a) { this.o = a };

    function Dw(a, b) { Qc.call(this, a);
        this.feature = b }
    v(Dw, Qc);

    function Gw(a) {
        dh.call(this, { handleDownEvent: Hw, handleEvent: Iw, handleUpEvent: Jw });
        this.W = !1;
        this.ca = null;
        this.o = !1;
        this.xb = a.source ? a.source : null;
        this.Xa = a.features ? a.features : null;
        this.Tk = a.snapTolerance ? a.snapTolerance : 12;
        this.O = a.type;
        this.f = Kw(this.O);
        this.ya = a.minPoints ? a.minPoints : this.f === Lw ? 3 : 2;
        this.va = a.maxPoints ? a.maxPoints : Infinity;
        this.Ld = a.finishCondition ? a.finishCondition : Qe;
        var b = a.geometryFunction;
        if (!b)
            if ("Circle" === this.O) b = function(a, b) {
                b = b ? b : new lw([NaN, NaN]);
                b.gh(a[0], Math.sqrt(He(a[0],
                    a[1])));
                return b
            };
            else { var c, d = this.f;
                d === Mw ? c = B : d === Nw ? c = I : d === Lw && (c = D);
                b = function(a, b) { b ? d === Lw ? b.na([a[0].concat([a[0][0]])]) : b.na(a) : b = new c(a); return b } }
        this.ab = b;
        this.G = this.B = this.a = this.H = this.j = this.s = null;
        this.rc = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.ua = new T({ source: new U({ useSpatialIndex: !1, wrapX: a.wrapX ? a.wrapX : !1 }), style: a.style ? a.style : Ow() });
        this.nb = a.geometryName;
        this.Sk = a.condition ? a.condition : Zg;
        this.Gf = a.freehand ? Qe : a.freehandCondition ? a.freehandCondition :
            $g;
        y(this, Xc("active"), this.Hi, this)
    }
    v(Gw, dh);

    function Ow() { var a = uk(); return function(b) { return a[b.V().T()] } }
    k = Gw.prototype;
    k.setMap = function(a) { dh.prototype.setMap.call(this, a);
        this.Hi() };

    function Iw(a) { this.o = this.f !== Mw && this.Gf(a); var b = !0;
        this.o && "pointerdrag" === a.type && null !== this.j ? (Pw(this, a), b = !1) : this.o && "pointerdown" === a.type ? b = !1 : "pointermove" === a.type ? b = Qw(this, a) : "dblclick" === a.type && (b = !1); return eh.call(this, a) && b }

    function Hw(a) { this.W = !this.o; return this.o ? (this.ca = a.pixel, this.s || Rw(this, a), !0) : this.Sk(a) ? (this.ca = a.pixel, !0) : !1 }

    function Jw(a) { var b = !0;
        Qw(this, a); var c = this.f === Sw;
        this.W ? (this.s ? this.o || c ? this.Od() : Tw(this, a) ? this.Ld(a) && this.Od() : Pw(this, a) : (Rw(this, a), this.f === Mw && this.Od()), b = !1) : this.o && (this.s = null, Uw(this)); return b }

    function Qw(a, b) {
        if (a.ca && (!a.o && a.W || a.o && !a.W)) { var c = a.ca,
                d = b.pixel,
                e = c[0] - d[0];
            c = c[1] - d[1];
            e = e * e + c * c;
            a.W = a.o ? e > a.rc : e <= a.rc }
        a.s ? (e = b.coordinate, c = a.j.V(), a.f === Mw ? d = a.a : a.f === Lw ? (d = a.a[0], d = d[d.length - 1], Tw(a, b) && (e = a.s.slice())) : (d = a.a, d = d[d.length - 1]), d[0] = e[0], d[1] = e[1], a.ab(a.a, c), a.H && a.H.V().na(e), c instanceof D && a.f !== Lw ? (a.B || (a.B = new vk(new I(null))), e = c.Th(0), b = a.B.V(), b.ba(e.ja, e.da())) : a.G && (b = a.B.V(), b.na(a.G)), Vw(a)) : (b = b.coordinate.slice(), a.H ? a.H.V().na(b) : (a.H = new vk(new B(b)),
            Vw(a)));
        return !0
    }

    function Tw(a, b) { var c = !1; if (a.j) { var d = !1,
                e = [a.s];
            a.f === Nw ? d = a.a.length > a.ya : a.f === Lw && (d = a.a[0].length > a.ya, e = [a.a[0][0], a.a[0][a.a[0].length - 2]]); if (d) { d = b.map; for (var f = 0, g = e.length; f < g; f++) { var h = e[f],
                        l = d.Ia(h),
                        m = b.pixel;
                    c = m[0] - l[0];
                    l = m[1] - l[1]; if (c = Math.sqrt(c * c + l * l) <= (a.o ? 1 : a.Tk)) { a.s = h; break } } } } return c }

    function Rw(a, b) { b = b.coordinate;
        a.s = b;
        a.f === Mw ? a.a = b.slice() : a.f === Lw ? (a.a = [
            [b.slice(), b.slice()]
        ], a.G = a.a[0]) : (a.a = [b.slice(), b.slice()], a.f === Sw && (a.G = a.a));
        a.G && (a.B = new vk(new I(a.G)));
        b = a.ab(a.a);
        a.j = new vk;
        a.nb && a.j.Jc(a.nb);
        a.j.Ua(b);
        Vw(a);
        a.b(new Ww("drawstart", a.j)) }

    function Pw(a, b) { b = b.coordinate; var c = a.j.V(),
            d; if (a.f === Nw) { a.s = b.slice(); var e = a.a;
            e.length >= a.va && (a.o ? e.pop() : d = !0);
            e.push(b.slice());
            a.ab(e, c) } else a.f === Lw && (e = a.a[0], e.length >= a.va && (a.o ? e.pop() : d = !0), e.push(b.slice()), d && (a.s = e[0]), a.ab(a.a, c));
        Vw(a);
        d && a.Od() }
    k.fq = function() { if (this.j) { var a = this.j.V(); if (this.f === Nw) { var b = this.a;
                b.splice(-2, 1);
                this.ab(b, a);
                2 <= b.length && (this.s = b[b.length - 2].slice()) } else if (this.f === Lw) { b = this.a[0];
                b.splice(-2, 1); var c = this.B.V();
                c.na(b);
                this.ab(this.a, a) }
            0 === b.length && (this.s = null);
            Vw(this) } };
    k.Od = function() { var a = Uw(this),
            b = this.a,
            c = a.V();
        this.f === Nw ? (b.pop(), this.ab(b, c)) : this.f === Lw && (b[0].pop(), this.ab(b, c), b = c.U()); "MultiPoint" === this.O ? a.Ua(new Q([b])) : "MultiLineString" === this.O ? a.Ua(new P([b])) : "MultiPolygon" === this.O && a.Ua(new R([b]));
        this.b(new Ww("drawend", a));
        this.Xa && this.Xa.push(a);
        this.xb && this.xb.Gb(a) };

    function Uw(a) { a.s = null; var b = a.j;
        b && (a.j = null, a.H = null, a.B = null, a.ua.ia().clear(!0)); return b }
    k.Qn = function(a) { var b = a.V();
        this.j = a;
        this.a = b.U();
        a = this.a[this.a.length - 1];
        this.s = a.slice();
        this.a.push(a.slice());
        Vw(this);
        this.b(new Ww("drawstart", this.j)) };
    k.hd = Re;

    function Vw(a) { var b = [];
        a.j && b.push(a.j);
        a.B && b.push(a.B);
        a.H && b.push(a.H);
        a = a.ua.ia();
        a.clear(!0);
        a.Oc(b) }
    k.Hi = function() { var a = this.v,
            b = this.c();
        a && b || Uw(this);
        this.ua.setMap(b ? a : null) };

    function Kw(a) { var b; "Point" === a || "MultiPoint" === a ? b = Mw : "LineString" === a || "MultiLineString" === a ? b = Nw : "Polygon" === a || "MultiPolygon" === a ? b = Lw : "Circle" === a && (b = Sw); return b }
    var Mw = "Point",
        Nw = "LineString",
        Lw = "Polygon",
        Sw = "Circle";

    function Ww(a, b) { Qc.call(this, a);
        this.feature = b }
    v(Ww, Qc);

    function Xw(a) {
        var b = a || {};
        this.a = this.j = null;
        this.B = void 0 !== b.pixelTolerance ? b.pixelTolerance : 10;
        this.H = !1;
        this.G = this.s = null;
        a || (a = {});
        dh.call(this, { handleDownEvent: Yw, handleDragEvent: Zw, handleEvent: $w, handleUpEvent: ax });
        this.o = new T({ source: new U({ useSpatialIndex: !1, wrapX: !!a.wrapX }), style: a.boxStyle ? a.boxStyle : bx(), updateWhileAnimating: !0, updateWhileInteracting: !0 });
        this.O = new T({
            source: new U({ useSpatialIndex: !1, wrapX: !!a.wrapX }),
            style: a.pointerStyle ? a.pointerStyle : cx(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        a.extent && this.f(a.extent)
    }
    v(Xw, dh);

    function $w(a) { if (!(a instanceof Ad)) return !0; if ("pointermove" == a.type && !this.D) { var b = a.pixel,
                c = a.map,
                d = dx(this, b, c);
            d || (d = c.Pa(b));
            ex(this, d) }
        eh.call(this, a); return !1 }

    function Yw(a) {
        function b(a) { var b = null,
                c = null;
            a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
            a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]); return null !== b && null !== c ? [b, c] : null } var c = a.pixel,
            d = a.map,
            e = this.C();
        (a = dx(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null, d = a[1] == e[1] || a[1] == e[3] ? a[1] : null, null !== c && null !== d ? this.a = fx(b(a)) : null !== c ? this.a = gx(b([c, e[1]]), b([c, e[3]])) : null !== d && (this.a = gx(b([e[0], d]), b([e[2], d])))) : (a = d.Pa(c), this.f([a[0], a[1], a[0], a[1]]), this.a = fx(a)); return !0 }

    function Zw(a) { this.a && (a = a.coordinate, this.f(this.a(a)), ex(this, a)); return !0 }

    function ax() { this.a = null; var a = this.C();
        a && 0 !== Za(a) || this.f(null); return !1 }

    function bx() { var a = uk(); return function() { return a.Polygon } }

    function cx() { var a = uk(); return function() { return a.Point } }

    function fx(a) { return function(b) { return Ba([a, b]) } }

    function gx(a, b) { return a[0] == b[0] ? function(c) { return Ba([a, [c[0], b[1]]]) } : a[1] == b[1] ? function(c) { return Ba([a, [b[0], c[1]]]) } : null }

    function dx(a, b, c) {
        function d(a, b) { return Je(e, a) - Je(e, b) } var e = c.Pa(b),
            f = a.C(); if (f) { f = [
                [
                    [f[0], f[1]],
                    [f[0], f[3]]
                ],
                [
                    [f[0], f[3]],
                    [f[2], f[3]]
                ],
                [
                    [f[2], f[3]],
                    [f[2], f[1]]
                ],
                [
                    [f[2], f[1]],
                    [f[0], f[1]]
                ]
            ];
            f.sort(d);
            f = f[0]; var g = Be(e, f),
                h = c.Ia(g); if (Ie(b, h) <= a.B) return b = c.Ia(f[0]), c = c.Ia(f[1]), b = He(h, b), c = He(h, c), a.H = Math.sqrt(Math.min(b, c)) <= a.B, a.H && (g = b > c ? f[1] : f[0]), g } return null }

    function ex(a, b) { var c = a.G;
        c ? c.V().na(b) : (c = new vk(new B(b)), a.G = c, a.O.ia().Gb(c)) }
    Xw.prototype.setMap = function(a) { this.o.setMap(a);
        this.O.setMap(a);
        dh.prototype.setMap.call(this, a) };
    Xw.prototype.C = function() { return this.j };
    Xw.prototype.f = function(a) { this.j = a ? a : null; var b = this.s;
        b ? a ? b.Ua(Sf(a)) : b.Ua(void 0) : (this.s = b = a ? new vk(Sf(a)) : new vk({}), this.o.ia().Gb(b));
        this.b(new hx(this.j)) };

    function hx(a) { Qc.call(this, "extentchanged");
        this.extent = a }
    v(hx, Qc);

    function ix(a) {
        dh.call(this, { handleDownEvent: jx, handleDragEvent: kx, handleEvent: lx, handleUpEvent: mx });
        this.Ld = a.condition ? a.condition : ch;
        this.nb = function(a) { return Ug(a) && Yg(a) };
        this.xb = a.deleteCondition ? a.deleteCondition : this.nb;
        this.rc = a.insertVertexCondition ? a.insertVertexCondition : Qe;
        this.Xa = this.f = null;
        this.ya = [0, 0];
        this.B = this.G = !1;
        this.a = new km;
        this.ua = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.s = this.va = !1;
        this.j = [];
        this.H = new T({
            source: new U({ useSpatialIndex: !1, wrapX: !!a.wrapX }),
            style: a.style ?
                a.style : nx(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.ca = { Point: this.Yn, LineString: this.Ji, LinearRing: this.Ji, Polygon: this.Zn, MultiPoint: this.Wn, MultiLineString: this.Vn, MultiPolygon: this.Xn, Circle: this.Tn, GeometryCollection: this.Un };
        this.W = null;
        a.source ? (this.W = a.source, a = new A(this.W.ce()), y(this.W, "addfeature", this.mm, this), y(this.W, "removefeature", this.om, this)) : a = a.features;
        if (!a) throw Error("The modify interaction requires features or a source");
        this.o = a;
        this.o.forEach(this.vg,
            this);
        y(this.o, "add", this.Rn, this);
        y(this.o, "remove", this.Sn, this);
        this.O = null
    }
    v(ix, dh);
    k = ix.prototype;
    k.vg = function(a) { var b = a.V();
        b && b.T() in this.ca && this.ca[b.T()].call(this, a, b);
        (b = this.v) && b.c && this.c() && ox(this, this.ya, b);
        y(a, "change", this.Ii, this) };

    function px(a, b) { a.B || (a.B = !0, a.b(new qx("modifystart", a.o, b))) }

    function rx(a, b) { sx(a, b);
        a.f && 0 === a.o.jc() && (a.H.ia().Lb(a.f), a.f = null);
        Mc(b, "change", a.Ii, a) }

    function sx(a, b) { a = a.a; var c = [];
        a.forEach(function(a) { b === a.feature && c.push(a) }); for (var d = c.length - 1; 0 <= d; --d) a.remove(c[d]) }
    k.Ha = function(a) { this.f && !a && (this.H.ia().Lb(this.f), this.f = null);
        dh.prototype.Ha.call(this, a) };
    k.setMap = function(a) { this.H.setMap(a);
        dh.prototype.setMap.call(this, a) };
    k.mm = function(a) { a.feature && this.o.push(a.feature) };
    k.om = function(a) { a.feature && this.o.remove(a.feature) };
    k.Rn = function(a) { this.vg(a.element) };
    k.Ii = function(a) { this.s || (a = a.target, rx(this, a), this.vg(a)) };
    k.Sn = function(a) { rx(this, a.element) };
    k.Yn = function(a, b) { var c = b.U();
        a = { feature: a, geometry: b, ma: [c, c] };
        this.a.Ca(b.C(), a) };
    k.Wn = function(a, b) { var c = b.U(),
            d; var e = 0; for (d = c.length; e < d; ++e) { var f = c[e];
            f = { feature: a, geometry: b, depth: [e], index: e, ma: [f, f] };
            this.a.Ca(b.C(), f) } };
    k.Ji = function(a, b) { var c = b.U(),
            d; var e = 0; for (d = c.length - 1; e < d; ++e) { var f = c.slice(e, e + 2); var g = { feature: a, geometry: b, index: e, ma: f };
            this.a.Ca(Ba(f), g) } };
    k.Vn = function(a, b) { var c = b.U(),
            d, e; var f = 0; for (e = c.length; f < e; ++f) { var g = c[f]; var h = 0; for (d = g.length - 1; h < d; ++h) { var l = g.slice(h, h + 2); var m = { feature: a, geometry: b, depth: [f], index: h, ma: l };
                this.a.Ca(Ba(l), m) } } };
    k.Zn = function(a, b) { var c = b.U(),
            d, e; var f = 0; for (e = c.length; f < e; ++f) { var g = c[f]; var h = 0; for (d = g.length - 1; h < d; ++h) { var l = g.slice(h, h + 2); var m = { feature: a, geometry: b, depth: [f], index: h, ma: l };
                this.a.Ca(Ba(l), m) } } };
    k.Xn = function(a, b) { var c = b.U(),
            d, e, f; var g = 0; for (f = c.length; g < f; ++g) { var h = c[g]; var l = 0; for (e = h.length; l < e; ++l) { var m = h[l]; var n = 0; for (d = m.length - 1; n < d; ++n) { var p = m.slice(n, n + 2); var q = { feature: a, geometry: b, depth: [l, g], index: n, ma: p };
                    this.a.Ca(Ba(p), q) } } } };
    k.Tn = function(a, b) { var c = b.wa(),
            d = { feature: a, geometry: b, index: 0, ma: [c, c] };
        a = { feature: a, geometry: b, index: 1, ma: [c, c] };
        d.Rf = a.Rf = [d, a];
        this.a.Ca(Oa(c), d);
        this.a.Ca(b.C(), a) };
    k.Un = function(a, b) { var c = b.a; for (b = 0; b < c.length; ++b) this.ca[c[b].T()].call(this, a, c[b]) };

    function tx(a, b) { var c = a.f;
        c ? c.V().na(b) : (c = new vk(new B(b)), a.f = c, a.H.ia().Gb(c)) }

    function ux(a, b) { return a.index - b.index }

    function jx(a) {
        if (!this.Ld(a)) return !1;
        ox(this, a.pixel, a.map);
        var b = a.map.Pa(a.pixel);
        this.j.length = 0;
        this.B = !1;
        var c = this.f;
        if (c) {
            var d = [];
            c = c.V().U();
            var e = Ba([c]);
            e = nm(this.a, e);
            var f = {};
            e.sort(ux);
            for (var g = 0, h = e.length; g < h; ++g) {
                var l = e[g],
                    m = l.ma,
                    n = w(l.feature),
                    p = l.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if ("Circle" === l.geometry.T() && 1 === l.index) m = vx(b, l), Ee(m, c) && !f[n][0] && (this.j.push([l, 0]), f[n][0] = l);
                else if (Ee(m[0], c) && !f[n][0]) this.j.push([l, 0]), f[n][0] = l;
                else if (Ee(m[1], c) &&
                    !f[n][1]) { if ("LineString" !== l.geometry.T() && "MultiLineString" !== l.geometry.T() || !f[n][0] || 0 !== f[n][0].index) this.j.push([l, 1]), f[n][1] = l } else this.rc(a) && w(m) in this.Xa && !f[n][0] && !f[n][1] && d.push([l, c])
            }
            d.length && px(this, a);
            for (a = d.length - 1; 0 <= a; --a) this.vm.apply(this, d[a])
        }
        return !!this.f
    }

    function kx(a) {
        this.G = !1;
        px(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            var d = this.j[b],
                e = d[0],
                f = e.depth,
                g = e.geometry,
                h = e.ma;
            for (d = d[1]; a.length < g.pa();) a.push(h[d][a.length]);
            switch (g.T()) {
                case "Point":
                    var l = a;
                    h[0] = h[1] = a;
                    break;
                case "MultiPoint":
                    l = g.U();
                    l[e.index] = a;
                    h[0] = h[1] = a;
                    break;
                case "LineString":
                    l = g.U();
                    l[e.index + d] = a;
                    h[d] = a;
                    break;
                case "MultiLineString":
                    l = g.U();
                    l[f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "Polygon":
                    l = g.U();
                    l[f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "MultiPolygon":
                    l = g.U();
                    l[f[1]][f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "Circle":
                    h[0] = h[1] = a, 0 === e.index ? (this.s = !0, g.tb(a)) : (this.s = !0, g.ed(Ie(g.wa(), a))), this.s = !1
            }
            l && (e = g, f = l, this.s = !0, e.na(f), this.s = !1)
        }
        tx(this, a)
    }

    function mx(a) { for (var b, c, d = this.j.length - 1; 0 <= d; --d)
            if (b = this.j[d][0], c = b.geometry, "Circle" === c.T()) { var e = c.wa(),
                    f = b.Rf[0];
                b = b.Rf[1];
                f.ma[0] = f.ma[1] = e;
                b.ma[0] = b.ma[1] = e;
                lm(this.a, Oa(e), f);
                lm(this.a, c.C(), b) } else lm(this.a, Ba(b.ma), b);
        this.B && (this.b(new qx("modifyend", this.o, a)), this.B = !1); return !1 }

    function lx(a) { if (!(a instanceof Ad)) return !0;
        this.O = a; var b;
        a.map.$().Sh() || "pointermove" != a.type || this.D || (this.ya = a.pixel, ox(this, a.pixel, a.map));
        this.f && this.xb(a) && (b = "singleclick" == a.type && this.G ? !0 : this.yj()); "singleclick" == a.type && (this.G = !1); return eh.call(this, a) && !b }

    function ox(a, b, c) {
        function d(a, b) { return wx(e, a) - wx(e, b) }
        var e = c.Pa(b),
            f = Ea(Oa(e), c.$().Qa() * a.ua);
        f = nm(a.a, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0],
                h = g.ma,
                l = vx(e, g),
                m = c.Ia(l),
                n = Ie(b, m);
            if (n <= a.ua) {
                b = {};
                if ("Circle" === g.geometry.T() && 1 === g.index) a.va = !0, tx(a, l);
                else
                    for (n = c.Ia(h[0]), g = c.Ia(h[1]), c = He(m, n), m = He(m, g), n = Math.sqrt(Math.min(c, m)), a.va = n <= a.ua, a.va && (l = c > m ? h[1] : h[0]), tx(a, l), m = 1, c = f.length; m < c; ++m)
                        if (l = f[m].ma, Ee(h[0], l[0]) && Ee(h[1], l[1]) || Ee(h[0], l[1]) && Ee(h[1], l[0])) b[w(l)] = !0;
                        else break;
                b[w(h)] = !0;
                a.Xa = b;
                return
            }
        }
        a.f && (a.H.ia().Lb(a.f), a.f = null)
    }

    function wx(a, b) { var c = b.geometry; return "Circle" === c.T() && 1 === b.index ? (a = He(c.wa(), a), c = Math.sqrt(a) - c.zd(), c * c) : Je(a, b.ma) }

    function vx(a, b) { var c = b.geometry; return "Circle" === c.T() && 1 === b.index ? c.Ib(a) : Be(a, b.ma) }
    k.vm = function(a, b) {
        for (var c = a.ma, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.pa();) b.push(0);
        switch (e.T()) {
            case "MultiLineString":
                h = e.U();
                h[f[0]].splice(g + 1, 0, b); break;
            case "Polygon":
                h = e.U();
                h[f[0]].splice(g + 1, 0, b); break;
            case "MultiPolygon":
                h = e.U();
                h[f[1]][f[0]].splice(g + 1, 0, b); break;
            case "LineString":
                h = e.U();
                h.splice(g + 1, 0, b); break;
            default:
                return }
        this.s = !0;
        e.na(h);
        this.s = !1;
        h = this.a;
        h.remove(a);
        xx(this, e, g, f, 1);
        a = { ma: [c[0], b], feature: d, geometry: e, depth: f, index: g };
        h.Ca(Ba(a.ma), a);
        this.j.push([a, 1]);
        b = { ma: [b, c[1]], feature: d, geometry: e, depth: f, index: g + 1 };
        h.Ca(Ba(b.ma), b);
        this.j.push([b, 0]);
        this.G = !0
    };
    k.yj = function() {
        if (this.O && "pointerdrag" != this.O.type) {
            var a = this.O;
            px(this, a);
            var b = this.j,
                c = {},
                d, e;
            for (e = b.length - 1; 0 <= e; --e) { var f = b[e]; var g = f[0]; var h = w(g.feature);
                g.depth && (h += "-" + g.depth.join("-"));
                h in c || (c[h] = {});
                0 === f[1] ? (c[h].right = g, c[h].index = g.index) : 1 == f[1] && (c[h].left = g, c[h].index = g.index + 1) }
            for (h in c) {
                var l = c[h].right;
                var m = c[h].left;
                e = c[h].index;
                var n = e - 1;
                g = void 0 !== m ? m : l;
                0 > n && (n = 0);
                f = g.geometry;
                var p = d = f.U();
                var q = !1;
                switch (f.T()) {
                    case "MultiLineString":
                        2 < d[g.depth[0]].length &&
                            (d[g.depth[0]].splice(e, 1), q = !0);
                        break;
                    case "LineString":
                        2 < d.length && (d.splice(e, 1), q = !0);
                        break;
                    case "MultiPolygon":
                        p = p[g.depth[1]];
                    case "Polygon":
                        p = p[g.depth[0]], 4 < p.length && (e == p.length - 1 && (e = 0), p.splice(e, 1), q = !0, 0 === e && (p.pop(), p.push(p[0]), n = p.length - 1))
                }
                q && (q = f, this.s = !0, q.na(d), this.s = !1, d = [], void 0 !== m && (this.a.remove(m), d.push(m.ma[0])), void 0 !== l && (this.a.remove(l), d.push(l.ma[1])), void 0 !== m && void 0 !== l && (m = { depth: g.depth, feature: g.feature, geometry: g.geometry, index: n, ma: d }, this.a.Ca(Ba(m.ma),
                    m)), xx(this, f, e, g.depth, -1), this.f && (this.H.ia().Lb(this.f), this.f = null), b.length = 0)
            }
            this.b(new qx("modifyend", this.o, a));
            this.B = !1;
            return !0
        }
        return !1
    };

    function xx(a, b, c, d, e) { pm(a.a, b.C(), function(a) { a.geometry === b && (void 0 === d || void 0 === a.depth || gc(a.depth, d)) && a.index > c && (a.index += e) }) }

    function nx() { var a = uk(); return function() { return a.Point } }

    function qx(a, b, c) { Qc.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c }
    v(qx, Qc);

    function yx(a) {
        Hg.call(this, { handleEvent: zx });
        a = a ? a : {};
        this.B = a.condition ? a.condition : Yg;
        this.D = a.addCondition ? a.addCondition : Re;
        this.H = a.removeCondition ? a.removeCondition : Re;
        this.G = a.toggleCondition ? a.toggleCondition : $g;
        this.s = a.multi ? a.multi : !1;
        this.l = a.filter ? a.filter : Qe;
        this.j = a.hitTolerance ? a.hitTolerance : 0;
        this.f = new T({ source: new U({ useSpatialIndex: !1, features: a.features, wrapX: a.wrapX }), style: a.style ? a.style : Ax(), updateWhileAnimating: !0, updateWhileInteracting: !0 });
        if (a.layers)
            if ("function" ===
                typeof a.layers) a = a.layers;
            else { var b = a.layers;
                a = function(a) { return cc(b, a) } }
        else a = Qe;
        this.o = a;
        this.a = {};
        a = this.f.ia().i;
        y(a, "add", this.$n, this);
        y(a, "remove", this.eo, this)
    }
    v(yx, Hg);
    k = yx.prototype;
    k.ao = function() { return this.f.ia().i };
    k.bo = function() { return this.j };
    k.co = function(a) { a = w(a); return this.a[a] };

    function zx(a) {
        if (!this.B(a)) return !0;
        var b = this.D(a),
            c = this.H(a),
            d = this.G(a),
            e = !b && !c && !d,
            f = a.map,
            g = this.f.ia().i,
            h = [],
            l = [];
        if (e) { kb(this.a);
            f.Sc(a.pixel, function(a, b) { if (this.l(a, b)) return l.push(a), a = w(a), this.a[a] = b, !this.s }.bind(this), { layerFilter: this.o, hitTolerance: this.j }); for (e = g.jc() - 1; 0 <= e; --e) { f = g.item(e); var m = l.indexOf(f); - 1 < m ? l.splice(m, 1) : (g.remove(f), h.push(f)) }
            0 !== l.length && g.og(l) } else {
            f.Sc(a.pixel, function(a, e) {
                if (this.l(a, e)) return !b && !d || cc(g.a, a) ? (c || d) && cc(g.a, a) && (h.push(a),
                    e = w(a), delete this.a[e]) : (l.push(a), a = w(a), this.a[a] = e), !this.s
            }.bind(this), { layerFilter: this.o, hitTolerance: this.j });
            for (e = h.length - 1; 0 <= e; --e) g.remove(h[e]);
            g.og(l)
        }(0 < l.length || 0 < h.length) && this.b(new Bx(Cx, l, h, a));
        return Xg(a)
    }
    k.fo = function(a) { this.j = a };
    k.setMap = function(a) { var b = this.v,
            c = this.f.ia().i;
        b && c.forEach(b.Uj, b);
        Hg.prototype.setMap.call(this, a);
        this.f.setMap(a);
        a && c.forEach(a.Pj, a) };

    function Ax() { var a = uk();
        ec(a.Polygon, a.LineString);
        ec(a.GeometryCollection, a.LineString); return function(b) { return b.V() ? a[b.V().T()] : null } }
    k.$n = function(a) { var b = this.v;
        b && b.Pj(a.element) };
    k.eo = function(a) { var b = this.v;
        b && b.Uj(a.element) };

    function Bx(a, b, c, d) { Qc.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d }
    v(Bx, Qc);
    var Cx = "select";

    function Dx(a) {
        dh.call(this, { handleEvent: Ex, handleDownEvent: Qe, handleUpEvent: Fx });
        a = a ? a : {};
        this.s = a.source ? a.source : null;
        this.O = void 0 !== a.vertex ? a.vertex : !0;
        this.B = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.ua = [];
        this.H = {};
        this.W = {};
        this.o = {};
        this.G = null;
        this.f = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.va = Gx.bind(this);
        this.a = new km;
        this.ca = {
            Point: this.no,
            LineString: this.Mi,
            LinearRing: this.Mi,
            Polygon: this.oo,
            MultiPoint: this.lo,
            MultiLineString: this.ko,
            MultiPolygon: this.mo,
            GeometryCollection: this.jo,
            Circle: this.io
        }
    }
    v(Dx, dh);
    k = Dx.prototype;
    k.Gb = function(a, b) { b = void 0 !== b ? b : !0; var c = w(a),
            d = a.V(); if (d) { var e = this.ca[d.T()];
            e && (this.W[c] = d.C(Ca()), e.call(this, a, d)) }
        b && (this.H[c] = y(a, "change", this.ho, this)) };
    k.Xk = function(a) { this.Gb(a) };
    k.Yk = function(a) { this.Lb(a) };
    k.Ki = function(a) { if (a instanceof Dw) var b = a.feature;
        else a instanceof cd && (b = a.element);
        this.Gb(b) };
    k.Li = function(a) { if (a instanceof Dw) var b = a.feature;
        else a instanceof cd && (b = a.element);
        this.Lb(b) };
    k.ho = function(a) { a = a.target; if (this.D) { var b = w(a);
            b in this.o || (this.o[b] = a) } else this.Vj(a) };
    k.Lb = function(a, b) { b = void 0 !== b ? b : !0; var c = w(a),
            d = this.W[c]; if (d) { var e = this.a,
                f = [];
            pm(e, d, function(b) { a === b.feature && f.push(b) }); for (d = f.length - 1; 0 <= d; --d) e.remove(f[d]) }
        b && (Gc(this.H[c]), delete this.H[c]) };
    k.setMap = function(a) { var b = this.v,
            c = this.ua,
            d;
        this.j ? d = this.j : this.s && (d = this.s.ce());
        b && (c.forEach(Gc), c.length = 0, d.forEach(this.Yk, this));
        dh.prototype.setMap.call(this, a);
        a && (this.j ? c.push(y(this.j, "add", this.Ki, this), y(this.j, "remove", this.Li, this)) : this.s && c.push(y(this.s, "addfeature", this.Ki, this), y(this.s, "removefeature", this.Li, this)), d.forEach(this.Xk, this)) };
    k.hd = Re;

    function Hx(a, b, c, d) {
        var e = d.Pa([b[0] - a.f, b[1] + a.f]),
            f = d.Pa([b[0] + a.f, b[1] - a.f]);
        e = Ba([e, f]);
        var g = nm(a.a, e);
        a.O && !a.B && (g = g.filter(function(a) { return "Circle" !== a.feature.V().T() }));
        var h = !1;
        e = !1;
        var l = f = null;
        if (0 < g.length) {
            a.G = c;
            g.sort(a.va);
            var m = g[0].ma;
            h = "Circle" === g[0].feature.V().T();
            if (a.O && !a.B) { if (c = d.Ia(m[0]), h = d.Ia(m[1]), c = He(b, c), b = He(b, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.f) e = !0, f = c > b ? m[1] : m[0], l = d.Ia(f) } else a.B && (f = h ? Ae(c, g[0].feature.V()) : Be(c, m), l = d.Ia(f), Ie(b, l) <= a.f && (e = !0, a.O &&
                !h && (c = d.Ia(m[0]), h = d.Ia(m[1]), c = He(l, c), b = He(l, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.f))) && (f = c > b ? m[1] : m[0], l = d.Ia(f));
            e && (l = [Math.round(l[0]), Math.round(l[1])])
        }
        return { Bq: e, vertex: f, Kq: l }
    }
    k.Vj = function(a) { this.Lb(a, !1);
        this.Gb(a, !1) };
    k.io = function(a, b) { b = Tf(b).U()[0]; var c; var d = 0; for (c = b.length - 1; d < c; ++d) { var e = b.slice(d, d + 2); var f = { feature: a, ma: e };
            this.a.Ca(Ba(e), f) } };
    k.jo = function(a, b) { var c = b.a; for (b = 0; b < c.length; ++b) { var d = this.ca[c[b].T()];
            d && d.call(this, a, c[b]) } };
    k.Mi = function(a, b) { b = b.U(); var c; var d = 0; for (c = b.length - 1; d < c; ++d) { var e = b.slice(d, d + 2); var f = { feature: a, ma: e };
            this.a.Ca(Ba(e), f) } };
    k.ko = function(a, b) { b = b.U(); var c, d; var e = 0; for (d = b.length; e < d; ++e) { var f = b[e]; var g = 0; for (c = f.length - 1; g < c; ++g) { var h = f.slice(g, g + 2); var l = { feature: a, ma: h };
                this.a.Ca(Ba(h), l) } } };
    k.lo = function(a, b) { var c = b.U(),
            d; var e = 0; for (d = c.length; e < d; ++e) { var f = c[e];
            f = { feature: a, ma: [f, f] };
            this.a.Ca(b.C(), f) } };
    k.mo = function(a, b) { b = b.U(); var c, d, e; var f = 0; for (e = b.length; f < e; ++f) { var g = b[f]; var h = 0; for (d = g.length; h < d; ++h) { var l = g[h]; var m = 0; for (c = l.length - 1; m < c; ++m) { var n = l.slice(m, m + 2); var p = { feature: a, ma: n };
                    this.a.Ca(Ba(n), p) } } } };
    k.no = function(a, b) { var c = b.U();
        a = { feature: a, ma: [c, c] };
        this.a.Ca(b.C(), a) };
    k.oo = function(a, b) { b = b.U(); var c, d; var e = 0; for (d = b.length; e < d; ++e) { var f = b[e]; var g = 0; for (c = f.length - 1; g < c; ++g) { var h = f.slice(g, g + 2); var l = { feature: a, ma: h };
                this.a.Ca(Ba(h), l) } } };

    function Ex(a) { var b = Hx(this, a.pixel, a.coordinate, a.map);
        b.Bq && (a.coordinate = b.vertex.slice(0, 2), a.pixel = b.Kq); return eh.call(this, a) }

    function Fx() { var a = lb(this.o);
        a.length && (a.forEach(this.Vj, this), this.o = {}); return !1 }

    function Gx(a, b) { return Je(this.G, a.ma) - Je(this.G, b.ma) };

    function Ix(a) { dh.call(this, { handleDownEvent: Jx, handleDragEvent: Kx, handleMoveEvent: Lx, handleUpEvent: Mx });
        a = a ? a : {};
        this.a = null;
        this.j = void 0 !== a.features ? a.features : null; if (a.layers)
            if ("function" === typeof a.layers) var b = a.layers;
            else { var c = a.layers;
                b = function(a) { return cc(c, a) } }
        else b = Qe;
        this.B = b;
        this.s = a.hitTolerance ? a.hitTolerance : 0;
        this.f = null;
        y(this, Xc("active"), this.o, this) }
    v(Ix, dh);

    function Jx(a) { this.f = Nx(this, a.pixel, a.map); if (!this.a && this.f) { this.a = a.coordinate;
            Lx.call(this, a); var b = this.j || new A([this.f]);
            this.b(new Ox("translatestart", b, a.coordinate)); return !0 } return !1 }

    function Mx(a) { if (this.a) { this.a = null;
            Lx.call(this, a); var b = this.j || new A([this.f]);
            this.b(new Ox("translateend", b, a.coordinate)); return !0 } return !1 }

    function Kx(a) { if (this.a) { a = a.coordinate; var b = a[0] - this.a[0],
                c = a[1] - this.a[1],
                d = this.j || new A([this.f]);
            d.forEach(function(a) { var d = a.V();
                d.translate(b, c);
                a.Ua(d) });
            this.a = a;
            this.b(new Ox("translating", d, a)) } }

    function Lx(a) { var b = a.map.a;
        Nx(this, a.pixel, a.map) ? (b.classList.remove(this.a ? "ol-grab" : "ol-grabbing"), b.classList.add(this.a ? "ol-grabbing" : "ol-grab")) : b.classList.remove("ol-grab", "ol-grabbing") }

    function Nx(a, b, c) { return c.Sc(b, function(a) { if (!this.j || cc(this.j.a, a)) return a }.bind(a), { layerFilter: a.B, hitTolerance: a.s }) }
    Ix.prototype.H = function() { return this.s };
    Ix.prototype.G = function(a) { this.s = a };
    Ix.prototype.setMap = function(a) { var b = this.v;
        dh.prototype.setMap.call(this, a);
        Px(this, b) };
    Ix.prototype.o = function() { Px(this, null) };

    function Px(a, b) { var c = a.v;
        a = a.c();
        c && a || (c = c || b) && c.a.classList.remove("ol-grab", "ol-grabbing") }

    function Ox(a, b, c) { Qc.call(this, a);
        this.features = b;
        this.coordinate = c }
    v(Ox, Qc);

    function W(a) {
        a = a ? a : {};
        var b = jb({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        T.call(this, b);
        this.c = null;
        this.W = void 0 !== a.shadow ? a.shadow : 250;
        this.G = void 0;
        this.o = null;
        y(this, Xc(Qx), this.Ul, this);
        this.Gj(a.gradient ? a.gradient : Rx);
        this.Aj(void 0 !== a.blur ? a.blur : 15);
        this.ed(void 0 !== a.radius ? a.radius : 8);
        y(this, Xc(Sx), this.kg, this);
        y(this, Xc(Tx), this.kg, this);
        this.kg();
        var c = a.weight ? a.weight : "weight",
            d;
        "string" === typeof c ? d = function(a) { return a.get(c) } : d = c;
        this.l(function(a) {
            a =
                d(a);
            a = void 0 !== a ? oa(a, 0, 1) : 1;
            var b = 255 * a | 0,
                c = this.o[b];
            c || (c = [new pk({ image: new hr({ opacity: a, src: this.G }) })], this.o[b] = c);
            return c
        }.bind(this));
        this.set(Wj, null);
        y(this, "render", this.km, this)
    }
    v(W, T);
    var Rx = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = W.prototype;
    k.Kh = function() { return this.get(Sx) };
    k.Rh = function() { return this.get(Qx) };
    k.Oi = function() { return this.get(Tx) };
    k.Ul = function() { for (var a = this.Rh(), b = gg(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e) c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.c = b.getImageData(0, 0, 1, 256).data };
    k.kg = function() { var a = this.Oi(),
            b = this.Kh(),
            c = a + b + 1,
            d = 2 * c;
        d = gg(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.W;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.W;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.G = d.canvas.toDataURL();
        this.o = Array(256);
        this.u() };
    k.km = function(a) { a = a.context; var b = a.canvas;
        b = a.getImageData(0, 0, b.width, b.height); var c = b.data,
            d, e; var f = 0; for (d = c.length; f < d; f += 4)
            if (e = 4 * c[f + 3]) c[f] = this.c[e], c[f + 1] = this.c[e + 1], c[f + 2] = this.c[e + 2];
        a.putImageData(b, 0, 0) };
    k.Aj = function(a) { this.set(Sx, a) };
    k.Gj = function(a) { this.set(Qx, a) };
    k.ed = function(a) { this.set(Tx, a) };
    var Sx = "blur",
        Qx = "gradient",
        Tx = "radius";

    function Ux(a) { vg.call(this, a ? a : {});
        this.type = "IMAGE" }
    v(Ux, vg);

    function Vx(a) { a = a ? a : {}; var b = jb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        vg.call(this, b);
        this.l(void 0 !== a.preload ? a.preload : 0);
        this.B(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        this.type = "TILE" }
    v(Vx, vg);
    Vx.prototype.c = function() { return this.get("preload") };
    Vx.prototype.l = function(a) { this.set("preload", a) };
    Vx.prototype.i = function() { return this.get("useInterimTilesOnError") };
    Vx.prototype.B = function(a) { this.set("useInterimTilesOnError", a) };

    function X(a) { a = a ? a : {}; var b = jb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        T.call(this, b);
        this.G(a.preload ? a.preload : 0);
        this.W(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        b = a.renderMode;
        na(void 0 == b || "image" == b || "hybrid" == b || "vector" == b, 28);
        a.declutter && "image" == b && (b = "hybrid");
        this.o = b || "hybrid";
        this.type = "VECTOR_TILE" }
    v(X, T);
    X.prototype.c = function() { return this.get("preload") };
    X.prototype.i = function() { return this.get("useInterimTilesOnError") };
    X.prototype.G = function(a) { this.set("preload", a) };
    X.prototype.W = function(a) { this.set("useInterimTilesOnError", a) };

    function Wx(a, b) { var c = /\{z\}/g,
            d = /\{x\}/g,
            e = /\{y\}/g,
            f = /\{-y\}/g; return function(g) { if (g) return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function() { return (-g[2] - 1).toString() }).replace(f, function() { var a = b.a ? b.a[g[0]] : null;
                na(a, 55); return (a.ka - a.ea + 1 + g[2]).toString() }) } }

    function Xx(a, b) { for (var c = a.length, d = Array(c), e = 0; e < c; ++e) d[e] = Wx(a[e], b); return Yx(d) }

    function Yx(a) { return 1 === a.length ? a[0] : function(b, c, d) { if (b) return a[va((b[1] << b[0]) + b[2], a.length)](b, c, d) } }

    function Zx() {}

    function $x(a) { var b = [],
            c = /\{([a-z])-([a-z])\}/.exec(a); if (c) { var d = c[2].charCodeAt(0),
                e; for (e = c[1].charCodeAt(0); e <= d; ++e) b.push(a.replace(c[0], String.fromCharCode(e))); return b } if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) { d = parseInt(c[2], 10); for (e = parseInt(c[1], 10); e <= d; e++) b.push(a.replace(c[0], e.toString())); return b }
        b.push(a); return b };

    function ay(a, b, c, d) {
        function e() { delete window[g];
            f.parentNode.removeChild(f) } var f = document.createElement("script"),
            g = "olc_" + w(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g; var h = setTimeout(function() { e();
            c && c() }, 1E4);
        window[g] = function(a) { clearTimeout(h);
            e();
            b(a) };
        document.getElementsByTagName("head")[0].appendChild(f) };

    function by(a) { Zh.call(this, a) }
    v(by, Zh);
    by.prototype.qd = function(a) { for (var b, c; $h(this);) { b = this.g.Nc;
            c = b.xa[0].toString(); var d; if (d = c in a) b = b.xa, d = ka(a[c], b[1], b[2]); if (d) break;
            else Pc(this.pop()) } };

    function cy(a) { if (0 !== a.i) { var b = a.c.ic.split("/").map(Number)[0];
            a.forEach(function(a) { if (a.xa[0] !== b) { var c = a.xa;
                    this.remove(c[0] + "/" + c[1] + "/" + c[2]);
                    Pc(a) } }, a) } };

    function dy(a, b, c, d, e, f, g, h, l, m, n) {
        Tk.call(this, e, 0);
        this.H = void 0 !== n ? n : !1;
        this.B = g;
        this.D = h;
        this.P = null;
        this.c = b;
        this.l = d;
        this.v = f ? f : e;
        this.a = [];
        this.Hd = null;
        this.f = 0;
        f = d.La(this.v);
        h = this.l.C();
        e = this.c.C();
        f = h ? eb(f, h) : f;
        if (0 === Za(f)) this.state = 4;
        else if ((h = a.C()) && (e ? e = eb(e, h) : e = h), d = fn(a, c, cb(f), d.Sa(this.v[0])), !isFinite(d) || 0 >= d) this.state = 4;
        else if (this.o = new jn(a, c, f, e, d * (void 0 !== m ? m : .5)), 0 === this.o.c.length) this.state = 4;
        else if (this.f = b.Bc(d), c = ln(this.o), e && (a.g ? (c[1] = oa(c[1], e[1], e[3]),
                c[3] = oa(c[3], e[1], e[3])) : c = eb(c, e)), Za(c)) { a = tc(b, c, this.f); for (b = a.fa; b <= a.la; b++)
                for (c = a.ea; c <= a.ka; c++)(m = l(this.f, b, c, g)) && this.a.push(m);
            0 === this.a.length && (this.state = 4) } else this.state = 4
    }
    v(dy, Tk);
    dy.prototype.ha = function() { 1 == this.state && (this.Hd.forEach(Gc), this.Hd = null);
        Tk.prototype.ha.call(this) };
    dy.prototype.Y = function() { return this.P };
    dy.prototype.fe = function() { var a = [];
        this.a.forEach(function(b) { b && 2 == b.getState() && a.push({ extent: this.c.La(b.xa), image: b.Y() }) }, this);
        this.a.length = 0; if (0 === a.length) this.state = 3;
        else { var b = this.v[0],
                c = this.l.Za(b),
                d = "number" === typeof c ? c : c[0];
            c = "number" === typeof c ? c : c[1];
            b = this.l.Sa(b); var e = this.c.Sa(this.f),
                f = this.l.La(this.v);
            this.P = hn(d, c, this.B, e, this.c.C(), b, f, this.o, a, this.D, this.H);
            this.state = 2 }
        this.u() };
    dy.prototype.load = function() { if (0 == this.state) { this.state = 1;
            this.u(); var a = 0;
            this.Hd = [];
            this.a.forEach(function(b) { var c = b.getState(); if (0 == c || 1 == c) { a++; var d = y(b, "change", function() { var c = b.getState(); if (2 == c || 3 == c || 4 == c) Gc(d), a--, 0 === a && (this.Hd.forEach(Gc), this.Hd = null, this.fe()) }, this);
                    this.Hd.push(d) } }, this);
            this.a.forEach(function(a) { 0 == a.getState() && a.load() });
            0 === a && setTimeout(this.fe.bind(this), 0) } };

    function ey(a) { nn.call(this, { attributions: a.attributions, extent: a.extent, logo: a.logo, projection: a.projection, state: a.state, wrapX: a.wrapX });
        this.nb = void 0 !== a.opaque ? a.opaque : !1;
        this.rc = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new by(a.cacheSize);
        this.j = [0, 0];
        this.ic = "";
        this.va = { transition: a.transition } }
    v(ey, nn);
    k = ey.prototype;
    k.$i = function() { return $h(this.a) };
    k.qd = function(a, b) {
        (a = this.Xd(a)) && a.qd(b) };

    function Bi(a, b, c, d, e) { a = a.Xd(b); if (!a) return !1;
        b = !0; for (var f, g, h = d.fa; h <= d.la; ++h)
            for (var l = d.ea; l <= d.ka; ++l) f = c + "/" + h + "/" + l, g = !1, a.a.hasOwnProperty(f) && (f = a.get(f), (g = 2 === f.getState()) && (g = !1 !== e(f))), g || (b = !1); return b }
    k.Xf = function() { return 0 };

    function fy(a, b) { a.ic !== b && (a.ic = b, a.u()) }
    k.cg = function() { return this.nb };
    k.gb = function() { return this.tileGrid };
    k.bb = function(a) { return this.tileGrid ? this.tileGrid : zc(a) };
    k.Xd = function(a) { var b = this.c; return b && !Wb(b, a) ? null : this.a };
    k.Xc = function() { return this.rc };
    k.Yd = function(a, b, c) { c = this.bb(c);
        b = this.Xc(b);
        a = Aa(c.Za(a), this.j); return 1 == b ? a : za(a, b, this.j) };

    function gy(a, b, c) { var d = void 0 !== c ? c : a.c;
        c = a.bb(d); if (a.D && d.c) { var e = b;
            b = e[0];
            a = yc(c, e);
            d = Dc(d);
            Ha(d, a) ? b = e : (e = ab(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = c.hg(a, b)) }
        e = b[0];
        d = b[1];
        a = b[2]; if (c.minZoom > e || e > c.maxZoom) c = !1;
        else { var f = c.C();
            c = (c = f ? tc(c, f, e) : c.a ? c.a[e] : null) ? ka(c, d, a) : !0 } return c ? b : null }
    k.ra = function() { this.a.clear();
        this.u() };
    k.jh = da;

    function hy(a, b) { Qc.call(this, a);
        this.tile = b }
    v(hy, Qc);

    function iy(a) { ey.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, extent: a.extent, logo: a.logo, opaque: a.opaque, projection: a.projection, state: a.state, tileGrid: a.tileGrid, tilePixelRatio: a.tilePixelRatio, wrapX: a.wrapX, transition: a.transition });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.Rc ? this.Rc.bind(this) : Zx;
        this.urls = null;
        a.urls ? this.vb(a.urls) : a.url && this.qb(a.url);
        a.tileUrlFunction && this.lb(a.tileUrlFunction);
        this.W = {} }
    v(iy, ey);
    k = iy.prototype;
    k.yb = function() { return this.tileLoadFunction };
    k.zb = function() { return this.tileUrlFunction };
    k.Ab = function() { return this.urls };
    k.aj = function(a) { a = a.target; var b = w(a),
            c = a.getState(); if (1 == c) { this.W[b] = !0; var d = "tileloadstart" } else b in this.W && (delete this.W[b], d = 3 == c ? "tileloaderror" : 2 == c || 5 == c ? "tileloadend" : void 0);
        void 0 != d && this.b(new hy(d, a)) };
    k.Fb = function(a) { this.a.clear();
        this.tileLoadFunction = a;
        this.u() };
    k.lb = function(a, b) { this.tileUrlFunction = a;
        cy(this.a); "undefined" !== typeof b ? fy(this, b) : this.u() };
    k.qb = function(a) { var b = this.urls = $x(a);
        this.lb(this.Rc ? this.Rc.bind(this) : Xx(b, this.tileGrid), a) };
    k.vb = function(a) { this.urls = a; var b = a.join("\n");
        this.lb(this.Rc ? this.Rc.bind(this) : Xx(a, this.tileGrid), b) };
    k.jh = function(a, b, c) { a = a + "/" + b + "/" + c;
        this.a.a.hasOwnProperty(a) && this.a.get(a) };

    function jy(a) {
        iy.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, extent: a.extent, logo: a.logo, opaque: a.opaque, projection: a.projection, state: a.state, tileGrid: a.tileGrid, tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : ky, tilePixelRatio: a.tilePixelRatio, tileUrlFunction: a.tileUrlFunction, url: a.url, urls: a.urls, wrapX: a.wrapX, transition: a.transition });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = void 0 !== a.tileClass ? a.tileClass : Vk;
        this.f = {};
        this.s = {};
        this.xb =
            a.reprojectionErrorThreshold;
        this.O = !1
    }
    v(jy, iy);
    k = jy.prototype;
    k.$i = function() { if ($h(this.a)) return !0; for (var a in this.f)
            if ($h(this.f[a])) return !0;
        return !1 };
    k.qd = function(a, b) { a = this.Xd(a);
        this.a.qd(this.a == a ? b : {}); for (var c in this.f) { var d = this.f[c];
            d.qd(d == a ? b : {}) } };
    k.Xf = function(a) { return this.c && a && !Wb(this.c, a) ? 0 : this.Yf() };
    k.Yf = function() { return 0 };
    k.cg = function(a) { return this.c && a && !Wb(this.c, a) ? !1 : iy.prototype.cg.call(this, a) };
    k.bb = function(a) { var b = this.c; return !this.tileGrid || b && !Wb(b, a) ? (b = w(a).toString(), b in this.s || (this.s[b] = zc(a)), this.s[b]) : this.tileGrid };
    k.Xd = function(a) { var b = this.c; if (!b || Wb(b, a)) return this.a;
        a = w(a).toString();
        a in this.f || (this.f[a] = new by(this.a.highWaterMark)); return this.f[a] };

    function ly(a, b, c, d, e, f, g) { b = [b, c, d];
        e = (c = gy(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.tileLoadFunction, a.va);
        e.key = g;
        y(e, "change", a.aj, a); return e }
    k.$c = function(a, b, c, d, e) { var f = this.c; if (f && e && !Wb(f, e)) { var g = this.Xd(e);
            c = [a, b, c]; var h;
            a = c[0] + "/" + c[1] + "/" + c[2];
            g.a.hasOwnProperty(a) && (h = g.get(a));
            b = this.ic; if (h && h.key == b) return h; var l = this.bb(f),
                m = this.bb(e),
                n = gy(this, c, e);
            d = new dy(f, l, e, m, c, n, this.Xc(d), this.Yf(), function(a, b, c, d) { return my(this, a, b, c, d, f) }.bind(this), this.xb, this.O);
            d.key = b;
            h ? (d.g = h, Uk(d), g.replace(a, d)) : g.set(a, d); return d } return my(this, a, b, c, d, f || e) };

    function my(a, b, c, d, e, f) { var g = b + "/" + c + "/" + d,
            h = a.ic; if (a.a.a.hasOwnProperty(g)) { var l = a.a.get(g); if (l.key != h) { var m = l;
                l = ly(a, b, c, d, e, f, h);
                0 == m.getState() ? l.g = m.g : l.g = m;
                Uk(l);
                a.a.replace(g, l) } } else l = ly(a, b, c, d, e, f, h), a.a.set(g, l); return l }
    k.Qb = function(a) { if (this.O != a) { this.O = a; for (var b in this.f) this.f[b].clear();
            this.u() } };
    k.Rb = function(a, b) { if (a = Nb(a)) a = w(a).toString(), a in this.s || (this.s[a] = b) };

    function ky(a, b) { a.Y().src = b };

    function ny(a) {
        this.i = void 0 !== a.hidpi ? a.hidpi : !1;
        jy.call(this, { cacheSize: a.cacheSize, crossOrigin: "anonymous", opaque: !0, projection: Nb("EPSG:3857"), reprojectionErrorThreshold: a.reprojectionErrorThreshold, state: "loading", tileLoadFunction: a.tileLoadFunction, tilePixelRatio: this.i ? 2 : 1, wrapX: void 0 !== a.wrapX ? a.wrapX : !0, transition: a.transition });
        this.o = void 0 !== a.culture ? a.culture : "en-us";
        this.aa = void 0 !== a.maxZoom ? a.maxZoom : -1;
        this.l = a.key;
        this.G = a.imagerySet;
        ay("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" +
            this.G + "?uriScheme=https&include=ImageryProviders&key=" + this.l + "&c=" + this.o, this.Xa.bind(this), void 0, "jsonp")
    }
    v(ny, jy);
    ny.prototype.ca = function() { return this.l };
    ny.prototype.ya = function() { return this.G };
    ny.prototype.Xa = function(a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) pn(this, "error");
        else {
            var b = a.brandLogoUri; - 1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0];
            a = -1 == this.aa ? c.zoomMax : this.aa;
            var d = Dc(this.c);
            this.tileGrid = Bc({
                extent: d,
                minZoom: c.zoomMin,
                maxZoom: a,
                tileSize: (c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]) /
                    (this.i ? 2 : 1)
            });
            var e = this.o,
                f = this.i;
            this.tileUrlFunction = Yx(c.imageUrlSubdomains.map(function(a) { var b = [0, 0, 0],
                    d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", e); return function(a) { if (a) return oc(a[0], a[1], -a[2] - 1, b), a = d, f && (a += "&dpi=d1&device=mobile"), a.replace("{quadkey}", pc(b)) } }));
            if (c.imageryProviders) {
                var g = Ob(Nb("EPSG:4326"), this.c);
                this.ta(function(a) {
                    var b = [],
                        d = a.viewState.zoom;
                    c.imageryProviders.map(function(c) {
                        for (var e = !1, f = c.coverageAreas, h = 0, l = f.length; h < l; ++h) {
                            var m = f[h];
                            if (d >= m.zoomMin && d <= m.zoomMax && (m = m.bbox, m = hb([m[1], m[0], m[3], m[2]], g), fb(m, a.extent))) { e = !0; break }
                        }
                        e && b.push(c.attribution)
                    });
                    b.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>');
                    return b
                })
            }
            this.H = b;
            pn(this, "ready")
        }
    };

    function oy(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857",
            c = void 0 !== a.tileGrid ? a.tileGrid : Bc({ extent: Dc(b), maxZoom: a.maxZoom, minZoom: a.minZoom, tileSize: a.tileSize });
        jy.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        })
    }
    v(oy, jy);

    function py(a) { this.o = a.account;
        this.G = a.map || "";
        this.i = a.config || {};
        this.l = {};
        oy.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, crossOrigin: a.crossOrigin, logo: a.logo, maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18, minZoom: a.minZoom, projection: a.projection, state: "loading", wrapX: a.wrapX });
        qy(this) }
    v(py, oy);
    k = py.prototype;
    k.fl = function() { return this.i };
    k.Hq = function(a) { jb(this.i, a);
        qy(this) };
    k.kq = function(a) { this.i = a || {};
        qy(this) };

    function qy(a) { var b = JSON.stringify(a.i); if (a.l[b]) ry(a, a.l[b]);
        else { var c = "https://" + a.o + ".carto.com/api/v1/map";
            a.G && (c += "/named/" + a.G); var d = new XMLHttpRequest;
            d.addEventListener("load", a.Wl.bind(a, b));
            d.addEventListener("error", a.Vl.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.i)) } }
    k.Wl = function(a, b) { b = b.target; if (!b.status || 200 <= b.status && 300 > b.status) { try { var c = JSON.parse(b.responseText) } catch (d) { pn(this, "error"); return }
            ry(this, c);
            this.l[a] = c;
            pn(this, "ready") } else pn(this, "error") };
    k.Vl = function() { pn(this, "error") };

    function ry(a, b) { a.qb("https://" + b.cdn_url.https + "/" + a.o + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png") };

    function Y(a) { U.call(this, { attributions: a.attributions, extent: a.extent, logo: a.logo, projection: a.projection, wrapX: a.wrapX });
        this.resolution = void 0;
        this.distance = void 0 !== a.distance ? a.distance : 20;
        this.features = [];
        this.geometryFunction = a.geometryFunction || function(a) { a = a.V();
            na(a instanceof B, 10); return a };
        this.source = a.source;
        this.source.J("change", Y.prototype.ra, this) }
    v(Y, U);
    k = Y.prototype;
    k.vo = function() { return this.distance };
    k.wo = function() { return this.source };
    k.$d = function(a, b, c) { this.source.$d(a, b, c);
        b !== this.resolution && (this.clear(), this.resolution = b, sy(this), this.Oc(this.features)) };
    k.lq = function(a) { this.distance = a;
        this.ra() };
    k.ra = function() { this.clear();
        sy(this);
        this.Oc(this.features);
        U.prototype.ra.call(this) };

    function sy(a) { if (void 0 !== a.resolution) { a.features.length = 0; for (var b = Ca(), c = a.distance * a.resolution, d = a.source.ce(), e = {}, f = 0, g = d.length; f < g; f++) { var h = d[f];
                w(h).toString() in e || !(h = a.geometryFunction(h)) || (h = h.U(), Oa(h, b), Ea(b, c, b), h = a.source.Wf(b), h = h.filter(function(a) { a = w(a).toString(); return a in e ? !1 : e[a] = !0 }), a.features.push(ty(a, h))) } } }

    function ty(a, b) { for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) { var e = a.geometryFunction(b[d]);
            e ? ze(c, e.U()) : b.splice(d, 1) }
        Ge(c, 1 / b.length);
        a = new vk(new B(c));
        a.set("features", b); return a };

    function uy(a, b) { var c = [];
        Object.keys(b).forEach(function(a) { null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a])) }); var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&"; return a + d };

    function vy(a) { a = a || {};
        qn.call(this, { attributions: a.attributions, logo: a.logo, projection: a.projection, resolutions: a.resolutions });
        this.W = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.aa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.a = a.url;
        this.f = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : wn;
        this.s = a.params || {};
        this.N = null;
        this.l = [0, 0];
        this.O = 0;
        this.G = void 0 !== a.ratio ? a.ratio : 1.5 }
    v(vy, qn);
    k = vy.prototype;
    k.yo = function() { return this.s };
    k.Vc = function(a, b, c, d) {
        if (void 0 === this.a) return null;
        b = rn(this, b);
        c = this.aa ? c : 1;
        var e = this.N;
        if (e && this.O == this.g && e.resolution == b && e.a == c && Ka(e.C(), a)) return e;
        e = { F: "image", FORMAT: "PNG32", TRANSPARENT: !0 };
        jb(e, this.s);
        a = a.slice();
        var f = (a[0] + a[2]) / 2,
            g = (a[1] + a[3]) / 2;
        if (1 != this.G) { var h = this.G * ab(a) / 2,
                l = this.G * bb(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l }
        h = b / c;
        l = Math.ceil(ab(a) / h);
        var m = Math.ceil(bb(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.l[0] = l;
        this.l[1] = m;
        f = a;
        g = this.l;
        h = c;
        d =
            d.ub.split(":").pop();
        e.SIZE = g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = Math.round(90 * h);
        d = this.a;
        f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f == d && na(!1, 50);
        e = uy(f, e);
        this.N = new Sk(a, b, c, e, this.W, this.f);
        this.O = this.g;
        y(this.N, "change", this.j, this);
        return this.N
    };
    k.xo = function() { return this.f };
    k.zo = function() { return this.a };
    k.Ao = function(a) { this.N = null;
        this.f = a;
        this.u() };
    k.Bo = function(a) { a != this.a && (this.a = a, this.N = null, this.u()) };
    k.Co = function(a) { jb(this.s, a);
        this.N = null;
        this.u() };

    function wy(a) { qn.call(this, { projection: a.projection, resolutions: a.resolutions });
        this.W = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.l = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.f = a.params || {};
        this.O = a.url;
        this.a = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : wn;
        this.aa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.ca = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.s = void 0 !== a.ratio ? a.ratio : 1;
        this.ya = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.N = null;
        this.G = 0 }
    v(wy, qn);
    k = wy.prototype;
    k.Eo = function() { return this.f };
    k.Vc = function(a, b, c) {
        b = rn(this, b);
        c = this.aa ? c : 1;
        var d = this.N;
        if (d && this.G == this.g && d.resolution == b && d.a == c && Ka(d.C(), a)) return d;
        1 != this.s && (a = a.slice(), gb(a, this.s));
        var e = [ab(a) / b * c, bb(a) / b * c];
        if (void 0 !== this.O) {
            d = this.O;
            var f = cb(a),
                g = this.ca,
                h = ab(a),
                l = bb(a),
                m = e[0],
                n = e[1],
                p = .0254 / this.l;
            e = {
                OPERATION: this.ya ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.l,
                SETDISPLAYWIDTH: Math.round(e[0]),
                SETDISPLAYHEIGHT: Math.round(e[1]),
                SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
                SETVIEWCENTERX: f[0],
                SETVIEWCENTERY: f[1]
            };
            jb(e, this.f);
            d = uy(d, e);
            d = new Sk(a, b, c, d, this.W, this.a);
            y(d, "change", this.j, this)
        } else d = null;
        this.N = d;
        this.G = this.g;
        return d
    };
    k.Do = function() { return this.a };
    k.Go = function(a) { jb(this.f, a);
        this.u() };
    k.Fo = function(a) { this.N = null;
        this.a = a;
        this.u() };

    function xy(a) { var b = a.imageExtent,
            c = void 0 !== a.crossOrigin ? a.crossOrigin : null,
            d = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : wn;
        qn.call(this, { attributions: a.attributions, logo: a.logo, projection: Nb(a.projection) });
        this.N = new Sk(b, void 0, 1, a.url, c, d);
        this.a = a.imageSize ? a.imageSize : null;
        y(this.N, "change", this.j, this) }
    v(xy, qn);
    xy.prototype.Vc = function(a) { return fb(a, this.N.C()) ? this.N : null };
    xy.prototype.j = function(a) { if (2 == this.N.getState()) { var b = this.N.C(),
                c = this.N.Y(); if (this.a) { var d = this.a[0]; var e = this.a[1] } else d = c.width, e = c.height;
            b = Math.ceil(ab(b) / (bb(b) / e)); if (b != d) { b = gg(b, e); var f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.N.hh(f) } }
        qn.prototype.j.call(this, a) };

    function yy(a) { a = a || {};
        qn.call(this, { attributions: a.attributions, logo: a.logo, projection: a.projection, resolutions: a.resolutions });
        this.ca = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.f = a.url;
        this.s = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : wn;
        this.a = a.params || {};
        this.l = !0;
        zy(this);
        this.aa = a.serverType;
        this.ya = void 0 !== a.hidpi ? a.hidpi : !0;
        this.N = null;
        this.G = [0, 0];
        this.W = 0;
        this.O = void 0 !== a.ratio ? a.ratio : 1.5 }
    v(yy, qn);
    var Ay = [101, 101];
    k = yy.prototype;
    k.Lo = function(a, b, c, d) { if (void 0 !== this.f) { c = Nb(c); var e = this.c;
            e && e !== c && (b = fn(e, c, a, b), a = Zb(a, c, e)); var f = db(a, b, 0, Ay),
                g = { SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetFeatureInfo", FORMAT: "image/png", TRANSPARENT: !0, QUERY_LAYERS: this.a.LAYERS };
            jb(g, this.a, d);
            d = Math.floor((f[3] - a[1]) / b);
            g[this.l ? "I" : "X"] = Math.floor((a[0] - f[0]) / b);
            g[this.l ? "J" : "Y"] = d; return By(this, f, Ay, 1, e || c, g) } };
    k.No = function() { return this.a };
    k.Vc = function(a, b, c, d) {
        if (void 0 === this.f) return null;
        b = rn(this, b);
        1 == c || this.ya && void 0 !== this.aa || (c = 1);
        var e = b / c,
            f = cb(a),
            g = db(f, e, 0, [Math.ceil(ab(a) / e), Math.ceil(bb(a) / e)]);
        a = db(f, e, 0, [Math.ceil(this.O * ab(a) / e), Math.ceil(this.O * bb(a) / e)]);
        if ((f = this.N) && this.W == this.g && f.resolution == b && f.a == c && Ka(f.C(), g)) return f;
        g = { SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0 };
        jb(g, this.a);
        this.G[0] = Math.round(ab(a) / e);
        this.G[1] = Math.round(bb(a) / e);
        d = By(this, a, this.G, c, d, g);
        this.N = new Sk(a, b, c, d, this.ca, this.s);
        this.W = this.g;
        y(this.N, "change", this.j, this);
        return this.N
    };
    k.Mo = function() { return this.s };

    function By(a, b, c, d, e, f) { na(void 0 !== a.f, 9);
        f[a.l ? "CRS" : "SRS"] = e.ub; "STYLES" in a.a || (f.STYLES = ""); if (1 != d) switch (a.aa) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d; break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d; break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d; break;
            default:
                na(!1, 8) }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.b; var g;
        a.l && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(","); return uy(a.f, f) }
    k.Oo = function() { return this.f };
    k.Po = function(a) { this.N = null;
        this.s = a;
        this.u() };
    k.Qo = function(a) { a != this.f && (this.f = a, this.N = null, this.u()) };
    k.Ro = function(a) { jb(this.a, a);
        zy(this);
        this.N = null;
        this.u() };

    function zy(a) { a.l = 0 <= ye(a.a.VERSION || "1.3.0") };

    function Cy(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = ['&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'];
        oy.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }
    v(Cy, oy);
    gj.lf = {};
    gj.lf.Ff = function() {};
    (function(a) {
        function b(a, b, c) { if (g) return new ImageData(a, b, c);
            b = h.createImageData(b, c);
            b.data.set(a); return b }

        function c(a) {
            var b = !0;
            try { new ImageData(10, 10) } catch (n) { b = !1 }
            return function(c) {
                var d = c.buffers,
                    e = c.meta,
                    f = c.width,
                    g = c.height,
                    h = d.length,
                    l = d[0].byteLength;
                if (c.imageOps) { l = Array(h); for (c = 0; c < h; ++c) { var m = c; var n = new Uint8ClampedArray(d[c]); var V = f,
                            ya = g;
                        n = b ? new ImageData(n, V, ya) : { data: n, width: V, height: ya };
                        l[m] = n }
                    f = a(l, e).data } else {
                    f = new Uint8ClampedArray(l);
                    g = Array(h);
                    m = Array(h);
                    for (c = 0; c <
                        h; ++c) g[c] = new Uint8ClampedArray(d[c]), m[c] = [0, 0, 0, 0];
                    for (d = 0; d < l; d += 4) { for (c = 0; c < h; ++c) n = g[c], m[c][0] = n[d], m[c][1] = n[d + 1], m[c][2] = n[d + 2], m[c][3] = n[d + 3];
                        c = a(m, e);
                        f[d] = c[0];
                        f[d + 1] = c[1];
                        f[d + 2] = c[2];
                        f[d + 3] = c[3] }
                }
                return f.buffer
            }
        }

        function d(a, b) {
            var d = Object.keys(a.lib || {}).map(function(b) { return "var " + b + " = " + a.lib[b].toString() + ";" }).concat(["var __minion__ = (" + c.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);",
                "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"
            ]);
            d = URL.createObjectURL(new Blob(d, { type: "text/javascript" }));
            d = new Worker(d);
            d.addEventListener("message", b);
            return d
        }

        function e(a, b) { var d = c(a.operation); return { postMessage: function(a) { setTimeout(function() { b({ data: { buffer: d(a), meta: a.meta } }) }, 0) } } }

        function f(a) {
            this.Hf = !!a.tm;
            var b;
            0 === a.threads ? b = 0 : this.Hf ? b = 1 : b = a.threads || 1;
            var c = [];
            if (b)
                for (var f = 0; f < b; ++f) c[f] = d(a, this.wh.bind(this, f));
            else c[0] = e(a, this.wh.bind(this,
                0));
            this.ve = c;
            this.Md = [];
            this.wk = a.Kp || Infinity;
            this.ue = 0;
            this.md = {};
            this.If = null
        }
        var g = !0;
        try { new ImageData(10, 10) } catch (l) { g = !1 }
        var h = document.createElement("canvas").getContext("2d");
        f.prototype.Ip = function(a, b, c) { this.uk({ inputs: a, fi: b, callback: c });
            this.th() };
        f.prototype.uk = function(a) { for (this.Md.push(a); this.Md.length > this.wk;) this.Md.shift().callback(null, null) };
        f.prototype.th = function() {
            if (0 === this.ue && 0 < this.Md.length) {
                var a = this.If = this.Md.shift(),
                    b = a.inputs[0].width,
                    c = a.inputs[0].height,
                    d = a.inputs.map(function(a) { return a.data.buffer }),
                    e = this.ve.length;
                this.ue = e;
                if (1 === e) this.ve[0].postMessage({ buffers: d, meta: a.fi, imageOps: this.Hf, width: b, height: c }, d);
                else
                    for (var f = 4 * Math.ceil(a.inputs[0].data.length / 4 / e), g = 0; g < e; ++g) { for (var h = g * f, C = [], z = 0, E = d.length; z < E; ++z) C.push(d[g].slice(h, h + f));
                        this.ve[g].postMessage({ buffers: C, meta: a.fi, imageOps: this.Hf, width: b, height: c }, C) }
            }
        };
        f.prototype.wh = function(a, b) { this.Xq || (this.md[a] = b.data, --this.ue, 0 === this.ue && this.xk()) };
        f.prototype.xk = function() {
            var a =
                this.If,
                c = this.ve.length;
            if (1 === c) { var d = new Uint8ClampedArray(this.md[0].buffer); var e = this.md[0].meta } else { var f = a.inputs[0].data.length;
                d = new Uint8ClampedArray(f);
                e = Array(f);
                f = 4 * Math.ceil(f / 4 / c); for (var g = 0; g < c; ++g) { var h = g * f;
                    d.set(new Uint8ClampedArray(this.md[g].buffer), h);
                    e[g] = this.md[g].meta } }
            this.If = null;
            this.md = {};
            a.callback(null, b(d, a.inputs[0].width, a.inputs[0].height), e);
            this.th()
        };
        a["default"] = { Ff: f };
        a.Ff = f
    })(gj.lf = gj.lf || {});

    function Dy(a) {
        this.G = null;
        this.ya = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Xa = void 0 !== a.threads ? a.threads : 1;
        this.f = Ey(a.sources);
        for (var b = 0, c = this.f.length; b < c; ++b) y(this.f[b], "change", this.u, this);
        this.aa = new le(function() { return 1 }, this.u.bind(this));
        b = Fy(this.f);
        c = {};
        for (var d = 0, e = b.length; d < e; ++d) c[w(b[d].layer)] = b[d];
        this.a = null;
        this.O = {
            animate: !1,
            attributions: {},
            coordinateToPixelTransform: Ve(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateTransform: Ve(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.aa,
            time: Date.now(),
            usedTiles: {},
            viewState: { rotation: 0 },
            viewHints: [],
            wantedTiles: {}
        };
        qn.call(this, {});
        void 0 !== a.operation && this.s(a.operation, a.lib)
    }
    v(Dy, qn);
    Dy.prototype.s = function(a, b) { this.G = new gj.lf.Ff({ operation: a, tm: "image" === this.ya, Kp: 1, lib: b, threads: this.Xa });
        this.u() };
    Dy.prototype.Y = function(a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.f.length; f < g; ++f)
            if (e = this.f[f].a.ia(), "ready" !== e.getState()) { c = !1; break }
        if (!c) return null;
        c = jb({}, this.O);
        c.viewState = jb({}, c.viewState);
        e = cb(a);
        c.extent = a.slice();
        c.focus = e;
        c.size[0] = Math.round(ab(a) / b);
        c.size[1] = Math.round(bb(a) / b);
        c.time = Date.now();
        c.animate = !1;
        f = c.viewState;
        f.center = e;
        f.projection = d;
        f.resolution = b;
        this.l = c;
        this.a && (d = this.a.resolution, e = this.a.C(), b === d && Ra(a, e) || (this.a = null));
        if (!this.a || this.g !== this.W) a: {
            a = this.l;
            d = this.f.length;b = Array(d);
            for (e = 0; e < d; ++e) { f = this.f[e];
                g = a; var h = a.layerStatesArray[e]; if (f.Cd(g, h)) { var l = g.size[0],
                        m = g.size[1]; if (Gy) { var n = Gy.canvas;
                        n.width !== l || n.height !== m ? Gy = gg(l, m) : Gy.clearRect(0, 0, l, m) } else Gy = gg(l, m);
                    f.xg(g, h, Gy);
                    f = Gy.getImageData(0, 0, l, m) } else f = null; if (f) b[e] = f;
                else break a }
            d = {};this.b(new Hy(Iy, a, d));this.G.Ip(b, d, this.ca.bind(this, a))
        }
        me(c.tileQueue, 16, 16);
        c.animate && requestAnimationFrame(this.u.bind(this));
        return this.a
    };
    Dy.prototype.ca = function(a, b, c, d) { if (!b && c) { b = a.extent; var e = a.viewState.resolution; if (e === this.l.viewState.resolution && Ra(b, this.l.extent)) { if (this.a) var f = this.a.Y().getContext("2d");
                else f = gg(Math.round(ab(b) / e), Math.round(bb(b) / e)), this.a = new en(b, e, 1, f.canvas);
                f.putImageData(c, 0, 0);
                this.u();
                this.W = this.g;
                this.b(new Hy(Jy, a, d)) } } };
    var Gy = null;

    function Fy(a) { return a.map(function(a) { return kg(a.a) }) }

    function Ey(a) { for (var b = a.length, c = Array(b), d = 0; d < b; ++d) { var e = d,
                f = a[d],
                g = null;
            f instanceof ey ? (f = new Vx({ source: f }), g = new bj(f)) : f instanceof qn && (f = new Ux({ source: f }), g = new Si(f));
            c[e] = g } return c }

    function Hy(a, b, c) { Qc.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c }
    v(Hy, Qc);
    Dy.prototype.Vc = function() { return null };
    var Iy = "beforeoperations",
        Jy = "afteroperations";

    function Ky(a) { var b = a.layer.indexOf("-");
        b = Ly[-1 == b ? a.layer : a.layer.slice(0, b)]; var c = My[a.layer];
        oy.call(this, { attributions: Ny, cacheSize: a.cacheSize, crossOrigin: "anonymous", maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom, minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom, opaque: c.opaque, reprojectionErrorThreshold: a.reprojectionErrorThreshold, tileLoadFunction: a.tileLoadFunction, url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.Ob, wrapX: a.wrapX }) }
    v(Ky, oy);
    var Ny = ['Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.', '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'],
        My = {
            terrain: { Ob: "jpg", opaque: !0 },
            "terrain-background": { Ob: "jpg", opaque: !0 },
            "terrain-labels": { Ob: "png", opaque: !1 },
            "terrain-lines": { Ob: "png", opaque: !1 },
            "toner-background": { Ob: "png", opaque: !0 },
            toner: { Ob: "png", opaque: !0 },
            "toner-hybrid": { Ob: "png", opaque: !1 },
            "toner-labels": {
                Ob: "png",
                opaque: !1
            },
            "toner-lines": { Ob: "png", opaque: !1 },
            "toner-lite": { Ob: "png", opaque: !0 },
            watercolor: { Ob: "jpg", opaque: !0 }
        },
        Ly = { terrain: { minZoom: 4, maxZoom: 18 }, toner: { minZoom: 0, maxZoom: 20 }, watercolor: { minZoom: 1, maxZoom: 16 } };

    function Oy(a) { a = a || {};
        jy.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, crossOrigin: a.crossOrigin, logo: a.logo, projection: a.projection, reprojectionErrorThreshold: a.reprojectionErrorThreshold, tileGrid: a.tileGrid, tileLoadFunction: a.tileLoadFunction, url: a.url, urls: a.urls, wrapX: void 0 !== a.wrapX ? a.wrapX : !0, transition: a.transition });
        this.i = a.params || {};
        this.l = Ca();
        fy(this, Py(this)) }
    v(Oy, jy);

    function Py(a) { var b = 0,
            c = [],
            d; for (d in a.i) c[b++] = d + "-" + a.i[d]; return c.join("/") }
    Oy.prototype.o = function() { return this.i };
    Oy.prototype.Xc = function(a) { return a };
    Oy.prototype.Rc = function(a, b, c) {
        var d = this.tileGrid;
        d || (d = this.bb(c));
        if (!(d.b.length <= a[0])) {
            var e = d.La(a, this.l),
                f = Aa(d.Za(a[0]), this.j);
            1 != b && (f = za(f, b, this.j));
            d = { F: "image", FORMAT: "PNG32", TRANSPARENT: !0 };
            jb(d, this.i);
            var g = this.urls;
            g ? (c = c.ub.split(":").pop(), d.SIZE = f[0] + "," + f[1], d.BBOX = e.join(","), d.BBOXSR = c, d.IMAGESR = c, d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b), a = (1 == g.length ? g[0] : g[va((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
                a = uy(a, d)) : a = void 0;
            return a
        }
    };
    Oy.prototype.G = function(a) { jb(this.i, a);
        fy(this, Py(this)) };

    function Qy(a) { ey.call(this, { opaque: !1, projection: a.projection, tileGrid: a.tileGrid, wrapX: void 0 !== a.wrapX ? a.wrapX : !0 }) }
    v(Qy, ey);
    Qy.prototype.$c = function(a, b, c) { var d = a + "/" + b + "/" + c; if (this.a.a.hasOwnProperty(d)) return this.a.get(d); var e = Aa(this.tileGrid.Za(a));
        a = [a, b, c];
        b = (b = gy(this, a)) ? gy(this, b).toString() : "";
        e = new Ry(a, e, b);
        this.a.set(d, e); return e };

    function Ry(a, b, c) { Tk.call(this, a, 2);
        this.c = b;
        this.sa = c;
        this.a = null }
    v(Ry, Tk);
    Ry.prototype.Y = function() { if (this.a) return this.a; var a = this.c,
            b = gg(a[0], a[1]);
        b.strokeStyle = "black";
        b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
        b.fillStyle = "black";
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.font = "24px sans-serif";
        b.fillText(this.sa, a[0] / 2, a[1] / 2); return this.a = b.canvas };
    Ry.prototype.load = function() {};

    function Sy(a) {
        this.i = null;
        jy.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, crossOrigin: a.crossOrigin, projection: Nb("EPSG:3857"), reprojectionErrorThreshold: a.reprojectionErrorThreshold, state: "loading", tileLoadFunction: a.tileLoadFunction, wrapX: void 0 !== a.wrapX ? a.wrapX : !0, transition: a.transition });
        if (a.url)
            if (a.jsonp) ay(a.url, this.Bg.bind(this), this.cf.bind(this));
            else {
                var b = new XMLHttpRequest;
                b.addEventListener("load", this.To.bind(this));
                b.addEventListener("error", this.So.bind(this));
                b.open("GET", a.url);
                b.send()
            }
        else a.tileJSON ? this.Bg(a.tileJSON) : na(!1, 51)
    }
    v(Sy, jy);
    k = Sy.prototype;
    k.To = function(a) { a = a.target; if (!a.status || 200 <= a.status && 300 > a.status) { try { var b = JSON.parse(a.responseText) } catch (c) { this.cf(); return }
            this.Bg(b) } else this.cf() };
    k.So = function() { this.cf() };
    k.Jl = function() { return this.i };
    k.Bg = function(a) { var b = Nb("EPSG:4326"),
            c = this.c; if (void 0 !== a.bounds) { var d = Ob(b, c);
            d = hb(a.bounds, d) } var e = a.minzoom || 0,
            f = a.maxzoom || 22;
        this.tileGrid = c = Bc({ extent: Dc(c), maxZoom: f, minZoom: e });
        this.tileUrlFunction = Xx(a.tiles, c); if (void 0 !== a.attribution && !this.B) { var g = void 0 !== d ? d : b.C();
            this.ta(function(b) { return fb(g, b.extent) ? [a.attribution] : null }) }
        this.i = a;
        pn(this, "ready") };
    k.cf = function() { pn(this, "error") };

    function Ty(a) { ey.call(this, { projection: Nb("EPSG:3857"), state: "loading" });
        this.s = void 0 !== a.preemptive ? a.preemptive : !0;
        this.l = Zx;
        this.f = void 0;
        this.i = a.jsonp || !1; if (a.url)
            if (this.i) ay(a.url, this.Cg.bind(this), this.df.bind(this));
            else { var b = new XMLHttpRequest;
                b.addEventListener("load", this.Xo.bind(this));
                b.addEventListener("error", this.Wo.bind(this));
                b.open("GET", a.url);
                b.send() }
        else a.tileJSON ? this.Cg(a.tileJSON) : na(!1, 51) }
    v(Ty, ey);
    k = Ty.prototype;
    k.Xo = function(a) { a = a.target; if (!a.status || 200 <= a.status && 300 > a.status) { try { var b = JSON.parse(a.responseText) } catch (c) { this.df(); return }
            this.Cg(b) } else this.df() };
    k.Wo = function() { this.df() };
    k.Gl = function() { return this.f };
    k.Wk = function(a, b, c, d, e) { this.tileGrid ? (b = this.tileGrid.Ke(a, b), Uy(this.$c(b[0], b[1], b[2], 1, this.c), a, c, d, e)) : !0 === e ? setTimeout(function() { c.call(d, null) }, 0) : c.call(d, null) };
    k.df = function() { pn(this, "error") };
    k.Cg = function(a) { var b = Nb("EPSG:4326"),
            c = this.c; if (void 0 !== a.bounds) { var d = Ob(b, c);
            d = hb(a.bounds, d) } var e = a.minzoom || 0,
            f = a.maxzoom || 22;
        this.tileGrid = c = Bc({ extent: Dc(c), maxZoom: f, minZoom: e });
        this.f = a.template; if (e = a.grids) { this.l = Xx(e, c); if (void 0 !== a.attribution) { var g = void 0 !== d ? d : b.C();
                this.ta(function(b) { return fb(g, b.extent) ? [a.attribution] : null }) }
            pn(this, "ready") } else pn(this, "error") };
    k.$c = function(a, b, c, d, e) { var f = a + "/" + b + "/" + c; if (this.a.a.hasOwnProperty(f)) return this.a.get(f);
        a = [a, b, c];
        b = gy(this, a, e);
        d = this.l(b, d, e);
        d = new Vy(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.tileGrid.La(a), this.s, this.i);
        this.a.set(f, d); return d };
    k.jh = function(a, b, c) { a = a + "/" + b + "/" + c;
        this.a.a.hasOwnProperty(a) && this.a.get(a) };

    function Vy(a, b, c, d, e, f) { Tk.call(this, a, b);
        this.v = c;
        this.a = d;
        this.P = e;
        this.c = this.l = this.f = null;
        this.o = f }
    v(Vy, Tk);
    k = Vy.prototype;
    k.Y = function() { return null };
    k.getData = function(a) { if (!this.f || !this.l) return null; var b = this.f[Math.floor((1 - (a[1] - this.a[1]) / (this.a[3] - this.a[1])) * this.f.length)]; if ("string" !== typeof b) return null;
        b = b.charCodeAt(Math.floor((a[0] - this.a[0]) / (this.a[2] - this.a[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.l && (b = this.l[b], this.c && b in this.c ? a = this.c[b] : a = b); return a };

    function Uy(a, b, c, d, e) { 0 == a.state && !0 === e ? (Lc(a, "change", function() { c.call(d, this.getData(b)) }, a), Wy(a)) : !0 === e ? setTimeout(function() { c.call(d, this.getData(b)) }.bind(a), 0) : c.call(d, a.getData(b)) }
    k.ib = function() { return this.v };
    k.Me = function() { this.state = 3;
        this.u() };
    k.Zi = function(a) { this.f = a.grid;
        this.l = a.keys;
        this.c = a.data;
        this.state = 4;
        this.u() };

    function Wy(a) { if (0 == a.state)
            if (a.state = 1, a.o) ay(a.v, a.Zi.bind(a), a.Me.bind(a));
            else { var b = new XMLHttpRequest;
                b.addEventListener("load", a.Vo.bind(a));
                b.addEventListener("error", a.Uo.bind(a));
                b.open("GET", a.v);
                b.send() } }
    k.Vo = function(a) { a = a.target; if (!a.status || 200 <= a.status && 300 > a.status) { try { var b = JSON.parse(a.responseText) } catch (c) { this.Me(); return }
            this.Zi(b) } else this.Me() };
    k.Uo = function() { this.Me() };
    k.load = function() { this.P && Wy(this) };

    function Xy(a) {
        a = a || {};
        var b = a.params || {};
        jy.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, crossOrigin: a.crossOrigin, logo: a.logo, opaque: !("TRANSPARENT" in b ? b.TRANSPARENT : 1), projection: a.projection, reprojectionErrorThreshold: a.reprojectionErrorThreshold, tileClass: a.tileClass, tileGrid: a.tileGrid, tileLoadFunction: a.tileLoadFunction, url: a.url, urls: a.urls, wrapX: void 0 !== a.wrapX ? a.wrapX : !0, transition: a.transition });
        this.o = void 0 !== a.gutter ? a.gutter : 0;
        this.i = b;
        this.l = !0;
        this.G = a.serverType;
        this.aa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.ca = Ca();
        Yy(this);
        fy(this, Zy(this))
    }
    v(Xy, jy);
    k = Xy.prototype;
    k.Yo = function(a, b, c, d) {
        c = Nb(c);
        var e = this.c,
            f = this.tileGrid;
        f || (f = this.bb(c));
        b = f.Ke(a, b);
        if (!(f.b.length <= b[0])) {
            var g = f.Sa(b[0]),
                h = f.La(b, this.ca);
            f = Aa(f.Za(b[0]), this.j);
            var l = this.o;
            0 !== l && (f = xa(f, l, this.j), h = Ea(h, g * l, h));
            e && e !== c && (g = fn(e, c, a, g), h = $b(h, c, e), a = Zb(a, c, e));
            l = { SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetFeatureInfo", FORMAT: "image/png", TRANSPARENT: !0, QUERY_LAYERS: this.i.LAYERS };
            jb(l, this.i, d);
            d = Math.floor((h[3] - a[1]) / g);
            l[this.l ? "I" : "X"] = Math.floor((a[0] - h[0]) / g);
            l[this.l ? "J" : "Y"] =
                d;
            return $y(this, b, f, h, 1, e || c, l)
        }
    };
    k.Yf = function() { return this.o };
    k.Zo = function() { return this.i };

    function $y(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.l ? "CRS" : "SRS"] = f.ub;
            "STYLES" in a.i || (g.STYLES = "");
            if (1 != e) switch (a.G) {
                case "geoserver":
                    c = 90 * e + .5 | 0;
                    g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c; break;
                case "mapserver":
                    g.MAP_RESOLUTION = 90 * e; break;
                case "carmentaserver":
                case "qgis":
                    g.DPI = 90 * e; break;
                default:
                    na(!1, 52) }
            f = f.b;
            a.l && "ne" == f.substr(0, 2) && (a = d[0], d[0] = d[1], d[1] = a, a = d[2], d[2] = d[3], d[3] = a);
            g.BBOX = d.join(",");
            return uy(1 == h.length ? h[0] : h[va((b[1] <<
                b[0]) + b[2], h.length)], g)
        }
    }
    k.Xc = function(a) { return this.aa && void 0 !== this.G ? a : 1 };

    function Zy(a) { var b = 0,
            c = [],
            d; for (d in a.i) c[b++] = d + "-" + a.i[d]; return c.join("/") }
    k.Rc = function(a, b, c) { var d = this.tileGrid;
        d || (d = this.bb(c)); if (!(d.b.length <= a[0])) { 1 == b || this.aa && void 0 !== this.G || (b = 1); var e = d.Sa(a[0]),
                f = d.La(a, this.ca);
            d = Aa(d.Za(a[0]), this.j); var g = this.o;
            0 !== g && (d = xa(d, g, this.j), f = Ea(f, e * g, f));
            1 != b && (d = za(d, b, this.j));
            e = { SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0 };
            jb(e, this.i); return $y(this, a, d, f, b, c, e) } };
    k.$o = function(a) { jb(this.i, a);
        Yy(this);
        fy(this, Zy(this)) };

    function Yy(a) { a.l = 0 <= ye(a.i.VERSION || "1.3.0") };

    function az(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u) { Tk.call(this, a, b, u);
        this.v = {};
        this.o = {};
        this.c = m;
        this.a = [];
        this.D = c;
        this.l = f;
        this.f = [];
        this.P = []; if (f) { var x = l.La(f),
                C = l.Sa(a[0]);
            h.Tf(x, h.Bc(C), function(a) { var b = eb(x, h.La(a)),
                    c = h.C();
                c && (b = eb(b, c));
                .5 <= ab(b) / C && .5 <= bb(b) / C && (b = a.toString(), c = m[b], c || (c = g(a, n, p), c = m[b] = new q(a, void 0 == c ? 4 : 0, void 0 == c ? "" : c, d, e), this.P.push(y(c, "change", r))), c.c++, this.a.push(b)) }.bind(this)) } }
    v(az, Tk);
    k = az.prototype;
    k.ha = function() { for (var a = 0, b = this.a.length; a < b; ++a) { var c = this.a[a],
                d = this.c[c];
            d.c--;
            0 == d.c && (delete this.c[c], Pc(d)) }
        this.a.length = 0;
        this.c = null;
        this.f.forEach(Gc);
        this.f.length = 0;
        this.g && Pc(this.g);
        this.state = 5;
        this.u();
        this.P.forEach(Gc);
        this.P.length = 0;
        Tk.prototype.ha.call(this) };

    function bk(a, b) { b = w(b).toString();
        b in a.v || (a.v[b] = gg()); return a.v[b] }
    k.Y = function(a) { return -1 == ak(this, a).eh ? null : bk(this, a).canvas };

    function ak(a, b) { b = w(b).toString();
        b in a.o || (a.o[b] = { Ae: !1, dh: null, uf: -1, eh: -1 }); return a.o[b] }
    k.ib = function() { return this.a.join("/") + "-" + this.D };
    k.load = function() { var a = 0,
            b = {};
        0 == this.state && dj(this, 1);
        1 == this.state && this.a.forEach(function(c) { var d = this.c[c];
            0 == d.state && (d.sg(this.B), d.load());
            1 == d.state && (c = y(d, "change", function() { var c = d.getState(); if (2 == c || 3 == c) { var f = w(d);
                    3 == c ? b[f] = !0 : (--a, delete b[f]);
                    0 == a - Object.keys(b).length && this.Hh() } }.bind(this)), this.f.push(c), ++a) }.bind(this));
        0 == a - Object.keys(b).length && setTimeout(this.Hh.bind(this), 0) };
    k.Hh = function() { for (var a = this.a.length, b = 0, c = a - 1; 0 <= c; --c) { var d = this.c[this.a[c]].getState();
            2 != d && --a;
            4 == d && ++b }
        a == this.a.length ? (this.f.forEach(Gc), this.f.length = 0, dj(this, 2)) : dj(this, b == this.a.length ? 4 : 3) };

    function bz(a, b) { a.sg(Po(b, a.v, a.tp.bind(a), a.sp.bind(a))) };

    function cz(a) {
        var b = a.projection || "EPSG:3857",
            c = a.extent || Dc(b),
            d = a.tileGrid || Bc({ extent: c, maxZoom: a.maxZoom || 22, minZoom: a.minZoom, tileSize: a.tileSize || 512 });
        iy.call(this, { attributions: a.attributions, cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128, extent: c, logo: a.logo, opaque: !1, projection: b, state: a.state, tileGrid: d, tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : bz, tileUrlFunction: a.tileUrlFunction, url: a.url, urls: a.urls, wrapX: void 0 === a.wrapX ? !0 : a.wrapX, transition: a.transition });
        this.l = a.format ?
            a.format : null;
        this.i = {};
        this.s = void 0 == a.overlaps ? !0 : a.overlaps;
        this.tileClass = a.tileClass ? a.tileClass : Vn;
        this.f = {}
    }
    v(cz, iy);
    k = cz.prototype;
    k.clear = function() { this.a.clear();
        this.i = {} };
    k.$c = function(a, b, c, d, e) { var f = a + "/" + b + "/" + c; if (this.a.a.hasOwnProperty(f)) return this.a.get(f);
        a = [a, b, c];
        b = gy(this, a, e);
        d = new az(a, null !== b ? 0 : 4, this.g, this.l, this.tileLoadFunction, b, this.tileUrlFunction, this.tileGrid, this.bb(e), this.i, d, e, this.tileClass, this.aj.bind(this), this.va);
        this.a.set(f, d); return d };
    k.bb = function(a) { var b = a.ub,
            c = this.f[b];
        c || (c = this.tileGrid, c = this.f[b] = Ac(a, void 0, c ? c.Za(c.minZoom) : void 0)); return c };
    k.Xc = function(a) { return a };
    k.Yd = function(a, b, c) { a = Aa(this.bb(c).Za(a)); return [Math.round(a[0] * b), Math.round(a[1] * b)] };

    function dz(a) { this.s = a.matrixIds;
        qc.call(this, { extent: a.extent, origin: a.origin, origins: a.origins, resolutions: a.resolutions, tileSize: a.tileSize, tileSizes: a.tileSizes, sizes: a.sizes }) }
    v(dz, qc);
    dz.prototype.v = function() { return this.s };

    function ez(a, b, c) {
        var d = [],
            e = [],
            f = [],
            g = [],
            h = [],
            l = void 0 !== c ? c : [];
        c = Nb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var m = c.Wc(),
            n = "ne" == c.b.substr(0, 2);
        a.TileMatrix.sort(function(a, b) { return b.ScaleDenominator - a.ScaleDenominator });
        a.TileMatrix.forEach(function(a) {
            var b;
            0 < l.length ? b = fc(l, function(b) { return a.Identifier == b.TileMatrix }) : b = !0;
            if (b) {
                e.push(a.Identifier);
                b = 2.8E-4 * a.ScaleDenominator / m;
                var c = a.TileWidth,
                    p = a.TileHeight;
                n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) :
                    f.push(a.TopLeftCorner);
                d.push(b);
                g.push(c == p ? c : [c, p]);
                h.push([a.MatrixWidth, -a.MatrixHeight])
            }
        });
        return new dz({ extent: b, origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h })
    };

    function Z(a) {
        function b(a) { a = "KVP" == d ? uy(a, f) : a.replace(/\{(\w+?)\}/g, function(a, b) { return b.toLowerCase() in f ? f[b.toLowerCase()] : a }); return function(b) { if (b) { var c = { TileMatrix: e.s[b[0]], TileCol: b[1], TileRow: -b[2] - 1 };
                    jb(c, g);
                    b = a; return b = "KVP" == d ? uy(b, c) : b.replace(/\{(\w+?)\}/g, function(a, b) { return c[b] }) } } }
        this.ya = void 0 !== a.version ? a.version : "1.0.0";
        this.o = void 0 !== a.format ? a.format : "image/jpeg";
        this.i = void 0 !== a.dimensions ? a.dimensions : {};
        this.G = a.layer;
        this.l = a.matrixSet;
        this.aa = a.style;
        var c =
            a.urls;
        void 0 === c && void 0 !== a.url && (c = $x(a.url));
        var d = this.ca = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP",
            e = a.tileGrid,
            f = { layer: this.G, style: this.aa, tilematrixset: this.l };
        "KVP" == d && jb(f, { Service: "WMTS", Request: "GetTile", Version: this.ya, Format: this.o });
        var g = this.i,
            h = c && 0 < c.length ? Yx(c.map(b)) : Zx;
        jy.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: e,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: h,
            urls: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1,
            transition: a.transition
        });
        fy(this, fz(this))
    }
    v(Z, jy);
    k = Z.prototype;
    k.gl = function() { return this.i };
    k.ap = function() { return this.o };
    k.bp = function() { return this.G };
    k.tl = function() { return this.l };
    k.El = function() { return this.ca };
    k.cp = function() { return this.aa };
    k.Ll = function() { return this.ya };

    function fz(a) { var b = 0,
            c = [],
            d; for (d in a.i) c[b++] = d + "-" + a.i[d]; return c.join("/") }
    k.Iq = function(a) { jb(this.i, a);
        fy(this, fz(this)) };

    function gz(a) {
        a = a || {};
        var b = a.size,
            c = b[0],
            d = b[1];
        b = a.extent || [0, -b[1], b[0], 0];
        var e = [],
            f = a.tileSize || 256,
            g = f;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : hz) {
            case hz:
                for (; c > g || d > g;) e.push([Math.ceil(c / g), Math.ceil(d / g)]), g += g; break;
            case iz:
                for (; c > g || d > g;) e.push([Math.ceil(c / g), Math.ceil(d / g)]), c >>= 1, d >>= 1; break;
            default:
                na(!1, 53) }
        e.push([1, 1]);
        e.reverse();
        d = [1];
        var h = [0];
        g = 1;
        for (c = e.length; g < c; g++) d.push(1 << g), h.push(e[g - 1][0] * e[g - 1][1] + h[g - 1]);
        d.reverse();
        var l = new qc({
            tileSize: f,
            extent: b,
            origin: Ya(b),
            resolutions: d
        });
        (b = a.url) && -1 == b.indexOf("{TileGroup}") && -1 == b.indexOf("{tileIndex}") && (b += "{TileGroup}/{z}-{x}-{y}.jpg");
        b = $x(b);
        b = Yx(b.map(function(a) { return function(b) { if (b) { var c = b[0],
                        d = b[1];
                    b = -b[2] - 1; var f = d + b * e[c][0],
                        g = { z: c, x: d, y: b, tileIndex: f, TileGroup: "TileGroup" + ((f + h[c]) / l.Za(c) | 0) }; return a.replace(/\{(\w+?)\}/g, function(a, b) { return g[b] }) } } }));
        jy.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: jz.bind(null, l),
            tileGrid: l,
            tileUrlFunction: b,
            transition: a.transition
        })
    }
    v(gz, jy);

    function jz(a, b, c, d, e, f, g) { Vk.call(this, b, c, d, e, f, g);
        this.a = null;
        this.v = Aa(a.Za(b[0])) }
    v(jz, Vk);
    jz.prototype.Y = function() { if (this.a) return this.a; var a = Vk.prototype.Y.call(this); if (2 == this.state) { var b = this.v; if (a.width == b[0] && a.height == b[1]) return this.a = a;
            b = gg(b[0], b[1]);
            b.drawImage(a, 0, 0); return this.a = b.canvas } return a };
    var hz = "default",
        iz = "truncated";
    ha.prototype.code = ha.prototype.code;
    t("ol.Attribution", Ec);
    Ec.prototype.getHTML = Ec.prototype.b;
    t("ol.CanvasMap", H);
    t("ol.Collection", A);
    A.prototype.clear = A.prototype.clear;
    A.prototype.extend = A.prototype.og;
    A.prototype.forEach = A.prototype.forEach;
    A.prototype.getArray = A.prototype.Om;
    A.prototype.item = A.prototype.item;
    A.prototype.getLength = A.prototype.jc;
    A.prototype.insertAt = A.prototype.Qe;
    A.prototype.pop = A.prototype.pop;
    A.prototype.push = A.prototype.push;
    A.prototype.remove = A.prototype.remove;
    A.prototype.removeAt = A.prototype.Vg;
    A.prototype.setAt = A.prototype.jq;
    cd.prototype.element = cd.prototype.element;
    t("ol.color.asArray", li);
    t("ol.color.asString", ni);
    t("ol.colorlike.asColorLike", pi);
    t("ol.control.defaults", Dg);
    t("ol.coordinate.add", ze);
    t("ol.coordinate.createStringXY", function(a) { return function(b) { return Ke(b, a) } });
    t("ol.coordinate.format", De);
    t("ol.coordinate.rotate", Fe);
    t("ol.coordinate.toStringHDMS", function(a, b) { return a ? Ce("NS", a[1], b) + " " + Ce("EW", a[0], b) : "" });
    t("ol.coordinate.toStringXY", Ke);
    t("ol.DeviceOrientation", dk);
    dk.prototype.getAlpha = dk.prototype.Pm;
    dk.prototype.getBeta = dk.prototype.dl;
    dk.prototype.getGamma = dk.prototype.jl;
    dk.prototype.getHeading = dk.prototype.Qm;
    dk.prototype.getTracking = dk.prototype.ii;
    dk.prototype.setTracking = dk.prototype.pg;
    t("ol.easing.easeIn", Le);
    t("ol.easing.easeOut", Ne);
    t("ol.easing.inAndOut", Oe);
    t("ol.easing.linear", Pe);
    t("ol.easing.upAndDown", function(a) { return .5 > a ? Oe(2 * a) : 1 - Oe(2 * (a - .5)) });
    t("ol.extent.boundingExtent", Ba);
    t("ol.extent.buffer", Ea);
    t("ol.extent.containsCoordinate", Ha);
    t("ol.extent.containsExtent", Ka);
    t("ol.extent.containsXY", Ia);
    t("ol.extent.createEmpty", Ca);
    t("ol.extent.equals", Ra);
    t("ol.extent.extend", Ta);
    t("ol.extent.getArea", Za);
    t("ol.extent.getBottomLeft", Va);
    t("ol.extent.getBottomRight", Wa);
    t("ol.extent.getCenter", cb);
    t("ol.extent.getHeight", bb);
    t("ol.extent.getIntersection", eb);
    t("ol.extent.getSize", function(a) { return [a[2] - a[0], a[3] - a[1]] });
    t("ol.extent.getTopLeft", Ya);
    t("ol.extent.getTopRight", Xa);
    t("ol.extent.getWidth", ab);
    t("ol.extent.intersects", fb);
    t("ol.extent.isEmpty", $a);
    t("ol.extent.applyTransform", hb);
    t("ol.Feature", vk);
    vk.prototype.clone = vk.prototype.clone;
    vk.prototype.getGeometry = vk.prototype.V;
    vk.prototype.getId = vk.prototype.Sm;
    vk.prototype.getGeometryName = vk.prototype.ll;
    vk.prototype.getStyle = vk.prototype.Tm;
    vk.prototype.getStyleFunction = vk.prototype.fb;
    vk.prototype.setGeometry = vk.prototype.Ua;
    vk.prototype.setStyle = vk.prototype.qg;
    vk.prototype.setId = vk.prototype.pc;
    vk.prototype.setGeometryName = vk.prototype.Jc;
    t("ol.featureloader.xhr", Qo);
    t("ol.Geolocation", xk);
    xk.prototype.getAccuracy = xk.prototype.$k;
    xk.prototype.getAccuracyGeometry = xk.prototype.al;
    xk.prototype.getAltitude = xk.prototype.bl;
    xk.prototype.getAltitudeAccuracy = xk.prototype.cl;
    xk.prototype.getHeading = xk.prototype.Um;
    xk.prototype.getPosition = xk.prototype.Vm;
    xk.prototype.getProjection = xk.prototype.ji;
    xk.prototype.getSpeed = xk.prototype.Fl;
    xk.prototype.getTracking = xk.prototype.ki;
    xk.prototype.getTrackingOptions = xk.prototype.Yh;
    xk.prototype.setProjection = xk.prototype.li;
    xk.prototype.setTracking = xk.prototype.Te;
    xk.prototype.setTrackingOptions = xk.prototype.Mj;
    t("ol.Graticule", Fk);
    Fk.prototype.getMap = Fk.prototype.Ym;
    Fk.prototype.getMeridians = Fk.prototype.vl;
    Fk.prototype.getParallels = Fk.prototype.Al;
    Fk.prototype.setMap = Fk.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", nd);
    t("ol.has.CANVAS", pd);
    t("ol.has.DEVICE_ORIENTATION", qd);
    t("ol.has.GEOLOCATION", rd);
    t("ol.has.TOUCH", sd);
    t("ol.has.WEBGL", hd);
    Sk.prototype.getImage = Sk.prototype.Y;
    Sk.prototype.load = Sk.prototype.load;
    Vk.prototype.getImage = Vk.prototype.Y;
    t("ol.inherits", v);
    t("ol.interaction.defaults", Xh);
    t("ol.Kinetic", Eg);
    t("ol.loadingstrategy.all", yw);
    t("ol.loadingstrategy.bbox", function(a) { return [a] });
    t("ol.loadingstrategy.tile", function(a) { return function(b, c) { c = a.Bc(c);
            b = tc(a, b, c); var d = [];
            c = [c, 0, 0]; for (c[1] = b.fa; c[1] <= b.la; ++c[1])
                for (c[2] = b.ea; c[2] <= b.ka; ++c[2]) d.push(a.La(c)); return d } });
    t("ol.Map", J);
    ed.prototype.originalEvent = ed.prototype.originalEvent;
    ed.prototype.pixel = ed.prototype.pixel;
    ed.prototype.coordinate = ed.prototype.coordinate;
    ed.prototype.dragging = ed.prototype.dragging;
    dd.prototype.map = dd.prototype.map;
    dd.prototype.frameState = dd.prototype.frameState;
    t("ol.Object", Vc);
    Vc.prototype.get = Vc.prototype.get;
    Vc.prototype.getKeys = Vc.prototype.R;
    Vc.prototype.getProperties = Vc.prototype.M;
    Vc.prototype.set = Vc.prototype.set;
    Vc.prototype.setProperties = Vc.prototype.I;
    Vc.prototype.unset = Vc.prototype.S;
    Zc.prototype.key = Zc.prototype.key;
    Zc.prototype.oldValue = Zc.prototype.oldValue;
    t("ol.Observable", Uc);
    t("ol.Observable.unByKey", function(a) { if (Array.isArray(a))
            for (var b = 0, c = a.length; b < c; ++b) Gc(a[b]);
        else Gc(a) });
    Uc.prototype.changed = Uc.prototype.u;
    Uc.prototype.dispatchEvent = Uc.prototype.b;
    Uc.prototype.getRevision = Uc.prototype.L;
    Uc.prototype.on = Uc.prototype.J;
    Uc.prototype.once = Uc.prototype.once;
    Uc.prototype.un = Uc.prototype.K;
    t("ol.Overlay", Mn);
    Mn.prototype.getElement = Mn.prototype.Qd;
    Mn.prototype.getId = Mn.prototype.dn;
    Mn.prototype.getMap = Mn.prototype.Ue;
    Mn.prototype.getOffset = Mn.prototype.Uh;
    Mn.prototype.getPosition = Mn.prototype.mi;
    Mn.prototype.getPositioning = Mn.prototype.Vh;
    Mn.prototype.setElement = Mn.prototype.Cj;
    Mn.prototype.setMap = Mn.prototype.setMap;
    Mn.prototype.setOffset = Mn.prototype.Hj;
    Mn.prototype.setPosition = Mn.prototype.Ve;
    Mn.prototype.setPositioning = Mn.prototype.Kj;
    t("ol.PluggableMap", G);
    G.prototype.addControl = G.prototype.Kf;
    G.prototype.addInteraction = G.prototype.Lf;
    G.prototype.addLayer = G.prototype.we;
    G.prototype.addOverlay = G.prototype.xe;
    G.prototype.forEachFeatureAtPixel = G.prototype.Sc;
    G.prototype.getFeaturesAtPixel = G.prototype.Vf;
    G.prototype.forEachLayerAtPixel = G.prototype.rg;
    G.prototype.hasFeatureAtPixel = G.prototype.lg;
    G.prototype.getEventCoordinate = G.prototype.Rd;
    G.prototype.getEventPixel = G.prototype.sd;
    G.prototype.getTarget = G.prototype.Wd;
    G.prototype.getTargetElement = G.prototype.Ac;
    G.prototype.getCoordinateFromPixel = G.prototype.Pa;
    G.prototype.getControls = G.prototype.Uf;
    G.prototype.getOverlays = G.prototype.eg;
    G.prototype.getOverlayById = G.prototype.dg;
    G.prototype.getInteractions = G.prototype.$f;
    G.prototype.getLayerGroup = G.prototype.gc;
    G.prototype.getLayers = G.prototype.We;
    G.prototype.getPixelFromCoordinate = G.prototype.Ia;
    G.prototype.getSize = G.prototype.Cb;
    G.prototype.getView = G.prototype.$;
    G.prototype.getViewport = G.prototype.ig;
    G.prototype.renderSync = G.prototype.bh;
    G.prototype.render = G.prototype.render;
    G.prototype.removeControl = G.prototype.Wg;
    G.prototype.removeInteraction = G.prototype.Yg;
    G.prototype.removeLayer = G.prototype.Zg;
    G.prototype.removeOverlay = G.prototype.$g;
    G.prototype.setLayerGroup = G.prototype.xf;
    G.prototype.setSize = G.prototype.ge;
    G.prototype.setTarget = G.prototype.yd;
    G.prototype.setView = G.prototype.ih;
    G.prototype.updateSize = G.prototype.Mc;
    t("ol.proj.METERS_PER_UNIT", tb);
    t("ol.proj.setProj4", function(a) { ub = a });
    t("ol.proj.getPointResolution", Mb);
    t("ol.proj.addEquivalentProjections", Pb);
    t("ol.proj.addProjection", Qb);
    t("ol.proj.addCoordinateTransforms", Ub);
    t("ol.proj.fromLonLat", function(a, b) { return Zb(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857") });
    t("ol.proj.toLonLat", function(a, b) { a = Zb(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326");
        b = a[0]; if (-180 > b || 180 < b) a[0] = va(b + 180, 360) - 180; return a });
    t("ol.proj.get", Nb);
    t("ol.proj.equivalent", Wb);
    t("ol.proj.getTransform", Xb);
    t("ol.proj.transform", Zb);
    t("ol.proj.transformExtent", $b);
    t("ol.render.toContext", function(a, b) { var c = a.canvas,
            d = b ? b : {};
        b = d.pixelRatio || nd; if (d = d.size) c.width = d[0] * b, c.height = d[1] * b, c.style.width = d[0] + "px", c.style.height = d[1] + "px";
        c = [0, 0, c.width, c.height];
        d = bf(Ve(), b, b); return new ri(a, b, c, d, 0) });
    t("ol.size.toSize", Aa);
    t("ol.Sphere", nb);
    nb.prototype.geodesicArea = nb.prototype.a;
    nb.prototype.haversineDistance = nb.prototype.b;
    t("ol.Sphere.getLength", qb);
    t("ol.Sphere.getArea", sb);
    Tk.prototype.getTileCoord = Tk.prototype.i;
    Tk.prototype.load = Tk.prototype.load;
    t("ol.tilegrid.createXYZ", Bc);
    Vn.prototype.getExtent = Vn.prototype.C;
    Vn.prototype.getFormat = Vn.prototype.fn;
    Vn.prototype.getFeatures = Vn.prototype.en;
    Vn.prototype.getProjection = Vn.prototype.gn;
    Vn.prototype.setExtent = Vn.prototype.ni;
    Vn.prototype.setFeatures = Vn.prototype.Dj;
    Vn.prototype.setProjection = Vn.prototype.tg;
    Vn.prototype.setLoader = Vn.prototype.sg;
    t("ol.View", F);
    F.prototype.animate = F.prototype.animate;
    F.prototype.getAnimating = F.prototype.zc;
    F.prototype.getInteracting = F.prototype.Sh;
    F.prototype.cancelAnimations = F.prototype.pd;
    F.prototype.constrainCenter = F.prototype.Qc;
    F.prototype.constrainResolution = F.prototype.constrainResolution;
    F.prototype.constrainRotation = F.prototype.constrainRotation;
    F.prototype.getCenter = F.prototype.wa;
    F.prototype.calculateExtent = F.prototype.od;
    F.prototype.getMaxResolution = F.prototype.hn;
    F.prototype.getMinResolution = F.prototype.kn;
    F.prototype.getMaxZoom = F.prototype.jn;
    F.prototype.setMaxZoom = F.prototype.tq;
    F.prototype.getMinZoom = F.prototype.ln;
    F.prototype.setMinZoom = F.prototype.uq;
    F.prototype.getProjection = F.prototype.mn;
    F.prototype.getResolution = F.prototype.Qa;
    F.prototype.getResolutions = F.prototype.nn;
    F.prototype.getResolutionForExtent = F.prototype.Ie;
    F.prototype.getRotation = F.prototype.Ra;
    F.prototype.getZoom = F.prototype.jg;
    F.prototype.getZoomForResolution = F.prototype.Le;
    F.prototype.getResolutionForZoom = F.prototype.Xh;
    F.prototype.fit = F.prototype.Sf;
    F.prototype.centerOn = F.prototype.Ik;
    F.prototype.rotate = F.prototype.rotate;
    F.prototype.setCenter = F.prototype.tb;
    F.prototype.setResolution = F.prototype.fd;
    F.prototype.setRotation = F.prototype.ae;
    F.prototype.setZoom = F.prototype.Oj;
    t("ol.xml.getAllTextContent", zo);
    t("ol.xml.parse", Do);
    xl.prototype.getGL = xl.prototype.pp;
    xl.prototype.useProgram = xl.prototype.bd;
    t("ol.tilegrid.TileGrid", qc);
    qc.prototype.forEachTileCoord = qc.prototype.Tf;
    qc.prototype.getMaxZoom = qc.prototype.jj;
    qc.prototype.getMinZoom = qc.prototype.kj;
    qc.prototype.getOrigin = qc.prototype.Gc;
    qc.prototype.getResolution = qc.prototype.Sa;
    qc.prototype.getResolutions = qc.prototype.lj;
    qc.prototype.getTileCoordExtent = qc.prototype.La;
    qc.prototype.getTileCoordForCoordAndResolution = qc.prototype.Ke;
    qc.prototype.getTileCoordForCoordAndZ = qc.prototype.hg;
    qc.prototype.getTileSize = qc.prototype.Za;
    qc.prototype.getZForResolution = qc.prototype.Bc;
    t("ol.tilegrid.WMTS", dz);
    dz.prototype.getMatrixIds = dz.prototype.v;
    t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", ez);
    t("ol.style.AtlasManager", Jm);
    t("ol.style.Circle", mk);
    mk.prototype.setRadius = mk.prototype.ed;
    t("ol.style.Fill", nk);
    nk.prototype.clone = nk.prototype.clone;
    nk.prototype.getColor = nk.prototype.g;
    nk.prototype.setColor = nk.prototype.c;
    t("ol.style.Icon", hr);
    hr.prototype.clone = hr.prototype.clone;
    hr.prototype.getAnchor = hr.prototype.Uc;
    hr.prototype.getColor = hr.prototype.ep;
    hr.prototype.getImage = hr.prototype.Y;
    hr.prototype.getOrigin = hr.prototype.ad;
    hr.prototype.getSrc = hr.prototype.fp;
    hr.prototype.getSize = hr.prototype.nc;
    hr.prototype.load = hr.prototype.load;
    t("ol.style.Image", jk);
    jk.prototype.getOpacity = jk.prototype.ff;
    jk.prototype.getRotateWithView = jk.prototype.gf;
    jk.prototype.getRotation = jk.prototype.hf;
    jk.prototype.getScale = jk.prototype.jf;
    jk.prototype.getSnapToPixel = jk.prototype.Je;
    jk.prototype.setOpacity = jk.prototype.Dd;
    jk.prototype.setRotation = jk.prototype.kf;
    jk.prototype.setScale = jk.prototype.Ed;
    t("ol.style.RegularShape", kk);
    kk.prototype.clone = kk.prototype.clone;
    kk.prototype.getAnchor = kk.prototype.Uc;
    kk.prototype.getAngle = kk.prototype.fj;
    kk.prototype.getFill = kk.prototype.Ea;
    kk.prototype.getImage = kk.prototype.Y;
    kk.prototype.getOrigin = kk.prototype.ad;
    kk.prototype.getPoints = kk.prototype.gj;
    kk.prototype.getRadius = kk.prototype.hj;
    kk.prototype.getRadius2 = kk.prototype.Wh;
    kk.prototype.getSize = kk.prototype.nc;
    kk.prototype.getStroke = kk.prototype.Fa;
    t("ol.style.Stroke", ok);
    ok.prototype.clone = ok.prototype.clone;
    ok.prototype.getColor = ok.prototype.gp;
    ok.prototype.getLineCap = ok.prototype.ol;
    ok.prototype.getLineDash = ok.prototype.hp;
    ok.prototype.getLineDashOffset = ok.prototype.pl;
    ok.prototype.getLineJoin = ok.prototype.ql;
    ok.prototype.getMiterLimit = ok.prototype.wl;
    ok.prototype.getWidth = ok.prototype.ip;
    ok.prototype.setColor = ok.prototype.jp;
    ok.prototype.setLineCap = ok.prototype.pq;
    ok.prototype.setLineDash = ok.prototype.setLineDash;
    ok.prototype.setLineDashOffset = ok.prototype.qq;
    ok.prototype.setLineJoin = ok.prototype.rq;
    ok.prototype.setMiterLimit = ok.prototype.vq;
    ok.prototype.setWidth = ok.prototype.zq;
    t("ol.style.Style", pk);
    pk.prototype.clone = pk.prototype.clone;
    pk.prototype.getRenderer = pk.prototype.He;
    pk.prototype.setRenderer = pk.prototype.xq;
    pk.prototype.getGeometry = pk.prototype.V;
    pk.prototype.getGeometryFunction = pk.prototype.kl;
    pk.prototype.getFill = pk.prototype.Ea;
    pk.prototype.setFill = pk.prototype.wf;
    pk.prototype.getImage = pk.prototype.Y;
    pk.prototype.setImage = pk.prototype.hh;
    pk.prototype.getStroke = pk.prototype.Fa;
    pk.prototype.setStroke = pk.prototype.yf;
    pk.prototype.getText = pk.prototype.Ka;
    pk.prototype.setText = pk.prototype.Gd;
    pk.prototype.getZIndex = pk.prototype.Ba;
    pk.prototype.setGeometry = pk.prototype.Ua;
    pk.prototype.setZIndex = pk.prototype.$b;
    t("ol.style.Text", Ek);
    Ek.prototype.clone = Ek.prototype.clone;
    Ek.prototype.getExceedLength = Ek.prototype.hl;
    Ek.prototype.getFont = Ek.prototype.il;
    Ek.prototype.getMaxAngle = Ek.prototype.ul;
    Ek.prototype.getPlacement = Ek.prototype.Bl;
    Ek.prototype.getOffsetX = Ek.prototype.xl;
    Ek.prototype.getOffsetY = Ek.prototype.yl;
    Ek.prototype.getFill = Ek.prototype.Ea;
    Ek.prototype.getRotateWithView = Ek.prototype.kp;
    Ek.prototype.getRotation = Ek.prototype.lp;
    Ek.prototype.getScale = Ek.prototype.mp;
    Ek.prototype.getStroke = Ek.prototype.Fa;
    Ek.prototype.getText = Ek.prototype.Ka;
    Ek.prototype.getTextAlign = Ek.prototype.Hl;
    Ek.prototype.getTextBaseline = Ek.prototype.Il;
    Ek.prototype.setExceedLength = Ek.prototype.mq;
    Ek.prototype.setFont = Ek.prototype.Ej;
    Ek.prototype.setMaxAngle = Ek.prototype.sq;
    Ek.prototype.setOffsetX = Ek.prototype.Ij;
    Ek.prototype.setOffsetY = Ek.prototype.Jj;
    Ek.prototype.setPlacement = Ek.prototype.wq;
    Ek.prototype.setFill = Ek.prototype.wf;
    Ek.prototype.setRotation = Ek.prototype.np;
    Ek.prototype.setScale = Ek.prototype.ij;
    Ek.prototype.setStroke = Ek.prototype.yf;
    Ek.prototype.setText = Ek.prototype.Gd;
    Ek.prototype.setTextAlign = Ek.prototype.Lj;
    Ek.prototype.setTextBaseline = Ek.prototype.yq;
    t("ol.source.BingMaps", ny);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", '<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>');
    ny.prototype.getApiKey = ny.prototype.ca;
    ny.prototype.getImagerySet = ny.prototype.ya;
    t("ol.source.CartoDB", py);
    py.prototype.getConfig = py.prototype.fl;
    py.prototype.updateConfig = py.prototype.Hq;
    py.prototype.setConfig = py.prototype.kq;
    t("ol.source.Cluster", Y);
    Y.prototype.getDistance = Y.prototype.vo;
    Y.prototype.getSource = Y.prototype.wo;
    Y.prototype.setDistance = Y.prototype.lq;
    t("ol.source.Image", qn);
    sn.prototype.image = sn.prototype.image;
    t("ol.source.ImageArcGISRest", vy);
    vy.prototype.getParams = vy.prototype.yo;
    vy.prototype.getImageLoadFunction = vy.prototype.xo;
    vy.prototype.getUrl = vy.prototype.zo;
    vy.prototype.setImageLoadFunction = vy.prototype.Ao;
    vy.prototype.setUrl = vy.prototype.Bo;
    vy.prototype.updateParams = vy.prototype.Co;
    t("ol.source.ImageCanvas", xn);
    t("ol.source.ImageMapGuide", wy);
    wy.prototype.getParams = wy.prototype.Eo;
    wy.prototype.getImageLoadFunction = wy.prototype.Do;
    wy.prototype.updateParams = wy.prototype.Go;
    wy.prototype.setImageLoadFunction = wy.prototype.Fo;
    t("ol.source.ImageStatic", xy);
    t("ol.source.ImageVector", yn);
    yn.prototype.getSource = yn.prototype.Ho;
    yn.prototype.getStyle = yn.prototype.Io;
    yn.prototype.getStyleFunction = yn.prototype.fb;
    yn.prototype.setStyle = yn.prototype.Yi;
    t("ol.source.ImageWMS", yy);
    yy.prototype.getGetFeatureInfoUrl = yy.prototype.Lo;
    yy.prototype.getParams = yy.prototype.No;
    yy.prototype.getImageLoadFunction = yy.prototype.Mo;
    yy.prototype.getUrl = yy.prototype.Oo;
    yy.prototype.setImageLoadFunction = yy.prototype.Po;
    yy.prototype.setUrl = yy.prototype.Qo;
    yy.prototype.updateParams = yy.prototype.Ro;
    t("ol.source.OSM", Cy);
    t("ol.source.OSM.ATTRIBUTION", '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.');
    t("ol.source.Raster", Dy);
    Dy.prototype.setOperation = Dy.prototype.s;
    Hy.prototype.extent = Hy.prototype.extent;
    Hy.prototype.resolution = Hy.prototype.resolution;
    Hy.prototype.data = Hy.prototype.data;
    t("ol.source.Source", nn);
    nn.prototype.getAttributions = nn.prototype.za;
    nn.prototype.getLogo = nn.prototype.Aa;
    nn.prototype.getProjection = nn.prototype.Da;
    nn.prototype.getState = nn.prototype.getState;
    nn.prototype.refresh = nn.prototype.ra;
    nn.prototype.setAttributions = nn.prototype.ta;
    t("ol.source.Stamen", Ky);
    t("ol.source.Tile", ey);
    ey.prototype.getTileGrid = ey.prototype.gb;
    hy.prototype.tile = hy.prototype.tile;
    t("ol.source.TileArcGISRest", Oy);
    Oy.prototype.getParams = Oy.prototype.o;
    Oy.prototype.updateParams = Oy.prototype.G;
    t("ol.source.TileDebug", Qy);
    t("ol.source.TileImage", jy);
    jy.prototype.setRenderReprojectionEdges = jy.prototype.Qb;
    jy.prototype.setTileGridForProjection = jy.prototype.Rb;
    t("ol.source.TileJSON", Sy);
    Sy.prototype.getTileJSON = Sy.prototype.Jl;
    t("ol.source.TileUTFGrid", Ty);
    Ty.prototype.getTemplate = Ty.prototype.Gl;
    Ty.prototype.forDataAtCoordinateAndResolution = Ty.prototype.Wk;
    t("ol.source.TileWMS", Xy);
    Xy.prototype.getGetFeatureInfoUrl = Xy.prototype.Yo;
    Xy.prototype.getParams = Xy.prototype.Zo;
    Xy.prototype.updateParams = Xy.prototype.$o;
    iy.prototype.getTileLoadFunction = iy.prototype.yb;
    iy.prototype.getTileUrlFunction = iy.prototype.zb;
    iy.prototype.getUrls = iy.prototype.Ab;
    iy.prototype.setTileLoadFunction = iy.prototype.Fb;
    iy.prototype.setTileUrlFunction = iy.prototype.lb;
    iy.prototype.setUrl = iy.prototype.qb;
    iy.prototype.setUrls = iy.prototype.vb;
    t("ol.source.Vector", U);
    U.prototype.addFeature = U.prototype.Gb;
    U.prototype.addFeatures = U.prototype.Oc;
    U.prototype.clear = U.prototype.clear;
    U.prototype.forEachFeature = U.prototype.Ih;
    U.prototype.forEachFeatureInExtent = U.prototype.dc;
    U.prototype.forEachFeatureIntersectingExtent = U.prototype.Jh;
    U.prototype.getFeaturesCollection = U.prototype.Qh;
    U.prototype.getFeatures = U.prototype.ce;
    U.prototype.getFeaturesAtCoordinate = U.prototype.Ph;
    U.prototype.getFeaturesInExtent = U.prototype.Wf;
    U.prototype.getClosestFeatureToCoordinate = U.prototype.Lh;
    U.prototype.getExtent = U.prototype.C;
    U.prototype.getFeatureById = U.prototype.Oh;
    U.prototype.getFormat = U.prototype.bj;
    U.prototype.getUrl = U.prototype.cj;
    U.prototype.removeFeature = U.prototype.Lb;
    U.prototype.setLoader = U.prototype.ej;
    Dw.prototype.feature = Dw.prototype.feature;
    t("ol.source.VectorTile", cz);
    cz.prototype.clear = cz.prototype.clear;
    t("ol.source.WMTS", Z);
    Z.prototype.getDimensions = Z.prototype.gl;
    Z.prototype.getFormat = Z.prototype.ap;
    Z.prototype.getLayer = Z.prototype.bp;
    Z.prototype.getMatrixSet = Z.prototype.tl;
    Z.prototype.getRequestEncoding = Z.prototype.El;
    Z.prototype.getStyle = Z.prototype.cp;
    Z.prototype.getVersion = Z.prototype.Ll;
    Z.prototype.updateDimensions = Z.prototype.Iq;
    t("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
        var c = fc(a.Contents.Layer, function(a) { return a.Identifier == b.layer });
        if (null === c) return null;
        var d = a.Contents.TileMatrixSet;
        var e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? mc(c.TileMatrixSetLink, function(a) { var c = fc(d, function(b) { return b.Identifier == a.TileMatrixSet }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"),
                e = Nb(c),
                f = Nb(b.projection); return e && f ? Wb(e, f) : c == b.projection }) : mc(c.TileMatrixSetLink, function(a) {
            return a.TileMatrixSet ==
                b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        var f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.TileMatrixSetLink[e].TileMatrixSetLimits;
        var h = c.Format[0];
        "format" in b && (h = b.format);
        e = mc(c.Style, function(a) { return "style" in b ? a.Title == b.style : a.isDefault });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var l = {};
        "Dimension" in c && c.Dimension.forEach(function(a) { var b = a.Identifier,
                c = a.Default;
            void 0 === c && (c = a.Value[0]);
            l[b] = c });
        var m = fc(a.Contents.TileMatrixSet, function(a) { return a.Identifier == f });
        var n = "projection" in b ? Nb(b.projection) :
            Nb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = c.WGS84BoundingBox;
        if (void 0 !== p) { var q = Nb("EPSG:4326").C();
            q = p[0] == q[0] && p[2] == q[2]; var r = $b(p, "EPSG:4326", n);
            (p = n.C()) && (Ka(p, r) || (r = void 0)) }
        g = ez(m, r, g);
        var u = [];
        m = b.requestEncoding;
        m = void 0 !== m ? m : "";
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata)
            for (a = a.OperationsMetadata.GetTile.DCP.HTTP.Get, r = 0, p = a.length; r < p; ++r) {
                var x = fc(a[r].Constraint, function(a) { return "GetEncoding" == a.name }).AllowedValues.Value;
                "" === m && (m = x[0]);
                if ("KVP" === m) cc(x, "KVP") && u.push(a[r].href);
                else break
            }
        0 === u.length && (m = "REST", c.ResourceURL.forEach(function(a) { "tile" === a.resourceType && (h = a.format, u.push(a.template)) }));
        return { urls: u, layer: b.layer, matrixSet: f, format: h, projection: n, requestEncoding: m, tileGrid: g, style: e, dimensions: l, wrapX: q, crossOrigin: b.crossOrigin }
    });
    t("ol.source.XYZ", oy);
    t("ol.source.Zoomify", gz);
    t("ol.renderer.webgl.ImageLayer", An);
    t("ol.renderer.webgl.Map", Dn);
    t("ol.renderer.webgl.TileLayer", Kn);
    t("ol.renderer.webgl.VectorLayer", Ln);
    t("ol.renderer.canvas.ImageLayer", Si);
    t("ol.renderer.canvas.Map", $i);
    t("ol.renderer.canvas.TileLayer", bj);
    t("ol.renderer.canvas.VectorLayer", Vj);
    t("ol.renderer.canvas.VectorTileLayer", Xj);
    Yh.prototype.vectorContext = Yh.prototype.vectorContext;
    Yh.prototype.frameState = Yh.prototype.frameState;
    Yh.prototype.context = Yh.prototype.context;
    Yh.prototype.glContext = Yh.prototype.glContext;
    mt.prototype.get = mt.prototype.get;
    mt.prototype.getExtent = mt.prototype.C;
    mt.prototype.getId = mt.prototype.ro;
    mt.prototype.getGeometry = mt.prototype.V;
    mt.prototype.getProperties = mt.prototype.so;
    mt.prototype.getType = mt.prototype.T;
    t("ol.render.VectorContext", qi);
    Xm.prototype.setStyle = Xm.prototype.Bd;
    Xm.prototype.drawGeometry = Xm.prototype.Hb;
    Xm.prototype.drawFeature = Xm.prototype.Be;
    ri.prototype.drawCircle = ri.prototype.cc;
    ri.prototype.setStyle = ri.prototype.Bd;
    ri.prototype.drawGeometry = ri.prototype.Hb;
    ri.prototype.drawFeature = ri.prototype.Be;
    t("ol.proj.common.add", ac);
    t("ol.proj.Projection", vb);
    vb.prototype.getCode = vb.prototype.el;
    vb.prototype.getExtent = vb.prototype.C;
    vb.prototype.getUnits = vb.prototype.qo;
    vb.prototype.getMetersPerUnit = vb.prototype.Wc;
    vb.prototype.getWorldExtent = vb.prototype.Ml;
    vb.prototype.isGlobal = vb.prototype.xm;
    vb.prototype.setGlobal = vb.prototype.oq;
    vb.prototype.setExtent = vb.prototype.Pi;
    vb.prototype.setWorldExtent = vb.prototype.Nj;
    vb.prototype.setGetPointResolution = vb.prototype.nq;
    t("ol.proj.Units.METERS_PER_UNIT", tb);
    t("ol.layer.Base", jg);
    jg.prototype.getExtent = jg.prototype.C;
    jg.prototype.getMaxResolution = jg.prototype.kc;
    jg.prototype.getMinResolution = jg.prototype.lc;
    jg.prototype.getOpacity = jg.prototype.mc;
    jg.prototype.getVisible = jg.prototype.Jb;
    jg.prototype.getZIndex = jg.prototype.Ba;
    jg.prototype.setExtent = jg.prototype.Dc;
    jg.prototype.setMaxResolution = jg.prototype.Kc;
    jg.prototype.setMinResolution = jg.prototype.Lc;
    jg.prototype.setOpacity = jg.prototype.Ec;
    jg.prototype.setVisible = jg.prototype.Fc;
    jg.prototype.setZIndex = jg.prototype.$b;
    t("ol.layer.Group", lg);
    lg.prototype.getLayers = lg.prototype.Ad;
    lg.prototype.setLayers = lg.prototype.Ni;
    t("ol.layer.Heatmap", W);
    W.prototype.getBlur = W.prototype.Kh;
    W.prototype.getGradient = W.prototype.Rh;
    W.prototype.getRadius = W.prototype.Oi;
    W.prototype.setBlur = W.prototype.Aj;
    W.prototype.setGradient = W.prototype.Gj;
    W.prototype.setRadius = W.prototype.ed;
    t("ol.layer.Image", Ux);
    Ux.prototype.getSource = Ux.prototype.ia;
    t("ol.layer.Layer", vg);
    vg.prototype.getSource = vg.prototype.ia;
    vg.prototype.setMap = vg.prototype.setMap;
    vg.prototype.setSource = vg.prototype.gd;
    t("ol.layer.Tile", Vx);
    Vx.prototype.getPreload = Vx.prototype.c;
    Vx.prototype.getSource = Vx.prototype.ia;
    Vx.prototype.setPreload = Vx.prototype.l;
    Vx.prototype.getUseInterimTilesOnError = Vx.prototype.i;
    Vx.prototype.setUseInterimTilesOnError = Vx.prototype.B;
    t("ol.layer.Vector", T);
    T.prototype.getSource = T.prototype.ia;
    T.prototype.getStyle = T.prototype.H;
    T.prototype.getStyleFunction = T.prototype.fb;
    T.prototype.setStyle = T.prototype.l;
    t("ol.layer.VectorTile", X);
    X.prototype.getPreload = X.prototype.c;
    X.prototype.getUseInterimTilesOnError = X.prototype.i;
    X.prototype.setPreload = X.prototype.G;
    X.prototype.setUseInterimTilesOnError = X.prototype.W;
    X.prototype.getSource = X.prototype.ia;
    t("ol.interaction.DoubleClickZoom", Sg);
    t("ol.interaction.DoubleClickZoom.handleEvent", Tg);
    t("ol.interaction.DragAndDrop", nw);
    t("ol.interaction.DragAndDrop.handleEvent", Qe);
    qw.prototype.features = qw.prototype.features;
    qw.prototype.file = qw.prototype.file;
    qw.prototype.projection = qw.prototype.projection;
    t("ol.interaction.DragBox", rh);
    rh.prototype.getGeometry = rh.prototype.V;
    wh.prototype.coordinate = wh.prototype.coordinate;
    wh.prototype.mapBrowserEvent = wh.prototype.mapBrowserEvent;
    t("ol.interaction.DragPan", gh);
    t("ol.interaction.DragRotate", kh);
    t("ol.interaction.DragRotateAndZoom", uw);
    t("ol.interaction.DragZoom", Ah);
    t("ol.interaction.Draw", Gw);
    t("ol.interaction.Draw.handleEvent", Iw);
    Gw.prototype.removeLastPoint = Gw.prototype.fq;
    Gw.prototype.finishDrawing = Gw.prototype.Od;
    Gw.prototype.extend = Gw.prototype.Qn;
    t("ol.interaction.Draw.createRegularPolygon", function(a, b) { return function(c, d) { var e = c[0];
            c = c[1]; var f = Math.sqrt(He(e, c));
            d = d ? d : Tf(new lw(e), a);
            Xf(d, e, f, b ? b : Math.atan((c[1] - e[1]) / (c[0] - e[0]))); return d } });
    t("ol.interaction.Draw.createBox", function() { return function(a, b) { a = Ba(a);
            b = b || new D(null);
            b.na([
                [Va(a), Wa(a), Xa(a), Ya(a), Va(a)]
            ]); return b } });
    Ww.prototype.feature = Ww.prototype.feature;
    t("ol.interaction.Extent", Xw);
    Xw.prototype.getExtent = Xw.prototype.C;
    Xw.prototype.setExtent = Xw.prototype.f;
    hx.prototype.extent = hx.prototype.extent;
    t("ol.interaction.Interaction", Hg);
    Hg.prototype.getActive = Hg.prototype.c;
    Hg.prototype.getMap = Hg.prototype.i;
    Hg.prototype.setActive = Hg.prototype.Ha;
    t("ol.interaction.KeyboardPan", Bh);
    t("ol.interaction.KeyboardPan.handleEvent", Ch);
    t("ol.interaction.KeyboardZoom", Dh);
    t("ol.interaction.KeyboardZoom.handleEvent", Kh);
    t("ol.interaction.Modify", ix);
    t("ol.interaction.Modify.handleEvent", lx);
    ix.prototype.removePoint = ix.prototype.yj;
    qx.prototype.features = qx.prototype.features;
    qx.prototype.mapBrowserEvent = qx.prototype.mapBrowserEvent;
    t("ol.interaction.MouseWheelZoom", Lh);
    t("ol.interaction.MouseWheelZoom.handleEvent", Mh);
    Lh.prototype.setMouseAnchor = Lh.prototype.W;
    t("ol.interaction.PinchRotate", Ph);
    t("ol.interaction.PinchZoom", Th);
    t("ol.interaction.Pointer", dh);
    t("ol.interaction.Pointer.handleEvent", eh);
    t("ol.interaction.Select", yx);
    yx.prototype.getFeatures = yx.prototype.ao;
    yx.prototype.getHitTolerance = yx.prototype.bo;
    yx.prototype.getLayer = yx.prototype.co;
    t("ol.interaction.Select.handleEvent", zx);
    yx.prototype.setHitTolerance = yx.prototype.fo;
    yx.prototype.setMap = yx.prototype.setMap;
    Bx.prototype.selected = Bx.prototype.selected;
    Bx.prototype.deselected = Bx.prototype.deselected;
    Bx.prototype.mapBrowserEvent = Bx.prototype.mapBrowserEvent;
    t("ol.interaction.Snap", Dx);
    Dx.prototype.addFeature = Dx.prototype.Gb;
    Dx.prototype.removeFeature = Dx.prototype.Lb;
    t("ol.interaction.Translate", Ix);
    Ix.prototype.getHitTolerance = Ix.prototype.H;
    Ix.prototype.setHitTolerance = Ix.prototype.G;
    Ox.prototype.features = Ox.prototype.features;
    Ox.prototype.coordinate = Ox.prototype.coordinate;
    t("ol.geom.Circle", lw);
    lw.prototype.clone = lw.prototype.clone;
    lw.prototype.getCenter = lw.prototype.wa;
    lw.prototype.getRadius = lw.prototype.zd;
    lw.prototype.getType = lw.prototype.T;
    lw.prototype.intersectsExtent = lw.prototype.$a;
    lw.prototype.setCenter = lw.prototype.tb;
    lw.prototype.setCenterAndRadius = lw.prototype.gh;
    lw.prototype.setRadius = lw.prototype.ed;
    lw.prototype.transform = lw.prototype.jb;
    t("ol.geom.Geometry", ff);
    ff.prototype.getClosestPoint = ff.prototype.Ib;
    ff.prototype.intersectsCoordinate = ff.prototype.Bb;
    ff.prototype.getExtent = ff.prototype.C;
    ff.prototype.rotate = ff.prototype.rotate;
    ff.prototype.scale = ff.prototype.scale;
    ff.prototype.simplify = ff.prototype.Sb;
    ff.prototype.transform = ff.prototype.jb;
    t("ol.geom.GeometryCollection", Qq);
    Qq.prototype.clone = Qq.prototype.clone;
    Qq.prototype.getGeometries = Qq.prototype.td;
    Qq.prototype.getType = Qq.prototype.T;
    Qq.prototype.intersectsExtent = Qq.prototype.$a;
    Qq.prototype.setGeometries = Qq.prototype.Fj;
    Qq.prototype.applyTransform = Qq.prototype.Pc;
    Qq.prototype.translate = Qq.prototype.translate;
    t("ol.geom.LinearRing", Ef);
    Ef.prototype.clone = Ef.prototype.clone;
    Ef.prototype.getArea = Ef.prototype.Mn;
    Ef.prototype.getCoordinates = Ef.prototype.U;
    Ef.prototype.getType = Ef.prototype.T;
    Ef.prototype.setCoordinates = Ef.prototype.na;
    t("ol.geom.LineString", I);
    I.prototype.appendCoordinate = I.prototype.Ak;
    I.prototype.clone = I.prototype.clone;
    I.prototype.forEachSegment = I.prototype.Zk;
    I.prototype.getCoordinateAtM = I.prototype.Kn;
    I.prototype.getCoordinates = I.prototype.U;
    I.prototype.getCoordinateAt = I.prototype.Mh;
    I.prototype.getLength = I.prototype.Ln;
    I.prototype.getType = I.prototype.T;
    I.prototype.intersectsExtent = I.prototype.$a;
    I.prototype.setCoordinates = I.prototype.na;
    t("ol.geom.MultiLineString", P);
    P.prototype.appendLineString = P.prototype.Bk;
    P.prototype.clone = P.prototype.clone;
    P.prototype.getCoordinateAtM = P.prototype.Nn;
    P.prototype.getCoordinates = P.prototype.U;
    P.prototype.getLineString = P.prototype.rl;
    P.prototype.getLineStrings = P.prototype.ud;
    P.prototype.getType = P.prototype.T;
    P.prototype.intersectsExtent = P.prototype.$a;
    P.prototype.setCoordinates = P.prototype.na;
    t("ol.geom.MultiPoint", Q);
    Q.prototype.appendPoint = Q.prototype.Dk;
    Q.prototype.clone = Q.prototype.clone;
    Q.prototype.getCoordinates = Q.prototype.U;
    Q.prototype.getPoint = Q.prototype.Cl;
    Q.prototype.getPoints = Q.prototype.be;
    Q.prototype.getType = Q.prototype.T;
    Q.prototype.intersectsExtent = Q.prototype.$a;
    Q.prototype.setCoordinates = Q.prototype.na;
    t("ol.geom.MultiPolygon", R);
    R.prototype.appendPolygon = R.prototype.Ek;
    R.prototype.clone = R.prototype.clone;
    R.prototype.getArea = R.prototype.On;
    R.prototype.getCoordinates = R.prototype.U;
    R.prototype.getInteriorPoints = R.prototype.nl;
    R.prototype.getPolygon = R.prototype.Dl;
    R.prototype.getPolygons = R.prototype.Ud;
    R.prototype.getType = R.prototype.T;
    R.prototype.intersectsExtent = R.prototype.$a;
    R.prototype.setCoordinates = R.prototype.na;
    t("ol.geom.Point", B);
    B.prototype.clone = B.prototype.clone;
    B.prototype.getCoordinates = B.prototype.U;
    B.prototype.getType = B.prototype.T;
    B.prototype.intersectsExtent = B.prototype.$a;
    B.prototype.setCoordinates = B.prototype.na;
    t("ol.geom.Polygon", D);
    D.prototype.appendLinearRing = D.prototype.Ck;
    D.prototype.clone = D.prototype.clone;
    D.prototype.getArea = D.prototype.Pn;
    D.prototype.getCoordinates = D.prototype.U;
    D.prototype.getInteriorPoint = D.prototype.ml;
    D.prototype.getLinearRingCount = D.prototype.sl;
    D.prototype.getLinearRing = D.prototype.Th;
    D.prototype.getLinearRings = D.prototype.Td;
    D.prototype.getType = D.prototype.T;
    D.prototype.intersectsExtent = D.prototype.$a;
    D.prototype.setCoordinates = D.prototype.na;
    t("ol.geom.Polygon.circular", Rf);
    t("ol.geom.Polygon.fromExtent", Sf);
    t("ol.geom.Polygon.fromCircle", Tf);
    t("ol.geom.SimpleGeometry", gf);
    gf.prototype.getFirstCoordinate = gf.prototype.ec;
    gf.prototype.getLastCoordinate = gf.prototype.fc;
    gf.prototype.getLayout = gf.prototype.hc;
    gf.prototype.applyTransform = gf.prototype.Pc;
    gf.prototype.translate = gf.prototype.translate;
    t("ol.format.EsriJSON", Zo);
    Zo.prototype.readFeature = Zo.prototype.Yb;
    Zo.prototype.readFeatures = Zo.prototype.Na;
    Zo.prototype.readGeometry = Zo.prototype.dd;
    Zo.prototype.readProjection = Zo.prototype.rb;
    Zo.prototype.writeGeometry = Zo.prototype.ld;
    Zo.prototype.writeGeometryObject = Zo.prototype.re;
    Zo.prototype.writeFeature = Zo.prototype.Id;
    Zo.prototype.writeFeatureObject = Zo.prototype.kd;
    Zo.prototype.writeFeatures = Zo.prototype.ac;
    Zo.prototype.writeFeaturesObject = Zo.prototype.pe;
    t("ol.format.Feature", Ro);
    t("ol.format.filter.and", fu);
    t("ol.format.filter.or", function(a) { var b = [null].concat(Array.prototype.slice.call(arguments)); return new(Function.prototype.bind.apply(du, b)) });
    t("ol.format.filter.not", function(a) { return new bu(a) });
    t("ol.format.filter.bbox", gu);
    t("ol.format.filter.contains", function(a, b, c) { return new Pt(a, b, c) });
    t("ol.format.filter.intersects", function(a, b, c) { return new Wt(a, b, c) });
    t("ol.format.filter.within", function(a, b, c) { return new eu(a, b, c) });
    t("ol.format.filter.equalTo", function(a, b, c) { return new Tt(a, b, c) });
    t("ol.format.filter.notEqualTo", function(a, b, c) { return new cu(a, b, c) });
    t("ol.format.filter.lessThan", function(a, b) { return new $t(a, b) });
    t("ol.format.filter.lessThanOrEqualTo", function(a, b) { return new au(a, b) });
    t("ol.format.filter.greaterThan", function(a, b) { return new Ut(a, b) });
    t("ol.format.filter.greaterThanOrEqualTo", function(a, b) { return new Vt(a, b) });
    t("ol.format.filter.isNull", function(a) { return new Zt(a) });
    t("ol.format.filter.between", function(a, b, c) { return new Xt(a, b, c) });
    t("ol.format.filter.like", function(a, b, c, d, e, f) { return new Yt(a, b, c, d, e, f) });
    t("ol.format.filter.during", function(a, b, c) { return new Rt(a, b, c) });
    t("ol.format.GeoJSON", Uq);
    Uq.prototype.readFeature = Uq.prototype.Yb;
    Uq.prototype.readFeatures = Uq.prototype.Na;
    Uq.prototype.readGeometry = Uq.prototype.dd;
    Uq.prototype.readProjection = Uq.prototype.rb;
    Uq.prototype.writeFeature = Uq.prototype.Id;
    Uq.prototype.writeFeatureObject = Uq.prototype.kd;
    Uq.prototype.writeFeatures = Uq.prototype.ac;
    Uq.prototype.writeFeaturesObject = Uq.prototype.pe;
    Uq.prototype.writeGeometry = Uq.prototype.ld;
    Uq.prototype.writeGeometryObject = Uq.prototype.re;
    t("ol.format.GML", Op);
    Op.prototype.writeFeatures = Op.prototype.ac;
    Op.prototype.writeFeaturesNode = Op.prototype.bc;
    t("ol.format.GML2", Xp);
    t("ol.format.GML3", Op);
    Op.prototype.writeGeometryNode = Op.prototype.qe;
    Op.prototype.writeFeatures = Op.prototype.ac;
    Op.prototype.writeFeaturesNode = Op.prototype.bc;
    Bp.prototype.readFeatures = Bp.prototype.Na;
    t("ol.format.GPX", hq);
    hq.prototype.readFeature = hq.prototype.Yb;
    hq.prototype.readFeatures = hq.prototype.Na;
    hq.prototype.readProjection = hq.prototype.rb;
    hq.prototype.writeFeatures = hq.prototype.ac;
    hq.prototype.writeFeaturesNode = hq.prototype.bc;
    t("ol.format.IGC", ar);
    ar.prototype.readFeature = ar.prototype.Yb;
    ar.prototype.readFeatures = ar.prototype.Na;
    ar.prototype.readProjection = ar.prototype.rb;
    t("ol.format.KML", ir);
    ir.prototype.readFeature = ir.prototype.Yb;
    ir.prototype.readFeatures = ir.prototype.Na;
    ir.prototype.readName = ir.prototype.Vp;
    ir.prototype.readNetworkLinks = ir.prototype.Wp;
    ir.prototype.readRegion = ir.prototype.Zp;
    ir.prototype.readRegionFromNode = ir.prototype.tf;
    ir.prototype.readProjection = ir.prototype.rb;
    ir.prototype.writeFeatures = ir.prototype.ac;
    ir.prototype.writeFeaturesNode = ir.prototype.bc;
    t("ol.format.MVT", nt);
    nt.prototype.getLastExtent = nt.prototype.ag;
    nt.prototype.readFeatures = nt.prototype.Na;
    nt.prototype.readProjection = nt.prototype.rb;
    nt.prototype.setLayers = nt.prototype.Jn;
    t("ol.format.OSMXML", st);
    st.prototype.readFeatures = st.prototype.Na;
    st.prototype.readProjection = st.prototype.rb;
    t("ol.format.Polyline", zt);
    t("ol.format.Polyline.encodeDeltas", At);
    t("ol.format.Polyline.decodeDeltas", Ct);
    t("ol.format.Polyline.encodeFloats", Bt);
    t("ol.format.Polyline.decodeFloats", Dt);
    zt.prototype.readFeature = zt.prototype.Yb;
    zt.prototype.readFeatures = zt.prototype.Na;
    zt.prototype.readGeometry = zt.prototype.dd;
    zt.prototype.readProjection = zt.prototype.rb;
    zt.prototype.writeGeometry = zt.prototype.ld;
    t("ol.format.TopoJSON", Et);
    Et.prototype.readFeatures = Et.prototype.Na;
    Et.prototype.readProjection = Et.prototype.rb;
    t("ol.format.WFS", uu);
    uu.prototype.readFeatures = uu.prototype.Na;
    uu.prototype.readTransactionResponse = uu.prototype.j;
    uu.prototype.readFeatureCollectionMetadata = uu.prototype.f;
    t("ol.format.WFS.writeFilter", function(a) { var b = yo("http://www.opengis.net/ogc", "Filter");
        Oo({ node: b }, Ju, Jo(a.qc), [a], []); return b });
    uu.prototype.writeGetFeature = uu.prototype.s;
    uu.prototype.writeTransaction = uu.prototype.v;
    uu.prototype.readProjection = uu.prototype.rb;
    t("ol.format.WKT", Pu);
    Pu.prototype.readFeature = Pu.prototype.Yb;
    Pu.prototype.readFeatures = Pu.prototype.Na;
    Pu.prototype.readGeometry = Pu.prototype.dd;
    Pu.prototype.writeFeature = Pu.prototype.Id;
    Pu.prototype.writeFeatures = Pu.prototype.ac;
    Pu.prototype.writeGeometry = Pu.prototype.ld;
    t("ol.format.WMSCapabilities", jv);
    jv.prototype.read = jv.prototype.read;
    t("ol.format.WMSGetFeatureInfo", Gv);
    Gv.prototype.readFeatures = Gv.prototype.Na;
    t("ol.format.WMTSCapabilities", Xv);
    Xv.prototype.read = Xv.prototype.read;
    t("ol.format.filter.And", Mt);
    t("ol.format.filter.Bbox", Nt);
    t("ol.format.filter.Comparison", Qt);
    t("ol.format.filter.ComparisonBinary", St);
    t("ol.format.filter.Contains", Pt);
    t("ol.format.filter.During", Rt);
    t("ol.format.filter.EqualTo", Tt);
    t("ol.format.filter.Filter", Kt);
    t("ol.format.filter.GreaterThan", Ut);
    t("ol.format.filter.GreaterThanOrEqualTo", Vt);
    t("ol.format.filter.Intersects", Wt);
    t("ol.format.filter.IsBetween", Xt);
    t("ol.format.filter.IsLike", Yt);
    t("ol.format.filter.IsNull", Zt);
    t("ol.format.filter.LessThan", $t);
    t("ol.format.filter.LessThanOrEqualTo", au);
    t("ol.format.filter.Not", bu);
    t("ol.format.filter.NotEqualTo", cu);
    t("ol.format.filter.Or", du);
    t("ol.format.filter.Spatial", Ot);
    t("ol.format.filter.Within", eu);
    t("ol.events.condition.altKeyOnly", Ug);
    t("ol.events.condition.altShiftKeysOnly", Vg);
    t("ol.events.condition.always", Qe);
    t("ol.events.condition.click", function(a) { return "click" == a.type });
    t("ol.events.condition.never", Re);
    t("ol.events.condition.pointerMove", Xg);
    t("ol.events.condition.singleClick", Yg);
    t("ol.events.condition.doubleClick", function(a) { return "dblclick" == a.type });
    t("ol.events.condition.noModifierKeys", Zg);
    t("ol.events.condition.platformModifierKeyOnly", function(a) { a = a.originalEvent; return !a.altKey && (md ? a.metaKey : a.ctrlKey) && !a.shiftKey });
    t("ol.events.condition.shiftKeyOnly", $g);
    t("ol.events.condition.targetNotEditable", ah);
    t("ol.events.condition.mouseOnly", bh);
    t("ol.events.condition.primaryAction", ch);
    Qc.prototype.type = Qc.prototype.type;
    Qc.prototype.target = Qc.prototype.target;
    Qc.prototype.preventDefault = Qc.prototype.preventDefault;
    Qc.prototype.stopPropagation = Qc.prototype.stopPropagation;
    t("ol.control.Attribution", xg);
    t("ol.control.Attribution.render", yg);
    xg.prototype.getCollapsible = xg.prototype.qn;
    xg.prototype.setCollapsible = xg.prototype.tn;
    xg.prototype.setCollapsed = xg.prototype.sn;
    xg.prototype.getCollapsed = xg.prototype.pn;
    t("ol.control.Control", tg);
    tg.prototype.getMap = tg.prototype.f;
    tg.prototype.setMap = tg.prototype.setMap;
    tg.prototype.setTarget = tg.prototype.i;
    t("ol.control.FullScreen", Xn);
    t("ol.control.MousePosition", bo);
    t("ol.control.MousePosition.render", co);
    bo.prototype.getCoordinateFormat = bo.prototype.Nh;
    bo.prototype.getProjection = bo.prototype.oi;
    bo.prototype.setCoordinateFormat = bo.prototype.Bj;
    bo.prototype.setProjection = bo.prototype.pi;
    t("ol.control.OverviewMap", ho);
    t("ol.control.OverviewMap.render", io);
    ho.prototype.getCollapsible = ho.prototype.xn;
    ho.prototype.setCollapsible = ho.prototype.An;
    ho.prototype.setCollapsed = ho.prototype.zn;
    ho.prototype.getCollapsed = ho.prototype.wn;
    ho.prototype.getOverviewMap = ho.prototype.zl;
    t("ol.control.Rotate", Ag);
    t("ol.control.Rotate.render", Bg);
    t("ol.control.ScaleLine", mo);
    mo.prototype.getUnits = mo.prototype.B;
    t("ol.control.ScaleLine.render", no);
    mo.prototype.setUnits = mo.prototype.O;
    t("ol.control.Zoom", Cg);
    t("ol.control.ZoomSlider", ro);
    t("ol.control.ZoomSlider.render", to);
    t("ol.control.ZoomToExtent", wo);
    Vc.prototype.changed = Vc.prototype.u;
    Vc.prototype.dispatchEvent = Vc.prototype.b;
    Vc.prototype.getRevision = Vc.prototype.L;
    Vc.prototype.on = Vc.prototype.J;
    Vc.prototype.once = Vc.prototype.once;
    Vc.prototype.un = Vc.prototype.K;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.R;
    G.prototype.getProperties = G.prototype.M;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.I;
    G.prototype.unset = G.prototype.S;
    G.prototype.changed = G.prototype.u;
    G.prototype.dispatchEvent = G.prototype.b;
    G.prototype.getRevision = G.prototype.L;
    G.prototype.on = G.prototype.J;
    G.prototype.once = G.prototype.once;
    G.prototype.un = G.prototype.K;
    H.prototype.addControl = H.prototype.Kf;
    H.prototype.addInteraction = H.prototype.Lf;
    H.prototype.addLayer = H.prototype.we;
    H.prototype.addOverlay = H.prototype.xe;
    H.prototype.forEachFeatureAtPixel = H.prototype.Sc;
    H.prototype.getFeaturesAtPixel = H.prototype.Vf;
    H.prototype.forEachLayerAtPixel = H.prototype.rg;
    H.prototype.hasFeatureAtPixel = H.prototype.lg;
    H.prototype.getEventCoordinate = H.prototype.Rd;
    H.prototype.getEventPixel = H.prototype.sd;
    H.prototype.getTarget = H.prototype.Wd;
    H.prototype.getTargetElement = H.prototype.Ac;
    H.prototype.getCoordinateFromPixel = H.prototype.Pa;
    H.prototype.getControls = H.prototype.Uf;
    H.prototype.getOverlays = H.prototype.eg;
    H.prototype.getOverlayById = H.prototype.dg;
    H.prototype.getInteractions = H.prototype.$f;
    H.prototype.getLayerGroup = H.prototype.gc;
    H.prototype.getLayers = H.prototype.We;
    H.prototype.getPixelFromCoordinate = H.prototype.Ia;
    H.prototype.getSize = H.prototype.Cb;
    H.prototype.getView = H.prototype.$;
    H.prototype.getViewport = H.prototype.ig;
    H.prototype.renderSync = H.prototype.bh;
    H.prototype.render = H.prototype.render;
    H.prototype.removeControl = H.prototype.Wg;
    H.prototype.removeInteraction = H.prototype.Yg;
    H.prototype.removeLayer = H.prototype.Zg;
    H.prototype.removeOverlay = H.prototype.$g;
    H.prototype.setLayerGroup = H.prototype.xf;
    H.prototype.setSize = H.prototype.ge;
    H.prototype.setTarget = H.prototype.yd;
    H.prototype.setView = H.prototype.ih;
    H.prototype.updateSize = H.prototype.Mc;
    H.prototype.get = H.prototype.get;
    H.prototype.getKeys = H.prototype.R;
    H.prototype.getProperties = H.prototype.M;
    H.prototype.set = H.prototype.set;
    H.prototype.setProperties = H.prototype.I;
    H.prototype.unset = H.prototype.S;
    H.prototype.changed = H.prototype.u;
    H.prototype.dispatchEvent = H.prototype.b;
    H.prototype.getRevision = H.prototype.L;
    H.prototype.on = H.prototype.J;
    H.prototype.once = H.prototype.once;
    H.prototype.un = H.prototype.K;
    A.prototype.get = A.prototype.get;
    A.prototype.getKeys = A.prototype.R;
    A.prototype.getProperties = A.prototype.M;
    A.prototype.set = A.prototype.set;
    A.prototype.setProperties = A.prototype.I;
    A.prototype.unset = A.prototype.S;
    A.prototype.changed = A.prototype.u;
    A.prototype.dispatchEvent = A.prototype.b;
    A.prototype.getRevision = A.prototype.L;
    A.prototype.on = A.prototype.J;
    A.prototype.once = A.prototype.once;
    A.prototype.un = A.prototype.K;
    cd.prototype.type = cd.prototype.type;
    cd.prototype.target = cd.prototype.target;
    cd.prototype.preventDefault = cd.prototype.preventDefault;
    cd.prototype.stopPropagation = cd.prototype.stopPropagation;
    dk.prototype.get = dk.prototype.get;
    dk.prototype.getKeys = dk.prototype.R;
    dk.prototype.getProperties = dk.prototype.M;
    dk.prototype.set = dk.prototype.set;
    dk.prototype.setProperties = dk.prototype.I;
    dk.prototype.unset = dk.prototype.S;
    dk.prototype.changed = dk.prototype.u;
    dk.prototype.dispatchEvent = dk.prototype.b;
    dk.prototype.getRevision = dk.prototype.L;
    dk.prototype.on = dk.prototype.J;
    dk.prototype.once = dk.prototype.once;
    dk.prototype.un = dk.prototype.K;
    vk.prototype.get = vk.prototype.get;
    vk.prototype.getKeys = vk.prototype.R;
    vk.prototype.getProperties = vk.prototype.M;
    vk.prototype.set = vk.prototype.set;
    vk.prototype.setProperties = vk.prototype.I;
    vk.prototype.unset = vk.prototype.S;
    vk.prototype.changed = vk.prototype.u;
    vk.prototype.dispatchEvent = vk.prototype.b;
    vk.prototype.getRevision = vk.prototype.L;
    vk.prototype.on = vk.prototype.J;
    vk.prototype.once = vk.prototype.once;
    vk.prototype.un = vk.prototype.K;
    xk.prototype.get = xk.prototype.get;
    xk.prototype.getKeys = xk.prototype.R;
    xk.prototype.getProperties = xk.prototype.M;
    xk.prototype.set = xk.prototype.set;
    xk.prototype.setProperties = xk.prototype.I;
    xk.prototype.unset = xk.prototype.S;
    xk.prototype.changed = xk.prototype.u;
    xk.prototype.dispatchEvent = xk.prototype.b;
    xk.prototype.getRevision = xk.prototype.L;
    xk.prototype.on = xk.prototype.J;
    xk.prototype.once = xk.prototype.once;
    xk.prototype.un = xk.prototype.K;
    Vk.prototype.getTileCoord = Vk.prototype.i;
    Vk.prototype.load = Vk.prototype.load;
    J.prototype.addControl = J.prototype.Kf;
    J.prototype.addInteraction = J.prototype.Lf;
    J.prototype.addLayer = J.prototype.we;
    J.prototype.addOverlay = J.prototype.xe;
    J.prototype.forEachFeatureAtPixel = J.prototype.Sc;
    J.prototype.getFeaturesAtPixel = J.prototype.Vf;
    J.prototype.forEachLayerAtPixel = J.prototype.rg;
    J.prototype.hasFeatureAtPixel = J.prototype.lg;
    J.prototype.getEventCoordinate = J.prototype.Rd;
    J.prototype.getEventPixel = J.prototype.sd;
    J.prototype.getTarget = J.prototype.Wd;
    J.prototype.getTargetElement = J.prototype.Ac;
    J.prototype.getCoordinateFromPixel = J.prototype.Pa;
    J.prototype.getControls = J.prototype.Uf;
    J.prototype.getOverlays = J.prototype.eg;
    J.prototype.getOverlayById = J.prototype.dg;
    J.prototype.getInteractions = J.prototype.$f;
    J.prototype.getLayerGroup = J.prototype.gc;
    J.prototype.getLayers = J.prototype.We;
    J.prototype.getPixelFromCoordinate = J.prototype.Ia;
    J.prototype.getSize = J.prototype.Cb;
    J.prototype.getView = J.prototype.$;
    J.prototype.getViewport = J.prototype.ig;
    J.prototype.renderSync = J.prototype.bh;
    J.prototype.render = J.prototype.render;
    J.prototype.removeControl = J.prototype.Wg;
    J.prototype.removeInteraction = J.prototype.Yg;
    J.prototype.removeLayer = J.prototype.Zg;
    J.prototype.removeOverlay = J.prototype.$g;
    J.prototype.setLayerGroup = J.prototype.xf;
    J.prototype.setSize = J.prototype.ge;
    J.prototype.setTarget = J.prototype.yd;
    J.prototype.setView = J.prototype.ih;
    J.prototype.updateSize = J.prototype.Mc;
    J.prototype.get = J.prototype.get;
    J.prototype.getKeys = J.prototype.R;
    J.prototype.getProperties = J.prototype.M;
    J.prototype.set = J.prototype.set;
    J.prototype.setProperties = J.prototype.I;
    J.prototype.unset = J.prototype.S;
    J.prototype.changed = J.prototype.u;
    J.prototype.dispatchEvent = J.prototype.b;
    J.prototype.getRevision = J.prototype.L;
    J.prototype.on = J.prototype.J;
    J.prototype.once = J.prototype.once;
    J.prototype.un = J.prototype.K;
    dd.prototype.type = dd.prototype.type;
    dd.prototype.target = dd.prototype.target;
    dd.prototype.preventDefault = dd.prototype.preventDefault;
    dd.prototype.stopPropagation = dd.prototype.stopPropagation;
    ed.prototype.map = ed.prototype.map;
    ed.prototype.frameState = ed.prototype.frameState;
    ed.prototype.type = ed.prototype.type;
    ed.prototype.target = ed.prototype.target;
    ed.prototype.preventDefault = ed.prototype.preventDefault;
    ed.prototype.stopPropagation = ed.prototype.stopPropagation;
    Ad.prototype.originalEvent = Ad.prototype.originalEvent;
    Ad.prototype.pixel = Ad.prototype.pixel;
    Ad.prototype.coordinate = Ad.prototype.coordinate;
    Ad.prototype.dragging = Ad.prototype.dragging;
    Ad.prototype.preventDefault = Ad.prototype.preventDefault;
    Ad.prototype.stopPropagation = Ad.prototype.stopPropagation;
    Ad.prototype.map = Ad.prototype.map;
    Ad.prototype.frameState = Ad.prototype.frameState;
    Ad.prototype.type = Ad.prototype.type;
    Ad.prototype.target = Ad.prototype.target;
    Zc.prototype.type = Zc.prototype.type;
    Zc.prototype.target = Zc.prototype.target;
    Zc.prototype.preventDefault = Zc.prototype.preventDefault;
    Zc.prototype.stopPropagation = Zc.prototype.stopPropagation;
    Mn.prototype.get = Mn.prototype.get;
    Mn.prototype.getKeys = Mn.prototype.R;
    Mn.prototype.getProperties = Mn.prototype.M;
    Mn.prototype.set = Mn.prototype.set;
    Mn.prototype.setProperties = Mn.prototype.I;
    Mn.prototype.unset = Mn.prototype.S;
    Mn.prototype.changed = Mn.prototype.u;
    Mn.prototype.dispatchEvent = Mn.prototype.b;
    Mn.prototype.getRevision = Mn.prototype.L;
    Mn.prototype.on = Mn.prototype.J;
    Mn.prototype.once = Mn.prototype.once;
    Mn.prototype.un = Mn.prototype.K;
    az.prototype.getTileCoord = az.prototype.i;
    az.prototype.load = az.prototype.load;
    Vn.prototype.getTileCoord = Vn.prototype.i;
    Vn.prototype.load = Vn.prototype.load;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.R;
    F.prototype.getProperties = F.prototype.M;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.I;
    F.prototype.unset = F.prototype.S;
    F.prototype.changed = F.prototype.u;
    F.prototype.dispatchEvent = F.prototype.b;
    F.prototype.getRevision = F.prototype.L;
    F.prototype.on = F.prototype.J;
    F.prototype.once = F.prototype.once;
    F.prototype.un = F.prototype.K;
    dz.prototype.forEachTileCoord = dz.prototype.Tf;
    dz.prototype.getMaxZoom = dz.prototype.jj;
    dz.prototype.getMinZoom = dz.prototype.kj;
    dz.prototype.getOrigin = dz.prototype.Gc;
    dz.prototype.getResolution = dz.prototype.Sa;
    dz.prototype.getResolutions = dz.prototype.lj;
    dz.prototype.getTileCoordExtent = dz.prototype.La;
    dz.prototype.getTileCoordForCoordAndResolution = dz.prototype.Ke;
    dz.prototype.getTileCoordForCoordAndZ = dz.prototype.hg;
    dz.prototype.getTileSize = dz.prototype.Za;
    dz.prototype.getZForResolution = dz.prototype.Bc;
    kk.prototype.getOpacity = kk.prototype.ff;
    kk.prototype.getRotateWithView = kk.prototype.gf;
    kk.prototype.getRotation = kk.prototype.hf;
    kk.prototype.getScale = kk.prototype.jf;
    kk.prototype.getSnapToPixel = kk.prototype.Je;
    kk.prototype.setOpacity = kk.prototype.Dd;
    kk.prototype.setRotation = kk.prototype.kf;
    kk.prototype.setScale = kk.prototype.Ed;
    mk.prototype.clone = mk.prototype.clone;
    mk.prototype.getAngle = mk.prototype.fj;
    mk.prototype.getFill = mk.prototype.Ea;
    mk.prototype.getPoints = mk.prototype.gj;
    mk.prototype.getRadius = mk.prototype.hj;
    mk.prototype.getRadius2 = mk.prototype.Wh;
    mk.prototype.getStroke = mk.prototype.Fa;
    mk.prototype.getOpacity = mk.prototype.ff;
    mk.prototype.getRotateWithView = mk.prototype.gf;
    mk.prototype.getRotation = mk.prototype.hf;
    mk.prototype.getScale = mk.prototype.jf;
    mk.prototype.getSnapToPixel = mk.prototype.Je;
    mk.prototype.setOpacity = mk.prototype.Dd;
    mk.prototype.setRotation = mk.prototype.kf;
    mk.prototype.setScale = mk.prototype.Ed;
    hr.prototype.getOpacity = hr.prototype.ff;
    hr.prototype.getRotateWithView = hr.prototype.gf;
    hr.prototype.getRotation = hr.prototype.hf;
    hr.prototype.getScale = hr.prototype.jf;
    hr.prototype.getSnapToPixel = hr.prototype.Je;
    hr.prototype.setOpacity = hr.prototype.Dd;
    hr.prototype.setRotation = hr.prototype.kf;
    hr.prototype.setScale = hr.prototype.Ed;
    nn.prototype.get = nn.prototype.get;
    nn.prototype.getKeys = nn.prototype.R;
    nn.prototype.getProperties = nn.prototype.M;
    nn.prototype.set = nn.prototype.set;
    nn.prototype.setProperties = nn.prototype.I;
    nn.prototype.unset = nn.prototype.S;
    nn.prototype.changed = nn.prototype.u;
    nn.prototype.dispatchEvent = nn.prototype.b;
    nn.prototype.getRevision = nn.prototype.L;
    nn.prototype.on = nn.prototype.J;
    nn.prototype.once = nn.prototype.once;
    nn.prototype.un = nn.prototype.K;
    ey.prototype.getAttributions = ey.prototype.za;
    ey.prototype.getLogo = ey.prototype.Aa;
    ey.prototype.getProjection = ey.prototype.Da;
    ey.prototype.getState = ey.prototype.getState;
    ey.prototype.refresh = ey.prototype.ra;
    ey.prototype.setAttributions = ey.prototype.ta;
    ey.prototype.get = ey.prototype.get;
    ey.prototype.getKeys = ey.prototype.R;
    ey.prototype.getProperties = ey.prototype.M;
    ey.prototype.set = ey.prototype.set;
    ey.prototype.setProperties = ey.prototype.I;
    ey.prototype.unset = ey.prototype.S;
    ey.prototype.changed = ey.prototype.u;
    ey.prototype.dispatchEvent = ey.prototype.b;
    ey.prototype.getRevision = ey.prototype.L;
    ey.prototype.on = ey.prototype.J;
    ey.prototype.once = ey.prototype.once;
    ey.prototype.un = ey.prototype.K;
    iy.prototype.getTileGrid = iy.prototype.gb;
    iy.prototype.refresh = iy.prototype.ra;
    iy.prototype.getAttributions = iy.prototype.za;
    iy.prototype.getLogo = iy.prototype.Aa;
    iy.prototype.getProjection = iy.prototype.Da;
    iy.prototype.getState = iy.prototype.getState;
    iy.prototype.setAttributions = iy.prototype.ta;
    iy.prototype.get = iy.prototype.get;
    iy.prototype.getKeys = iy.prototype.R;
    iy.prototype.getProperties = iy.prototype.M;
    iy.prototype.set = iy.prototype.set;
    iy.prototype.setProperties = iy.prototype.I;
    iy.prototype.unset = iy.prototype.S;
    iy.prototype.changed = iy.prototype.u;
    iy.prototype.dispatchEvent = iy.prototype.b;
    iy.prototype.getRevision = iy.prototype.L;
    iy.prototype.on = iy.prototype.J;
    iy.prototype.once = iy.prototype.once;
    iy.prototype.un = iy.prototype.K;
    jy.prototype.getTileLoadFunction = jy.prototype.yb;
    jy.prototype.getTileUrlFunction = jy.prototype.zb;
    jy.prototype.getUrls = jy.prototype.Ab;
    jy.prototype.setTileLoadFunction = jy.prototype.Fb;
    jy.prototype.setTileUrlFunction = jy.prototype.lb;
    jy.prototype.setUrl = jy.prototype.qb;
    jy.prototype.setUrls = jy.prototype.vb;
    jy.prototype.getTileGrid = jy.prototype.gb;
    jy.prototype.refresh = jy.prototype.ra;
    jy.prototype.getAttributions = jy.prototype.za;
    jy.prototype.getLogo = jy.prototype.Aa;
    jy.prototype.getProjection = jy.prototype.Da;
    jy.prototype.getState = jy.prototype.getState;
    jy.prototype.setAttributions = jy.prototype.ta;
    jy.prototype.get = jy.prototype.get;
    jy.prototype.getKeys = jy.prototype.R;
    jy.prototype.getProperties = jy.prototype.M;
    jy.prototype.set = jy.prototype.set;
    jy.prototype.setProperties = jy.prototype.I;
    jy.prototype.unset = jy.prototype.S;
    jy.prototype.changed = jy.prototype.u;
    jy.prototype.dispatchEvent = jy.prototype.b;
    jy.prototype.getRevision = jy.prototype.L;
    jy.prototype.on = jy.prototype.J;
    jy.prototype.once = jy.prototype.once;
    jy.prototype.un = jy.prototype.K;
    ny.prototype.setRenderReprojectionEdges = ny.prototype.Qb;
    ny.prototype.setTileGridForProjection = ny.prototype.Rb;
    ny.prototype.getTileLoadFunction = ny.prototype.yb;
    ny.prototype.getTileUrlFunction = ny.prototype.zb;
    ny.prototype.getUrls = ny.prototype.Ab;
    ny.prototype.setTileLoadFunction = ny.prototype.Fb;
    ny.prototype.setTileUrlFunction = ny.prototype.lb;
    ny.prototype.setUrl = ny.prototype.qb;
    ny.prototype.setUrls = ny.prototype.vb;
    ny.prototype.getTileGrid = ny.prototype.gb;
    ny.prototype.refresh = ny.prototype.ra;
    ny.prototype.getAttributions = ny.prototype.za;
    ny.prototype.getLogo = ny.prototype.Aa;
    ny.prototype.getProjection = ny.prototype.Da;
    ny.prototype.getState = ny.prototype.getState;
    ny.prototype.setAttributions = ny.prototype.ta;
    ny.prototype.get = ny.prototype.get;
    ny.prototype.getKeys = ny.prototype.R;
    ny.prototype.getProperties = ny.prototype.M;
    ny.prototype.set = ny.prototype.set;
    ny.prototype.setProperties = ny.prototype.I;
    ny.prototype.unset = ny.prototype.S;
    ny.prototype.changed = ny.prototype.u;
    ny.prototype.dispatchEvent = ny.prototype.b;
    ny.prototype.getRevision = ny.prototype.L;
    ny.prototype.on = ny.prototype.J;
    ny.prototype.once = ny.prototype.once;
    ny.prototype.un = ny.prototype.K;
    oy.prototype.setRenderReprojectionEdges = oy.prototype.Qb;
    oy.prototype.setTileGridForProjection = oy.prototype.Rb;
    oy.prototype.getTileLoadFunction = oy.prototype.yb;
    oy.prototype.getTileUrlFunction = oy.prototype.zb;
    oy.prototype.getUrls = oy.prototype.Ab;
    oy.prototype.setTileLoadFunction = oy.prototype.Fb;
    oy.prototype.setTileUrlFunction = oy.prototype.lb;
    oy.prototype.setUrl = oy.prototype.qb;
    oy.prototype.setUrls = oy.prototype.vb;
    oy.prototype.getTileGrid = oy.prototype.gb;
    oy.prototype.refresh = oy.prototype.ra;
    oy.prototype.getAttributions = oy.prototype.za;
    oy.prototype.getLogo = oy.prototype.Aa;
    oy.prototype.getProjection = oy.prototype.Da;
    oy.prototype.getState = oy.prototype.getState;
    oy.prototype.setAttributions = oy.prototype.ta;
    oy.prototype.get = oy.prototype.get;
    oy.prototype.getKeys = oy.prototype.R;
    oy.prototype.getProperties = oy.prototype.M;
    oy.prototype.set = oy.prototype.set;
    oy.prototype.setProperties = oy.prototype.I;
    oy.prototype.unset = oy.prototype.S;
    oy.prototype.changed = oy.prototype.u;
    oy.prototype.dispatchEvent = oy.prototype.b;
    oy.prototype.getRevision = oy.prototype.L;
    oy.prototype.on = oy.prototype.J;
    oy.prototype.once = oy.prototype.once;
    oy.prototype.un = oy.prototype.K;
    py.prototype.setRenderReprojectionEdges = py.prototype.Qb;
    py.prototype.setTileGridForProjection = py.prototype.Rb;
    py.prototype.getTileLoadFunction = py.prototype.yb;
    py.prototype.getTileUrlFunction = py.prototype.zb;
    py.prototype.getUrls = py.prototype.Ab;
    py.prototype.setTileLoadFunction = py.prototype.Fb;
    py.prototype.setTileUrlFunction = py.prototype.lb;
    py.prototype.setUrl = py.prototype.qb;
    py.prototype.setUrls = py.prototype.vb;
    py.prototype.getTileGrid = py.prototype.gb;
    py.prototype.refresh = py.prototype.ra;
    py.prototype.getAttributions = py.prototype.za;
    py.prototype.getLogo = py.prototype.Aa;
    py.prototype.getProjection = py.prototype.Da;
    py.prototype.getState = py.prototype.getState;
    py.prototype.setAttributions = py.prototype.ta;
    py.prototype.get = py.prototype.get;
    py.prototype.getKeys = py.prototype.R;
    py.prototype.getProperties = py.prototype.M;
    py.prototype.set = py.prototype.set;
    py.prototype.setProperties = py.prototype.I;
    py.prototype.unset = py.prototype.S;
    py.prototype.changed = py.prototype.u;
    py.prototype.dispatchEvent = py.prototype.b;
    py.prototype.getRevision = py.prototype.L;
    py.prototype.on = py.prototype.J;
    py.prototype.once = py.prototype.once;
    py.prototype.un = py.prototype.K;
    U.prototype.getAttributions = U.prototype.za;
    U.prototype.getLogo = U.prototype.Aa;
    U.prototype.getProjection = U.prototype.Da;
    U.prototype.getState = U.prototype.getState;
    U.prototype.refresh = U.prototype.ra;
    U.prototype.setAttributions = U.prototype.ta;
    U.prototype.get = U.prototype.get;
    U.prototype.getKeys = U.prototype.R;
    U.prototype.getProperties = U.prototype.M;
    U.prototype.set = U.prototype.set;
    U.prototype.setProperties = U.prototype.I;
    U.prototype.unset = U.prototype.S;
    U.prototype.changed = U.prototype.u;
    U.prototype.dispatchEvent = U.prototype.b;
    U.prototype.getRevision = U.prototype.L;
    U.prototype.on = U.prototype.J;
    U.prototype.once = U.prototype.once;
    U.prototype.un = U.prototype.K;
    Y.prototype.addFeature = Y.prototype.Gb;
    Y.prototype.addFeatures = Y.prototype.Oc;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.Ih;
    Y.prototype.forEachFeatureInExtent = Y.prototype.dc;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.Jh;
    Y.prototype.getFeaturesCollection = Y.prototype.Qh;
    Y.prototype.getFeatures = Y.prototype.ce;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.Ph;
    Y.prototype.getFeaturesInExtent = Y.prototype.Wf;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.Lh;
    Y.prototype.getExtent = Y.prototype.C;
    Y.prototype.getFeatureById = Y.prototype.Oh;
    Y.prototype.getFormat = Y.prototype.bj;
    Y.prototype.getUrl = Y.prototype.cj;
    Y.prototype.removeFeature = Y.prototype.Lb;
    Y.prototype.setLoader = Y.prototype.ej;
    Y.prototype.getAttributions = Y.prototype.za;
    Y.prototype.getLogo = Y.prototype.Aa;
    Y.prototype.getProjection = Y.prototype.Da;
    Y.prototype.getState = Y.prototype.getState;
    Y.prototype.refresh = Y.prototype.ra;
    Y.prototype.setAttributions = Y.prototype.ta;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.R;
    Y.prototype.getProperties = Y.prototype.M;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.I;
    Y.prototype.unset = Y.prototype.S;
    Y.prototype.changed = Y.prototype.u;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.L;
    Y.prototype.on = Y.prototype.J;
    Y.prototype.once = Y.prototype.once;
    Y.prototype.un = Y.prototype.K;
    qn.prototype.getAttributions = qn.prototype.za;
    qn.prototype.getLogo = qn.prototype.Aa;
    qn.prototype.getProjection = qn.prototype.Da;
    qn.prototype.getState = qn.prototype.getState;
    qn.prototype.refresh = qn.prototype.ra;
    qn.prototype.setAttributions = qn.prototype.ta;
    qn.prototype.get = qn.prototype.get;
    qn.prototype.getKeys = qn.prototype.R;
    qn.prototype.getProperties = qn.prototype.M;
    qn.prototype.set = qn.prototype.set;
    qn.prototype.setProperties = qn.prototype.I;
    qn.prototype.unset = qn.prototype.S;
    qn.prototype.changed = qn.prototype.u;
    qn.prototype.dispatchEvent = qn.prototype.b;
    qn.prototype.getRevision = qn.prototype.L;
    qn.prototype.on = qn.prototype.J;
    qn.prototype.once = qn.prototype.once;
    qn.prototype.un = qn.prototype.K;
    sn.prototype.type = sn.prototype.type;
    sn.prototype.target = sn.prototype.target;
    sn.prototype.preventDefault = sn.prototype.preventDefault;
    sn.prototype.stopPropagation = sn.prototype.stopPropagation;
    vy.prototype.getAttributions = vy.prototype.za;
    vy.prototype.getLogo = vy.prototype.Aa;
    vy.prototype.getProjection = vy.prototype.Da;
    vy.prototype.getState = vy.prototype.getState;
    vy.prototype.refresh = vy.prototype.ra;
    vy.prototype.setAttributions = vy.prototype.ta;
    vy.prototype.get = vy.prototype.get;
    vy.prototype.getKeys = vy.prototype.R;
    vy.prototype.getProperties = vy.prototype.M;
    vy.prototype.set = vy.prototype.set;
    vy.prototype.setProperties = vy.prototype.I;
    vy.prototype.unset = vy.prototype.S;
    vy.prototype.changed = vy.prototype.u;
    vy.prototype.dispatchEvent = vy.prototype.b;
    vy.prototype.getRevision = vy.prototype.L;
    vy.prototype.on = vy.prototype.J;
    vy.prototype.once = vy.prototype.once;
    vy.prototype.un = vy.prototype.K;
    xn.prototype.getAttributions = xn.prototype.za;
    xn.prototype.getLogo = xn.prototype.Aa;
    xn.prototype.getProjection = xn.prototype.Da;
    xn.prototype.getState = xn.prototype.getState;
    xn.prototype.refresh = xn.prototype.ra;
    xn.prototype.setAttributions = xn.prototype.ta;
    xn.prototype.get = xn.prototype.get;
    xn.prototype.getKeys = xn.prototype.R;
    xn.prototype.getProperties = xn.prototype.M;
    xn.prototype.set = xn.prototype.set;
    xn.prototype.setProperties = xn.prototype.I;
    xn.prototype.unset = xn.prototype.S;
    xn.prototype.changed = xn.prototype.u;
    xn.prototype.dispatchEvent = xn.prototype.b;
    xn.prototype.getRevision = xn.prototype.L;
    xn.prototype.on = xn.prototype.J;
    xn.prototype.once = xn.prototype.once;
    xn.prototype.un = xn.prototype.K;
    wy.prototype.getAttributions = wy.prototype.za;
    wy.prototype.getLogo = wy.prototype.Aa;
    wy.prototype.getProjection = wy.prototype.Da;
    wy.prototype.getState = wy.prototype.getState;
    wy.prototype.refresh = wy.prototype.ra;
    wy.prototype.setAttributions = wy.prototype.ta;
    wy.prototype.get = wy.prototype.get;
    wy.prototype.getKeys = wy.prototype.R;
    wy.prototype.getProperties = wy.prototype.M;
    wy.prototype.set = wy.prototype.set;
    wy.prototype.setProperties = wy.prototype.I;
    wy.prototype.unset = wy.prototype.S;
    wy.prototype.changed = wy.prototype.u;
    wy.prototype.dispatchEvent = wy.prototype.b;
    wy.prototype.getRevision = wy.prototype.L;
    wy.prototype.on = wy.prototype.J;
    wy.prototype.once = wy.prototype.once;
    wy.prototype.un = wy.prototype.K;
    xy.prototype.getAttributions = xy.prototype.za;
    xy.prototype.getLogo = xy.prototype.Aa;
    xy.prototype.getProjection = xy.prototype.Da;
    xy.prototype.getState = xy.prototype.getState;
    xy.prototype.refresh = xy.prototype.ra;
    xy.prototype.setAttributions = xy.prototype.ta;
    xy.prototype.get = xy.prototype.get;
    xy.prototype.getKeys = xy.prototype.R;
    xy.prototype.getProperties = xy.prototype.M;
    xy.prototype.set = xy.prototype.set;
    xy.prototype.setProperties = xy.prototype.I;
    xy.prototype.unset = xy.prototype.S;
    xy.prototype.changed = xy.prototype.u;
    xy.prototype.dispatchEvent = xy.prototype.b;
    xy.prototype.getRevision = xy.prototype.L;
    xy.prototype.on = xy.prototype.J;
    xy.prototype.once = xy.prototype.once;
    xy.prototype.un = xy.prototype.K;
    yn.prototype.getAttributions = yn.prototype.za;
    yn.prototype.getLogo = yn.prototype.Aa;
    yn.prototype.getProjection = yn.prototype.Da;
    yn.prototype.getState = yn.prototype.getState;
    yn.prototype.refresh = yn.prototype.ra;
    yn.prototype.setAttributions = yn.prototype.ta;
    yn.prototype.get = yn.prototype.get;
    yn.prototype.getKeys = yn.prototype.R;
    yn.prototype.getProperties = yn.prototype.M;
    yn.prototype.set = yn.prototype.set;
    yn.prototype.setProperties = yn.prototype.I;
    yn.prototype.unset = yn.prototype.S;
    yn.prototype.changed = yn.prototype.u;
    yn.prototype.dispatchEvent = yn.prototype.b;
    yn.prototype.getRevision = yn.prototype.L;
    yn.prototype.on = yn.prototype.J;
    yn.prototype.once = yn.prototype.once;
    yn.prototype.un = yn.prototype.K;
    yy.prototype.getAttributions = yy.prototype.za;
    yy.prototype.getLogo = yy.prototype.Aa;
    yy.prototype.getProjection = yy.prototype.Da;
    yy.prototype.getState = yy.prototype.getState;
    yy.prototype.refresh = yy.prototype.ra;
    yy.prototype.setAttributions = yy.prototype.ta;
    yy.prototype.get = yy.prototype.get;
    yy.prototype.getKeys = yy.prototype.R;
    yy.prototype.getProperties = yy.prototype.M;
    yy.prototype.set = yy.prototype.set;
    yy.prototype.setProperties = yy.prototype.I;
    yy.prototype.unset = yy.prototype.S;
    yy.prototype.changed = yy.prototype.u;
    yy.prototype.dispatchEvent = yy.prototype.b;
    yy.prototype.getRevision = yy.prototype.L;
    yy.prototype.on = yy.prototype.J;
    yy.prototype.once = yy.prototype.once;
    yy.prototype.un = yy.prototype.K;
    Cy.prototype.setRenderReprojectionEdges = Cy.prototype.Qb;
    Cy.prototype.setTileGridForProjection = Cy.prototype.Rb;
    Cy.prototype.getTileLoadFunction = Cy.prototype.yb;
    Cy.prototype.getTileUrlFunction = Cy.prototype.zb;
    Cy.prototype.getUrls = Cy.prototype.Ab;
    Cy.prototype.setTileLoadFunction = Cy.prototype.Fb;
    Cy.prototype.setTileUrlFunction = Cy.prototype.lb;
    Cy.prototype.setUrl = Cy.prototype.qb;
    Cy.prototype.setUrls = Cy.prototype.vb;
    Cy.prototype.getTileGrid = Cy.prototype.gb;
    Cy.prototype.refresh = Cy.prototype.ra;
    Cy.prototype.getAttributions = Cy.prototype.za;
    Cy.prototype.getLogo = Cy.prototype.Aa;
    Cy.prototype.getProjection = Cy.prototype.Da;
    Cy.prototype.getState = Cy.prototype.getState;
    Cy.prototype.setAttributions = Cy.prototype.ta;
    Cy.prototype.get = Cy.prototype.get;
    Cy.prototype.getKeys = Cy.prototype.R;
    Cy.prototype.getProperties = Cy.prototype.M;
    Cy.prototype.set = Cy.prototype.set;
    Cy.prototype.setProperties = Cy.prototype.I;
    Cy.prototype.unset = Cy.prototype.S;
    Cy.prototype.changed = Cy.prototype.u;
    Cy.prototype.dispatchEvent = Cy.prototype.b;
    Cy.prototype.getRevision = Cy.prototype.L;
    Cy.prototype.on = Cy.prototype.J;
    Cy.prototype.once = Cy.prototype.once;
    Cy.prototype.un = Cy.prototype.K;
    Dy.prototype.getAttributions = Dy.prototype.za;
    Dy.prototype.getLogo = Dy.prototype.Aa;
    Dy.prototype.getProjection = Dy.prototype.Da;
    Dy.prototype.getState = Dy.prototype.getState;
    Dy.prototype.refresh = Dy.prototype.ra;
    Dy.prototype.setAttributions = Dy.prototype.ta;
    Dy.prototype.get = Dy.prototype.get;
    Dy.prototype.getKeys = Dy.prototype.R;
    Dy.prototype.getProperties = Dy.prototype.M;
    Dy.prototype.set = Dy.prototype.set;
    Dy.prototype.setProperties = Dy.prototype.I;
    Dy.prototype.unset = Dy.prototype.S;
    Dy.prototype.changed = Dy.prototype.u;
    Dy.prototype.dispatchEvent = Dy.prototype.b;
    Dy.prototype.getRevision = Dy.prototype.L;
    Dy.prototype.on = Dy.prototype.J;
    Dy.prototype.once = Dy.prototype.once;
    Dy.prototype.un = Dy.prototype.K;
    Hy.prototype.type = Hy.prototype.type;
    Hy.prototype.target = Hy.prototype.target;
    Hy.prototype.preventDefault = Hy.prototype.preventDefault;
    Hy.prototype.stopPropagation = Hy.prototype.stopPropagation;
    Ky.prototype.setRenderReprojectionEdges = Ky.prototype.Qb;
    Ky.prototype.setTileGridForProjection = Ky.prototype.Rb;
    Ky.prototype.getTileLoadFunction = Ky.prototype.yb;
    Ky.prototype.getTileUrlFunction = Ky.prototype.zb;
    Ky.prototype.getUrls = Ky.prototype.Ab;
    Ky.prototype.setTileLoadFunction = Ky.prototype.Fb;
    Ky.prototype.setTileUrlFunction = Ky.prototype.lb;
    Ky.prototype.setUrl = Ky.prototype.qb;
    Ky.prototype.setUrls = Ky.prototype.vb;
    Ky.prototype.getTileGrid = Ky.prototype.gb;
    Ky.prototype.refresh = Ky.prototype.ra;
    Ky.prototype.getAttributions = Ky.prototype.za;
    Ky.prototype.getLogo = Ky.prototype.Aa;
    Ky.prototype.getProjection = Ky.prototype.Da;
    Ky.prototype.getState = Ky.prototype.getState;
    Ky.prototype.setAttributions = Ky.prototype.ta;
    Ky.prototype.get = Ky.prototype.get;
    Ky.prototype.getKeys = Ky.prototype.R;
    Ky.prototype.getProperties = Ky.prototype.M;
    Ky.prototype.set = Ky.prototype.set;
    Ky.prototype.setProperties = Ky.prototype.I;
    Ky.prototype.unset = Ky.prototype.S;
    Ky.prototype.changed = Ky.prototype.u;
    Ky.prototype.dispatchEvent = Ky.prototype.b;
    Ky.prototype.getRevision = Ky.prototype.L;
    Ky.prototype.on = Ky.prototype.J;
    Ky.prototype.once = Ky.prototype.once;
    Ky.prototype.un = Ky.prototype.K;
    hy.prototype.type = hy.prototype.type;
    hy.prototype.target = hy.prototype.target;
    hy.prototype.preventDefault = hy.prototype.preventDefault;
    hy.prototype.stopPropagation = hy.prototype.stopPropagation;
    Oy.prototype.setRenderReprojectionEdges = Oy.prototype.Qb;
    Oy.prototype.setTileGridForProjection = Oy.prototype.Rb;
    Oy.prototype.getTileLoadFunction = Oy.prototype.yb;
    Oy.prototype.getTileUrlFunction = Oy.prototype.zb;
    Oy.prototype.getUrls = Oy.prototype.Ab;
    Oy.prototype.setTileLoadFunction = Oy.prototype.Fb;
    Oy.prototype.setTileUrlFunction = Oy.prototype.lb;
    Oy.prototype.setUrl = Oy.prototype.qb;
    Oy.prototype.setUrls = Oy.prototype.vb;
    Oy.prototype.getTileGrid = Oy.prototype.gb;
    Oy.prototype.refresh = Oy.prototype.ra;
    Oy.prototype.getAttributions = Oy.prototype.za;
    Oy.prototype.getLogo = Oy.prototype.Aa;
    Oy.prototype.getProjection = Oy.prototype.Da;
    Oy.prototype.getState = Oy.prototype.getState;
    Oy.prototype.setAttributions = Oy.prototype.ta;
    Oy.prototype.get = Oy.prototype.get;
    Oy.prototype.getKeys = Oy.prototype.R;
    Oy.prototype.getProperties = Oy.prototype.M;
    Oy.prototype.set = Oy.prototype.set;
    Oy.prototype.setProperties = Oy.prototype.I;
    Oy.prototype.unset = Oy.prototype.S;
    Oy.prototype.changed = Oy.prototype.u;
    Oy.prototype.dispatchEvent = Oy.prototype.b;
    Oy.prototype.getRevision = Oy.prototype.L;
    Oy.prototype.on = Oy.prototype.J;
    Oy.prototype.once = Oy.prototype.once;
    Oy.prototype.un = Oy.prototype.K;
    Qy.prototype.getTileGrid = Qy.prototype.gb;
    Qy.prototype.refresh = Qy.prototype.ra;
    Qy.prototype.getAttributions = Qy.prototype.za;
    Qy.prototype.getLogo = Qy.prototype.Aa;
    Qy.prototype.getProjection = Qy.prototype.Da;
    Qy.prototype.getState = Qy.prototype.getState;
    Qy.prototype.setAttributions = Qy.prototype.ta;
    Qy.prototype.get = Qy.prototype.get;
    Qy.prototype.getKeys = Qy.prototype.R;
    Qy.prototype.getProperties = Qy.prototype.M;
    Qy.prototype.set = Qy.prototype.set;
    Qy.prototype.setProperties = Qy.prototype.I;
    Qy.prototype.unset = Qy.prototype.S;
    Qy.prototype.changed = Qy.prototype.u;
    Qy.prototype.dispatchEvent = Qy.prototype.b;
    Qy.prototype.getRevision = Qy.prototype.L;
    Qy.prototype.on = Qy.prototype.J;
    Qy.prototype.once = Qy.prototype.once;
    Qy.prototype.un = Qy.prototype.K;
    Sy.prototype.setRenderReprojectionEdges = Sy.prototype.Qb;
    Sy.prototype.setTileGridForProjection = Sy.prototype.Rb;
    Sy.prototype.getTileLoadFunction = Sy.prototype.yb;
    Sy.prototype.getTileUrlFunction = Sy.prototype.zb;
    Sy.prototype.getUrls = Sy.prototype.Ab;
    Sy.prototype.setTileLoadFunction = Sy.prototype.Fb;
    Sy.prototype.setTileUrlFunction = Sy.prototype.lb;
    Sy.prototype.setUrl = Sy.prototype.qb;
    Sy.prototype.setUrls = Sy.prototype.vb;
    Sy.prototype.getTileGrid = Sy.prototype.gb;
    Sy.prototype.refresh = Sy.prototype.ra;
    Sy.prototype.getAttributions = Sy.prototype.za;
    Sy.prototype.getLogo = Sy.prototype.Aa;
    Sy.prototype.getProjection = Sy.prototype.Da;
    Sy.prototype.getState = Sy.prototype.getState;
    Sy.prototype.setAttributions = Sy.prototype.ta;
    Sy.prototype.get = Sy.prototype.get;
    Sy.prototype.getKeys = Sy.prototype.R;
    Sy.prototype.getProperties = Sy.prototype.M;
    Sy.prototype.set = Sy.prototype.set;
    Sy.prototype.setProperties = Sy.prototype.I;
    Sy.prototype.unset = Sy.prototype.S;
    Sy.prototype.changed = Sy.prototype.u;
    Sy.prototype.dispatchEvent = Sy.prototype.b;
    Sy.prototype.getRevision = Sy.prototype.L;
    Sy.prototype.on = Sy.prototype.J;
    Sy.prototype.once = Sy.prototype.once;
    Sy.prototype.un = Sy.prototype.K;
    Ty.prototype.getTileGrid = Ty.prototype.gb;
    Ty.prototype.refresh = Ty.prototype.ra;
    Ty.prototype.getAttributions = Ty.prototype.za;
    Ty.prototype.getLogo = Ty.prototype.Aa;
    Ty.prototype.getProjection = Ty.prototype.Da;
    Ty.prototype.getState = Ty.prototype.getState;
    Ty.prototype.setAttributions = Ty.prototype.ta;
    Ty.prototype.get = Ty.prototype.get;
    Ty.prototype.getKeys = Ty.prototype.R;
    Ty.prototype.getProperties = Ty.prototype.M;
    Ty.prototype.set = Ty.prototype.set;
    Ty.prototype.setProperties = Ty.prototype.I;
    Ty.prototype.unset = Ty.prototype.S;
    Ty.prototype.changed = Ty.prototype.u;
    Ty.prototype.dispatchEvent = Ty.prototype.b;
    Ty.prototype.getRevision = Ty.prototype.L;
    Ty.prototype.on = Ty.prototype.J;
    Ty.prototype.once = Ty.prototype.once;
    Ty.prototype.un = Ty.prototype.K;
    Xy.prototype.setRenderReprojectionEdges = Xy.prototype.Qb;
    Xy.prototype.setTileGridForProjection = Xy.prototype.Rb;
    Xy.prototype.getTileLoadFunction = Xy.prototype.yb;
    Xy.prototype.getTileUrlFunction = Xy.prototype.zb;
    Xy.prototype.getUrls = Xy.prototype.Ab;
    Xy.prototype.setTileLoadFunction = Xy.prototype.Fb;
    Xy.prototype.setTileUrlFunction = Xy.prototype.lb;
    Xy.prototype.setUrl = Xy.prototype.qb;
    Xy.prototype.setUrls = Xy.prototype.vb;
    Xy.prototype.getTileGrid = Xy.prototype.gb;
    Xy.prototype.refresh = Xy.prototype.ra;
    Xy.prototype.getAttributions = Xy.prototype.za;
    Xy.prototype.getLogo = Xy.prototype.Aa;
    Xy.prototype.getProjection = Xy.prototype.Da;
    Xy.prototype.getState = Xy.prototype.getState;
    Xy.prototype.setAttributions = Xy.prototype.ta;
    Xy.prototype.get = Xy.prototype.get;
    Xy.prototype.getKeys = Xy.prototype.R;
    Xy.prototype.getProperties = Xy.prototype.M;
    Xy.prototype.set = Xy.prototype.set;
    Xy.prototype.setProperties = Xy.prototype.I;
    Xy.prototype.unset = Xy.prototype.S;
    Xy.prototype.changed = Xy.prototype.u;
    Xy.prototype.dispatchEvent = Xy.prototype.b;
    Xy.prototype.getRevision = Xy.prototype.L;
    Xy.prototype.on = Xy.prototype.J;
    Xy.prototype.once = Xy.prototype.once;
    Xy.prototype.un = Xy.prototype.K;
    Dw.prototype.type = Dw.prototype.type;
    Dw.prototype.target = Dw.prototype.target;
    Dw.prototype.preventDefault = Dw.prototype.preventDefault;
    Dw.prototype.stopPropagation = Dw.prototype.stopPropagation;
    cz.prototype.getTileLoadFunction = cz.prototype.yb;
    cz.prototype.getTileUrlFunction = cz.prototype.zb;
    cz.prototype.getUrls = cz.prototype.Ab;
    cz.prototype.setTileLoadFunction = cz.prototype.Fb;
    cz.prototype.setTileUrlFunction = cz.prototype.lb;
    cz.prototype.setUrl = cz.prototype.qb;
    cz.prototype.setUrls = cz.prototype.vb;
    cz.prototype.getTileGrid = cz.prototype.gb;
    cz.prototype.refresh = cz.prototype.ra;
    cz.prototype.getAttributions = cz.prototype.za;
    cz.prototype.getLogo = cz.prototype.Aa;
    cz.prototype.getProjection = cz.prototype.Da;
    cz.prototype.getState = cz.prototype.getState;
    cz.prototype.setAttributions = cz.prototype.ta;
    cz.prototype.get = cz.prototype.get;
    cz.prototype.getKeys = cz.prototype.R;
    cz.prototype.getProperties = cz.prototype.M;
    cz.prototype.set = cz.prototype.set;
    cz.prototype.setProperties = cz.prototype.I;
    cz.prototype.unset = cz.prototype.S;
    cz.prototype.changed = cz.prototype.u;
    cz.prototype.dispatchEvent = cz.prototype.b;
    cz.prototype.getRevision = cz.prototype.L;
    cz.prototype.on = cz.prototype.J;
    cz.prototype.once = cz.prototype.once;
    cz.prototype.un = cz.prototype.K;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.Qb;
    Z.prototype.setTileGridForProjection = Z.prototype.Rb;
    Z.prototype.getTileLoadFunction = Z.prototype.yb;
    Z.prototype.getTileUrlFunction = Z.prototype.zb;
    Z.prototype.getUrls = Z.prototype.Ab;
    Z.prototype.setTileLoadFunction = Z.prototype.Fb;
    Z.prototype.setTileUrlFunction = Z.prototype.lb;
    Z.prototype.setUrl = Z.prototype.qb;
    Z.prototype.setUrls = Z.prototype.vb;
    Z.prototype.getTileGrid = Z.prototype.gb;
    Z.prototype.refresh = Z.prototype.ra;
    Z.prototype.getAttributions = Z.prototype.za;
    Z.prototype.getLogo = Z.prototype.Aa;
    Z.prototype.getProjection = Z.prototype.Da;
    Z.prototype.getState = Z.prototype.getState;
    Z.prototype.setAttributions = Z.prototype.ta;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.R;
    Z.prototype.getProperties = Z.prototype.M;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.I;
    Z.prototype.unset = Z.prototype.S;
    Z.prototype.changed = Z.prototype.u;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.L;
    Z.prototype.on = Z.prototype.J;
    Z.prototype.once = Z.prototype.once;
    Z.prototype.un = Z.prototype.K;
    gz.prototype.setRenderReprojectionEdges = gz.prototype.Qb;
    gz.prototype.setTileGridForProjection = gz.prototype.Rb;
    gz.prototype.getTileLoadFunction = gz.prototype.yb;
    gz.prototype.getTileUrlFunction = gz.prototype.zb;
    gz.prototype.getUrls = gz.prototype.Ab;
    gz.prototype.setTileLoadFunction = gz.prototype.Fb;
    gz.prototype.setTileUrlFunction = gz.prototype.lb;
    gz.prototype.setUrl = gz.prototype.qb;
    gz.prototype.setUrls = gz.prototype.vb;
    gz.prototype.getTileGrid = gz.prototype.gb;
    gz.prototype.refresh = gz.prototype.ra;
    gz.prototype.getAttributions = gz.prototype.za;
    gz.prototype.getLogo = gz.prototype.Aa;
    gz.prototype.getProjection = gz.prototype.Da;
    gz.prototype.getState = gz.prototype.getState;
    gz.prototype.setAttributions = gz.prototype.ta;
    gz.prototype.get = gz.prototype.get;
    gz.prototype.getKeys = gz.prototype.R;
    gz.prototype.getProperties = gz.prototype.M;
    gz.prototype.set = gz.prototype.set;
    gz.prototype.setProperties = gz.prototype.I;
    gz.prototype.unset = gz.prototype.S;
    gz.prototype.changed = gz.prototype.u;
    gz.prototype.dispatchEvent = gz.prototype.b;
    gz.prototype.getRevision = gz.prototype.L;
    gz.prototype.on = gz.prototype.J;
    gz.prototype.once = gz.prototype.once;
    gz.prototype.un = gz.prototype.K;
    dy.prototype.getTileCoord = dy.prototype.i;
    dy.prototype.load = dy.prototype.load;
    Ai.prototype.changed = Ai.prototype.u;
    Ai.prototype.dispatchEvent = Ai.prototype.b;
    Ai.prototype.getRevision = Ai.prototype.L;
    Ai.prototype.on = Ai.prototype.J;
    Ai.prototype.once = Ai.prototype.once;
    Ai.prototype.un = Ai.prototype.K;
    bn.prototype.changed = bn.prototype.u;
    bn.prototype.dispatchEvent = bn.prototype.b;
    bn.prototype.getRevision = bn.prototype.L;
    bn.prototype.on = bn.prototype.J;
    bn.prototype.once = bn.prototype.once;
    bn.prototype.un = bn.prototype.K;
    An.prototype.changed = An.prototype.u;
    An.prototype.dispatchEvent = An.prototype.b;
    An.prototype.getRevision = An.prototype.L;
    An.prototype.on = An.prototype.J;
    An.prototype.once = An.prototype.once;
    An.prototype.un = An.prototype.K;
    Kn.prototype.changed = Kn.prototype.u;
    Kn.prototype.dispatchEvent = Kn.prototype.b;
    Kn.prototype.getRevision = Kn.prototype.L;
    Kn.prototype.on = Kn.prototype.J;
    Kn.prototype.once = Kn.prototype.once;
    Kn.prototype.un = Kn.prototype.K;
    Ln.prototype.changed = Ln.prototype.u;
    Ln.prototype.dispatchEvent = Ln.prototype.b;
    Ln.prototype.getRevision = Ln.prototype.L;
    Ln.prototype.on = Ln.prototype.J;
    Ln.prototype.once = Ln.prototype.once;
    Ln.prototype.un = Ln.prototype.K;
    Ii.prototype.changed = Ii.prototype.u;
    Ii.prototype.dispatchEvent = Ii.prototype.b;
    Ii.prototype.getRevision = Ii.prototype.L;
    Ii.prototype.on = Ii.prototype.J;
    Ii.prototype.once = Ii.prototype.once;
    Ii.prototype.un = Ii.prototype.K;
    Ri.prototype.changed = Ri.prototype.u;
    Ri.prototype.dispatchEvent = Ri.prototype.b;
    Ri.prototype.getRevision = Ri.prototype.L;
    Ri.prototype.on = Ri.prototype.J;
    Ri.prototype.once = Ri.prototype.once;
    Ri.prototype.un = Ri.prototype.K;
    Si.prototype.changed = Si.prototype.u;
    Si.prototype.dispatchEvent = Si.prototype.b;
    Si.prototype.getRevision = Si.prototype.L;
    Si.prototype.on = Si.prototype.J;
    Si.prototype.once = Si.prototype.once;
    Si.prototype.un = Si.prototype.K;
    bj.prototype.changed = bj.prototype.u;
    bj.prototype.dispatchEvent = bj.prototype.b;
    bj.prototype.getRevision = bj.prototype.L;
    bj.prototype.on = bj.prototype.J;
    bj.prototype.once = bj.prototype.once;
    bj.prototype.un = bj.prototype.K;
    Vj.prototype.changed = Vj.prototype.u;
    Vj.prototype.dispatchEvent = Vj.prototype.b;
    Vj.prototype.getRevision = Vj.prototype.L;
    Vj.prototype.on = Vj.prototype.J;
    Vj.prototype.once = Vj.prototype.once;
    Vj.prototype.un = Vj.prototype.K;
    Xj.prototype.changed = Xj.prototype.u;
    Xj.prototype.dispatchEvent = Xj.prototype.b;
    Xj.prototype.getRevision = Xj.prototype.L;
    Xj.prototype.on = Xj.prototype.J;
    Xj.prototype.once = Xj.prototype.once;
    Xj.prototype.un = Xj.prototype.K;
    Yh.prototype.type = Yh.prototype.type;
    Yh.prototype.target = Yh.prototype.target;
    Yh.prototype.preventDefault = Yh.prototype.preventDefault;
    Yh.prototype.stopPropagation = Yh.prototype.stopPropagation;
    Ld.prototype.type = Ld.prototype.type;
    Ld.prototype.target = Ld.prototype.target;
    Ld.prototype.preventDefault = Ld.prototype.preventDefault;
    Ld.prototype.stopPropagation = Ld.prototype.stopPropagation;
    jg.prototype.get = jg.prototype.get;
    jg.prototype.getKeys = jg.prototype.R;
    jg.prototype.getProperties = jg.prototype.M;
    jg.prototype.set = jg.prototype.set;
    jg.prototype.setProperties = jg.prototype.I;
    jg.prototype.unset = jg.prototype.S;
    jg.prototype.changed = jg.prototype.u;
    jg.prototype.dispatchEvent = jg.prototype.b;
    jg.prototype.getRevision = jg.prototype.L;
    jg.prototype.on = jg.prototype.J;
    jg.prototype.once = jg.prototype.once;
    jg.prototype.un = jg.prototype.K;
    lg.prototype.getExtent = lg.prototype.C;
    lg.prototype.getMaxResolution = lg.prototype.kc;
    lg.prototype.getMinResolution = lg.prototype.lc;
    lg.prototype.getOpacity = lg.prototype.mc;
    lg.prototype.getVisible = lg.prototype.Jb;
    lg.prototype.getZIndex = lg.prototype.Ba;
    lg.prototype.setExtent = lg.prototype.Dc;
    lg.prototype.setMaxResolution = lg.prototype.Kc;
    lg.prototype.setMinResolution = lg.prototype.Lc;
    lg.prototype.setOpacity = lg.prototype.Ec;
    lg.prototype.setVisible = lg.prototype.Fc;
    lg.prototype.setZIndex = lg.prototype.$b;
    lg.prototype.get = lg.prototype.get;
    lg.prototype.getKeys = lg.prototype.R;
    lg.prototype.getProperties = lg.prototype.M;
    lg.prototype.set = lg.prototype.set;
    lg.prototype.setProperties = lg.prototype.I;
    lg.prototype.unset = lg.prototype.S;
    lg.prototype.changed = lg.prototype.u;
    lg.prototype.dispatchEvent = lg.prototype.b;
    lg.prototype.getRevision = lg.prototype.L;
    lg.prototype.on = lg.prototype.J;
    lg.prototype.once = lg.prototype.once;
    lg.prototype.un = lg.prototype.K;
    vg.prototype.getExtent = vg.prototype.C;
    vg.prototype.getMaxResolution = vg.prototype.kc;
    vg.prototype.getMinResolution = vg.prototype.lc;
    vg.prototype.getOpacity = vg.prototype.mc;
    vg.prototype.getVisible = vg.prototype.Jb;
    vg.prototype.getZIndex = vg.prototype.Ba;
    vg.prototype.setExtent = vg.prototype.Dc;
    vg.prototype.setMaxResolution = vg.prototype.Kc;
    vg.prototype.setMinResolution = vg.prototype.Lc;
    vg.prototype.setOpacity = vg.prototype.Ec;
    vg.prototype.setVisible = vg.prototype.Fc;
    vg.prototype.setZIndex = vg.prototype.$b;
    vg.prototype.get = vg.prototype.get;
    vg.prototype.getKeys = vg.prototype.R;
    vg.prototype.getProperties = vg.prototype.M;
    vg.prototype.set = vg.prototype.set;
    vg.prototype.setProperties = vg.prototype.I;
    vg.prototype.unset = vg.prototype.S;
    vg.prototype.changed = vg.prototype.u;
    vg.prototype.dispatchEvent = vg.prototype.b;
    vg.prototype.getRevision = vg.prototype.L;
    vg.prototype.on = vg.prototype.J;
    vg.prototype.once = vg.prototype.once;
    vg.prototype.un = vg.prototype.K;
    T.prototype.setMap = T.prototype.setMap;
    T.prototype.setSource = T.prototype.gd;
    T.prototype.getExtent = T.prototype.C;
    T.prototype.getMaxResolution = T.prototype.kc;
    T.prototype.getMinResolution = T.prototype.lc;
    T.prototype.getOpacity = T.prototype.mc;
    T.prototype.getVisible = T.prototype.Jb;
    T.prototype.getZIndex = T.prototype.Ba;
    T.prototype.setExtent = T.prototype.Dc;
    T.prototype.setMaxResolution = T.prototype.Kc;
    T.prototype.setMinResolution = T.prototype.Lc;
    T.prototype.setOpacity = T.prototype.Ec;
    T.prototype.setVisible = T.prototype.Fc;
    T.prototype.setZIndex = T.prototype.$b;
    T.prototype.get = T.prototype.get;
    T.prototype.getKeys = T.prototype.R;
    T.prototype.getProperties = T.prototype.M;
    T.prototype.set = T.prototype.set;
    T.prototype.setProperties = T.prototype.I;
    T.prototype.unset = T.prototype.S;
    T.prototype.changed = T.prototype.u;
    T.prototype.dispatchEvent = T.prototype.b;
    T.prototype.getRevision = T.prototype.L;
    T.prototype.on = T.prototype.J;
    T.prototype.once = T.prototype.once;
    T.prototype.un = T.prototype.K;
    W.prototype.getSource = W.prototype.ia;
    W.prototype.getStyle = W.prototype.H;
    W.prototype.getStyleFunction = W.prototype.fb;
    W.prototype.setStyle = W.prototype.l;
    W.prototype.setMap = W.prototype.setMap;
    W.prototype.setSource = W.prototype.gd;
    W.prototype.getExtent = W.prototype.C;
    W.prototype.getMaxResolution = W.prototype.kc;
    W.prototype.getMinResolution = W.prototype.lc;
    W.prototype.getOpacity = W.prototype.mc;
    W.prototype.getVisible = W.prototype.Jb;
    W.prototype.getZIndex = W.prototype.Ba;
    W.prototype.setExtent = W.prototype.Dc;
    W.prototype.setMaxResolution = W.prototype.Kc;
    W.prototype.setMinResolution = W.prototype.Lc;
    W.prototype.setOpacity = W.prototype.Ec;
    W.prototype.setVisible = W.prototype.Fc;
    W.prototype.setZIndex = W.prototype.$b;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.R;
    W.prototype.getProperties = W.prototype.M;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.I;
    W.prototype.unset = W.prototype.S;
    W.prototype.changed = W.prototype.u;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.L;
    W.prototype.on = W.prototype.J;
    W.prototype.once = W.prototype.once;
    W.prototype.un = W.prototype.K;
    Ux.prototype.setMap = Ux.prototype.setMap;
    Ux.prototype.setSource = Ux.prototype.gd;
    Ux.prototype.getExtent = Ux.prototype.C;
    Ux.prototype.getMaxResolution = Ux.prototype.kc;
    Ux.prototype.getMinResolution = Ux.prototype.lc;
    Ux.prototype.getOpacity = Ux.prototype.mc;
    Ux.prototype.getVisible = Ux.prototype.Jb;
    Ux.prototype.getZIndex = Ux.prototype.Ba;
    Ux.prototype.setExtent = Ux.prototype.Dc;
    Ux.prototype.setMaxResolution = Ux.prototype.Kc;
    Ux.prototype.setMinResolution = Ux.prototype.Lc;
    Ux.prototype.setOpacity = Ux.prototype.Ec;
    Ux.prototype.setVisible = Ux.prototype.Fc;
    Ux.prototype.setZIndex = Ux.prototype.$b;
    Ux.prototype.get = Ux.prototype.get;
    Ux.prototype.getKeys = Ux.prototype.R;
    Ux.prototype.getProperties = Ux.prototype.M;
    Ux.prototype.set = Ux.prototype.set;
    Ux.prototype.setProperties = Ux.prototype.I;
    Ux.prototype.unset = Ux.prototype.S;
    Ux.prototype.changed = Ux.prototype.u;
    Ux.prototype.dispatchEvent = Ux.prototype.b;
    Ux.prototype.getRevision = Ux.prototype.L;
    Ux.prototype.on = Ux.prototype.J;
    Ux.prototype.once = Ux.prototype.once;
    Ux.prototype.un = Ux.prototype.K;
    Vx.prototype.setMap = Vx.prototype.setMap;
    Vx.prototype.setSource = Vx.prototype.gd;
    Vx.prototype.getExtent = Vx.prototype.C;
    Vx.prototype.getMaxResolution = Vx.prototype.kc;
    Vx.prototype.getMinResolution = Vx.prototype.lc;
    Vx.prototype.getOpacity = Vx.prototype.mc;
    Vx.prototype.getVisible = Vx.prototype.Jb;
    Vx.prototype.getZIndex = Vx.prototype.Ba;
    Vx.prototype.setExtent = Vx.prototype.Dc;
    Vx.prototype.setMaxResolution = Vx.prototype.Kc;
    Vx.prototype.setMinResolution = Vx.prototype.Lc;
    Vx.prototype.setOpacity = Vx.prototype.Ec;
    Vx.prototype.setVisible = Vx.prototype.Fc;
    Vx.prototype.setZIndex = Vx.prototype.$b;
    Vx.prototype.get = Vx.prototype.get;
    Vx.prototype.getKeys = Vx.prototype.R;
    Vx.prototype.getProperties = Vx.prototype.M;
    Vx.prototype.set = Vx.prototype.set;
    Vx.prototype.setProperties = Vx.prototype.I;
    Vx.prototype.unset = Vx.prototype.S;
    Vx.prototype.changed = Vx.prototype.u;
    Vx.prototype.dispatchEvent = Vx.prototype.b;
    Vx.prototype.getRevision = Vx.prototype.L;
    Vx.prototype.on = Vx.prototype.J;
    Vx.prototype.once = Vx.prototype.once;
    Vx.prototype.un = Vx.prototype.K;
    X.prototype.getStyle = X.prototype.H;
    X.prototype.getStyleFunction = X.prototype.fb;
    X.prototype.setStyle = X.prototype.l;
    X.prototype.setMap = X.prototype.setMap;
    X.prototype.setSource = X.prototype.gd;
    X.prototype.getExtent = X.prototype.C;
    X.prototype.getMaxResolution = X.prototype.kc;
    X.prototype.getMinResolution = X.prototype.lc;
    X.prototype.getOpacity = X.prototype.mc;
    X.prototype.getVisible = X.prototype.Jb;
    X.prototype.getZIndex = X.prototype.Ba;
    X.prototype.setExtent = X.prototype.Dc;
    X.prototype.setMaxResolution = X.prototype.Kc;
    X.prototype.setMinResolution = X.prototype.Lc;
    X.prototype.setOpacity = X.prototype.Ec;
    X.prototype.setVisible = X.prototype.Fc;
    X.prototype.setZIndex = X.prototype.$b;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.R;
    X.prototype.getProperties = X.prototype.M;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.I;
    X.prototype.unset = X.prototype.S;
    X.prototype.changed = X.prototype.u;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.L;
    X.prototype.on = X.prototype.J;
    X.prototype.once = X.prototype.once;
    X.prototype.un = X.prototype.K;
    Hg.prototype.get = Hg.prototype.get;
    Hg.prototype.getKeys = Hg.prototype.R;
    Hg.prototype.getProperties = Hg.prototype.M;
    Hg.prototype.set = Hg.prototype.set;
    Hg.prototype.setProperties = Hg.prototype.I;
    Hg.prototype.unset = Hg.prototype.S;
    Hg.prototype.changed = Hg.prototype.u;
    Hg.prototype.dispatchEvent = Hg.prototype.b;
    Hg.prototype.getRevision = Hg.prototype.L;
    Hg.prototype.on = Hg.prototype.J;
    Hg.prototype.once = Hg.prototype.once;
    Hg.prototype.un = Hg.prototype.K;
    Sg.prototype.getActive = Sg.prototype.c;
    Sg.prototype.getMap = Sg.prototype.i;
    Sg.prototype.setActive = Sg.prototype.Ha;
    Sg.prototype.get = Sg.prototype.get;
    Sg.prototype.getKeys = Sg.prototype.R;
    Sg.prototype.getProperties = Sg.prototype.M;
    Sg.prototype.set = Sg.prototype.set;
    Sg.prototype.setProperties = Sg.prototype.I;
    Sg.prototype.unset = Sg.prototype.S;
    Sg.prototype.changed = Sg.prototype.u;
    Sg.prototype.dispatchEvent = Sg.prototype.b;
    Sg.prototype.getRevision = Sg.prototype.L;
    Sg.prototype.on = Sg.prototype.J;
    Sg.prototype.once = Sg.prototype.once;
    Sg.prototype.un = Sg.prototype.K;
    nw.prototype.getActive = nw.prototype.c;
    nw.prototype.getMap = nw.prototype.i;
    nw.prototype.setActive = nw.prototype.Ha;
    nw.prototype.get = nw.prototype.get;
    nw.prototype.getKeys = nw.prototype.R;
    nw.prototype.getProperties = nw.prototype.M;
    nw.prototype.set = nw.prototype.set;
    nw.prototype.setProperties = nw.prototype.I;
    nw.prototype.unset = nw.prototype.S;
    nw.prototype.changed = nw.prototype.u;
    nw.prototype.dispatchEvent = nw.prototype.b;
    nw.prototype.getRevision = nw.prototype.L;
    nw.prototype.on = nw.prototype.J;
    nw.prototype.once = nw.prototype.once;
    nw.prototype.un = nw.prototype.K;
    qw.prototype.type = qw.prototype.type;
    qw.prototype.target = qw.prototype.target;
    qw.prototype.preventDefault = qw.prototype.preventDefault;
    qw.prototype.stopPropagation = qw.prototype.stopPropagation;
    dh.prototype.getActive = dh.prototype.c;
    dh.prototype.getMap = dh.prototype.i;
    dh.prototype.setActive = dh.prototype.Ha;
    dh.prototype.get = dh.prototype.get;
    dh.prototype.getKeys = dh.prototype.R;
    dh.prototype.getProperties = dh.prototype.M;
    dh.prototype.set = dh.prototype.set;
    dh.prototype.setProperties = dh.prototype.I;
    dh.prototype.unset = dh.prototype.S;
    dh.prototype.changed = dh.prototype.u;
    dh.prototype.dispatchEvent = dh.prototype.b;
    dh.prototype.getRevision = dh.prototype.L;
    dh.prototype.on = dh.prototype.J;
    dh.prototype.once = dh.prototype.once;
    dh.prototype.un = dh.prototype.K;
    rh.prototype.getActive = rh.prototype.c;
    rh.prototype.getMap = rh.prototype.i;
    rh.prototype.setActive = rh.prototype.Ha;
    rh.prototype.get = rh.prototype.get;
    rh.prototype.getKeys = rh.prototype.R;
    rh.prototype.getProperties = rh.prototype.M;
    rh.prototype.set = rh.prototype.set;
    rh.prototype.setProperties = rh.prototype.I;
    rh.prototype.unset = rh.prototype.S;
    rh.prototype.changed = rh.prototype.u;
    rh.prototype.dispatchEvent = rh.prototype.b;
    rh.prototype.getRevision = rh.prototype.L;
    rh.prototype.on = rh.prototype.J;
    rh.prototype.once = rh.prototype.once;
    rh.prototype.un = rh.prototype.K;
    wh.prototype.type = wh.prototype.type;
    wh.prototype.target = wh.prototype.target;
    wh.prototype.preventDefault = wh.prototype.preventDefault;
    wh.prototype.stopPropagation = wh.prototype.stopPropagation;
    gh.prototype.getActive = gh.prototype.c;
    gh.prototype.getMap = gh.prototype.i;
    gh.prototype.setActive = gh.prototype.Ha;
    gh.prototype.get = gh.prototype.get;
    gh.prototype.getKeys = gh.prototype.R;
    gh.prototype.getProperties = gh.prototype.M;
    gh.prototype.set = gh.prototype.set;
    gh.prototype.setProperties = gh.prototype.I;
    gh.prototype.unset = gh.prototype.S;
    gh.prototype.changed = gh.prototype.u;
    gh.prototype.dispatchEvent = gh.prototype.b;
    gh.prototype.getRevision = gh.prototype.L;
    gh.prototype.on = gh.prototype.J;
    gh.prototype.once = gh.prototype.once;
    gh.prototype.un = gh.prototype.K;
    kh.prototype.getActive = kh.prototype.c;
    kh.prototype.getMap = kh.prototype.i;
    kh.prototype.setActive = kh.prototype.Ha;
    kh.prototype.get = kh.prototype.get;
    kh.prototype.getKeys = kh.prototype.R;
    kh.prototype.getProperties = kh.prototype.M;
    kh.prototype.set = kh.prototype.set;
    kh.prototype.setProperties = kh.prototype.I;
    kh.prototype.unset = kh.prototype.S;
    kh.prototype.changed = kh.prototype.u;
    kh.prototype.dispatchEvent = kh.prototype.b;
    kh.prototype.getRevision = kh.prototype.L;
    kh.prototype.on = kh.prototype.J;
    kh.prototype.once = kh.prototype.once;
    kh.prototype.un = kh.prototype.K;
    uw.prototype.getActive = uw.prototype.c;
    uw.prototype.getMap = uw.prototype.i;
    uw.prototype.setActive = uw.prototype.Ha;
    uw.prototype.get = uw.prototype.get;
    uw.prototype.getKeys = uw.prototype.R;
    uw.prototype.getProperties = uw.prototype.M;
    uw.prototype.set = uw.prototype.set;
    uw.prototype.setProperties = uw.prototype.I;
    uw.prototype.unset = uw.prototype.S;
    uw.prototype.changed = uw.prototype.u;
    uw.prototype.dispatchEvent = uw.prototype.b;
    uw.prototype.getRevision = uw.prototype.L;
    uw.prototype.on = uw.prototype.J;
    uw.prototype.once = uw.prototype.once;
    uw.prototype.un = uw.prototype.K;
    Ah.prototype.getGeometry = Ah.prototype.V;
    Ah.prototype.getActive = Ah.prototype.c;
    Ah.prototype.getMap = Ah.prototype.i;
    Ah.prototype.setActive = Ah.prototype.Ha;
    Ah.prototype.get = Ah.prototype.get;
    Ah.prototype.getKeys = Ah.prototype.R;
    Ah.prototype.getProperties = Ah.prototype.M;
    Ah.prototype.set = Ah.prototype.set;
    Ah.prototype.setProperties = Ah.prototype.I;
    Ah.prototype.unset = Ah.prototype.S;
    Ah.prototype.changed = Ah.prototype.u;
    Ah.prototype.dispatchEvent = Ah.prototype.b;
    Ah.prototype.getRevision = Ah.prototype.L;
    Ah.prototype.on = Ah.prototype.J;
    Ah.prototype.once = Ah.prototype.once;
    Ah.prototype.un = Ah.prototype.K;
    Gw.prototype.getActive = Gw.prototype.c;
    Gw.prototype.getMap = Gw.prototype.i;
    Gw.prototype.setActive = Gw.prototype.Ha;
    Gw.prototype.get = Gw.prototype.get;
    Gw.prototype.getKeys = Gw.prototype.R;
    Gw.prototype.getProperties = Gw.prototype.M;
    Gw.prototype.set = Gw.prototype.set;
    Gw.prototype.setProperties = Gw.prototype.I;
    Gw.prototype.unset = Gw.prototype.S;
    Gw.prototype.changed = Gw.prototype.u;
    Gw.prototype.dispatchEvent = Gw.prototype.b;
    Gw.prototype.getRevision = Gw.prototype.L;
    Gw.prototype.on = Gw.prototype.J;
    Gw.prototype.once = Gw.prototype.once;
    Gw.prototype.un = Gw.prototype.K;
    Ww.prototype.type = Ww.prototype.type;
    Ww.prototype.target = Ww.prototype.target;
    Ww.prototype.preventDefault = Ww.prototype.preventDefault;
    Ww.prototype.stopPropagation = Ww.prototype.stopPropagation;
    Xw.prototype.getActive = Xw.prototype.c;
    Xw.prototype.getMap = Xw.prototype.i;
    Xw.prototype.setActive = Xw.prototype.Ha;
    Xw.prototype.get = Xw.prototype.get;
    Xw.prototype.getKeys = Xw.prototype.R;
    Xw.prototype.getProperties = Xw.prototype.M;
    Xw.prototype.set = Xw.prototype.set;
    Xw.prototype.setProperties = Xw.prototype.I;
    Xw.prototype.unset = Xw.prototype.S;
    Xw.prototype.changed = Xw.prototype.u;
    Xw.prototype.dispatchEvent = Xw.prototype.b;
    Xw.prototype.getRevision = Xw.prototype.L;
    Xw.prototype.on = Xw.prototype.J;
    Xw.prototype.once = Xw.prototype.once;
    Xw.prototype.un = Xw.prototype.K;
    hx.prototype.type = hx.prototype.type;
    hx.prototype.target = hx.prototype.target;
    hx.prototype.preventDefault = hx.prototype.preventDefault;
    hx.prototype.stopPropagation = hx.prototype.stopPropagation;
    Bh.prototype.getActive = Bh.prototype.c;
    Bh.prototype.getMap = Bh.prototype.i;
    Bh.prototype.setActive = Bh.prototype.Ha;
    Bh.prototype.get = Bh.prototype.get;
    Bh.prototype.getKeys = Bh.prototype.R;
    Bh.prototype.getProperties = Bh.prototype.M;
    Bh.prototype.set = Bh.prototype.set;
    Bh.prototype.setProperties = Bh.prototype.I;
    Bh.prototype.unset = Bh.prototype.S;
    Bh.prototype.changed = Bh.prototype.u;
    Bh.prototype.dispatchEvent = Bh.prototype.b;
    Bh.prototype.getRevision = Bh.prototype.L;
    Bh.prototype.on = Bh.prototype.J;
    Bh.prototype.once = Bh.prototype.once;
    Bh.prototype.un = Bh.prototype.K;
    Dh.prototype.getActive = Dh.prototype.c;
    Dh.prototype.getMap = Dh.prototype.i;
    Dh.prototype.setActive = Dh.prototype.Ha;
    Dh.prototype.get = Dh.prototype.get;
    Dh.prototype.getKeys = Dh.prototype.R;
    Dh.prototype.getProperties = Dh.prototype.M;
    Dh.prototype.set = Dh.prototype.set;
    Dh.prototype.setProperties = Dh.prototype.I;
    Dh.prototype.unset = Dh.prototype.S;
    Dh.prototype.changed = Dh.prototype.u;
    Dh.prototype.dispatchEvent = Dh.prototype.b;
    Dh.prototype.getRevision = Dh.prototype.L;
    Dh.prototype.on = Dh.prototype.J;
    Dh.prototype.once = Dh.prototype.once;
    Dh.prototype.un = Dh.prototype.K;
    ix.prototype.getActive = ix.prototype.c;
    ix.prototype.getMap = ix.prototype.i;
    ix.prototype.setActive = ix.prototype.Ha;
    ix.prototype.get = ix.prototype.get;
    ix.prototype.getKeys = ix.prototype.R;
    ix.prototype.getProperties = ix.prototype.M;
    ix.prototype.set = ix.prototype.set;
    ix.prototype.setProperties = ix.prototype.I;
    ix.prototype.unset = ix.prototype.S;
    ix.prototype.changed = ix.prototype.u;
    ix.prototype.dispatchEvent = ix.prototype.b;
    ix.prototype.getRevision = ix.prototype.L;
    ix.prototype.on = ix.prototype.J;
    ix.prototype.once = ix.prototype.once;
    ix.prototype.un = ix.prototype.K;
    qx.prototype.type = qx.prototype.type;
    qx.prototype.target = qx.prototype.target;
    qx.prototype.preventDefault = qx.prototype.preventDefault;
    qx.prototype.stopPropagation = qx.prototype.stopPropagation;
    Lh.prototype.getActive = Lh.prototype.c;
    Lh.prototype.getMap = Lh.prototype.i;
    Lh.prototype.setActive = Lh.prototype.Ha;
    Lh.prototype.get = Lh.prototype.get;
    Lh.prototype.getKeys = Lh.prototype.R;
    Lh.prototype.getProperties = Lh.prototype.M;
    Lh.prototype.set = Lh.prototype.set;
    Lh.prototype.setProperties = Lh.prototype.I;
    Lh.prototype.unset = Lh.prototype.S;
    Lh.prototype.changed = Lh.prototype.u;
    Lh.prototype.dispatchEvent = Lh.prototype.b;
    Lh.prototype.getRevision = Lh.prototype.L;
    Lh.prototype.on = Lh.prototype.J;
    Lh.prototype.once = Lh.prototype.once;
    Lh.prototype.un = Lh.prototype.K;
    Ph.prototype.getActive = Ph.prototype.c;
    Ph.prototype.getMap = Ph.prototype.i;
    Ph.prototype.setActive = Ph.prototype.Ha;
    Ph.prototype.get = Ph.prototype.get;
    Ph.prototype.getKeys = Ph.prototype.R;
    Ph.prototype.getProperties = Ph.prototype.M;
    Ph.prototype.set = Ph.prototype.set;
    Ph.prototype.setProperties = Ph.prototype.I;
    Ph.prototype.unset = Ph.prototype.S;
    Ph.prototype.changed = Ph.prototype.u;
    Ph.prototype.dispatchEvent = Ph.prototype.b;
    Ph.prototype.getRevision = Ph.prototype.L;
    Ph.prototype.on = Ph.prototype.J;
    Ph.prototype.once = Ph.prototype.once;
    Ph.prototype.un = Ph.prototype.K;
    Th.prototype.getActive = Th.prototype.c;
    Th.prototype.getMap = Th.prototype.i;
    Th.prototype.setActive = Th.prototype.Ha;
    Th.prototype.get = Th.prototype.get;
    Th.prototype.getKeys = Th.prototype.R;
    Th.prototype.getProperties = Th.prototype.M;
    Th.prototype.set = Th.prototype.set;
    Th.prototype.setProperties = Th.prototype.I;
    Th.prototype.unset = Th.prototype.S;
    Th.prototype.changed = Th.prototype.u;
    Th.prototype.dispatchEvent = Th.prototype.b;
    Th.prototype.getRevision = Th.prototype.L;
    Th.prototype.on = Th.prototype.J;
    Th.prototype.once = Th.prototype.once;
    Th.prototype.un = Th.prototype.K;
    yx.prototype.getActive = yx.prototype.c;
    yx.prototype.getMap = yx.prototype.i;
    yx.prototype.setActive = yx.prototype.Ha;
    yx.prototype.get = yx.prototype.get;
    yx.prototype.getKeys = yx.prototype.R;
    yx.prototype.getProperties = yx.prototype.M;
    yx.prototype.set = yx.prototype.set;
    yx.prototype.setProperties = yx.prototype.I;
    yx.prototype.unset = yx.prototype.S;
    yx.prototype.changed = yx.prototype.u;
    yx.prototype.dispatchEvent = yx.prototype.b;
    yx.prototype.getRevision = yx.prototype.L;
    yx.prototype.on = yx.prototype.J;
    yx.prototype.once = yx.prototype.once;
    yx.prototype.un = yx.prototype.K;
    Bx.prototype.type = Bx.prototype.type;
    Bx.prototype.target = Bx.prototype.target;
    Bx.prototype.preventDefault = Bx.prototype.preventDefault;
    Bx.prototype.stopPropagation = Bx.prototype.stopPropagation;
    Dx.prototype.getActive = Dx.prototype.c;
    Dx.prototype.getMap = Dx.prototype.i;
    Dx.prototype.setActive = Dx.prototype.Ha;
    Dx.prototype.get = Dx.prototype.get;
    Dx.prototype.getKeys = Dx.prototype.R;
    Dx.prototype.getProperties = Dx.prototype.M;
    Dx.prototype.set = Dx.prototype.set;
    Dx.prototype.setProperties = Dx.prototype.I;
    Dx.prototype.unset = Dx.prototype.S;
    Dx.prototype.changed = Dx.prototype.u;
    Dx.prototype.dispatchEvent = Dx.prototype.b;
    Dx.prototype.getRevision = Dx.prototype.L;
    Dx.prototype.on = Dx.prototype.J;
    Dx.prototype.once = Dx.prototype.once;
    Dx.prototype.un = Dx.prototype.K;
    Ix.prototype.getActive = Ix.prototype.c;
    Ix.prototype.getMap = Ix.prototype.i;
    Ix.prototype.setActive = Ix.prototype.Ha;
    Ix.prototype.get = Ix.prototype.get;
    Ix.prototype.getKeys = Ix.prototype.R;
    Ix.prototype.getProperties = Ix.prototype.M;
    Ix.prototype.set = Ix.prototype.set;
    Ix.prototype.setProperties = Ix.prototype.I;
    Ix.prototype.unset = Ix.prototype.S;
    Ix.prototype.changed = Ix.prototype.u;
    Ix.prototype.dispatchEvent = Ix.prototype.b;
    Ix.prototype.getRevision = Ix.prototype.L;
    Ix.prototype.on = Ix.prototype.J;
    Ix.prototype.once = Ix.prototype.once;
    Ix.prototype.un = Ix.prototype.K;
    Ox.prototype.type = Ox.prototype.type;
    Ox.prototype.target = Ox.prototype.target;
    Ox.prototype.preventDefault = Ox.prototype.preventDefault;
    Ox.prototype.stopPropagation = Ox.prototype.stopPropagation;
    ff.prototype.get = ff.prototype.get;
    ff.prototype.getKeys = ff.prototype.R;
    ff.prototype.getProperties = ff.prototype.M;
    ff.prototype.set = ff.prototype.set;
    ff.prototype.setProperties = ff.prototype.I;
    ff.prototype.unset = ff.prototype.S;
    ff.prototype.changed = ff.prototype.u;
    ff.prototype.dispatchEvent = ff.prototype.b;
    ff.prototype.getRevision = ff.prototype.L;
    ff.prototype.on = ff.prototype.J;
    ff.prototype.once = ff.prototype.once;
    ff.prototype.un = ff.prototype.K;
    gf.prototype.getClosestPoint = gf.prototype.Ib;
    gf.prototype.intersectsCoordinate = gf.prototype.Bb;
    gf.prototype.getExtent = gf.prototype.C;
    gf.prototype.rotate = gf.prototype.rotate;
    gf.prototype.scale = gf.prototype.scale;
    gf.prototype.simplify = gf.prototype.Sb;
    gf.prototype.transform = gf.prototype.jb;
    gf.prototype.get = gf.prototype.get;
    gf.prototype.getKeys = gf.prototype.R;
    gf.prototype.getProperties = gf.prototype.M;
    gf.prototype.set = gf.prototype.set;
    gf.prototype.setProperties = gf.prototype.I;
    gf.prototype.unset = gf.prototype.S;
    gf.prototype.changed = gf.prototype.u;
    gf.prototype.dispatchEvent = gf.prototype.b;
    gf.prototype.getRevision = gf.prototype.L;
    gf.prototype.on = gf.prototype.J;
    gf.prototype.once = gf.prototype.once;
    gf.prototype.un = gf.prototype.K;
    lw.prototype.getFirstCoordinate = lw.prototype.ec;
    lw.prototype.getLastCoordinate = lw.prototype.fc;
    lw.prototype.getLayout = lw.prototype.hc;
    lw.prototype.rotate = lw.prototype.rotate;
    lw.prototype.scale = lw.prototype.scale;
    lw.prototype.getClosestPoint = lw.prototype.Ib;
    lw.prototype.intersectsCoordinate = lw.prototype.Bb;
    lw.prototype.getExtent = lw.prototype.C;
    lw.prototype.simplify = lw.prototype.Sb;
    lw.prototype.get = lw.prototype.get;
    lw.prototype.getKeys = lw.prototype.R;
    lw.prototype.getProperties = lw.prototype.M;
    lw.prototype.set = lw.prototype.set;
    lw.prototype.setProperties = lw.prototype.I;
    lw.prototype.unset = lw.prototype.S;
    lw.prototype.changed = lw.prototype.u;
    lw.prototype.dispatchEvent = lw.prototype.b;
    lw.prototype.getRevision = lw.prototype.L;
    lw.prototype.on = lw.prototype.J;
    lw.prototype.once = lw.prototype.once;
    lw.prototype.un = lw.prototype.K;
    Qq.prototype.getClosestPoint = Qq.prototype.Ib;
    Qq.prototype.intersectsCoordinate = Qq.prototype.Bb;
    Qq.prototype.getExtent = Qq.prototype.C;
    Qq.prototype.rotate = Qq.prototype.rotate;
    Qq.prototype.scale = Qq.prototype.scale;
    Qq.prototype.simplify = Qq.prototype.Sb;
    Qq.prototype.transform = Qq.prototype.jb;
    Qq.prototype.get = Qq.prototype.get;
    Qq.prototype.getKeys = Qq.prototype.R;
    Qq.prototype.getProperties = Qq.prototype.M;
    Qq.prototype.set = Qq.prototype.set;
    Qq.prototype.setProperties = Qq.prototype.I;
    Qq.prototype.unset = Qq.prototype.S;
    Qq.prototype.changed = Qq.prototype.u;
    Qq.prototype.dispatchEvent = Qq.prototype.b;
    Qq.prototype.getRevision = Qq.prototype.L;
    Qq.prototype.on = Qq.prototype.J;
    Qq.prototype.once = Qq.prototype.once;
    Qq.prototype.un = Qq.prototype.K;
    Ef.prototype.getFirstCoordinate = Ef.prototype.ec;
    Ef.prototype.getLastCoordinate = Ef.prototype.fc;
    Ef.prototype.getLayout = Ef.prototype.hc;
    Ef.prototype.rotate = Ef.prototype.rotate;
    Ef.prototype.scale = Ef.prototype.scale;
    Ef.prototype.getClosestPoint = Ef.prototype.Ib;
    Ef.prototype.intersectsCoordinate = Ef.prototype.Bb;
    Ef.prototype.getExtent = Ef.prototype.C;
    Ef.prototype.simplify = Ef.prototype.Sb;
    Ef.prototype.transform = Ef.prototype.jb;
    Ef.prototype.get = Ef.prototype.get;
    Ef.prototype.getKeys = Ef.prototype.R;
    Ef.prototype.getProperties = Ef.prototype.M;
    Ef.prototype.set = Ef.prototype.set;
    Ef.prototype.setProperties = Ef.prototype.I;
    Ef.prototype.unset = Ef.prototype.S;
    Ef.prototype.changed = Ef.prototype.u;
    Ef.prototype.dispatchEvent = Ef.prototype.b;
    Ef.prototype.getRevision = Ef.prototype.L;
    Ef.prototype.on = Ef.prototype.J;
    Ef.prototype.once = Ef.prototype.once;
    Ef.prototype.un = Ef.prototype.K;
    I.prototype.getFirstCoordinate = I.prototype.ec;
    I.prototype.getLastCoordinate = I.prototype.fc;
    I.prototype.getLayout = I.prototype.hc;
    I.prototype.rotate = I.prototype.rotate;
    I.prototype.scale = I.prototype.scale;
    I.prototype.getClosestPoint = I.prototype.Ib;
    I.prototype.intersectsCoordinate = I.prototype.Bb;
    I.prototype.getExtent = I.prototype.C;
    I.prototype.simplify = I.prototype.Sb;
    I.prototype.transform = I.prototype.jb;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.R;
    I.prototype.getProperties = I.prototype.M;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.I;
    I.prototype.unset = I.prototype.S;
    I.prototype.changed = I.prototype.u;
    I.prototype.dispatchEvent = I.prototype.b;
    I.prototype.getRevision = I.prototype.L;
    I.prototype.on = I.prototype.J;
    I.prototype.once = I.prototype.once;
    I.prototype.un = I.prototype.K;
    P.prototype.getFirstCoordinate = P.prototype.ec;
    P.prototype.getLastCoordinate = P.prototype.fc;
    P.prototype.getLayout = P.prototype.hc;
    P.prototype.rotate = P.prototype.rotate;
    P.prototype.scale = P.prototype.scale;
    P.prototype.getClosestPoint = P.prototype.Ib;
    P.prototype.intersectsCoordinate = P.prototype.Bb;
    P.prototype.getExtent = P.prototype.C;
    P.prototype.simplify = P.prototype.Sb;
    P.prototype.transform = P.prototype.jb;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.R;
    P.prototype.getProperties = P.prototype.M;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.I;
    P.prototype.unset = P.prototype.S;
    P.prototype.changed = P.prototype.u;
    P.prototype.dispatchEvent = P.prototype.b;
    P.prototype.getRevision = P.prototype.L;
    P.prototype.on = P.prototype.J;
    P.prototype.once = P.prototype.once;
    P.prototype.un = P.prototype.K;
    Q.prototype.getFirstCoordinate = Q.prototype.ec;
    Q.prototype.getLastCoordinate = Q.prototype.fc;
    Q.prototype.getLayout = Q.prototype.hc;
    Q.prototype.rotate = Q.prototype.rotate;
    Q.prototype.scale = Q.prototype.scale;
    Q.prototype.getClosestPoint = Q.prototype.Ib;
    Q.prototype.intersectsCoordinate = Q.prototype.Bb;
    Q.prototype.getExtent = Q.prototype.C;
    Q.prototype.simplify = Q.prototype.Sb;
    Q.prototype.transform = Q.prototype.jb;
    Q.prototype.get = Q.prototype.get;
    Q.prototype.getKeys = Q.prototype.R;
    Q.prototype.getProperties = Q.prototype.M;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.setProperties = Q.prototype.I;
    Q.prototype.unset = Q.prototype.S;
    Q.prototype.changed = Q.prototype.u;
    Q.prototype.dispatchEvent = Q.prototype.b;
    Q.prototype.getRevision = Q.prototype.L;
    Q.prototype.on = Q.prototype.J;
    Q.prototype.once = Q.prototype.once;
    Q.prototype.un = Q.prototype.K;
    R.prototype.getFirstCoordinate = R.prototype.ec;
    R.prototype.getLastCoordinate = R.prototype.fc;
    R.prototype.getLayout = R.prototype.hc;
    R.prototype.rotate = R.prototype.rotate;
    R.prototype.scale = R.prototype.scale;
    R.prototype.getClosestPoint = R.prototype.Ib;
    R.prototype.intersectsCoordinate = R.prototype.Bb;
    R.prototype.getExtent = R.prototype.C;
    R.prototype.simplify = R.prototype.Sb;
    R.prototype.transform = R.prototype.jb;
    R.prototype.get = R.prototype.get;
    R.prototype.getKeys = R.prototype.R;
    R.prototype.getProperties = R.prototype.M;
    R.prototype.set = R.prototype.set;
    R.prototype.setProperties = R.prototype.I;
    R.prototype.unset = R.prototype.S;
    R.prototype.changed = R.prototype.u;
    R.prototype.dispatchEvent = R.prototype.b;
    R.prototype.getRevision = R.prototype.L;
    R.prototype.on = R.prototype.J;
    R.prototype.once = R.prototype.once;
    R.prototype.un = R.prototype.K;
    B.prototype.getFirstCoordinate = B.prototype.ec;
    B.prototype.getLastCoordinate = B.prototype.fc;
    B.prototype.getLayout = B.prototype.hc;
    B.prototype.rotate = B.prototype.rotate;
    B.prototype.scale = B.prototype.scale;
    B.prototype.getClosestPoint = B.prototype.Ib;
    B.prototype.intersectsCoordinate = B.prototype.Bb;
    B.prototype.getExtent = B.prototype.C;
    B.prototype.simplify = B.prototype.Sb;
    B.prototype.transform = B.prototype.jb;
    B.prototype.get = B.prototype.get;
    B.prototype.getKeys = B.prototype.R;
    B.prototype.getProperties = B.prototype.M;
    B.prototype.set = B.prototype.set;
    B.prototype.setProperties = B.prototype.I;
    B.prototype.unset = B.prototype.S;
    B.prototype.changed = B.prototype.u;
    B.prototype.dispatchEvent = B.prototype.b;
    B.prototype.getRevision = B.prototype.L;
    B.prototype.on = B.prototype.J;
    B.prototype.once = B.prototype.once;
    B.prototype.un = B.prototype.K;
    D.prototype.getFirstCoordinate = D.prototype.ec;
    D.prototype.getLastCoordinate = D.prototype.fc;
    D.prototype.getLayout = D.prototype.hc;
    D.prototype.rotate = D.prototype.rotate;
    D.prototype.scale = D.prototype.scale;
    D.prototype.getClosestPoint = D.prototype.Ib;
    D.prototype.intersectsCoordinate = D.prototype.Bb;
    D.prototype.getExtent = D.prototype.C;
    D.prototype.simplify = D.prototype.Sb;
    D.prototype.transform = D.prototype.jb;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.R;
    D.prototype.getProperties = D.prototype.M;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.I;
    D.prototype.unset = D.prototype.S;
    D.prototype.changed = D.prototype.u;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.L;
    D.prototype.on = D.prototype.J;
    D.prototype.once = D.prototype.once;
    D.prototype.un = D.prototype.K;
    Op.prototype.readFeatures = Op.prototype.Na;
    Xp.prototype.readFeatures = Xp.prototype.Na;
    Op.prototype.readFeatures = Op.prototype.Na;
    tg.prototype.get = tg.prototype.get;
    tg.prototype.getKeys = tg.prototype.R;
    tg.prototype.getProperties = tg.prototype.M;
    tg.prototype.set = tg.prototype.set;
    tg.prototype.setProperties = tg.prototype.I;
    tg.prototype.unset = tg.prototype.S;
    tg.prototype.changed = tg.prototype.u;
    tg.prototype.dispatchEvent = tg.prototype.b;
    tg.prototype.getRevision = tg.prototype.L;
    tg.prototype.on = tg.prototype.J;
    tg.prototype.once = tg.prototype.once;
    tg.prototype.un = tg.prototype.K;
    xg.prototype.getMap = xg.prototype.f;
    xg.prototype.setMap = xg.prototype.setMap;
    xg.prototype.setTarget = xg.prototype.i;
    xg.prototype.get = xg.prototype.get;
    xg.prototype.getKeys = xg.prototype.R;
    xg.prototype.getProperties = xg.prototype.M;
    xg.prototype.set = xg.prototype.set;
    xg.prototype.setProperties = xg.prototype.I;
    xg.prototype.unset = xg.prototype.S;
    xg.prototype.changed = xg.prototype.u;
    xg.prototype.dispatchEvent = xg.prototype.b;
    xg.prototype.getRevision = xg.prototype.L;
    xg.prototype.on = xg.prototype.J;
    xg.prototype.once = xg.prototype.once;
    xg.prototype.un = xg.prototype.K;
    Xn.prototype.getMap = Xn.prototype.f;
    Xn.prototype.setMap = Xn.prototype.setMap;
    Xn.prototype.setTarget = Xn.prototype.i;
    Xn.prototype.get = Xn.prototype.get;
    Xn.prototype.getKeys = Xn.prototype.R;
    Xn.prototype.getProperties = Xn.prototype.M;
    Xn.prototype.set = Xn.prototype.set;
    Xn.prototype.setProperties = Xn.prototype.I;
    Xn.prototype.unset = Xn.prototype.S;
    Xn.prototype.changed = Xn.prototype.u;
    Xn.prototype.dispatchEvent = Xn.prototype.b;
    Xn.prototype.getRevision = Xn.prototype.L;
    Xn.prototype.on = Xn.prototype.J;
    Xn.prototype.once = Xn.prototype.once;
    Xn.prototype.un = Xn.prototype.K;
    bo.prototype.getMap = bo.prototype.f;
    bo.prototype.setMap = bo.prototype.setMap;
    bo.prototype.setTarget = bo.prototype.i;
    bo.prototype.get = bo.prototype.get;
    bo.prototype.getKeys = bo.prototype.R;
    bo.prototype.getProperties = bo.prototype.M;
    bo.prototype.set = bo.prototype.set;
    bo.prototype.setProperties = bo.prototype.I;
    bo.prototype.unset = bo.prototype.S;
    bo.prototype.changed = bo.prototype.u;
    bo.prototype.dispatchEvent = bo.prototype.b;
    bo.prototype.getRevision = bo.prototype.L;
    bo.prototype.on = bo.prototype.J;
    bo.prototype.once = bo.prototype.once;
    bo.prototype.un = bo.prototype.K;
    ho.prototype.getMap = ho.prototype.f;
    ho.prototype.setMap = ho.prototype.setMap;
    ho.prototype.setTarget = ho.prototype.i;
    ho.prototype.get = ho.prototype.get;
    ho.prototype.getKeys = ho.prototype.R;
    ho.prototype.getProperties = ho.prototype.M;
    ho.prototype.set = ho.prototype.set;
    ho.prototype.setProperties = ho.prototype.I;
    ho.prototype.unset = ho.prototype.S;
    ho.prototype.changed = ho.prototype.u;
    ho.prototype.dispatchEvent = ho.prototype.b;
    ho.prototype.getRevision = ho.prototype.L;
    ho.prototype.on = ho.prototype.J;
    ho.prototype.once = ho.prototype.once;
    ho.prototype.un = ho.prototype.K;
    Ag.prototype.getMap = Ag.prototype.f;
    Ag.prototype.setMap = Ag.prototype.setMap;
    Ag.prototype.setTarget = Ag.prototype.i;
    Ag.prototype.get = Ag.prototype.get;
    Ag.prototype.getKeys = Ag.prototype.R;
    Ag.prototype.getProperties = Ag.prototype.M;
    Ag.prototype.set = Ag.prototype.set;
    Ag.prototype.setProperties = Ag.prototype.I;
    Ag.prototype.unset = Ag.prototype.S;
    Ag.prototype.changed = Ag.prototype.u;
    Ag.prototype.dispatchEvent = Ag.prototype.b;
    Ag.prototype.getRevision = Ag.prototype.L;
    Ag.prototype.on = Ag.prototype.J;
    Ag.prototype.once = Ag.prototype.once;
    Ag.prototype.un = Ag.prototype.K;
    mo.prototype.getMap = mo.prototype.f;
    mo.prototype.setMap = mo.prototype.setMap;
    mo.prototype.setTarget = mo.prototype.i;
    mo.prototype.get = mo.prototype.get;
    mo.prototype.getKeys = mo.prototype.R;
    mo.prototype.getProperties = mo.prototype.M;
    mo.prototype.set = mo.prototype.set;
    mo.prototype.setProperties = mo.prototype.I;
    mo.prototype.unset = mo.prototype.S;
    mo.prototype.changed = mo.prototype.u;
    mo.prototype.dispatchEvent = mo.prototype.b;
    mo.prototype.getRevision = mo.prototype.L;
    mo.prototype.on = mo.prototype.J;
    mo.prototype.once = mo.prototype.once;
    mo.prototype.un = mo.prototype.K;
    Cg.prototype.getMap = Cg.prototype.f;
    Cg.prototype.setMap = Cg.prototype.setMap;
    Cg.prototype.setTarget = Cg.prototype.i;
    Cg.prototype.get = Cg.prototype.get;
    Cg.prototype.getKeys = Cg.prototype.R;
    Cg.prototype.getProperties = Cg.prototype.M;
    Cg.prototype.set = Cg.prototype.set;
    Cg.prototype.setProperties = Cg.prototype.I;
    Cg.prototype.unset = Cg.prototype.S;
    Cg.prototype.changed = Cg.prototype.u;
    Cg.prototype.dispatchEvent = Cg.prototype.b;
    Cg.prototype.getRevision = Cg.prototype.L;
    Cg.prototype.on = Cg.prototype.J;
    Cg.prototype.once = Cg.prototype.once;
    Cg.prototype.un = Cg.prototype.K;
    ro.prototype.getMap = ro.prototype.f;
    ro.prototype.setMap = ro.prototype.setMap;
    ro.prototype.setTarget = ro.prototype.i;
    ro.prototype.get = ro.prototype.get;
    ro.prototype.getKeys = ro.prototype.R;
    ro.prototype.getProperties = ro.prototype.M;
    ro.prototype.set = ro.prototype.set;
    ro.prototype.setProperties = ro.prototype.I;
    ro.prototype.unset = ro.prototype.S;
    ro.prototype.changed = ro.prototype.u;
    ro.prototype.dispatchEvent = ro.prototype.b;
    ro.prototype.getRevision = ro.prototype.L;
    ro.prototype.on = ro.prototype.J;
    ro.prototype.once = ro.prototype.once;
    ro.prototype.un = ro.prototype.K;
    wo.prototype.getMap = wo.prototype.f;
    wo.prototype.setMap = wo.prototype.setMap;
    wo.prototype.setTarget = wo.prototype.i;
    wo.prototype.get = wo.prototype.get;
    wo.prototype.getKeys = wo.prototype.R;
    wo.prototype.getProperties = wo.prototype.M;
    wo.prototype.set = wo.prototype.set;
    wo.prototype.setProperties = wo.prototype.I;
    wo.prototype.unset = wo.prototype.S;
    wo.prototype.changed = wo.prototype.u;
    wo.prototype.dispatchEvent = wo.prototype.b;
    wo.prototype.getRevision = wo.prototype.L;
    wo.prototype.on = wo.prototype.J;
    wo.prototype.once = wo.prototype.once;
    wo.prototype.un = wo.prototype.K;
    return OPENLAYERS.ol;
}));