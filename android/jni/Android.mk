RARCH_VERSION		= "0.9.7"
LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)


LOCAL_MODULE    := retroarch
LOCAL_SRC_FILES    = ../../console/griffin/griffin.c ../../console/rzlib/rzlib.c ../bifrost.c

LOCAL_CFLAGS = -DPERF_TEST -marm -DANDROID -DHAVE_DYNAMIC -DHAVE_DYLIB -DHAVE_OPENGL -DHAVE_OPENGLES -DHAVE_OPENGLES2 -DHAVE_GLSL -DHAVE_VID_CONTEXT -DHAVE_ZLIB -DHAVE_RARCH_MAIN_WRAP -DINLINE=inline -DRARCH_CONSOLE -DLSB_FIRST -D__LIBRETRO__ -DHAVE_CONFIGFILE=1 -DHAVE_GRIFFIN=1 -DPACKAGE_VERSION=\"$(RARCH_VERSION)\" -Dmain=rarch_main -std=gnu99

LOCAL_LDLIBS	:= -L$(SYSROOT)/usr/lib -lGLESv2 -llog -ldl

include $(BUILD_SHARED_LIBRARY)
