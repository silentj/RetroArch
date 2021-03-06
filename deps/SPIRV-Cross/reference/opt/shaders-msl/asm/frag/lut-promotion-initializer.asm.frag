#pragma clang diagnostic ignored "-Wmissing-prototypes"

#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

constant float _46[16] = { 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 };
constant float4 _76[4] = { float4(0.0), float4(1.0), float4(8.0), float4(5.0) };
constant float4 _90[4] = { float4(20.0), float4(30.0), float4(50.0), float4(60.0) };

struct main0_out
{
    float FragColor [[color(0)]];
};

struct main0_in
{
    int index [[user(locn0)]];
};

// Implementation of an array copy function to cover GLSL's ability to copy an array via assignment.
template<typename T, uint N>
void spvArrayCopyFromStack1(thread T (&dst)[N], thread const T (&src)[N])
{
    for (uint i = 0; i < N; dst[i] = src[i], i++);
}

template<typename T, uint N>
void spvArrayCopyFromConstant1(thread T (&dst)[N], constant T (&src)[N])
{
    for (uint i = 0; i < N; dst[i] = src[i], i++);
}

fragment main0_out main0(main0_in in [[stage_in]])
{
    float4 foobar[4] = { float4(0.0), float4(1.0), float4(8.0), float4(5.0) };
    float4 baz[4] = { float4(0.0), float4(1.0), float4(8.0), float4(5.0) };
    main0_out out = {};
    out.FragColor = _46[in.index];
    if (in.index < 10)
    {
        out.FragColor += _46[in.index ^ 1];
    }
    else
    {
        out.FragColor += _46[in.index & 1];
    }
    bool _99 = in.index > 30;
    if (_99)
    {
        out.FragColor += _76[in.index & 3].y;
    }
    else
    {
        out.FragColor += _76[in.index & 1].x;
    }
    if (_99)
    {
        foobar[1].z = 20.0;
    }
    int _37 = in.index & 3;
    out.FragColor += foobar[_37].z;
    spvArrayCopyFromConstant1(baz, _90);
    out.FragColor += baz[_37].z;
    return out;
}

